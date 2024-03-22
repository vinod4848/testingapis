require("dotenv").config();
const express = require("express");
const dbConnect = require("./helper/dbconection");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const MembaerRouter = require("./routes/memberRouter");
const addMemberRoutes = require('./routes/addmemberRouter');

const app = express();
const PORT = process.env.PORT || 8081;

dbConnect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api", MembaerRouter);
app.use("/api", addMemberRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV || "development"} mode`
  );
  console.log(`App is listening on port ${PORT}`);
});
