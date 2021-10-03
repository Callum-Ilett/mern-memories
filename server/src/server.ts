import { connect as connectMongoDB } from "mongoose";
import { MONGO_URI, PORT } from "./config";
import app from "./app";

app.listen(PORT, async () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  console.log("Connecting to MongoDB...");

  try {
    await connectMongoDB(MONGO_URI);
    console.log("Status: CONNECTED!");
  } catch (error) {
    console.log("Statius: FAILED!");
  }
});
