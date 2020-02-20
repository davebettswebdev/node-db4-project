const express = require('express');

const RecipeRouter = require('./recipes/router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send('Recipe API is running!');
  });
  
  server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
      message: 'Something went wrong'
    })
  })

module.exports = server;