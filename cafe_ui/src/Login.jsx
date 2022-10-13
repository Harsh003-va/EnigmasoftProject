import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Login.css';
import './App.css';
import {Link} from 'react-router-dom'
import {Button, Row, Form, Card, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


export default function App() {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    
    useEffect(() => {
        Axios.get('http://localhost:9003/login').then((response) => {
            console.log(response.data.message);

            if (response.data.message === 'logged'){
                navigate('/Login');            }
            
        })
        //eslint-disable-next-line
    },[])
    const onSubmit = () => {
        Axios.post('http://localhost:9003/login', {
            mail,
            pass,
        }).then((response) => {
            console.log(response.data.message);
            if (response.data.message === 'success') {
               navigate('/');
            }
            else {
                setMessage(response.data.message);
            }
            
        });
    };
    return (
        <div class="bgg">
        <div className = 'm-5'>
            <Card className = 'card-container' id="container">
                
                <Card.Body>
                    {(message !== '') &&
                    <Alert variant = 'danger'>{message}</Alert>
                    }
                    <Form>
                        <Row className = 'm-3'>
                            <Form.Group >
                            <a href="#home" class="formbar"><i class="fas fa-mug-hot">Enjoy By having Our Delicious Coffee</i> </a>
                                <Form.Label>Email Address: </Form.Label>
                                <Form.Control 
                                    type = 'email' 
                                    placeholder = ' Enter Email address'
                                    value = {mail}
                                    onChange={(e) => { setMail(e.target.value); }} 
                                />
                            </Form.Group>
                        </Row>
                        <Row className = 'm-3'>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    name = 'password'
                                    placeholder = ' Enter Password'
                                    value = {pass}
                                    onChange={(e) => { setPass(e.target.value); }}

                                />
                            </Form.Group>
                        </Row>
                
                     </Form>
                     <Button
                        className = 'button-submit' id='btn'
                        type="button"
                        name="submit"
                        onClick={onSubmit}>
                        LOGIN
                    </Button>
                    <Card.Text>
                       Not Have An Account?<Link to = '/SignUp'>Sign Up Here</Link> 
                    </Card.Text>
                </Card.Body>

            </Card>
        </div></div>
    );
}

