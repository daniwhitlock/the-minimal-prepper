const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  
  res.render('homepage', { req })
  
});

router.get('/login')

router.get('/profile', (req, res) => {
  console.log("--------------------------")
  console.log(req.session.username)
  
  User.findOne({
    where: {
      id: req.session.user_id
  }}).then(userdata => {
      const loggedinuser = JSON.stringify(userdata)
      const loggedInData = JSON.parse(loggedinuser)

      // for (let i = 0; i < animals.length; i++) {
      //   let currentAnimal = animals[i];
    
      //   if (currentAnimal.pet) {
      //     data.animals.push(currentAnimal)
    
      //   }
      // }
      
      console.log('this')
    console.log(loggedInData)
    console.log('this')
    // res.render('profile', {user: userdata} )
    res.render('profile', {loggedInData})
  })
  // User.findAll({
  //   attributes: [
  //     'id',
  //     'username',
  //     'created_at',
  //     // [sequelize.literal('(SELECT * FROM user)'),]
  //   ],
  //   // include: [
  //   //   {
  //   //     model: User,
  //   //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //   //     include: {
  //   //       model: User,
  //   //       attributes: ['username']
  //   //     }
  //   //   },
  //   //   {
  //   //     model: User,
  //   //     attributes: ['username']
  //   //   }
  //   // ]
  // })
  //   .then(dbPostData => {
  //     // pass a single post object into the homepage template
  //     const users = dbPostData.map(user => user.get({ plain: true }));
  //     res.render('profile', { users });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  
});

module.exports = router;