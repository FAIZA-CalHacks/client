import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";


import "../App.css";
import { ListGroup } from "react-bootstrap";

function populatePosts() {
  //TODO: implement from API
}

export default function EnlargedPost() {
  const [upvote, setChecked] = useState(false);
  const [postData, setItem] = useState([]);
  const [investmentData, setInvestments] = useState([]);
  const [userData, setUsers] = useState([]);
  const [answerData, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  var profilePictureData = [];

  const postID = window.location.pathname.split("/")[2];

  const userId = "634c60da9d2a76b1077dbce6";

  const handlePurchase = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();
    formdata.set("metadata.owner", userId);

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    console.log("https://cors-anywhere.herokuapp.com/{https://faiza-api.herokuapp.com/api/posts/" + postID + "}");

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(
      ("https://cors-anywhere.herokuapp.com/{https://faiza-api.herokuapp.com/api/posts/" + postID + "}"),
      requestOptions
    )
      // fetch("/api/posts", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
    

    fetch("https://faiza-api.herokuapp.com/api/posts/" + userId, requestOptions)
      .then((res) => console.log(res))
      .catch((error) => console.log("error", error));
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    answerData.push(
        {
            text: form.text,
            username: "shreyasrana",
        }
    )
    // answerDataLocal.push(
    //     {
    //         text: form.text,
    //         username: "shreyasrana",
    //     }
    // )
    console.log(answerData)
    setAnswers(answerData);
    setField("text", "")
  };

  const renderPost = (post) => {
    if (post._id === postID) {
      console.log(post.metadata.owner);
      const owner = post.metadata.owner;
      const author = post.metadata.author;
      const title = post.title;
      const body = post.body;
      const id = post._id;
      return (
        <div
          //   style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}
          className="enlargedCardBody"
        >
          <p1 style={{ color: "white" }}>Owner: {owner}</p1>
          <p style={{ color: "white" }}> Author: {author}</p>
          <h1 style={{ color: "white" }}> {title}</h1>
          <h4 style={{ color: "white" }}>{body}</h4>
        </div>
      );
      // return <HomePost postTitle={post.title} postBody={post.body} postID={post._id}/>
    }
  };

  const renderValue = (post) => {
    // console.log(post);
    const value = post.value;
    Axios.get("https://faiza-api.herokuapp.com/api/investments/post/" + postID);
    return (
      <h4 style={{ color: "white" }} className="enlargedCardValue">
        Value: {value}
      </h4>
    );
    // return <HomePost postTitle={post.title} postBody={post.body} postID={post._id}/>
  };

  const getImgs = (ivtr, index) => {
    return (
      <Dropdown.Item>
        <img className="investor" src={ivtr.pfp}></img> {ivtr.username}:{" "}
        {ivtr.amount}
      </Dropdown.Item>
    );
  };

  const renderInvestments = (investment, index) => {
    // console.log("person who invested: " + investment.metadata.user);
    userData.forEach(function (user) {
      // console.log("checking each user: " + user._id);
      if (user._id === investment.metadata.user) {
        const pfp = user.profile.profilePicture;
        const username = user.username;
        console.log("user id who invested: " + user._id);
        profilePictureData.push({
          pfp: pfp,
          username: username,
          amount: investment.amount,
        });
      }
    });
    console.log(profilePictureData);

    if (profilePictureData.length === investmentData.length) {
      return <div>{profilePictureData.map(getImgs)}</div>;
    }
  };

  const renderAnswers = (answer, index) => {
    var pfp;
    var username;
    userData.forEach(function (user) {
        // console.log("checking each user: " + user._id);
        if (user._id === userId) {
            pfp = user.profile.profilePicture;
            username = user.username;
            console.log("username who commented: " + username);
        }
    });
    console.log("posting answer before?");
    return (
        <ListGroup.Item style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}>
            <img className="commenter" src={pfp}></img>
            <p style={{ color: "white" }} >{username}</p>
            <h5 style={{ color: "white" }}> {answer.text}</h5>
        </ListGroup.Item>);
  };

  // posts.forEach(function(post){
  //     if (post._id === postID) {
  //         const postTitle = post.title;
  //         const postBody = post.body;
  //     }
  // });

  useEffect(() => {
    Axios.get("https://faiza-api.herokuapp.com/api/posts/" + postID).then((res) => {
      setItem(res.data);
    //   console.log(res.data);
      setLoading(true);
      Axios.get("https://faiza-api.herokuapp.com/api/investments/post/" + postID).then(
        (res2) => {
          setInvestments(res2.data);
        //   console.log(res2.data);
          setLoading(true);
          Axios.get("https://faiza-api.herokuapp.com/api/users").then((res3) => {
            setUsers(res3.data);
            console.log(res3.data);
            setLoading(true);
          });
        }
      );
    });
  }, []);

  return (
      <div>
        <Card
            style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}
            border="secondary"
            className="enlargedCard"
            >
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
                    {loading ? (
                    renderValue(postData)
                    ) : (
                    <h4 style={{ color: "white" }}>Value</h4>
                    )}
                </Nav.Item>
                <Nav.Item>
                    <Button variant="info" onClick={handlePurchase} >Purchase</Button>
                </Nav.Item>
                <Nav.Item>
                    <DropdownButton
                    className="enlargedCardPurchase"
                    id="dropdown-basic-button"
                    title="Investment History"
                    >
                    {loading ? (
                        investmentData.map(renderInvestments)
                    ) : (
                        <Dropdown.Item>Loading</Dropdown.Item>
                    )}
                    </DropdownButton>
                </Nav.Item>
                </Nav>
            </Card.Header>
            {loading ? renderPost(postData) : <h1>Loading</h1>}
            {/* <div>
                        {loading ? investmentData.map(renderInvestments) : <h1>Loading</h1>}
                    </div> */}
            </Card>
            <Card
                className="enlargedCard"
                style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}
                border="secondary"
                >
                <Card.Header>
                    <Nav.Item>
                        <h4 style={{ color: "white" }}>Comments</h4>
                    </Nav.Item>
                </Card.Header>
                <ListGroup variant="flush" >
                    <ListGroup.Item style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <h5 style={{ color: "white" }}>Submit an Answer</h5>
                                <Form.Control
                                    style={{ opacity: 1.0 }}
                                    as="textarea"
                                    placeholder=""
                                    rows={2}
                                    value={form.text}
                                    onChange={(e) => setField("text", e.target.value)}
                                    isInvalid={!!errors.text}
                                />
                            </Form.Group>
                            <Button
                                style={{ opacity: 1.0 }}
                                variant="info"
                                onClick={handleSubmitAnswer}
                                type="submit"
                                >
                                Submit
                            </Button>
                        </Form>
                    </ListGroup.Item>

                    {loading ? (
                        answerData.map(renderAnswers)
                    ) : (
                        <ListGroup.Item style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}>
                            <h5 style={{ color: "white" }}>Loading</h5>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>
      </div>
    
  );
}
