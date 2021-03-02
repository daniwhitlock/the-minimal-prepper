const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {req});
  });

  router.get('/profile', (req, res) => {
    console.log(req.session);
    res.render('profile', {req})
  });

  module.exports = router;