const morgan = require('morgan');
const express = require('express');
const bodyparser = require('body-parser');  
const html = require('html-template-tag');
const app = express();


app.use(morgan('dev'));
app.use(express.static(__dirname + './stylesheets'));
app.use(bodyparser.urlencoded({extended: true}));

