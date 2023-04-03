import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { createAccount } from '../Services/DataService';

const CreateAccount = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {
        let userData = {
            Id: 0,
            username,
            password
        }
        console.log(userData);
        createAccount(userData);
    }

    return (
        <Container>
            <Row>
                <Col className='mt-5' style={{backgroundColor: 'grey', borderRadius: 5, padding: 50}}>
                    <h1>Create Account</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username" 
                                onChange={({target: {value}}) => setUsername(value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={({target: {value}}) => setPassword(value)}
                            />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            
                            onClick={handleSubmit}
                        >
                            Create Account
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default CreateAccount