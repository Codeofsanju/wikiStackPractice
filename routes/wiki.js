const Router = require('express').Router();
const {addPage, main} = require('../views');
const models = require('../models');

Router.get('/', async(req, res, next)=>{
    res.send(main(''));
});

Router.post('/', async(req, res, next)=>{
    // res.send('TODO: submit a new page to database');
    // console.log(req.body);
    // let generatedSlug = req.body.title.replace(/\s+/g, '_').replace(/\W/g, '');
    const page = new models.Page({
        title: req.body.title,
        content: req.body.content,
        slug: 'holder',
    });
    
    try{
        await page.save();
        res.redirect('/');
    }catch(err) {next(err);}
});

Router.get('/add', (req, res, next)=>{
    res.send(addPage());
});

module.exports = Router;
