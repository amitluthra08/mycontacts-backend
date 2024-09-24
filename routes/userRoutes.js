const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/tokenValidateHandler');

const router = express.Router();

// route to register user
router.post('/register', registerUser);
// route to login user
router.post('/login', loginUser);
// route to get current user info
router.get('/profile', validateToken, currentUser);

module.exports = router;