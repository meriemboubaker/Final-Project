const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../Config/.env'})
const authmiddleware = async(req,res,next)=>{
    try{
        const token = req.header('token')
        const verifiedToken = jwt.verify (token ,process.env.SECRET_KEY)
        if(!verifiedToken){
            res.status(401).json({msg:'you are not authorised'})
        }
        next()
    }
    catch(error){
        console.error('authentification error')
    }

}
module.exports=authmiddleware