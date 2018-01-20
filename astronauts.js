const express = require('express'),
    bodyParser = require('body-parser');
const nomeModulo = express.Router()

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
    var astronauts = {}
    astronauts.id = uuid()
    if (req.body.firstName) astronauts.firstName = req.body.firstName
    if (req.body.lastName) astronauts.lastName = req.body.lastName
    if (req.body.isInSpace) astronauts.isInSpace = req.body.isInSpace
    arrayAstronauts.push(astronauts)
    res.status(200)
    res.json(astronauts)
  });

module.exports = nomeModulo