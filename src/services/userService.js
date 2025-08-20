const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) => {
    return await userRepository.createUser(userData)
}

const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error("User not found");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { user, token };
}

module.exports = { registerUser, loginUser }

