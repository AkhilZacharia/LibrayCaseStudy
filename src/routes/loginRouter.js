const express = require('express');
const loginRouter = express.Router();
function router(navbarinvalid){
    loginRouter.get('/',(req,res)=>{
        res.render('login',{navbarinvalid,success:"/signup/validate"})
    })
    loginRouter.get('/denied',(req,res)=>{
        res.render('terminator',{navbarinvalid})
    })
    

    return loginRouter;
}
module.exports = router;