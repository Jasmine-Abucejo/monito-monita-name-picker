import express from "express";
import dotenv from "dotenv";
import participantRoutes from "./routes/participantRoutes.js";
import cors from "cors";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/participants", participantRoutes);
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  connectDB();
  console.log("Server started");
});
