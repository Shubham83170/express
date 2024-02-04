const mongose = require('mongoose')

const schimapattern = new mongose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
   
    phonenumber:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    male:{
        type:String
    },
    female:{
        type:String
    },
    Other:{
        type:String
    },
})

const mytype = new mongose.model('lastbatch',schimapattern);

module.exports = mytype











// Other
// : 
// null
// address
// : 
// ""
// confirmpassword
// : 
// ""
// email
// : 
// ""
// female
// : 
// null
// firstname
// : 
// "shubham"
// lastname
// : 
// ""
// male
// : 
// null
// password
// : 
// ""
// phonenumber
// :