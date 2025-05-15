// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '193.203.168.209',
    user:'u944559448_gcollado',
    password:'collado88*D',
    database:'u944559448_Losbravo'
});

connection.connect(error => {
    if (error) {
        return console.error('no hay conexion');
    }
    console.log('conectado a la bbdd');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;