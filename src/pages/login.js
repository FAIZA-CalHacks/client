import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import '../App.css'

export default function Login(){
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
        // e.preventDefault()
    }
    
    return (

        <Card border="secondary" className="questionCard">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3>Enter your username to log in!</h3>
                    <Form.Control type="text"
                        placeholder="Enter email"
                        value = {form.email}
                        onChange={(e)=>setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h5>Enter your password</h5>
                    <Form.Control type="password"
                        placeholder="Enter password"
                        value = {form.password}
                        onChange={(e)=>setField('password', e.target.value)}
                        isInvalid={!!errors.password}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h5>Tags</h5>
                    <Form.Control
                        as="textarea"
                        placeholder="Add comma-separated tags"
                        rows={1}
                        value = {form.tags}
                        onChange={(e)=>setField('tags', e.target.value)}
                        isInvalid={!!errors.tags}
                    />
                </Form.Group> */}

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Nav.Link href="/home">
                    Submit
                </Nav.Link>
                
            </Form>
        </Card>
    );
}