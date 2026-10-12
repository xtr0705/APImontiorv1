import mongoose from "mongoose";
import { Schema } from "mongoose";
const monitorSchema = new mongoose.Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  name:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true
  },
  interval:{
    type:String,
    enum:["1","5","10","30","60"]
  },
  method:{
    type:String,
    default:"GET",
    required:true
  },
  status:{
    type:String,
    default:"UNKNOWN",
    required:true
  },
  isActive:{
    type:Boolean,
    default:true,
    required:true
  }
},{
  timestamps:true
})

const Monitor = mongoose.model("Monitor",monitorSchema);
export default Monitor;