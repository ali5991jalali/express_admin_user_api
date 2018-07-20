const bcrypt=require('bcryptjs');
const nodemailer=require('nodemailer');
let {user,pass}={user:'ali.5991.jalali@gmail.com',pass:'alinotavailable'}



module.exports={

port:2222,
secret:'$#@&*^(){}}:XGHJ$%#@#!~',
salt:bcrypt.genSaltSync(10),
email:{
user,
pass,
transporter:nodemailer.createTransport({
service:'gmail',
secure:false,
port:587,
auth:{

    user,
    pass
},
tls:{

    rejectUnauthorized:false
}


})



}






}