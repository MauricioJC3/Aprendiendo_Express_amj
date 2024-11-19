const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_gestion_empresa'
    });

    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Base de datos conectada')
    });

    module.exports = db;