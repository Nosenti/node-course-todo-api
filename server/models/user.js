var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

module.exports = {User}

// var newUser = new User({
//   email:'nosenti@gmail.com   '
//   })
//
//   newUser.save().then((doc)=>{
//     console.log('User is saved',doc)
//   },(e)=>{
//     console.log('newUser could not be saved',e)
//   });
