import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/blockchain", (req, res) => {
  res.send("Hello, World!");
});
app.get("/transaction", (req, res) => {
  res.send("Hello, World!");
});
app.get("/mine", (req, res) => {
  res.send("Hello, World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
