let http = require('http'),
    fs = require('fs');
let map = require('through2-map');

     var server = http.createServer(function callback(request, response) {

        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
        
     });
     server.listen(process.argv[2]);