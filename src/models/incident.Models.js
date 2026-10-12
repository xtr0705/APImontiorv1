import mongoose, { Schema } from "mongoose";
import { Schema } from "mongoose";
const incidentSchema = new mongoose.Schema({
  monitor:{
    type:Schema.Types.ObjectId,
    ref:'Monitor'
  },
  status:{
    type:String,
    required:true
  },
  Reason:{
    type:String,
  },
  startedAt:{
    type:String,
    required:true
  },
  resolvedAt:{
    type:String
  }
},{
  timestamps:true
})

const Incident = mongoose.model('Incident',incidentSchema);