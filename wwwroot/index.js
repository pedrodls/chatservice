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

io = require('socket.io')(server)
let clients = []

let getId = (token) => {
    for (var i = 0; i < clients.length; i++)
        if (clients[i].token == token) {
            return clients[i].id
        }
}

let delay = () => {
    for (var i = 0; i < clients.length; i++) {
        io.to(clients[i].id).emit('message', 'DoNe')
        io.sockets.to(clients[i].id).emit('message', 'hello');
    }
}
io.on('test', delay)
io.on("connection", (socket) => {

    socket.on('disconnect', function() {
        console.log('Got disconnect!');
        /*
                var i = allClients.indexOf(socket);
                allClients.splice(i, 1);*/
    });

    socket.on('register', function(data) {

        var n = true,
            client = {};
        for (var i = 0; i < clients.length; i++)
            if (clients[i].token == data.token) {
                clients[i].id = socket.id;
                n = false;
                break;
            }

        if (n) {
            client.id = socket.id
            client.token = data.token;
            clients.push(client);
        }

    })
    console.log('connection estabilished');

    socket.on('test', (someOneSay) => {
            for (var i = 0; i < clients.length; i++) {
                io.to(clients[i].id).emit('message', {
                    message: someOneSay
                })
                io.sockets.to(clients[i].id).emit('message', {
                    message: someOneSay
                });
            }
        })
        //console.log(socket.request.headers)
    socket.on('message', data => {
        io.sockets.to(getId(data.targetToken)).emit('message', data);
        console.log('-------------------------------------')
    })
})