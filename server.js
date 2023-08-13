const http = require('http');
const host = 'localhost';
const port = 3000;

//Creo el metodo Request
const requestListener = function(req, res){
    res.writeHead(200); //El objeto response tiene un evento llamado wirteHead(200) que es el codigo que indica una conexion exitosa
    //Ejemplos de codigos 400
    //404: esta mal escrita la URL
    //403: forbidden, no esta autorizado, no tiene acceso
    //402: no esta autorizado o la contrasena es incorrecta

    //ERRORES 500: Son errores que no se pueden predecir ya que son errores del servidor

    res.end('Hola mundo :D')
}

//Creo el servidor, aca se usa el metodo request
const server = http.createServer(requestListener);

server.listen(port, host,  () => {
    console.log('app running on port', port)});
