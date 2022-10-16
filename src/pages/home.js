import React, { useState, useEffect } from "react";
import HomePost from "../components/homePost";
import Axios from 'axios'


export default function Home(){

    const renderPost = (post, index) => {
        console.log(post._id);
        return <HomePost image={post.preview.base64String} postID={post._id}/>
    }

    const [postData, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    // const fetchFunction = async () => {
    //     try {
    //         const data = await Axios
    //             .get('https://faiza-api.herokuapp.com/api/posts')
    //             .then(res => {
    //                 console.log(res.data);
    //                 setItem(res.data);
    //                 // return(res.data);
    //             });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    useEffect( () => {
         Axios.get('https://faiza-api.herokuapp.com/api/posts/previews').then(res => {
             setItem(res.data);
             setLoading(true);
         });
    }, []);

    console.log(postData);
    console.log(loading);
    

    return (
        <div>
            {loading? postData.map(renderPost) : <h1> </h1>}
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