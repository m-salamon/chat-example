'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
       socket.write(now.getFullYear() + '-' + isZeroBased(now.getMonth()+1)  + '-' + isZeroBased(now.getDate()));
       socket.write(' ' + now.getHours() + ':' + now.getMinutes());
       //socket.write(now.toLocaleTimeString());
        socket.end('\n');
    }).listen(+process.argv[2]);

    let isZeroBased = (data) => {
            if(data < 10){
               data = '0' + data; 
                                        
            }
         return data;
     };

   