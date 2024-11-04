import "dotenv/config";
import fastifySession from "@fastify/session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { Admin } from "../models";

const MongoDBStore = ConnectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO,
  collection: "sessions",
});

sessionStore.on("error", (error) => {
  console.log("Session store error: ", error);
});

export const authenticate = async (email, password) => {
  if (!email || !password) return null;

  if (email === "akash@gmail.com" && password === "2424") {
    return Promise.resolve({
      email: email,
      password: password,
    });
  } else {
    return null;
  }
};

export const PORT = process.env.PORT || 3000;
