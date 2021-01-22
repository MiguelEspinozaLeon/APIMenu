


require('dotenv').config({path:'.../variables.env'});
module.exports = {
PORT: process.env.PORT || 3000,
DB: process.env.DB || 'mongodb://localhost:27017/platillos',
HOST: 'localhost'

}
