import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Fetching users is not necessary for the signup page
    }, []);

    async function handleSignup(event) {
        event.preventDefault();
        try {
            await axios.post('http://localhost:1234/insert', {
                username: username,
                password: password
            });
            alert('Signup Successful');
            // Handle any additional actions upon successful signup, such as redirection
        } catch (error) {
            console.error('Signup Error:', error);
            alert('Signup Failed');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSignup} className='signup-form'>
                <h1>Sign Up</h1>
                <div className='input-box'>
                    <input
                        type="text"
                        name='username'
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Sign Up</button>
                <div className='register-link'>
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
