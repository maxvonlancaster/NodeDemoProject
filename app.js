const Logger = require("./logger.js");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(function(request, response, next) {
  console.log("Middleware 1");
  next();
});
app.use("/about", function(request, response, next) {
  console.log("Middleware 2");
  next();
});
app.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});
app.get("/main", function(request, response){
  response.sendFile(__dirname + "/index.html");
  logger.log("File send ")
});
app.get("/wrongpage", function(request, response){
  response.sendStatus(404).send("Resource not found");
  logger.log("404 accessed");
});

// Query string: adress should be: /requeststring?id=1&name=John
app.get("/requeststring", function(request, response){
  let id = request.query.id;
  let name = request.query.name;
  response.send("<h1>YOUR QUERY STRING</h1><p>id = " + id + "</p><p>name = " + name + "</p>");
})

app.get("/contact(.html)?", function(request, response) {
  response.send("<h1>Контакты</h1>");
});
app.get(/.*(\.)html$/, function(request, response) { // regex - route to all ending in htmls
  response.send();
  console.log(request.ip);
});
app.get("/", function(request, response) { // More general routes go after rarer
  response.send("<h1>Главная страница</h1>");
  logger.log("Accessed ");
}); 

// Redirect to https://docs.microsoft.com/en-us/dotnet/core/tools/cli-msbuild-architecture
app.use("/redirect", function(request, response){
  response.redirect("https://docs.microsoft.com/en-us/dotnet/core/tools/cli-msbuild-architecture");
  logger.log("Redirected ");
});

app.listen(3000);
