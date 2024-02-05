const express = require("express");
const app = express();
const http = require("http")
const server = http.createServer(app)
const {Server} = require("socket.io")


app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

server.listen(7000, ()=> {
    console.log("Server running on 7000");
})