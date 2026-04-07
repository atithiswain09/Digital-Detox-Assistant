const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    require:true,
    trime:true
  }
  ,
  email:{
    type:String,
    require:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    require:true,
    minlength:6,
  }

} ,{
  timestamps:true
})


module.exports=mongoose.model("User",userSchema)