const express = require('express');
const passport = require('passport');
const router = express.Router();
const { config } = require('../config/config')
const jwt = require('jsonwebtoken')


router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        scope: user.role
      }
      const token = jwt.sign(payload, config.jwtSecret)
      res.json({user, token})
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;