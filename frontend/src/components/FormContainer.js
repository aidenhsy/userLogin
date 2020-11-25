import React from "react";
import { Col, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Row className="justify-content-center p-3">
      <Col md={5}>{children}</Col>
    </Row>
  );
};

export default FormContainer;
