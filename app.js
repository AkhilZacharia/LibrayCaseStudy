const express = require('express');
const app = new express();
const navbarinvalid =[{link:'/login',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}]
const nav = [{link:'/index',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addBook',name:'Add Books'},{link:'/addauthor',name:'Add Author'},{link:'/',name:'Log Out'}]
const booksRouter = require('./src/routes/booksRouter')(nav);
const authorsRouter = require('./src/routes/authorsRouter')(nav);
const studentRouter = require('./src/routes/studentRouter');
const indexRouter = require('./src/routes/indexRouter')(nav);
const signupRouter = require('./src/routes/signupRouter')(navbarinvalid);
const loginRouter = require('./src/routes/loginRouter')(navbarinvalid);
const addBookRouter = require('./src/routes/addBookRouter')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRouter')(nav);
const editRouter = require('./src/routes/editRouter')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/addBook',addBookRouter);
app.use('/student',studentRouter);
app.use('/addAuthor',addAuthorRouter);
app.use('/books',booksRouter);
app.use('/edit',editRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/index',indexRouter)
app.get('/',(req,res)=>{
     res.render("login",{navbarinvalid,title:'Library',success:"/index"});
});
app.listen(5000,()=>{
    console.log("6000");
});