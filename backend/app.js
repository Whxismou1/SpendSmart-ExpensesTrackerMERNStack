const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRouter = require("./routes/auth.route");
const dbConfig = require("./config/db.config");

const app = express();

dbConfig.createConnection();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// startWebApp();
module.exports = { app, server };
