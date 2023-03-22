const express = require('express');
const router = express.Router();

router.get('/add_product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type = "text" name = "title"><button type= "submit">Add product</submit></form>');
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/final');
});

module.exports = router;