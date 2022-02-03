require("dotenv").config();

const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, () => console.log("Ta bala 🤓"));

app.get("/test", (req, res) => {
  res.send("oii");
});
