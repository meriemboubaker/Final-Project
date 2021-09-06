const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {type: String,required: true},
  lastName: {type: String,required: true},
  image:{
    type:String,
    required:true,
    default:"https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
},
  age: Number,

  familySituation:{
      type:String,
      enum:['single','maried','divorced']},

  email:{
      type: String,
      required:true,
    
  },

  password:{
      type:String,
      required:true

  },

  tel:Number,

  title:String,

  departement:{
      type:String,
      required:true
  },

  adress:{
      type:String,
      required:true
  },

  joinDate:{
      type:Date,
      default:Date.now
  },

  role:{
      type:String,
      enum:['employee','manager','admin'],
      required:true
    
    }


});

const User = mongoose.model('User', userSchema);

module.exports = User;

