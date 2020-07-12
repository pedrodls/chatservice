const http = require('http');

const hostname = 'localhost';
const port = 5050;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Socket server is up on :5050');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const io = require('socket.io')(server, { origins: '*:*' });

io.on("connection", (socket) => {
    
    console.log('connection estabilished');

    socket.on("*", x => console.log(x))

    socket.on('message', data => {
        console.log(data)
        socket.emit(data.targetToken, data);
    })
})