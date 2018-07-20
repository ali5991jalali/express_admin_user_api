

const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const expressvalidator=require('express-validator');
const {port}=require('./config');

//const { sanitizeBody } = require('express-validator/filter');




const app=express();


//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/first');
//end of connecting to mongodb



//setting of requirements
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(expressvalidator());
//end of setting requirements


//importing and using routes
app.use('/user',require('./routes/user'));
app.use('/admin',require('./routes/admin'));
//end of importing routes




app.get('/',(req,res,next)=>{
let usermodel=require('./models/user');
usermodel.remove({email:'ali.5991.jalali@gmail.com'},(err,del)=>{

    res.send(del)
})
})



app.listen(port,()=>{

console.log(`server is running on port ${port}...`)

})