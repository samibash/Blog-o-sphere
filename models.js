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
    name: Sequelize.STRING,   
  });

  const WrittenPiece = db.define('written-piece', {
    title: Sequelize.STRING,
    genre: Sequelize.STRING
  });

  const Comment = db.define('comment', {
    name: Sequelize.STRING, 
    caption: Sequelize.STRING
  });

//    Model Associations 

    User.hasMany(WrittenPiece, {
        onDelete: 'cascade'
    });
    
    WrittenPiece.belongsTo(User)
    


    WrittenPiece.hasMany(Comment, {
        onDelete: 'cascade'
    });
    
    Comment.belongsTo(WrittenPiece)
    
  

  module.exports = {
    db,
    User,
    WrittenPiece,
    Comment
  }
  