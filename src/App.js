import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './Components/DashBoard';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import BlogPage from './Components/BlogPage';


function App() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h1>Blog Site</h1>
        </Col>
      </Row>
      {/* <DashBoard /> */}
      <BlogPage />
    </Container>
  );
}

export default App;
