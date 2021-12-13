const http = require("http");
const express = require("express");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server, {
    cors: {
        origin: "*",
    },
});

let onlineUsers = [];

io.on("connection", (socket) => {
    console.log(socket.id);
    console.log("A client connected");

    socket.on("NEW_USER", (username) => {
        onlineUsers.push({
            socketId: socket.id,
            username: username,
        });
        io.emit("ONLINE_USERS_UPDATED", onlineUsers);
    });

    socket.on("NEW_MESSAGE", (content) => {
        const sender = onlineUsers.find((user) => user.socketId === socket.id);
        io.emit("NEW_MESSAGE", { sender: sender, content: content });
    });

    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
        io.emit("ONLINE_USERS_UPDATED", onlineUsers);
    });
});

app.get("/", (req, res) => {
    res.send("Welcome to our socket server");
});

server.listen(5000, () => {
    console.log("Server is running at 5000");
});
