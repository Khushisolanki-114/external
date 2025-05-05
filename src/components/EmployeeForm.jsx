// src/components/EmployeeForm.jsx
import React, { useState } from 'react';
import API from '../api';

const EmployeeForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '' });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (file) formData.append('profilePic', file);

    try {
      await API.post('/employees', formData);
      alert('Employee added');
    } catch (err) {
      alert('Error adding employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
      <input placeholder="Type" onChange={e => setForm({ ...form, type: e.target.value })} />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
