const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// route to register user
router.post('/register', registerUser);
// route to login user
router.post('/login', (req, res) => {
    res.json({ message: "To login user" });
})
// route to get current user info
router.get('/profile', (req, res) => {
    res.json({ message: "To get current user info" });
})

module.exports = router;