const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ success: true, data: user })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const { user, token } = await userService.loginUser(email, password);
        res.status(200).json({ success: true, data: { user, token } })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    register,
    login
};