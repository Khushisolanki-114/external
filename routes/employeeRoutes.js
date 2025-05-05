const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
    getEmployees, addEmployee, getEmployeeById,
    updateEmployee, deleteEmployee, searchEmployees
} = require('../controllers/employeeController');

router.get('/', getEmployees);
router.get('/search', searchEmployees);
router.post('/', upload.single('profilePic'), addEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', upload.single('profilePic'), updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
