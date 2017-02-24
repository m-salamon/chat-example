let http = require('http'),
    fs = require('fs');
   

     var server = http.createServer(function callback(request, response) {
       rs = fs.createReadStream(process.argv[3]);
       rs.pipe(response);
     });
     server.listen(process.argv[2]);