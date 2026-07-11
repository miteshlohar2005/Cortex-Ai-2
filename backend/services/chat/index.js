import express from "express";
import dotenv from "dotenv";
import router from "./routes/chat.routes.js";
import connectDB from "./config/db.js";
import dns from "node:dns";

dotenv.config();

// MongoDB DNS fix
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use("/", router);

app.listen(port, () => {
  connectDB();

  console.log(
    `chat service running on ${port}`
  );
});