const express = require("express");
const app = express();
const http = require("http")

const {Server} = require("socket.io")
const server = http.createServer(app)

const io = new Server(server)

io.on("connection", (socket)=> {
    console.log(socket.id, " User Connected.");

    socket.join("kitchen");
    let sizeOfRooms = io.sockets.adapter.rooms.get("kitchen").size;
    io.sockets.in('kitchen').emit("cooking", "Fried Rice and chicken for " + sizeOfRooms )

    socket.join("bed-room");
    io.sockets.in('bed-room').emit("bedRoom", "Let's sleeping together")
    io.sockets.in('bed-room').emit("restRoom", "I'm taking Rest")


    socket.on("chat", (data)=> {
        io.emit("chatShow", data)
    })
})




app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

server.listen(7000, ()=> {
    console.log("Server running on 7000");
})