import cors from "cors";
import express from "express";

import { connectToMongo } from "@infra/mongodb/connect-mongo";

const PORT = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  console.log("MongoDb - Connecting...");

  const mongoDb = await connectToMongo();

  console.log("MongoDb - Connected");

  const server = app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM signal received.");

    console.log("Closing HTTP Server...");

    server.close(async () => {
      console.log("HTTP Server closed.");

      console.log("Closing mongodb connection...");

      await mongoDb.connection.close();

      console.log("MongoDb connection closed.");

      process.exit(0);
    });
  });
}

startServer();
