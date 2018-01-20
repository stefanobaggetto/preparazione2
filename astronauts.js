const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4'); //crea id univoci

const arrayAstronauts = [] //array di oggetti

//presentazione
astronauts.route('/')
  .get((req, res) => {
    res.status(200)
    res.json({message: 'Welcome to the API'})
  });

astronauts.route('/astronauts')
  //get di tutto l'array
    .get((req, res) => {
    res.status(200)
    res.json(arrayAstronauts)
  })
//posta un elemento
  .post((req, res) => {
    var astronaut = {}
    astronaut.id = uuid()
    if (req.body.firstName) astronaut.firstName = req.body.firstName
    if (req.body.lastName) astronaut.lastName = req.body.lastName
    if (req.body.isInSpace) {
      astronaut.isInSpace = true
    } else {
      astronaut.isInSpace = false
    }
    arrayAstronauts.push(astronaut)
    res.status(200)
    res.json(astronaut)
  });

module.exports = astronauts