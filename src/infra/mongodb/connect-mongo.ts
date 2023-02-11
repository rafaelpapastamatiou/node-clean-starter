import mongoose from "mongoose";

export async function connectToMongo(): Promise<typeof mongoose> {
  const uri = process.env.MONGO_URL || "mongodb://127.0.0.1/starter";

  mongoose.set("strictQuery", false);

  const db = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  });

  return db;
}
