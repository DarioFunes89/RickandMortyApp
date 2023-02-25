
const express = require('express');
const { router } = require('../routes/index');
const cors = require('cors')
const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

server.use('/', router);

server.listen(PORT, () => {
   console.log('Server levantado en el puerto ' + PORT);
});

module.exports = { server };