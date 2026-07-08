import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();

    app.use("/api/user", userRouter);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server");
    console.error(err);
  }
};

startServer();