const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Articles} = require('../../models');

router.get('/', (req, res) => {
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
    .then(dbArticlesData => res.json(dbArticlesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post('/', (req, res) => {
//   Articles.create({
//     header: req.body.header,
//     title: req.body.title,
//     article_url: req.body.article_url,
//     article_text: req.body.article_text
//   })
//     .then(dbArticlesData => res.json(dbArticlesData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;