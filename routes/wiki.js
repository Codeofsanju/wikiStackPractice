const Router = require('express').Router();

Router.get('/', async(req, res, next)=>{
    res.send('TODO: retrieve all wiki pages');
});

Router.post('/', async(req, res, next)=>{
    res.send('TODO: submit a new page to database');
});

Router.get('/add', async(req, res, next)=>{
    res.send('TODO: retrieve the "Add a page" form');
});

module.exports = Router;
