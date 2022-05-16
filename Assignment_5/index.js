const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running and listening to port - ${port}`);
});

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("DB connected");
});

// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const routes = require("./routes/routes");

app.use("/", routes);
