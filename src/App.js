import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm/LoginForm.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx'
import { UserProvider } from './Component/LoginForm/UserContext.jsx';
import logo from './logo.svg';
import './LoginForm2.css';

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
