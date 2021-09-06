
const Reservation = require('../Models/reservationSchema')
const getreservations= async (req,res)=>{
    try{
        const reservation = await Reservation.find()
        if(!reservation) {
            res.status(500).json({success: false});
          }
          res.send(reservation);
      
      }

    catch(error){
console.error(error)
    }
    

}
module.exports={getreservations}