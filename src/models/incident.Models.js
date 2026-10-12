import mongoose, { Schema } from "mongoose";
import { Schema } from "mongoose";
const incidentSchema = new mongoose.Schema({
  monitor:{
    type:Schema.Types.ObjectId,
    ref:'Monitor'
  },
  status:{
    type:String,
    required:true,
    default:"ONGOING",
    enum:["ONGOING","RESOLVED"]
  },
  reason:{
    type:String,
  },
  startedAt:{
    type:Date,
    required:true
  },
  resolvedAt:{
    type:Date
  }
},{
  timestamps:true
})

const Incident = mongoose.model('Incident',incidentSchema);

export default Incident;