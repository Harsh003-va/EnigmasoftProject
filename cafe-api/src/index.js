const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sriraj9213",
  database: "cafe",
});

app.post('/SignUp', (req, res)=> {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO sign_up (Name, Email, Password) VALUES (?,?)",
    [Name, Email, Password]
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running sever");
});