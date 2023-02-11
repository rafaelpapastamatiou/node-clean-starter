import mongoose from "mongoose";

export async function connectToMongo() {
  const uri = process.env.MONGO_URL || "mongodb://127.0.0.1/starter";

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  });
}
