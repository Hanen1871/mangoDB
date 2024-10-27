const mongoose=require("mongoose");
const schema=mongoose.Schema;
const productSchema = new schema({

name :String,
price:Number ,
quantity :Number,
brand :{ type:String, unique:true },
specifications:String 



  });
  const Product = mongoose.model('Product', productSchema);
module.exports=Product;