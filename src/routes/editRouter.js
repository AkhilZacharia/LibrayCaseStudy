const express = require('express');
const editRouter = express.Router();
const Bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');
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
function router(nav){
    editRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id:id}).then((book)=>{
        res.render('editBook',{nav,title:'Edit',book})
    })
    });
    editRouter.get('/auth/:id',(req,res)=>{
      const id = req.params.id;
      Authordata.findOne({_id:id}).then((author)=>{
      res.render('editAuthor',{nav,title:'Edit',author})
  })
  });
    editRouter.post('/update',upload.single('bookimage'),(req,res)=>{
           var id = req.body.id;
           var title = req.body.title;
           var author = req.body.author;
           var genre = req.body.genre;
           var image = req.file.originalname;
           Bookdata.updateOne({_id:id},{$set : {title:title,author:author,genre:genre,image:image}},(req,res)=>{})
        res.redirect('/books');
    })
    
    editRouter.get('/delete/:id',(req,res)=>{
        Bookdata.findByIdAndRemove(req.params.id,(req,res)=>{})
     res.redirect('/books');
    })
    
    editRouter.get('/delete/auth/:id',(req,res)=>{
        Authordata.findByIdAndRemove(req.params.id,(req,res)=>{})
    res.redirect('/authors');
    })
    editRouter.post('/update/auth',upload.single('authorimage'),(req,res)=>{
      var id = req.body.id;
      var name = req.body.name;
      var works = req.body.works;
      var genre = req.body.genre;
      var image = req.file.originalname;
      Authordata.updateOne({_id:id},{$set : {name:name,works:works,genre:genre,image:image}},(req,res)=>{})
   res.redirect('/authors');
})
    return editRouter;
}
module.exports = router;