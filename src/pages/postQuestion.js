import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../App.css'


export default function PostQuestion(){
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })

        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const tags = form.tags.split(",");

        console.log(form.question) //TODO: push to db
        console.log(form.body)
        // console.log(tags)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(myHeaders);

        var myForm = new FormData();
        myForm.append("metadata.author", "634b98f82f538a7252854a0c");
        myForm.append("metadata.owner", "634b98f82f538a7252854a0c");
        myForm.append("title", form.question);
        myForm.append("body", form.body);
        tags.forEach(function(tag){
            console.log(tag.trim())
            myForm.append("tags", tag.trim());
        })
        

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: myForm,
            redirect: 'follow'
          };

        fetch("https://faiza-api.herokuapp.com/api/posts", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    
    return (

        <Card border="secondary" className="questionCard">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3>Question</h3>
                    <Form.Control type="text"
                        placeholder="Enter question"
                        value = {form.question}
                        onChange={(e)=>setField('question', e.target.value)}
                        isInvalid={!!errors.question}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h5>Body</h5>
                    <Form.Control
                        as="textarea"
                        placeholder="Elaborate on your question"
                        rows={6}
                        value = {form.body}
                        onChange={(e)=>setField('body', e.target.value)}
                        isInvalid={!!errors.body}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h5>Tags</h5>
                    <Form.Control
                        as="textarea"
                        placeholder="Add comma-separated tags"
                        rows={1}
                        value = {form.tags}
                        onChange={(e)=>setField('tags', e.target.value)}
                        isInvalid={!!errors.tags}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="info" onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
}
