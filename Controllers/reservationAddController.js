const Reservation = require('../Models/reservationSchema')

const addreservations= async (req,res)=>{
    try{
        const{salleId,userId}=req.body
        const newReservation = new Reservation({
            salleId,
            userId
          });
          await newReservation.save()
        
        if(!newReservation) {
            res.status(500).json({success: false});
          }
          res.send(newReservation);
      
      }

    catch(error){
console.error(error)
    }
    

}
module.exports={addreservations}