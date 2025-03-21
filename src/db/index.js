import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)        
        console.log(`Mongodb is connected at ${connection.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
   
}
export default connectDb