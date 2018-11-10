const morgan = require('morgan');
const express = require('express');
const bodyparser = require('body-parser');  
const html = require('html-template-tag');
const app = express();
const { main } = require('./views');
const { db } = require('./models/');


app.use(morgan('dev'));
app.use(express.static(__dirname + './stylesheets'));
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res, next) =>{
    res.send(main(''));
});




db.authenticate().then(()=>{
    console.log('Database Connected!');
})

app.listen(3000, () =>{
    console.log(`App listening in 3000`);
});