import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        // console.log(process.env.DB_CONNECT);
    } catch (error) {
        console.log("error occured", error);
    }
}
export default connectDB;