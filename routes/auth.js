const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication');
const testingUser =require('../middleware/testUser')
const { register, login , updateUser } = require('../controllers/auth')
const rateLimiter = require('express-rate-limit');
const ApiLimiter = rateLimiter({
    windowMs : 15 * 60 *1000,
    max :10,
    message :{
        msg: 'Too many requests from this IP, please try again after 15 minutes',
      },
})





router.post('/register',ApiLimiter, register)
router.post('/login',ApiLimiter, login)
router.patch('/updateUser', authenticateUser,testingUser, updateUser);
module.exports = router
