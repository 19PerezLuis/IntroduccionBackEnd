var http = require('http');
var fs = require('fs');
var path = require ('path');
const { ifError } = require('assert');

http.createServer(function(request,responce){
    console.log('request',request.url);
    var filepath = '.' + request.url;
    if(filepath == './'){
        filepath = './index.html';
    }
var extname = string(path.extname(filepath)).toLowerCase();
var contentType = 'text/html';
var mimeTypes ={
    '.html': 'text/html',
    '.js':'text/javascript',
    '.css':'text/css',
    '.png':'image/png'
};
fs.readFile(filepath,function(error,content){
    if(error){
        if(error.code == 'ENOENT'){
            fs.readFile('/IntroduccionBackEnd/404/dist/index.html', function(error, Content){
                responce.writeHead(200,{'Conten-Type':contentType});
                responce.end(Content,'utf-8');
            });
        }
        else{
            responce.writeHead(500);
            responce.end('sorry, check with the site admin for error'+error.);
            responce.end();
        }
    }
    else{
        responce.writeHead(200,{'content-Type':contentType});
        responce.end(content,'uft-8');
    }
});
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000');