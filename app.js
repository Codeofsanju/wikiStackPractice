const morgan = require('morgan');
const express = require('express');
const bodyparser = require('body-parser');  
// const html = require('html-template-tag'); // views are currently strings, this will help
const app = express(); // for the win
const { db, Page, User } = require('./models'); // sequalize tings
const userRouter = require('./routes/user.js');
const wikiRouter = require('./routes/wiki.js');



app.use(morgan('dev'));
app.use(express.static(__dirname + './stylesheets'));
app.use(bodyparser.urlencoded({extended: true}));
app.use('/wiki',wikiRouter);
app.get('/', (req, res, next) =>{
    res.redirect("/wiki");
});



db.authenticate().then(()=>{
    console.log('Database Connected!');
});


const init = async () =>{
    await db.sync({force: true}); // incase we make changes to our JS table model definitions 
    await User.sync();
    await Page.sync();
    app.listen(3000, () =>{
        console.log(`App listening in 3000`);
    });
};

init();