const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    type: String,
    email: String,
    phone: String,
    profilePic: String
});

module.exports = mongoose.model('Employee', employeeSchema);
