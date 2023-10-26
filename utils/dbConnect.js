import mongoose from "mongoose";

const MONGODB_URI ="mongodb+srv://jdapoorv:SUNshine11@jaiinvestments.rp7488o.mongodb.net/jaiinvestments"

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect;
