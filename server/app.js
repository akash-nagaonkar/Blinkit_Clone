import "dotenv/config";
import mongoose from "mongoose";
import Fastify from "fastify";

const start = async () => {
  const app = Fastify();
  const PORT = process.env.PORT || 3000;

  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Database is connected!");
    })
    .catch((error) => {
      console.log("Database Connection Failed: ", error);
    });

  // Listen to the root route
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.log(err);
    }
    console.log(`Blinkit Started on http://localhost:${PORT}`);
  });
};

start();
