const express=require("express");
const app=express();
const cors=require("cors");
const db_connect=require("./db_connect");
require("dotenv").config();
db_connect()
app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/user"))

app.use("/product", require("./routes/product"))

app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("serveur is running"))