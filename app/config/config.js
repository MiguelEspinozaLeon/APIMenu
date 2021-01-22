


require('dotenv').config({path:'.../variables.env'});
module.exports = {
PORT: process.env.PORT || 3000,

DB: process.env.DB || 'mongodb+srv://miguelespinoza:El16330520@cluster0.oejvq.mongodb.net/platillos?retryWrites=true&w=majority',
//DB: process.env.DB || 'mongodb://localhost:27017/platillos',
HOST: 'localhost'

}
