const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send({
    name: "bob Bobson",
    job: "rocket pilot",
    GPA: "1.39",
  });
});

app.listen(port, () => {
  console.log(`Bob Bobson`);
});
