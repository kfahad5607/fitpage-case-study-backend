const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/stocks", require("./routes/stockRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
