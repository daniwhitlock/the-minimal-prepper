const router = require('express').Router();
const { User, Posts } = require('../../models/');

router.post('/', (req, res) => {
    console.log(User)
    console.log("------------------")
    // console.log(req)
    
    console.log(req.body)
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        
      username: req.body.username,
    })
    .then(dbUserData => {
        console.log(dbUserData)
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  module.exports = router;