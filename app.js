var fs = require("fs");
var express = require("express");
var app = express();
var path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Web server at port " + (process.env.PORT || 3000) + " is running..."
  );
});

app.use(express.static(path.join(__dirname, "public")));
