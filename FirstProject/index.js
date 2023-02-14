const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Router/routes.js')
const cors = require('cors');
const bodyParser = require('body-parser');
var port= process.env.PORT || 4000;
app.use(cors());
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(bodyParser.json());
app.use('/answer',routes)
mongoose.connect('mongodb+srv://Gowtham:Gowtham@cluster0.ivbwjla.mongodb.net/answer?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DataBase Connected");
})
.catch(err => {
    console.log("Cannot Connected",err);
})
app.listen(port)
// mongodb+srv://Gowtham:<password>@cluster0.ivbwjla.mongodb.net/?retryWrites=true&w=majority
// var express = require('express'),
//  app=express(),
//  port= process.env.PORT || 4000,
//  mongoose= require('mongoose'),
//  answer=require('./controllers/userListController.js'),
//  bodyParser = require('body-parser');
// const cors = require('cors')
// mongoose.Promise = global.Promise;
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(cors())
// var routes = require('./Router/routes.js');
// routes(app);
// mongoose.set("strictQuery",false);
// mongoose.connect('mongodb+srv://Gowtham:Gowtham@cluster0.ivbwjla.mongodb.net/answer?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log("DataBase Connected");
// })
// .catch(err => {
//     console.log("Cannot Connected",err);
// })
// app.listen(4000)