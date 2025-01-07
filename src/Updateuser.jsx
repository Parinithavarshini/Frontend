import React,{useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './forms.css';

function Updateuser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {id} = useParams();
    const  Navigate = useNavigate();
    
    const update = (e) => {
        e.preventDefault();
        axios.put(`https://backend-3-h47i.onrender.com/api/user/update/${id}`,{name,email,password})
        .then(result => {
            console.log('User updated successfully:');
            Navigate('/');
            
        })
        .catch(error => {
            console.error('There was an error updating the user!', error);
        });
    }
  return (
    <div>
        <h1>Update Users</h1>
        <form onSubmit={update}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Update</button>
        </form>
    </div>

  )
}
export default Updateuser;