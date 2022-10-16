import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../App.css'


export default function HomePost(props){
    // const [upvote, setChecked] = useState(false);

    return (
        <Nav.Link href={"/post/" + props.postID}>
            <Card className="post">
                {/* <Card.Header>
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
                </Card.Header> */}
                <Card.Body>
                    {/* {props.postTitle} {props.postBody} {props.postID} */}
                    <img className='center' src={props.image}></img>
                </Card.Body>
            </Card>
        </Nav.Link>
        
    );
}