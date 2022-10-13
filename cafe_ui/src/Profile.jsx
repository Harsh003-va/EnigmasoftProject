import React, {useEffect, useState} from "react";
import Axios from 'axios';
import { useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    

    Axios.defaults.withCredentials = true;

    const onSubmit = () => {
        Axios.get('http://localhost:9003/logout').then((response) => {
            if (response.data.logout) {
                navigate('/Login');
            }
        })
    }
    
    useEffect(() => {
        
        Axios.get('http://localhost:900/login').then((response) => {
            console.log(response.data.message);

           
            if (response.data.message === 'logged'){
                setUser(response.data.session.user[0].mail);
            }
            else {
                navigate('/Profile');
            }
        })
    //eslint-disable-next-line
    }, []);
    return (
        <div>
            <Button
                onClick = {onSubmit}
            >
                Log out
            </Button>
            <p>{user}</p>
        </div>
        
    )
}