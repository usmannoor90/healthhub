const express = require("express");
const router = require("./routes/allRoutes");
const { ErrorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = express();
const connectDB = require("./Models/db");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Determine the environment and load the corresponding .env file
const env = process.env.NODE_ENV || "development";

dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

// Connect to MongoDB
connectDB();

app.use("/api/", router);

// Last middleware to use
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} in ${env} mode`);
});
