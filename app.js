const Logger = require("./logger.js");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");
const Repository = require("./server/repository");
const repository = new Repository();
const TestRepository = require("./server/mongooseRepository");
const testRepository = new TestRepository();

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.use(function(request, response, next) {
  // console.log("Middleware 1");
  next();
});
app.use("/about", function(request, response, next) {
  console.log("Middleware 2");
  next();
});
app.get("/about", function(request, response) {
  response.send("<h1>О сайте</h1>");
});
app.get("/main", function(request, response) {
  response.sendFile(__dirname + "/dist/index.html");
  // logger.log("File send ");
  let testsCollection = testRepository.ReadAll().then(function(value) {
    console.log("VALUE: " + value);
  });
});
app.get("/tests", function(request, response) {
  let testsCollection = testRepository.ReadAll().then(function(value) {
    response.send(value);
  });
});

app.get("/test/:name", function(request, response) {
  var testName = request.params.name; // not sure is this will work correctly
  let collection = testRepository.ReadTests().then(function(value) {
    response.send(value);
  });
});

app.get("/wrongpage", function(request, response) {
  response.sendStatus(404).send("Resource not found");
  logger.log("404 accessed");
});

// Query string: adress should be: /requeststring?id=1&name=John
app.get("/requeststring", function(request, response) {
  let id = request.query.id;
  let name = request.query.name;
  response.send(
    "<h1>YOUR QUERY STRING</h1><p>id = " + id + "</p><p>name = " + name + "</p>"
  );
});

app.get("/contact(.html)?", function(request, response) {
  response.send("<h1>Contacts</h1>");
});
app.get(/.*(\.)html$/, function(request, response) {
  // regex - route to all ending in htmls
  response.send();
  console.log(request.ip);
});
app.get("/", function(request, response) {
  // More general routes go after rarer
  response.send("<h1>Main page</h1>");
  logger.log("Accessed ");
});

// Redirect to https://docs.microsoft.com/en-us/dotnet/core/tools/cli-msbuild-architecture
app.use("/redirect", function(request, response) {
  response.redirect(
    "https://docs.microsoft.com/en-us/dotnet/core/tools/cli-msbuild-architecture"
  );
  logger.log("Redirected ");
});

app.listen(3000);
