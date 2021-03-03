const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const articleRoutes = require('./article-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
