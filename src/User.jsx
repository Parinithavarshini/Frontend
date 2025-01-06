
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function User() {
    const [user, setUser] = useState([]); // Initialize state to store users

    useEffect(() => {
        axios.get('https://backend-3-h47i.onrender.com/api/user/fetch')
            .then(result => {
                console.log(result.data); // Log the API response to the console
                setUser(result.data); // Store the response data in state
            })
            .catch(error => {
                console.error('Error fetching user data:', error); // Log any errors
            });
    }, []);

    const deleteuser=(id)=>{
        axios.delete(`https://backend-3-h47i.onrender.com/api/user/delete/${id}`)
        .then(result => {
            console.log("deleted successfully");
        })
    }

    return (
        <div>
            <h1>User</h1>
            <Link to="/create">Create user</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((users) => (  // Iterating over the user data
                            <tr key={users._id}> {/* Ensure unique key for each row */}
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.password}</td>
                                <td>
                                    
                                    <Link to={`/update/${users._id}`}>Update</Link>
                                    <button onClick={(e)=>deleteuser(users._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default User;
