import express from "express";

const pagesrouter= express.Router();

pagesrouter.get('/',(req,res)=>{
 res.render ('index');
})
pagesrouter.get('/register',(req,res)=>{
    res.render('register');
})
pagesrouter.get('/login',(req,res)=>{
    res.render("login")
})

export default pagesrouter;