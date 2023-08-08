const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    if (!email || !password || !lastname || !firstname) { // Sửa điều kiện kiểm tra input
        return res.status(400).json({
            success: false, // Sửa "flase" thành "false"
            mes: 'Missing input'
        });
    }

    try {
        const response = await User.create(req.body);
        return res.status(200).json({
            success: response ? true : false,
            response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            mes: 'Error creating user',
            error: error.message
        });
    }
});

module.exports = {
    register
};
