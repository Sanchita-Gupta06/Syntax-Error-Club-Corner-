const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'login-system')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Awani',
    password: 'tiger',
    database: 'login_system'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.post('/login-system/login-student', (req, res) => {
    const { enrollment_no, password } = req.body;

    const query = 'SELECT * FROM students WHERE enrollment_no = ? AND password = ?';
    db.query(query, [enrollment_no, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid enrollment number or password!');
        }
    });
});

app.post('/login-system/login-club', (req, res) => {
    const { club_id, password } = req.body;

    const query = 'SELECT * FROM clubs WHERE club_id = ? AND password = ?';
    db.query(query, [club_id, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid club ID or password!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
