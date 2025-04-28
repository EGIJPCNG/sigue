import mongoose from "mongoose";

mongoose.set('debug', true);

const MONGO_URI = "mongodb://100530075634ucla:030709wilson@ac-uw1ntal-shard-00-00.sladdbb.mongodb.net:27017,ac-uw1ntal-shard-00-01.sladdbb.mongodb.net:27017,ac-uw1ntal-shard-00-02.sladdbb.mongodb.net:27017/?replicaSet=atlas-f7k1kd-shard-0&ssl=true&authSource=admin";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(">>> MongoDB connected");
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        console.error('Error details:', error.message, error.stack);
    }
};