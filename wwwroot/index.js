const http = require('http');

const hostname = 'localhost';
const port = 6060;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    res.end('Socket server is up on :5050');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const io = require('socket.io')(server)
io.on("connection", (socket) => {
    
    console.log('connection estabilished');
    console.log('-------------------------------------')
    //console.log(socket.request.headers)
    socket.on('message', data => {
        console.log(data)
        socket.emit(data.targetToken, data);
    })
})