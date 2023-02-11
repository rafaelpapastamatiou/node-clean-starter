import cors from "cors";
import express from "express";

import { connectToMongo } from "@infra/mongodb/connect-mongo";

const PORT = process.env.PORT || 3000;

async function startServer() {
  const server = express();

  server.use(express.json());
  server.use(cors());

  await connectToMongo();

  server.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}}`);
  });
}

startServer();
