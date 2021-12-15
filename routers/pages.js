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
pagesrouter.get('/patient-dashboard',(req,res)=>{
    res.render("patient-dashboard")
})
pagesrouter.get("/booking",(req,res)=>{
    res.render("booking")

})
pagesrouter.get("/medical-records",(req,res)=>{
    res.render("medical-records")

})

pagesrouter.get("/medical-details",(req,res)=>{
    res.render("medical-details")

})
pagesrouter.get("/hospitals",(req,res)=>{
    res.render("doctor-profile")

})
pagesrouter.get("/Bookingappointm",(req,res)=>{
    res.render("Bookingappointm")
})
// pagesrouter.get("/",(req,res)=>{
//     res.render("doctor-profile")

// })

export default pagesrouter;