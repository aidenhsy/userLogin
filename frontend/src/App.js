import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
