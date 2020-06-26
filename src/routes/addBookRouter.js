const express = require('express');
const addBookRouter = express.Router();
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

const Bookdata = require('../model/bookdata');

function router(nav){
    addBookRouter.get('/',(req,res)=>{
        res.render('addbook',{nav,title:'Add Books'})
    })
    addBookRouter.post('/add',upload.single('bookimage'),(req,res,next)=>{
        console.log(req.file);
        var item = {
           title : req.body.title,
           author : req.body.author,
           genre : req.body.genre,
           image : req.file.originalname
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    })
    return addBookRouter;
}
module.exports = router;