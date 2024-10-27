const mongoose=require("mongoose");
const schema=mongoose.Schema;
const userSchema = new schema({
    name: String,
    lastname: String,
    email: { type:String, unique:true },
    password:String ,
    isAdmin: {type:Boolean, default:true}
    
  });
  const User = mongoose.model('User', userSchema);
module.exports=User;