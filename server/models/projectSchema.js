const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
 
    name:{
     type:String,
     required:true
 },
 description:String,
 startDate:{
     type:Date,
     required:true
 },
 deadLine:{
     type:Date,
     required:true
 },
 state:{
     type:String,
     required:true
 },

 owner:{
    type: Schema.Types.ObjectId,
    ref:'User',
    required:true}

 




});
const Project = mongoose.model('Project',projectSchema);
module.exports= Project;
