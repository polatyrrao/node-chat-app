
const trainDetails = require("../CSXInfractions/trainInfractions");
const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const publicPath = path.join(__dirname,"../public")
const port = process.env.PORT || 3000;
console.log(publicPath);
const app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on("connection", (socket)=>{
  console.log("new user connected");
next();
function next(){
trainDetails.trainInfractions().then((ti)=>{
  socket.emit("csxInfraMsg", ti);
  }  );
  setTimeout(next,5000);
};
  socket.on("disconnect", ()=>{
    console.log("client disconnected");
  });


//  socket.on("createEmail", (newEmail)=>{
//    console.log("createEmail", newEmail);
//  });

  socket.on("chatMsgFromClient", (msgFromClient)=>{
    console.log("chat message from client", msgFromClient);
  });

  });


console.log(__dirname + '../public')
app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
