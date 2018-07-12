const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname,"../public")
const port = process.env.PORT || 3000;
console.log(publicPath);
const app = express();

console.log(__dirname + '../public')

app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`Listing on port ${port}`)

});
