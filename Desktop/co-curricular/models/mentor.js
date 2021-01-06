const Sequelize = require('sequelize');
const db = require('../config/database');


const Mentor = db.define('mentor', {
  id:{
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  mname: {
    type: Sequelize.STRING
  },
  mphone: {
    type: Sequelize.INTEGER
  },
  address:{
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.INTEGER
  },
  contact_email: {
    type: Sequelize.STRING,
    isEmail:true
  }, 
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('NOW()')
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('NOW()')
  }
},{
  timestamp:false
});

module.exports = Mentor;