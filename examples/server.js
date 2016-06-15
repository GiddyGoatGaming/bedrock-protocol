'use strict';

var pmp = require('../');
var fs = require("fs");

if(process.argv.length !=4) {
  console.log("Usage: node server.js <host> <port>");
  process.exit(1);
}

var server = pmp.createServer({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  name: 'MCPE;Minecraft: PE Server;70 70;0.14.3;0;20'
});

server.on('connection', function(client) {
  //client.on("mcpe", packet => console.log(packet));

  client.on("login", data => {
    console.log(client.displayName + '(' + client.XUID + ') ' + ' joined the game');
  });

  client.on('error', function(err) {
    console.log(err.stack);
  });

  client.on('end',function() {
    console.log("client left");
  })
});
