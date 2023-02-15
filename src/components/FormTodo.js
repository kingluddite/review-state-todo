import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormTodo = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <strong>Add Todo</strong>
        </Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="success mb-3">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
