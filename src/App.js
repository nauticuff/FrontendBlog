import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './Components/DashBoard';
import { Container, Row, Col, Button, Modal, Nav } from 'react-bootstrap';
import BlogPage from './Components/BlogPage';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center'>
            <h1>Blog Site</h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>Blog Page</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Routes>
        <Route path='/' element={<BlogPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
