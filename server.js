// var express = require("express");
import express from "express";
var app = express();

var hostname = "localhost";
var port = 1998;

app.get("/helloworld", (req, res)=>{
    res.send("<h1>Hello cac ban</h1>");
});

app.listen(port, hostname, ()=>{
    console.log('Running....');
});
