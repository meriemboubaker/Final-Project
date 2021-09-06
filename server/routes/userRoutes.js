const express = require ('express');
const{registerController,loginController,afficheController,updateUserController,deleteUserController }= require ('../controllers/userController');
const router = express.Router();
const {body}=require ('express-validator');
const authMiddleware = require ('../middleware/authMiddleware')

router.post('/register',
body('email','invalid email').isEmail(),
body('password','password must have min 6 characters').isLength({min:6}),
registerController);


router.post('/login',loginController);

router.get('/listUsers',authMiddleware,afficheController)

router.put('/updateUser/:id',authMiddleware,updateUserController)

router.delete('/deleteUser/:id',authMiddleware ,deleteUserController)


module.exports = router;