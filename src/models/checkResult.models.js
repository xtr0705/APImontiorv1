import mongoose from "mongoose";
import { Schema } from "mongoose";
const checkResultSchema = mongoose.Schema({
  monitor:{
    type:Schema.Types.ObjectId,
    ref:'Monitor',
    required:true
  },
  status:{
    type:String,
    required:true
  },
  statusCode:{
    type:Number
  },
  responseTime:{
    type:Number
  },
  errorMessage:{
    type:String
  },
  checkedAt:{
    type:Date,
    default:Date.now
  }
});

const checkResult = mongoose.model("checkResult",checkResultSchema);
export default checkResult;