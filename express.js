const express=require('express');
const app= express()//create express server;
// routes
app.get('/',(req,res)=>{
    res.send('Hello this my first express app')
});
app.use(express.static("./public"));
// diynamic set route path
app.get('/product/:name',(req,res)=>{
    res.send(`this is product scetion ${req.params.name}`);
})
// template engine (ejs is html with some superpower like it can calculate )
app.set('view engine','ejs');//ejs configure
app.get('/ejs',(req,res)=>{
    res.render('index');//inside views folder; 
})
app.get('/error',(req,res)=>{//this path throw a error ,then we call this path
throw new Error("Something went wrong !")//it will go to the default error function
})
app.get('/about',(req,res)=>{
    res.render('about');//inside views folder; 
})
// default error handling in express.js 
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })//render go to views(template engine ejs) find error.ejs 
  })
app.listen(3000);