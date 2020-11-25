import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <h2>Sign In</h2>
      <Form className="my-3" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
      <Link to="/register" style={{ color: "black" }}>
        Dont' have an account yet?
      </Link>
    </FormContainer>
  );
};

export default LoginScreen;
