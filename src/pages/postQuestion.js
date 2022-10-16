import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../App.css";

export default function PostQuestion() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ title: form.question, body: form.body }),
    };

    const userId = "634c07ac3f721d083bd6df71";

    fetch("http://localhost:8080/api/posts/" + userId, options)
      .then((res) => console.log(res))
      .catch((error) => console.log("error", error));
  };

  return (
    <Card
      style={{ backgroundColor: "rgba(52, 52, 52, 0.2)" }}
      border="secondary"
      className="questionCard"
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3 style={{ color: "white" }}>Question</h3>
          <Form.Control
            style={{ opacity: 1.0 }}
            type="text"
            placeholder="Enter question"
            value={form.question}
            onChange={(e) => setField("question", e.target.value)}
            isInvalid={!!errors.question}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <h5 style={{ color: "white" }}>Body</h5>
          <Form.Control
            style={{ opacity: 1.0 }}
            as="textarea"
            placeholder="Elaborate on your question"
            rows={6}
            value={form.body}
            onChange={(e) => setField("body", e.target.value)}
            isInvalid={!!errors.body}
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
        <Button
          style={{ opacity: 1.0 }}
          variant="info"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
}
