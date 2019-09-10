const Logger = require("./logger.js");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");

const express = require("express");

const app = express();
app.use(function(request, response, next) {
  console.log("Middleware 1");
  next();
});
app.use("/about", function(request, response, next) {
  console.log("Middleware 2");
  next();
});
app.get("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
  logger.log("Accessed ");
});
app.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});
app.get("/contact(.html)?", function(request, response) {
  response.send("<h1>Контакты</h1>");
});
app.get(/.*(\.)html$/, function(request, response) {
  response.send();
  console.log(request.ip);
});
app.listen(3000);
