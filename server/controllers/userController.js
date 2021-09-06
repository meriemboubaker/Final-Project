const User = require ('../models/userSchema');
const bcrypt = require ('bcryptjs')
const {validationResult}=require ('express-validator')
const jwt = require('jsonwebtoken')
const registerController = async(req,res)=>{
try {
const errors = validationResult(req);
if(!errors.isEmpty()){
res.status(400).json({errors:errors.mapped()})

}

    const {firstName,lastName,image,age,familysituation,email,password,tel,title,departement,adress,joinDate,role} = req.body;
    const existUser = await User.findOne({email});
    if(existUser){
        res.status(401).json({msg:'user already exist'})
    }
    const hashedPassword = await bcrypt.hash(password,10) ;
    const newUser = await User.create({firstName,lastName,image,age,familysituation,email,password:hashedPassword,tel,title,departement,adress,joinDate,role})
   const token = jwt.sign({id:newUser._id, email:newUser.email},process.env.SECRET_KEY,{expiresIn:'30d'})
   
    res.json({user:newUser,token});
    

} 

catch (error) {
    console.log(error)
}


}

const loginController = async (req,res)=>{
    try {
        const {email,password}= req.body;
        const existUser = await User.findOne({email});
        if (!existUser)res.status(400).json({message:'you must register first!'})
        
        const validatePassword = await bcrypt.compare(password,existUser.password)
        if (!validatePassword)res.status(400).json({message:'wrong password ! try again!'})
        const token = jwt.sign({id:existUser._id, email:existUser.email},process.env.SECRET_KEY) 
        res.json({user:existUser,token})

    } catch (error) {
        
    res.status(500).json({message:error})
        
    }
}

const afficheController = async (req,res)=>  {
    try {
        
          const listUsers= await  User.find();
          res.status(200).json(listUsers)
           
    } catch (error) {
        res.status(500).json({message:error})
    }


}

const updateUserController = async (req,res)=>{
try {
   const newUser= await User.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json(newUser)
    
} catch (error) {
    
}
res.status(500).json({message:error})

}

const deleteUserController = async (req,res)=>{
try {
   const userDeleted =await User.findByIdAndDelete(req.params.id);
   res.status(200).json(userDeleted)
    
} catch (error) {
    res.status(500).json({message:error}) 
}

}

module.exports = {registerController,loginController,afficheController,updateUserController,deleteUserController }