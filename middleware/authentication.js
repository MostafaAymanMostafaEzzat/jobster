const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  console.log('hellllo')
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
  console.log('hellllo1111')
    
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userId === '6516c5606ef463f62747da3d';
    req.user = { userId: payload.userId, testUser };
    console.log('hellllo222')

    next()
  } catch (error) {
  console.log('hellllo33333')
    
    throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = auth
