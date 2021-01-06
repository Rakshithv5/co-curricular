
const mysql=require("mysql");
const express=require("express");
var app=express();
const Sequelize = require('sequelize');
let payment=require('../models/payment')
const Op = Sequelize.Op;

app.get("/",(req,res)=>{
    payment.findAll()
    .then(stud =>{
       // console.log(stud);
        res.send(stud);
    })
    .catch(err =>{ console.log(err)});
})


app.get('/:id', (req, res) => {
    const id = req.params.id;
    payment.findAll({
      where: { id: id }
    })
      .then(pay => {
        res.send(pay);
      });
  });

// Add a gig
app.post('/add', (req, res) => {
    let { start_date, studentId,departmentId} = req.body;
    let errors = [];
  
    // Validate Fields
    if(!start_date) {
      errors.push({ text: 'Please add your start date' });
    }
    if(!studentId) {
      errors.push({ text: 'Please add some studentId' });
    }
    if(!departmentId) {
      errors.push({ text: 'Please add your departmentId' });
    }
  
    // Check for errors
    if(errors.length > 0) {
      res.send( {
        start_date,
        studentId,
        departmentId
      });
    } 
    else {
      // Insert into table
      payment.create({
        start_date,
        studentId,
        departmentId
      })
        .then(pay => res.send(pay))
        .catch(err => res.send(err))
    }
    });

    app.delete('/:id', (req, res) => {
        const id = req.params.id;
        payment.destroy({
          where: { id: id }
        })
        .then(deletedOwner => {
            res.json(deletedOwner);
          })
          .catch(err =>{
              res.send("something went wrong!!! Check your id");
          })
    });

module.exports =app;