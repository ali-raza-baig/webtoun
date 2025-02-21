import mongoose from "mongoose";

const DbConnection = () => {
    try {
        mongoose.connect(process.env.MOGODBID)
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

export default DbConnection;