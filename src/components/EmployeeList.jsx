// src/components/EmployeeList.jsx
import React, { useEffect, useState } from 'react';
import API from '../api';
import EmployeePopup from './EmployeePopup';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchEmployees = async () => {
    const res = await API.get('/employees');
    setEmployees(res.data);
  };

  const handleDelete = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      {employees.map(emp => (
        <div key={emp._id}>
          <span>{emp.name}</span>
          <button onClick={() => setSelected(emp)}>View</button>
          <button onClick={() => handleDelete(emp._id)}>Delete</button>
        </div>
      ))}
      {selected && <EmployeePopup employee={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default EmployeeList;
