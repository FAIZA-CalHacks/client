import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
// import Thumbnail from "react-bootstrap/Thumbnail";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../App.css";

export default function HomePost(props) {
  // const [upvote, setChecked] = useState(false);

  return (
    <Nav.Link href={"/post/" + props.postID}>
      <div
        style={{
          //   background: "white",
          paddingTop: "25px",
          paddingBottom: "50px",
        }}
        class="container"
      >
        <div class="col-12 text-center">
          <img style={{ opacity: 1.0 }} src={props.image}></img>
        </div>
      </div>
    </Nav.Link>
  );
}
