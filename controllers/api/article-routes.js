const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Articles, User, Vote, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Articles.findAll({
      attributes: [
          'id',
          'header',
          'title',
          'article_url',
          'article_text',
          'created_at'
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE articles.id = vote.articles_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'articles_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
  })
    .then(dbArticlesData => res.json(dbArticlesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/upvote', withAuth, (req, res) => {
  // custom static method created in models/Articles.js
  Articles.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;