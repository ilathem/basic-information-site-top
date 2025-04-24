const express = require("express");
const app = express();

const options = {
  root: __dirname,
};

app.get("/index.html", (req, res) => res.sendFile("index.html", options));

app.get("/about.html", (req, res) => res.sendFile("about.html", options));

app.get("/contact-me.html", (req, res) =>
  res.sendFile("contact-me.html", options),
);

app.get(/.*/, (req, res) => res.sendFile("404.html", options));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first express app, listening on port ${PORT}`);
});
