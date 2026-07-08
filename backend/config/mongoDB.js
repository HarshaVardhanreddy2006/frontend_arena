import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "uiarena",
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;