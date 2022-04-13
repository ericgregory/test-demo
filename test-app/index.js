// Dependencies

const mysql = require("mysql2");
const express = require("express");

// MySQL config - be careful of passwords!

const db = mysql.createConnection({
    host: "test-mysql",
    user: "root",
    password: "octoberfest",
});

db.connect((err) => {
    if (err) {
        console.log("Error!", err);
    } else {
        dbStatus = "Connected to MySQL";
        console.log(`${dbStatus}`);
    }
});

// Express config

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ message: `${dbStatus}`});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});