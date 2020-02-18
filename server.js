// import path from 'path';
const express = require('express');
const Server = require('boardgame.io/server').Server;
const HSclone = require('./src/lib/game').HSclone;

// const INDEX = '/index.html';

const PORT = process.env.PORT || 3000;
const server = Server({ games: [HSclone] });

// const { app } = server;
// const root = path.join(__dirname, './build');

// app.use(serve(root));

process.env.NODE_ENV === 'development'
  ? server.run(PORT)
  : server.run({ port: 8000 });
