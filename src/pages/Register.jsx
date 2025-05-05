// src/pages/Register.jsx
import React, { useState } from 'react';
import API from '../api';

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', user);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
