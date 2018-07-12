const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname,"../public")
console.log(publicPath);
const app = express();

console.log(__dirname + '../public')

app.use(express.static(publicPath));

app.listen(3000, ()=>{console.log("listening on port 3000")});
