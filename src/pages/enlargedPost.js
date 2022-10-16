import React, { useState, useEffect } from "react";
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';

import '../App.css'

function populatePosts(){
    //TODO: implement from API
}

export default function EnlargedPost(){
    const [upvote, setChecked] = useState(false);
    const [postData, setItem] = useState([]);
    const [investmentData, setInvestments] = useState([]);
    const [userData, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    var imgs = [];

    const postID = window.location.pathname.split("/")[2];

    const renderPost = (post) => {
        if(post._id === postID){
            console.log(post);
            const owner = post.metadata.owner;
            const author = post.metadata.author;
            const title = post.title;
            const body = post.body;
            const id = post._id;
            return (
            <div className="enlargedCardBody">
                <p1>Owner: {owner}</p1>
                <p>Author: {author}</p>
                <h1>{title}</h1>
                <h4>{body}</h4>
            </div>
            );
            // return <HomePost postTitle={post.title} postBody={post.body} postID={post._id}/>
        }
    }

    const renderValue = (post) => {
        // console.log(post);
        const value = post.value;
        Axios.get('https://faiza-api.herokuapp.com/api/investments/post/'+postID)
        return (
            <h4 className="enlargedCardValue">Value: {value}</h4>
        );
            // return <HomePost postTitle={post.title} postBody={post.body} postID={post._id}/>
    }

    const getImgs = (ivtr, index) => {
        return (<Dropdown.Item><img className="investor" src={ivtr.pfp}></img> {ivtr.username}: {ivtr.amount}</Dropdown.Item>)
    }

    const renderInvestments = (investment, index) => {
        
        // console.log("person who invested: " + investment.metadata.user);
        userData.forEach(function(user){
            // console.log("checking each user: " + user._id);
            if(user._id === investment.metadata.user){
                const pfp = user.profile.profilePicture;
                const username = user.username;
                console.log("user id who invested: " + user._id);
                imgs.push({
                    "pfp": pfp,
                    "username": username,
                    "amount": investment.amount
                });
            }
            
        });
        console.log(imgs);

        if(imgs.length === investmentData.length){
             return (<div>{imgs.map(getImgs)}</div>)
        }

        
        
        
    }

    // posts.forEach(function(post){
    //     if (post._id === postID) {
    //         const postTitle = post.title;
    //         const postBody = post.body;
    //     }
    // });

    useEffect( () => {
        Axios.get('https://faiza-api.herokuapp.com/api/posts/'+postID).then(res => {
            setItem(res.data);
            console.log(res.data);
            setLoading(true);
            Axios.get('https://faiza-api.herokuapp.com/api/investments/post/'+postID).then(res2 => {
                setInvestments(res2.data);
                console.log(res2.data);
                setLoading(true);
                Axios.get('https://faiza-api.herokuapp.com/api/users').then(res3 => {
                    setUsers(res3.data);
                    console.log(res3.data);
                    setLoading(true);
                });
            });
        });
   }, []);
    
    return (
        <Card border="secondary" className="enlargedCard">
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-info"
                            checked={upvote}
                            value="1"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Upvote
                        </ToggleButton>
                    </Nav.Item>
                    <Nav.Item>
                        {loading? renderValue(postData) : <h4>Value</h4>}     
                    </Nav.Item>
                    <Nav.Item>
                        <DropdownButton className="enlargedCardPurchase" id="dropdown-basic-button" title="Investment History">
                            {loading ? investmentData.map(renderInvestments) : <Dropdown.Item>Loading</Dropdown.Item>}
                        </DropdownButton>
                    </Nav.Item>
                </Nav>
                
            </Card.Header>
            {loading ? renderPost(postData) : <h1>Loading</h1>}
            {/* <div>
                {loading ? investmentData.map(renderInvestments) : <h1>Loading</h1>}
            </div> */}
            
        </Card>
    );

    
}

