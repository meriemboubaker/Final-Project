const mongoose = require('mongoose')
const User = require ('./userSchema')
const Schema= mongoose.Schema
const reservationSchema = new Schema ({
    salleId: Schema.Types.ObjectId,
    userId:{
        type:Schema.Types.ObjectId,
        ref: 'user'
    }},{timestamps:true})

const Reservation = mongoose.model ('reservtion',reservationSchema);
module.exports= Reservation;