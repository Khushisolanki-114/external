// src/components/EmployeePopup.jsx
import React from 'react';

const EmployeePopup = ({ employee, onClose }) => (
  <div style={{ background: 'lightgray', padding: '10px' }}>
    <h4>{employee.name}</h4>
    <p>Email: {employee.email}</p>
    <p>Phone: {employee.phone}</p>
    <p>Type: {employee.type}</p>
    {employee.profilePic && <img src={`http://localhost:5000/${employee.profilePic}`} alt="Profile" width={100} />}
    <button onClick={onClose}>Close</button>
  </div>
);

export default EmployeePopup;
