const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Articles extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      articles_id: body.articles_id
    }).then(() => {
      return Articles.findOne({
        where: {
          id: body.articles_id
        },
        attributes: [
          'id',
          'article_url',
          'title',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE articles.id = vote.articles_id)'), 'vote_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'articles_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Articles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      header: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      article_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      article_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'articles'
    }
);

module.exports = Articles;