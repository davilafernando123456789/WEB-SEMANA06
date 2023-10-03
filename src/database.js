const mongoose = require('mongoose');
//const mysql = require('mysql')

mongoose.connect('mongodb://127.0.0.1:27017/LAB06',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Database is connected'));

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'usbw',
//     database : 'contoso'
// })

//connection.connect().then(db => console.log('Database is connected'));

// connection.query('SELECT * FROM empleados', function(err, rows, fields) {
//     if (err) {
//         throw err;
//     }else{
//         console.log('Los empleados son: ', rows[0].Nombre);
//     }
//   });

// connection.end();

