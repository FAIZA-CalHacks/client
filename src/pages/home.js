import React, { useState, useEffect } from "react";
import HomePost from "../components/homePost";
import Axios from 'axios'

let posts = [
    {
        title: "title1",
        body: "body1",
        _id: "id1"
    },
    {
        title: "title2",
        body: "body2",
        _id: "id2"
    },
    {
        title: "title3",
        body: "body3",
        _id: "id3"
    }
];


export default function Home(){

    const renderPost = (post, index) => {
        console.log(post.title + " " + post.body + " " + post._id);
        return <HomePost postTitle={post.title} postBody={post.body} postID={post._id}/>
    }

    const [postData, setItem] = useState(0);

    const fetchFunction = async () => {
        try {
            const data = await Axios
                .get('https://faiza-api.herokuapp.com/api/posts')
                .then(res => {
                    console.log(res.data);
                    setItem(res.data);
                });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchFunction();
    }, []);
    

    return (
        <div>
            {/* Hello World */}
            {postData.map(renderPost)}
            {/* {(postData === null) ? "Hello World": postData.map(renderPost)} */}
        </div>
    );

    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    
    // fetch("https://faiza-api.herokuapp.com/api/posts", requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //     console.log(result);
    //     return (
    //         <div>
    //             {result.map(renderPost)}
    //         </div>
    //     );
    // })
    // .catch(error => console.log('error', error));
}