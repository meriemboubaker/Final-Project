const express = require('express')
const authmiddleware = require('../middlewares/authmiddleware')
const router = express.Router()
const {adduser} = require('../Controllers/addUserController')
const {loginController} = require('../Controllers/LoginController')
router.post('/registeruser',authmiddleware,adduser)
router.post('/login',loginController)
module.exports = router
