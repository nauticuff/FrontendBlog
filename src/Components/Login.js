import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { login, GetLoggedInUserData } from '../Services/DataService'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = async () => {
        let userData = {
            username,
            password
        }
        console.log(userData);
        let token = await login(userData);
        if(token.token != null){
            localStorage.setItem('Token', token.token);
            
            //GetLoggedInUserData(username);
            navigate("/Dashboard");
        }
    }

    return (
        <Container>
            <Row>
                <Col className='mt-5' style={{backgroundColor: 'grey', borderRadius: 5, padding: 50}}>
                    <h1>Login</h1>
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
                            Login
                        </Button>
                    </Form>
                    <h4  className='pt-4'>Don't have an account?</h4>
                    <Button onClick={() => navigate('/CreateAccount')}>Create Account</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default Login