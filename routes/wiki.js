const Router = require('express').Router();
const {addPage, main, wikiPage} = require('../views');
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
        res.redirect(`/wiki/${page.slug}`);
    }catch(err) {next(err);}
});

Router.get('/add', (req, res, next)=>{
    res.send(addPage());
});

Router.get('/:slug', async(req, res, next) =>{
    // console.log(req.params.slug);
    // res.send(`dynamic page for route at ${req.params.slug}`);
    try{
        const page = await models.Page.findOne({
            where: {
                slug: req.params.slug,
            }
        });
        res.send(wikiPage(page));
    }catch(error){next(error);}
});

module.exports = Router;
