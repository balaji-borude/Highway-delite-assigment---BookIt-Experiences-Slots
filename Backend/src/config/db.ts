import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
console.log(MONGO_URI);

export const connect = async () => {
  try {
        await mongoose.connect(MONGO_URI);
        console.log("Db Connected succesfully");
        
  } catch (error) {
        console.log(error);
        console.log("Db Connection Failed");
        process.exit(1);
  }
};
