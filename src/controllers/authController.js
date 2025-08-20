const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id, role) => {
return jwt.sign({id, role}, process.env.JWT_SECRET, {expiresIn : "1d"})
}

exports.signup = async(req , res) => {
    
}