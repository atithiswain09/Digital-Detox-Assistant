const express=require("express");

const app=express();
const cookieParser = require("cookie-parser");
const AuthRouter=require("../src/routes/Auth.routes");


app.use(express.json());//it help to server to read Data 
app.use(cookieParser()); 



app.use("/api/V1/auth", AuthRouter);




























module.exports=app;