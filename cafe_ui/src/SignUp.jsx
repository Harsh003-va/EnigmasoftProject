import React, {useState} from 'react';
import {Button, Card, Form, Row, Alert} from 'react-bootstrap';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    
    const onSubmit = () => {
        Axios.post('http://localhost:9003/register', {
            mail: mail,
            pass: pass
        }).then((response) => {
            if (response.data.message === 'success'){
                
                setError(response.data.message);
                navigate('/Login');
                   
            }
            else {
                setError(response.data.message);
            }
        });
    };
    return(
        <div className='bg'>
            <Card id='cont'>
                <Card.Body>
                    {(error !== '') &&
                        <Alert variant = 'danger'>{error}</Alert>
                        
                    }
                    <Form>
                        <Row className = 'm-3'>
                            <Form.Group>
                              <h1>Sign Up</h1>
                              <h4>It's free and only takes a minute</h4>
                                <Form.Label>Enter Email Address: </Form.Label>
                                <Form.Control
                                    type = 'email'
                                    name = 'email'
                                    placeholder = 'Email address' 
                                    value = {mail}
                                    onChange = {(e) => setMail(e.target.value)}
                                    required = {true}
                                />
                            </Form.Group>
                        </Row>
                        <Row className = 'm-3'>
                            <Form.Group>
                                <Form.Label>Enter password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    name = 'password'
                                    placeholder = 'Password' 
                                    value = {pass}
                                    onChange = {(e) => setPass(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="m-3">
                            <Form.Group>
                                <Form.Label>Repeat password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    placeholder = 'Repeat password' 
                                    onChange = {(e) => {
                                        if(pass !== e.target.value){
                                            setError('Passwords do no not match');
                                        }
                                        else {
                                            setError('');
                                        }
                                        
                                        
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        
                        
                        <Button
                            className = 'register-button' id='btnn'
                            onClick = {onSubmit}
                        >
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    </div>
    )
}