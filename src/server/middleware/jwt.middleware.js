const jwt = require('jsonwebtoken');
const key = require('../config/token.key.js');

// Verify token
const verifyToken = (req, res, next) => {
  const { authentification } = req.headers;
  try {
    if (jwt.verify(authentification, key.secret) !== undefined) {
      next();
    } else {
      res.status(403).send('Token is invalid');
    }
  } catch (err) {}
};

module.exports = verifyToken;
