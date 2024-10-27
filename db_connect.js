const mongoose=require("mongoose");
const db_connect=async()=>{
    try{
let result= await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Database is connected")  
}
catch (error) {
console.log(error)
}
}




module.exports=db_connect