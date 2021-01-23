const mongoose = require('mongoose');
const CONFIG = require('./config');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.../variables.env')});

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        try {
            const connection = mongoose.connect(process.env.DB_URL);
            this.connection = connection;
            console.log('Conexion a la base de datos exitosa');
        } catch (error) {
            return console.log(error);
        }
        
    
    }

}



















// const CONFIG = require('./config');

// require('dotenv').config({path: '.../variables.env'});
// const URI = process.env.DB_URL
//             ? process.env.DB_URL
//             : 'mongodb://localhost/HOTELCASINO';

// module.exports = {
//     connection: null,
//     connect: function(){

        

//         mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//         })

// const connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error'));
// connection.once('open', () => {
//     console.log('DB is conected');
// })


        
//     }

// }