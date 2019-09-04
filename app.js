const Logger = require("./logger.js");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");

// logger.log("message one");
// var pathObj = path.parse(__filename);
// // console.log(pathObj);

// //listener
// logger.on("messageLogged", arg => {
//   console.log("CALLED : " + arg.id);
// });

// console.log(os.freemem());
// console.log(`Total memory: ${os.totalmem}`);

// fs.readdir("./", function(err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

//event
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello there");
    res.end();
  }
});

// server.on("connection", socket => {
//   console.log("new connection");
// });
server.listen(3000);
