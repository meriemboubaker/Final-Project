
const mongoose = require('mongoose')
const Schema= mongoose.Schema
const salleSchema = new Schema ({
    reservationId: Schema.Types.ObjectId,
    nSalle:Number,
    capacity:Number})

const Salle = mongoose.model ('salle',salleSchema);
module.exports= Salle;