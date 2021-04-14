import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import logger from "morgan";
import dotenv from "dotenv";
import mainRoutes from './servers/routes/main.js';

dotenv.config();

// set up express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/api/", mainRoutes);

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database" + error);
  });

// set up port number
const port = 3000;
// set up home route
app.get("/", (request, respond) => {
  respond.status(200).json({
    message: "Welcome to Project Support",
  });
});

app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});
