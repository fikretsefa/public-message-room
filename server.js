const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: { origin: "http://localhost:3000", credentials: true } });

let users = [];
let messageBox = [];

io.on('connection', (socket) => {

    socket.on('user_joined', (data) => {
        const user = { id: socket.id, name: data.name, countryCode: data.countryCode, flaguri: data.flaguri }
        users.push(user);
        console.log(user, 'user_joined');
        console.log("Online User : ", users.length);
        socket.emit('user_id', socket.id);
        io.emit('all_message', messageBox);
        io.emit('online_users', users.length);
    });

    socket.on('user_send_message', (respose) => {
        const user = users.find(user => user.id === socket.id)
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        const messageInfo =
        {
            time: time,
            user: user,
            message: respose
        }
        messageBox.push(messageInfo);
        io.emit('all_message', messageBox);
    });

    socket.on('disconnect', function () {
        users = [...users.filter(user => user.id !== socket.id)]
        io.emit('online_users', users.length);
        console.log(socket.id, 'disconnected')
    })
});

http.listen(4000, () => {
    console.log('listening on *:4000');
});
