require('dotenv').config({path:'../Config/.env'})
const User = require('../Models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const adduser= async (req,res)=>{
    try{
        const {Firstname,Lastname,age,email,password,role,FamilySituation,tel}=req.body
        const existUser = await User.findOne({email})
          
        if(existUser){
            return res.status(400).json({msg:'already exist'})

        }
        
           const hashedPassword = await bcrypt.hash(password,10)
           const addUser = await User.create({Firstname,Lastname,age,email,password:hashedPassword,role,FamilySituation,tel})
           const token = await jwt.sign(
            { email: addUser.email, id: addUser._id },
            process.env.SECRET_KEY,
            { expiresIn: '30d' }
          );
          res.json({ user: addUser, token });
        } catch (error) {
          res.status(500).json({ message: error });
        }
      };
       
    
    module.exports={adduser}
    