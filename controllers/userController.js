const asyncHandler = require('express-async-handler');

//@desc Register new user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "To register user" });
});

module.exports = { registerUser }