const Sequelize = require('sequelize');
const db = require('../config/database');


const Payment = db.define('payment', {
    id:{
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    start_date:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
    }, createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    }
});

module.exports=Payment;