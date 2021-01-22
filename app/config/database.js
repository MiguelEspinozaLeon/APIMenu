const mongoose = require('mongoose');


const URI = process.env.DB_URL 
            ? process.env.DB_URL
            : 'mongodb://localhost/HOTELCASINO';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => {
    console.log('DB is conected');
})






















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