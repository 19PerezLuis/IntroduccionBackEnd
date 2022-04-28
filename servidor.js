var http = require('http');
var fs = require('fs');
var path = require ('path');

http.createServer(function(request,responce){
    console.log('request',request.url);
    var filepath = '.' + request.url;
    if(filepath == './'){
        filepath = './index.html';
    }
});
var extname = string(path.extname(filepath)).toLowerCase();
var contentType = 'text/html';
var mimeTypes ={
    '.html': 'text/html',
    '.js':'text/javascript',
    '.css':'text/css',
    '.png':'image/png'
};