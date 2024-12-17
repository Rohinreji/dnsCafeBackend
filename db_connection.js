const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rohinreji65:8sZrpY8R7UjWQJC0@cluster0.k2cgb.mongodb.net/"
);
var db = mongoose.connection;
db.on("error", console.error.bind("error"));
db.once("open", () => {
  console.log("db connection successfull");
});
module.exports = db;
