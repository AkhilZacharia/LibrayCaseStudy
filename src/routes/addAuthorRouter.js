const express = require('express');
const addAuthorRouter = express.Router();
const multer = require('multer') ;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/img/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({storage: storage});

const Authordata = require('../model/authordata');

function router(nav){
    addAuthorRouter.get('/',(req,res)=>{
        res.render('addauthor',{nav,title:'Add Authors'})
    })
    addAuthorRouter.post('/add',upload.single('authorimage'),(req,res,next)=>{
        console.log(req.file);
        var item = {
           name : req.body.name,
           works : req.body.works,
           genre : req.body.genre,
           image : req.file.originalname
        }
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    })
    return addAuthorRouter;
}
module.exports = router;