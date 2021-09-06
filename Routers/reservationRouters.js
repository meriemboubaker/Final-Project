const express = require('express')
const router = express.Router()
const {getreservations} = require('../Controllers/reservationController')
const {addreservations} = require('../Controllers/reservationAddController.js')
const {getsalles} = require('../Controllers/getsallesController.js')
router.get('/getreservations',getreservations)
router.post('/addreservations',addreservations)
router.get('/getsalles',getsalles)
module.exports = router
