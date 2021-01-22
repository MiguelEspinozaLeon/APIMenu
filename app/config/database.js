const mongoose = require('mongoose');
const CONFIG = require('./config');

require('dotenv').config({path: '.../variables.env'});

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(process.env.DB_URL).then(
            connection =>{
                this.connection = connection;
                console.log('Conexion a la base de datos exitosa');
            }).catch(error => console.log(error));
        
    
    }

}