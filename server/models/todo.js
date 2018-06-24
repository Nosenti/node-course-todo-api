var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var otherTodo = new Todo({
//   text:'Edit this video',
//   completed:true,
//   completedAt: 78
// })
//
//
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save todo ')
// });
