import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectBD = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    console.log("MongoDB connected")
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
    
  }
}

export default  connectBD