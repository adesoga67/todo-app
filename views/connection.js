const { Sequelize, DataTypes } = require('sequelize');




module.exports.sequelize = new Sequelize('alameen_Skillver', 'alameen_alameen', 'pj^1!aR%d6iL', {
  host: '127.0.0.1',
  port: 5522,
  dialect: 'mysql',
})

;
