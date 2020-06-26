const express = require('express');
const loginRouter = express.Router();
function router(navbarinvalid){
    loginRouter.get('/',(req,res)=>{
        res.render('login',{navbarinvalid,success:"/index"})
    })
    

    return loginRouter;
}
module.exports = router;