const mongoose = require('mongoose')
const User = require ('./userSchema')
const Schema= mongoose.Schema
const reservationSchema = new Schema ({
    salleId: Schema.Types.ObjectId,
    userId:{
        type:Schema.Types.ObjectId,
        ref: 'user'
    },
    created_at:{
        type:Date,
        default:Date.now()
    }})

const Reservation = mongoose.model ('reservtion',reservationSchema);
module.exports= Reservation;