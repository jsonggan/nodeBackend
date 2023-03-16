const express = require('express');
const app = express();

app.use('/users',(req,res,next)=>{
    console.log('In users middleware!');
    res.send('<h1>users page</h1>');
});

app.use('/',(req,res,next)=>{
    console.log('In the next middleware!');
    res.send('<h1>Hello World!</h1>');
})

app.listen(3000);

