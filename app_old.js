import http from 'http';

http.createServer((request, response)=> {

    response.setHeader('Content-Disposition','attachment; filename=lista.csv');
    response.writeHead(200, {'Content-Type': 'application/csv'});

    
    response.write('id, nombre\n');
    response.write('1, Alberto\n');
    response.write('2, German\n');
    response.write('3, William\n');
    response.end();
}).listen(8080);

console.log(`Escuchando por el puerto 8080`)
