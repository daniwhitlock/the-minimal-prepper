// import all models
const User = require('./User');
const Articles = require('./Articles');
const Comment = require('./Comment');

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



module.exports = { User, Articles, Comment };