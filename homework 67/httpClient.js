const http = require('http');

http.get(process.argv[2], function callback(response){
    response.setEncoding("utf-8");
    response.on("data", console.log);
    response.on("error", function (error){
        console.log(error);
    });
}).on("error", console.error);