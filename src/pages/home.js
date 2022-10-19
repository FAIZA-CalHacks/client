import React, { useState, useEffect } from "react";
import HomePost from "../components/homePost";
import Axios from "axios";

let posts = [
    
]


export default function Home() {
  const renderPost = (post, index) => {
    console.log(post._id);
    return <HomePost image={post.preview.base64String} postID={post._id} />;
  };

  const [postData, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await Axios.get("https://faiza-api.herokuapp.com/api/posts/previews");
      setItem(res.data);
      setLoading(true);
    })();
  }, []);

  console.log(postData);
  console.log(loading);

  return <div>{loading ? postData.map(renderPost) : <h1> </h1>}</div>;
}
