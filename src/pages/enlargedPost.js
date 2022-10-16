import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../App.css'

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
function populatePosts(){
    //TODO: implement from API
}

export default function EnlargedPost(){
    const postID = window.location.pathname.split("/")[2];
    var postTitle;
    var postBody;

    posts.forEach(function(post){
        if (post._id === postID) {
            postTitle = post.title;
            postBody = post.body;
        }
    })
    
    const [upvote, setChecked] = useState(false);

    return (
        <Card border="secondary" className="enlargedCard">
            <Card.Header>
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
                </Card.Header>
            {postTitle} {postBody} {postID}
        </Card>
    );
}

