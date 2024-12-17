const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var db = mongoose.connection;
db.on("error", console.error.bind("error"));
db.once("open", () => {
  console.log("db connection successfull");
});
module.exports = db;
