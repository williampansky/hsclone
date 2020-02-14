// src/server.js
const Server = require('boardgame.io/server').Server;
const HSclone = require('./lib/game').HSclone;
const server = Server({ games: [HSclone] });
server.run(8000);
