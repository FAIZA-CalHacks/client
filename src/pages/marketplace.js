import React, { useState, useEffect } from "react";
import HomePost from "../components/homePost";
import Axios from "axios";

export default function Marketplace() {
  const renderPost = (post, index) => {
    return (
      <HomePost postTitle={post.title} postBody={post.value} postID={" "} />
    );
  };

  const [postData, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/posts").then((res) => {
      setItem(res.data);
      setLoading(true);
    });
  }, []);

  console.log(postData);
  console.log(loading);

  return <div>{loading ? postData.map(renderPost) : <h1>Loading</h1>}</div>;
}
