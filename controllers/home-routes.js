const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const Articles = require('../models/Articles');

router.get('/', (req, res) => {
  console.log(req.session);

    Articles.findAll({
        attributes: [
            'id',
            'header',
            'title',
            'article_url',
            'article_text'
            // [sequelize.literal('SELECT * FROM articles')]
        ]
    })
      .then(dbArticlesData => {
        const articles = dbArticlesData.map(article => article.get({ plain: true }));

        res.render('homepage', { articles });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// router.get('/login');

router.get('/profile', (req, res) => {
  // console.log("--------------------------");
  // console.log(req.session.username);

  User.findOne({
    where: {
      id: req.session.user_id
    }
  }).then(userdata => {
    const loggedinuser = JSON.stringify(userdata);
    const loggedInData = JSON.parse(loggedinuser);

<<<<<<< HEAD
=======
    // console.log('this');
    // console.log(loggedInData);
    // console.log('this');
    // res.render('profile', {user: userdata} )
>>>>>>> d611c6596fed9785cd8bfb6c2c67bf8a88d4390f
    var foodData = pantryCalculator(loggedInData.underseven, loggedInData.overSeven, loggedInData.weeksPrep);
    console.log(foodData);

    const obj = Object.assign({}, foodData);
<<<<<<< HEAD

=======
    // console.log(obj[0]);
>>>>>>> d611c6596fed9785cd8bfb6c2c67bf8a88d4390f
    goal1 = obj[0];
    grainsAmount1 = obj[1];
    legumesAmount1 = obj[2];
    milkAmount1 = obj[3];
    sugarAmount1 = obj[4];
    fatsAmount1 = obj[5];
    fruitsVeggiesAmount1 = obj[6];
    saltAmount1 = obj[7];
    waterAmount1 = obj[8];

    Articles.findAll({
      attributes: [
          'id',
          'header',
          'title',
          'article_url',
          'article_text'
          // [sequelize.literal('SELECT * FROM articles')]
      ]
    })
    .then(dbArticlesData => {
      const articles = dbArticlesData.map(article => article.get({ plain: true }));
    

    res.render('profile', { loggedInData, goal1, grainsAmount1, legumesAmount1, milkAmount1, sugarAmount1, fatsAmount1, fruitsVeggiesAmount1, saltAmount1, waterAmount1, articles });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


});



function pantryCalculator(kids, adults, time) {
  var monthdivider;
  var goal;
  switch (time) {
    case "1":
      monthdivider = .0833;
      goal = "1 Month";
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
  var foodData = [];

  foodData.push(goal);

  var grainsAmount = (((400 * monthdivider) * (kids * .7)) + ((400 * monthdivider) * adults)).toFixed(1);
  foodData.push(grainsAmount);

  var legumesAmount = (((60 * monthdivider) * (kids * .7)) + ((60 * monthdivider) * adults)).toFixed(1);
  foodData.push(legumesAmount);

  var milkAmount = (((16 * monthdivider) * (kids * .7)) + ((16 * monthdivider) * adults)).toFixed(1);
  foodData.push(milkAmount);

  var sugarAmount = (((60 * monthdivider) * (kids * .7)) + ((60 * monthdivider) * adults)).toFixed(1);
  foodData.push(sugarAmount);

  var fatsAmount = (((20 * monthdivider) * (kids * .7)) + ((20 * monthdivider) * adults)).toFixed(1);
  foodData.push(fatsAmount);

  var fruitsVeggiesAmount = (((90 * monthdivider) * (kids * .7)) + ((90 * monthdivider) * adults)).toFixed(1);
  foodData.push(fruitsVeggiesAmount);

  var saltAmount = (((8 * monthdivider) * (kids * .7)) + ((8 * monthdivider) * adults)).toFixed(1);
  foodData.push(saltAmount);

  var waterAmount = (((365 * monthdivider) * (kids * .7)) + ((365 * monthdivider) * adults)).toFixed(1);
  foodData.push(waterAmount);

  console.log(foodData);
  return foodData;
}

module.exports = router;
