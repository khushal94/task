require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/tasks", require("./routes/task.routes"));

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
app.get("/", (req, res) => {
  res.send("Welcome to the Task Management API");
});