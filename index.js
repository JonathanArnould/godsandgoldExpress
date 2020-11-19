const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const routes = require("./routes");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
