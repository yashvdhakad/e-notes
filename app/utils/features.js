import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1", {
        dbName: "eNotes-next"
    })
    console.log('Connection done')
}