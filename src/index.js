require("dotenv").config();
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const mainRouter = require("./routers/main");
require("./config/mysql");

app.set("PORT", process.env.PORT || 64578);

// app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "src/public")));

app.use("/v1", mainRouter);

app.use((err, req, res, next) => {
  console.log("We have an error ocurred: ", err);
  next();
});

app.listen(app.get("PORT"), () => {
  console.log("Listening on port", app.get("PORT"));
});
