import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import final from "../Images/Final.png";
export default function Landing() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Row
        style={{ "font-size": "100px", color: "white", "font-weight": "bold" }}
      >
        <Col sm={8}>
          <Row>The Forum of the Future.</Row>
          <Row
            style={{
              paddingTop: "50px",
              "font-size": "25px",
              color: "white",
              "font-weight": "normal",
            }}
          >
            Healthcare forum using NFTs for value creation and NLP for sentiment
            analysis
          </Row>
        </Col>
        <Col sm={4}>
          <img
            style={{ paddingTop: "45px", paddingLeft: "50px" }}
            src={final}
            width="450"
            height="445"
          ></img>
        </Col>
      </Row>
      <Row
        style={{ "font-size": "30px", color: "white" }}
        className={"margin-md"}
      ></Row>
    </Container>
  );
}
