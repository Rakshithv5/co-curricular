const mysql=require("mysql");
const express=require("express");
const bodyParcer=require("body-parser");
var app=express();
app.use(bodyParcer.json());

app.use(express.static(__dirname + "/public"));

var db =require('./config/database')
const student=  require("./models/student");
const payment=  require("./models/payment");
const department=  require("./models/department");
const mentor=  require("./models/mentor");
const comments=  require("./models/comments");


student.hasMany(payment);
department.hasMany(payment);
payment.belongsTo(student);
payment.belongsTo(student);
student.hasMany(comments);
comments.belongsTo(student);

department.hasMany(mentor);
mentor.belongsTo(department);


/*
student.sync({force:true}).then(() => {
    console.log('table created');
});

department.sync({force:true}).then(() => {
    console.log('table created');
});
payment.sync({force:true}).then(() => {
    console.log('table created');
});

mentor.sync({force:true}).then(() => {
    console.log('table created');
});

comments.sync({force:true}).then(() => {
    console.log('table created');
});
*/


 db.authenticate()
    .then(()=> console.log('Connection has been established successfully.'))
    .catch((err)=> console.log('Unable to connect to the database:'))
  

var studentroutes= require("./routes/students")
var departmentroutes=require('./routes/department')
var mentorroutes= require("./routes/mentors")
var paymentroutes= require("./routes/payment")
var commentsroutes= require("./routes/comments")

app.use("/student",studentroutes);
app.use("/department",departmentroutes);
app.use("/mentor",mentorroutes);
app.use("/payment",paymentroutes);
app.use("/comments",commentsroutes);


app.listen(3000);