//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b2fb81c5edd74af1a90eae5')
  // }, {
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2f97ef0a52e8237010ae6e')
  }, {
    $set:{
      name: 'Nosenti'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


//  db.close();
});
