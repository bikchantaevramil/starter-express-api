const express = require("express");
const bodyParser = require('body-parser');

const mysql = require("mysql2");
const mysql_promise = require('mysql2/promise');

const bcrypt = require("bcryptjs");

// создаем объект приложения
const app = express();
const fs = require("fs");
const { readdir } = require("fs").promises;

var cors = require('cors')

const path = require('path');
const { resolve } = require('path');
var buffer = require('buffer').Buffer;

const PORT = 8008;
const http = require('http');
const server = http.createServer(app);




app.get("/spravochniki", async function (request, response) {
  try {

    results = [
      { id: 1,
        name:"Ramil" },

    ];

    //console.log(results);
    response.status(200);
    response.json(
      {
        data: results,
      });
  }
  catch (error) {
    console.log(error);
  }

});


server.listen(PORT,()=>{
console.log('server in run:' + PORT)});