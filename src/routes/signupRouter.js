const express = require('express');
const signupRouter = express.Router();
const Logindata = require('../model/logindata');

function router(navbarinvalid){
    signupRouter.get('/',(req,res)=>{
        res.render('signup',{navbarinvalid})
    })
    signupRouter.post('/add',(req,res)=>{
        var item = {
            username : req.body.username,
            email : req.body.email,
            password:req.body.password,
            type : req.body.type
         }
        //  console.log(req.body.type)
         var login = Logindata(item);
         login.save();
         res.redirect('/login');
    })
    return signupRouter;
}
module.exports = router;

//name="username", email ,  phonenumber , password , address , city , state , pin , dob