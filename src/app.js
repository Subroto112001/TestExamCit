const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const app = express();
const apiVersion = process.env.BASE_URL;
// server create
const server = http.createServer(app);
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
// main route
app.use(apiVersion, require("./routes/index"));

module.exports = { server };