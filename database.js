// define ap using express
var express = require("express")
var app = express()
// require database script file
var db = require("./database.js")
//require md5 module
var md5 = require()
//make express
app.use(express.urlencoded({extended: true}))
app.use(express.json())
