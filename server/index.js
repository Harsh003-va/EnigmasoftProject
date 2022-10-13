const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const validator = require('validator');
const {body, validationResult} = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : 'harsh',
    database: 'cafe'
});

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}
));


var MemoryStore = session.MemoryStore;
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    name: 'session',
    secret: 'cafe',
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore()
    
}));




app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/login', (req, res) => {
    const mail = validator.escape(req.body.mail);
    const pass = validator.escape(req.body.pass);
    const sqlSelect = 'SELECT * FROM signin WHERE mail = ?';
    
    db.query(sqlSelect, [mail], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
                console.log(result);
                bcrypt.compare(pass, result[0].pass, (error, resultB) => {
                    if (resultB) {
                        req.session.user = result;
                        req.session.loggedIn = true;
                        console.log(req.session.user);
                        res.send({message: 'success', session: req.session});
                        
                        
                    }
                })  
            
        }
        else {
            res.send({message: 'Wrong combination Email/Password !'});
        }
    })
    
});
app.get('/login', (req, res) => {
    console.log(req.session.user);
    if (req.session.user){
        res.send({
            session: req.session,
            message: 'logged'
        });
    }
    else {
        res.send({
            message: 'Not logged'
        });
    }
});

app.post('/register',
    body('mail').isEmail().normalizeEmail().withMessage('Email is not valid !'),
    body('pass').isLength({min: 8}).withMessage('Password must be at least 8 chars long').isUppercase({min:1}).withMessage('password must contain one uppercase and lowercase'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.send({message: errors.errors[0].msg});
        }
        else { 
            const mail = validator.escape(req.body.mail);
            const sqlSelect = 'SELECT * FROM signin WHERE mail = ?';
            db.query(sqlSelect, [mail], (errorSelect, resultSelect) => {
                if (errorSelect) {
                    res.send({message: 'A problem occured try registering later !'});
                }
                else {
                    if (resultSelect.length > 0) {
                        res.send({message: 'The mail address is already registered !'});
                    }
                    else {
                        const pass = validator.escape(req.body.pass);
                        const sqlInsert = 'INSERT INTO signin(mail, pass) VALUES (?, ?)'
                        bcrypt.hash(pass, 10, (error, hash) => {
                            if (error) {
                                res.send({message: 'A problem occured try registering later !'});
                            }
                            else {

                                db.query(sqlInsert, [mail, hash], (err, result) => {
                                    if (err)  {
                                        console.log(err);
                                        res.send({message: 'A problem occured try registering later !'});
                                    }
                                    else {
                                        res.send({message : 'success'})
                                        
                                    }

                                })
                            }
                        
                        });
                    }
                } 
                
            })
            
    }
});
app.get('/logout', (req,res) => {
    req.session.destroy();
    res.send({logout: true});
})
app.listen(9003, () => {console.log('running on port 9003');});

