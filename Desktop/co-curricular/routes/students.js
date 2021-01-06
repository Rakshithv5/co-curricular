
const mysql=require("mysql");
const express=require("express");
var app=express();
const Sequelize = require('sequelize');
let student=require('../models/student')
const Op = Sequelize.Op;

app.get("/",(req,res)=>{
    student.findAll()
    .then(stud =>{
       // console.log(stud);
        res.send(stud);
    })
    .catch(err =>{ console.log(err)});
})


app.get('/:id', (req, res) => {
    const id = req.params.id;
    student.findAll({
      where: { id: id }
    })
      .then(stud => {
        res.send(stud);
      });
  });

// Add a gig
app.post('/add', (req, res) => {
    let { sname, sphone, age, contact_email } = req.body;
    let errors = [];
  
    // Validate Fields
    if(!sname) {
      errors.push({ text: 'Please add your name' });
    }
    if(!sphone) {
      errors.push({ text: 'Please add some phone number' });
    }
    if(!age) {
      errors.push({ text: 'Please add your age' });
    }
    if(!contact_email) {
      errors.push({ text: 'Please add a contact email' });
    }
  
    // Check for errors
    if(errors.length > 0) {
      res.send( {
        errors,
        sname,
        sphone,
        age,
        contact_email
      });
    } 
    else {
      // Insert into table
      student.create({
        sname,
        sphone,
        age,
        contact_email
      })
        .then(stud => res.send(stud))
        .catch(err => res.send(err))
    }
    });

    app.delete('/:id', (req, res) => {
        const id = req.params.id;
        student.destroy({
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