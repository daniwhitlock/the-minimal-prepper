const router = require('express').Router();
const sequelize = require('../../config/connection');
const User = require('../../models/user');

router.post('/', (req, res) => {
    console.log(User)
    console.log("------------------")
    console.log(req.body.username)
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.underseven)
    console.log(req.body.overSeven)
    console.log(req.body.weeksPrep)
    // console.log(req.body.diet)
  
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      underseven: req.body.underseven,
      overSeven: req.body.overSeven,
      weeksPrep: req.body.weeksPrep,
      // diet: req.body.diet

    })
    .then(dbUserData => {
        console.log(dbUserData)
        res.json(dbUserData)
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
    
    //     res.json(dbUserData);
    //   });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  module.exports = router;