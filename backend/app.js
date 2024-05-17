const express = require("express");
const dbConnect = require("./util/dbConnect");
const projectsRouter = require("./routes/projects");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());

app.get("/health", (req, res) => {
  res.json({ message: "API is running" });
});

app.use(express.json());

app.use("/projects", projectsRouter);

app.listen(port, () => {
  dbConnect();
  console.log("Server is running " + port);
});
