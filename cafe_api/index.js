const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
user:'root',
host:'localhost',
password:'harsh',
database:'cafe',

})
app.post('/create', (req, res) => {
    console.log(req.body);
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   

db.query('INSERT INTO signup(name ,email, password) VALUES (?,?,?) ',[name, email, password], (err, result) => {
    if(err){
        console.log(err)
    }else{
        res.send("Values Inserted");
    }
}
)
});

app.post('/login',(req, res) => {
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;
    
 
 db.query(
    "SELECT * FROM signup WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
     if(err){
        res.send({err: err})
     }

        if (result.length > 0){
            res.send(result)
        }else{
         res.send({message: "Wrong Email/password"});
        }
     }
 );
});


app.listen(3002, ()=>{
    console.log("hi,Server is running on port 3002");
});
