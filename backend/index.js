const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contacts</h1>");
});

app.listen(3002, () => {
  console.log(`server is running at port 3002`);
});
