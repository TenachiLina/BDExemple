const express = require('express')
const app = express()
const mysql = require('mysql')
const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
    password: '',
    database: 'crud_database',

})
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.get("/",(req, res) =>{
   const sqlInsert = "INSERT INTO moviereviews(movieName, movieReview) VALUES ('inception','good movie');"
    db.query(sqlInsert,(err,result)=>{
        res.send("Hi I'm Lily548")

    });

    //res.send("Hi I'm Lina")
});

app.listen(3002,() =>{
    console.log("running on port 3002");
});
