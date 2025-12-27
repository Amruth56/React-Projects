import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./src/models/user.js";
import Todo from "./src/models/todo.js";

dotenv.config();

const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/todo";

const run = async () => {
  try {
    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB for seeding");

    const user = await User.create({ email: "seeduser@example.com", password: "password123" });
    console.log("Created user:", user);

    const todo = await Todo.create({ userId: user._id, title: "Seed todo" });
    console.log("Created todo:", todo);

    await mongoose.disconnect();
    console.log("Disconnected");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
