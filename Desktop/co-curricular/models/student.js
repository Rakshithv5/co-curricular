const Sequelize = require('sequelize');
const db = require('../config/database');


const Student = db.define('student', {
  id:{
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  sname: {
    type: Sequelize.STRING
  },
  sphone: {
    type: Sequelize.INTEGER
  },
  age: {
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

module.exports = Student;