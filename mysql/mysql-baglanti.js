const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'e-commerce'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Baglanti Basarili");
});