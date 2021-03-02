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
   var foodData = pantryCalculator(loggedInData.underseven, loggedInData.overSeven, loggedInData.weeksPrep);
    console.log(foodData)
    // const foodReturn = JSON.stringify(foodData)
    // const foodDataReturn = JSON.parse(foodReturn)
    // console.log(foodReturn)
    const obj = Object.assign({}, foodData)
    console.log(obj[0])
    grainsAmount = obj[0];
    legumesAmount = obj[1];
     res.render('profile', {loggedInData, grainsAmount, legumesAmount})
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



function pantryCalculator (kids, adults, time) {
  var monthdivider;
  var goal;
  switch (time) {
      case "1":
          monthdivider = .0833;
          goal= "1 Month";
          break;
      case "3":
          monthdivider = .25;
          goal = "3 Months";
          break;
      case "6":
          monthdivider = .5;
          goal = "6 Months";
          break;
      case "9":
          monthdivider = .75;
          goal = "9 Months";
          break;
      case "12":
          monthdivider = 1;
          goal = "1 Year";
          break;    
      default:
          break;
  }
  console.log("monthdivider: " + monthdivider);
 
  var foodData = [];

  var grainsAmount =(((400*monthdivider) * (kids *.7)) + ((400*monthdivider) * adults)).toFixed(2);
  console.log(grainsAmount);
 
  foodData.push(grainsAmount);

  var legumesAmount = (((60*monthdivider) * (kids *.7)) + ((60*monthdivider) * adults)).toFixed(2);
  console.log(legumesAmount);

  foodData.push(legumesAmount);
  var milkAmount = (((16*monthdivider) * (kids *.7)) + ((16*monthdivider) * adults)).toFixed(2);
  console.log(milkAmount);

  foodData.push(milkAmount);
  var sugarAmount = (((60*monthdivider) * (kids *.7)) + ((60*monthdivider) * adults)).toFixed(2);
  console.log(sugarAmount);

  foodData.push(sugarAmount);
  var fatsAmount = (((20*monthdivider) * (kids *.7)) + ((20*monthdivider) * adults)).toFixed(2);
  console.log(fatsAmount);

  foodData.push(fatsAmount);
  var fruitsVeggiesAmount = (((90*monthdivider) * (kids *.7)) + ((90*monthdivider) * adults)).toFixed(2);
  console.log(fruitsVeggiesAmount);
  foodData.push(fruitsVeggiesAmount);

  var saltAmount = (((8*monthdivider) * (kids *.7)) + ((8*monthdivider) * adults)).toFixed(2);
  console.log(saltAmount);
  foodData.push(saltAmount);

  var waterAmount = (((365*monthdivider) * (kids *.7)) + ((365*monthdivider) * adults)).toFixed(2);
  console.log(waterAmount);
  foodData.push(waterAmount);
  foodData.push(goal);
  console.log(foodData)
return foodData;

}

module.exports = router;