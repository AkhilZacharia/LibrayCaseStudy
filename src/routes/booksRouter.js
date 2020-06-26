const express = require('express');
const Bookdata = require('../model/bookdata');
const booksRouter = express.Router();
function router(nav){
// var books = [
//     {
//         title:'tom n jerry',
//         author:"J Barberra",
//         genre:'Cartoon',
//         img:'tom.jpg'
//     },
//     {
//         title:'Harry Potter',
//         author:"J K Rowling",
//         genre:'Fantasy',
//         img:'harry.jpg'
//     },
//     {
//         title:'Paathummayude Aadu',
//         author:"Basheer",
//         genre:'Novel',
//         img:'basheer.jpg'
//     }
// ];
booksRouter.get('/',(req,res)=>{
    Bookdata.find().then((books)=>{
        res.render("books",{nav,title:'Books',bookLink:'/books',books});
    });
      //books array
});
booksRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    Bookdata.findOne({_id:id}).then((book)=>{
    res.render("book",{nav,title:'Books',book,id});
});
})
    return booksRouter;
}
module.exports = router;