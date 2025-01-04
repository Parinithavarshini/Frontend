import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  Navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/user/create', { name, email, password })
            .then(response => {
                console.log('User created successfully:', response.data);
                Navigate('/'); // Redirect to the home page
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error('There was an error creating the user!', error);
            });
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Email</label>
                <input type='text' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Createuser;