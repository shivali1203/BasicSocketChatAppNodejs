const http = require('http')//http is built in
const express = require('express')
const app = express ()
const path = require('path')
const {Server} = require("socket.io")

const server = http.createServer(app);

//server.io
const io = new Server(server)

 //create a connection with io
//connection here is an event , a key word for a particular function
io.on("connection", (socket)=>{
   console.log("new user created with the ID :-  ", socket.id)
   socket.on("user-message", (data)=>{
    console.log(data)
})
})


//set view enginer 
app.use(express.static(path.resolve("./public")))//for static page

app.get("/", (req, res)=>{
    return res.sendFile("./public/index.html")
   
})
server.listen(3000, () => console.log("Server is running..."));