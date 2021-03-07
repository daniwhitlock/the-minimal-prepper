// import all models
const User = require('./User');
const Articles = require('./Articles');
const Comment = require('./Comment');
const Vote = require('./Votes');

// create associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Articles, {
    foreignKey: 'articles_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Articles.hasMany(Comment, {
    foreignKey: 'articles_id'
});

User.belongsToMany(Articles, {
    through: Vote,
    as: 'voted_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Articles.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'articles_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Articles, {
    foreignKey: 'articles_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Articles.hasMany(Vote, {
    foreignKey: 'post_id'
  });



module.exports = { User, Articles, Comment, Vote };