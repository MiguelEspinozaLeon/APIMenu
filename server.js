const Database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const App = require('./app/app');
require('./app/config/database');
require('dotenv').config({path: './variables.env'});

Database.connect();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

App.listen(port, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el puerto ${port} y en el host ${host}  en la base de datos ${process.env.DB_URL}`);
    
});