import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });
        connection.on("error", (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit(1);
        });
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}                 