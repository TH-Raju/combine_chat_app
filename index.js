const express = require("express");
const app = express();
const http = require("http")

const {Server} = require("socket.io")
const server = http.createServer(app)

const io = new Server(server)

io.on("connection", (socket)=> {
    console.log(socket.id, " User Connected.");
})




app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

server.listen(7000, ()=> {
    console.log("Server running on 7000");
})