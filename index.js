const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

const db = require("./db_connection");
 
const routes = require("./routes");
app.use("/", routes);

app.listen(3005, "0.0.0.0", () => {
  console.log("Server is running successfull");
  console.log(`Server running at http://0.0.0.0:${3005}`);
});
