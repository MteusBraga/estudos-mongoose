const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')


route.get('/', (req, res, next) =>{ 
    console.log('passando pelo middleware') 
    next()
},homeController.paginaInicial)


module.exports = route