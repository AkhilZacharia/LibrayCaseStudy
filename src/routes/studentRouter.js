const express = require('express');
const studentRouter = express.Router();
const nav = [{link:'/student',name:'Home'},{link:'/student/books',name:'Books'},{link:'/student/authors',name:'Authors'}]
const Bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');
const navlink = [{link:'/student/books/:id'}]
    studentRouter.get('/',(req,res)=>{
        res.render('index',{nav,title:'Home'})
    })

    studentRouter.get('/books',(req,res)=>{
        Bookdata.find().then((books)=>{
            res.render("books",{nav,title:'Books',bookLink:'/student/books',books});
        });
    });

    studentRouter.get('/books/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id:id}).then((book)=>{
        res.render("studentBook",{nav,title:'Book',book,id});
    });
    })
 
    studentRouter.get('/authors',(req,res)=>{
        Authordata.find().then((authors)=>{
            res.render("authors",{nav,title:'Author',authorLink:'/student/authors',authors});
        });
    });

    studentRouter.get('/authors/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findOne({_id:id}).then((author)=>{
        res.render("studentAuthor",{nav,title:'Author',author,id});
    });
    })

module.exports = studentRouter;