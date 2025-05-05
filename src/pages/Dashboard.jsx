// src/pages/Dashboard.jsx
import React from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

const Dashboard = () => {
  return (
    <div>
      <h2>Employee Management Dashboard</h2>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default Dashboard;
