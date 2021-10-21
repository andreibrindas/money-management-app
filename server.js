// @Tutorials
// https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
// https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const passport = require("passport");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");
const users = require("./routes/users");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/api/v1/transactions", transactions);
app.use("/api/v1/users", users);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
