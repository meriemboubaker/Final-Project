const express = require('express')
const router = express.Router()
const {adduser} = require('../Controllers/addUserController')
const {loginController} = require('../Controllers/LoginController')
router.post('/registeruser',adduser)
router.post('/login',loginController)
module.exports = router
