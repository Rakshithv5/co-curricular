let Sequelize = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize('pqrs', 'root', '112211', {        //sequelize-db
    host: 'localhost',
    dialect: 'mysql' 
  });