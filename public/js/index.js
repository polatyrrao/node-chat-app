var socket = io();

socket.on("connect", function(){
console.log("connected to server");

//socket.emit("createEmail", {
//  "to": "Aruna Polsani",
//  "from": "Rajeshwar Polaty"
//  }
//);

socket.emit("chatMsgFromClient", {
  "from": "Rajeshwar Polaty",
  "Message": "Count me in"
});


});
socket.on("disconnect", function(){
  console.log("Disconnected from server");
});

//socket.on("newEmail", function(email){
//  console.log("new email arrived", email);
//});

socket.on("newChatMsg", function(msgFromServer){
  console.log(msgFromServer);
});

socket.on("csxInfraMsg",function(inMsg)
{
  console.log(inMsg);
}
);
