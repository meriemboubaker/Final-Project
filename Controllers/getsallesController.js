
const Salle = require('../Models/salleSchema')
const getsalles= async (req,res)=>{
    try{
        const salle = await Salle.find()
        if(!salle) {
            res.status(500).json({success: false});
          }
          res.send(salle);
      
      }

    catch(error){
console.error(error)
    }
    

}
module.exports={getsalles}