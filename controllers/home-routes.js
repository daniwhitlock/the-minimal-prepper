const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  
  res.render('homepage', { req })
  
});

router.get('/login')

router.get('/profile', (req, res) => {
  console.log(req.session);
  // Post.findAll({
  //   attributes: [
  //     'id',
  //     'post_url',
  //     'title',
  //     'created_at',
  //     [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
  //   ],
  //   include: [
  //     {
  //       model: Comment,
  //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //       include: {
  //         model: User,
  //         attributes: ['username']
  //       }
  //     },
  //     {
  //       model: User,
  //       attributes: ['username']
  //     }
  //   ]
  // })
  //   .then(dbPostData => {
  //     // pass a single post object into the homepage template
  //     const posts = dbPostData.map(post => post.get({ plain: true }));
  //     res.render('homepage', { posts });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  res.render('profile', { req })
});

module.exports = router;