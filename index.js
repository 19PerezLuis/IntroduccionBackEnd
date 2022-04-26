//llamamos el modulo http
const http = require('http');
//establecemos la url o IP de nuestro servidor
const hostname = '192.168.50.189';
//establecemos el puesto de escucha
const port = '3000';
//creamos una instancia HTTP con un reques y un responce
const server = http.createServer((req,res)=>{
    //el servidor respondera un codigo 200
    res.statusCode = 200;
    //el servidor respondera con un texto plano
    res.setHeader('Content-Type','text/plain');
    //el servidor respondera el mensaje hola mundo
    res.end('Hola mundo\n');
});
server.listen(port, hostname,()=>{
    console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
});