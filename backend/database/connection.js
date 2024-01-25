const mongose = require('mongoose')
const db= "mongodb+srv://shubham-mongodb:mongodb20@cluster0.uidq2xz.mongodb.net/mern";
mongose.connect(db)
.then((d)=>{  console.log("db connection is ok");})

.catch((error)=>{ console.log(error); })