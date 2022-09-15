const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sriraj9213",
  database: "cafe",
});

app.listen(3001, () => {
  console.log("running sever");
});