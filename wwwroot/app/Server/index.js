const http = require('http');
//const io = require('socket.io')();
// or




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

io.on("connection", (o) => {
    // console.log(o);
    console.log('connection estabilished');

    o.on("*", x => console.log(x))

    o.on('message', msg => {
        console.log(msg)


        o.emit('message', 'mensagem recebida');

        if (msg == 'ola')
            o.emit('message', 'como vai');
    })
    o.emit('message', 'como vai');
    o.emit('message', 'mensagem recebida');
})