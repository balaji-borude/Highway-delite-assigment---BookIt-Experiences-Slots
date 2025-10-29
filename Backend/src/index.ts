import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db";
import cors from 'cors';



dotenv.config();
//dotenv.config() loads your environment variables into 
// your running app so you can use them via process.env.

const app = express();

app.use(express.json());

app.use(cors());
connect();  // db connect function called 

// import Routes
import experinceRoute from './Routes/experienceRoutes';


// route mounting 
app.use("/api/v1/",experinceRoute);


const PORT = process.env.PORT || 6000;
app.listen(PORT , ()=>{
    console.log(`App is Listening in the port ${PORT}`);
})


console.log("server started");
