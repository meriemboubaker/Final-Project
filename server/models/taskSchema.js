const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({

name :{
    type:String,
    required:true

},
description:{
    type:String,
    required:false
},
startDate:{
    type:Date,
    required:true
},
deadline:{
type:Date,
required:true

},
state:{
type:String,
enum:['ended','In progress','valid'],
required:true
},

project:{
    type:Schema.Types.ObjectId,
    ref:'Project',
    required:true
},

owner:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
}



})

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;