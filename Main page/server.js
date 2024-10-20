const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); 
const app = express();

app.use(cors());  
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Awani',
    password: 'tiger',
    database: 'calendarDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.post('/addReminder', (req, res) => {
    const { day, month, year, reminder } = req.body;

    const query = 'INSERT INTO reminders (day, month, year, reminder) VALUES (?, ?, ?, ?)';
    db.query(query, [day, month, year, reminder], (err, result) => {
        if (err) {
            console.error('Error inserting reminder:', err);
            return res.status(500).json({ error: err });
        }
        console.log('Reminder added with ID:', result.insertId);
        res.json({ message: 'Reminder added!' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

