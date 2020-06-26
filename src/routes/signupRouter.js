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

    signupRouter.post('/validate',(req,res)=>{
            var email = req.body.email ;
            var password = req.body.password;
         Logindata.findOne({$and:[{email:email},{password:password}]}).then((user)=>{
             if (user != null){
                console.log(user.type)
                if(user.type==="admin"){
                    res.redirect('/index');
                }
                else if(user.type==="student"){
                    res.redirect('/student');
                }
            }
             else{
                res.redirect('/login/denied');
                //res.send("Account does'nt' exists! Create an account")
             }
        });
    })
    
    return signupRouter;
}
module.exports = router;

//name="username", email ,  phonenumber , password , address , city , state , pin , dob