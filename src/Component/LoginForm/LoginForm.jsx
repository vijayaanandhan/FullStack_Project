import React, { useState, useEffect, useContext } from 'react';
import './LoginForm1.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:1234/get')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);
    if (foundUsers.length > 0 && foundUsers[0].password === loginDetails.password) {
      setUser(foundUsers[0]);
      alert('Login Successful');
      navigate("/");
    } else if (foundUsers.length > 0) {
      alert('Incorrect Login Details');
    } else {
      alert('User not found. Please Sign Up');
      navigate('/signup');
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin} action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input
            type='text'
            name='username'
            placeholder='UserName'
            value={loginDetails.username}
            onChange={handleInputChange}
            required
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={loginDetails.password}
            onChange={handleInputChange}
            required
          />
          <FaLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <a href='#' className='frgpss'>
            Forgot password?
          </a>
        </div>

        <button type='submit'>Login</button>

        <div className='register-link'>
          <p>
            Don't have an account? <Link to='/SignUp'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
