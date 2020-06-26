const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata');
function router(nav){
    // const authors =[
    //        {
    //         name:" Thakazhi Sivasankara Pillai",
    //         works:"Kayar, Chemmeen,...",
    //         genre:'Novel,Short stories',
    //         img:'thakazhi.jpg'
    //     },
    //     {
    //         name:" Vaikom Muhammad Basheer",
    //         works:"Balyakalasakhi, Pathummayude Aadu,...",
    //         genre:'	Novel, short story, essays, memoirs',
    //         img:'basheer.jpg'
    //     },
    //     {
    //         name:" Sir Arthur Conan Doyle",
    //         works:"A Study in Scarlet,The Hound of the Baskervilles,...",
    //         genre:'Novel,Short stories',
    //         img:'doyle.jpg'
    //     }
    //     ]
    authorsRouter.get('/',(req,res)=>{
            Authordata.find().then((authors)=>{
                res.render("authors",{nav,title:'Author',authorLink:'/authors',authors});
            });
              //books array
        });
   
    authorsRouter.get('/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.findOne({_id:id}).then((author)=>{
        res.render("author",{nav,title:'Author',author,id});
    });
    })
    return authorsRouter;
}
module.exports = router;