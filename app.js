const Logger = require("./logger.js");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");

const express = require("express");

const app = express();
app.get("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
  logger.log("Accessed ");
});
app.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response) {
  response.send("<h1>Контакты</h1>");
});
app.listen(3000);
