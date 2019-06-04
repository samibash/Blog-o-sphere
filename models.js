const { Sequelize } = require('sequelize')


const db = new Sequelize({
    database: 'blog_db',
    dialect: 'postgres',
    define: {
      underscored: true
    },
  })

//   Model Definitions 

const User = db.define('user', {
    user_name: Sequelize.STRING,
    name: Sequelize.STRING
  });

  const Post = db.define('post', {
    title: Sequelize.STRING,
    genre: Sequelize.STRING,
    content:Sequelize.STRING(5000)
  });

  const Comment = db.define('comment', {
    name: Sequelize.STRING, 
    content: Sequelize.STRING
  });

//    Model Associations 
    
    Comment.belongsTo(Post);
    Post.belongsTo(User);
    Comment.belongsTo(User);
    User.hasMany(Comment);
    User.hasMany(Post);
    Post.hasMany(Comment);
  

  module.exports = {
    db,
    User,
    Post,
    Comment
  }
  