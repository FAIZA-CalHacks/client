import React, { useState, useEffect } from "react";
import HomePost from "../components/homePost";
import Axios from 'axios'

export default function Marketplace(){

    const renderPost = (post, index) => {
        return <HomePost postTitle={post.title} postBody={post.value} postID={" "}/>
    }

    const [postData, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
         Axios.get('https://faiza-api.herokuapp.com/api/posts').then(res => {
             setItem(res.data);
             setLoading(true);
         });
    }, []);

    console.log(postData);
    console.log(loading);
    

    return (
        <div>
            {loading? postData.map(renderPost) : <h1>Loading</h1>}
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