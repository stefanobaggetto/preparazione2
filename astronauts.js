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
    /* //semplice semplice
    .get((req, res) => {
    res.status(200)
    res.json(arrayAstronauts)
  })
*/

.get((req, res) => {
    var lastName = ''
    if (req.query.lastName) {
      lastName = req.query.lastName
      var checklastName = function (astronaut){
        return astronaut.lastName == lastName
      }
      var array = arrayAstronauts.filter(checklastName, lastName)
      res.json(array)
    }
    else {
      res.status(200)
      res.json(arrayAstronauts)
    }
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


astronauts.route('/astronauts/:id')
  .get((req, res) => {
    var id = req.params.id
    const i = arrayAstronauts.findIndex(item => {return item.id === id})
    if (i==-1) res.sendStatus(404)
    else{
      res.status(200)
      res.json(arrayAstronauts[i])
    }
  })

.put((req, res) => {
    var id = req.params.id
    const i = arrayAstronauts.findIndex(item => {return item.id === id})
    if (i==-1) res.sendStatus(404) //elemento non trovato
    else {
        if (req.body.firstName) arrayAstronauts[i].firstName = req.body.firstName
        if (req.body.lastName) arrayAstronauts[i].lastName = req.body.lastName
        if (req.body.isInSpace) {
          arrayAstronauts[i].isInSpace = true
        } else {
        arrayAstronauts[i].isInSpace = false
        }
        res.status(200)
        res.json(arrayAstronauts[i])
    }
  })  
module.exports = astronauts

