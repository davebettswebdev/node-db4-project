const express = require('express');

const RecipeRouter = require('./recipes/router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send('<h1>Recipe API is running!<h1');
  });
  
  server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
      message: 'Unable to launch!'
    })
  })

module.exports = server;