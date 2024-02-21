require("dotenv").config();
const express = require("express");
const dbConnect = require("./helper/dbconection");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = process.env.PORT || 8081;

dbConnect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", eventRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV || "development"} mode`
  );
  console.log(`App is listening on port ${PORT}`);
});
