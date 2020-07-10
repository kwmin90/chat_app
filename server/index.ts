import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket =>{
    console.log('user connected');

    socket.on('message', (message: string)=>{
        io.emit('message', message);
    });
});


server.listen(3000,()=>{
    console.log('express server listening to port 3000');
});