const express = require('express');
const router = express.Router();

router.use('/final',(req,res,next)=>{
    res.send('<h1>Hello World!</h1>');
});

module.exports = router;