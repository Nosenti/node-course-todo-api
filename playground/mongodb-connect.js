//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if (err){
  //     return console.log('unable to insert to do',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  // db.collection('Users').insertOne({
  //
  //   name: 'Nosenti',
  //   age: 21,
  //   location: 'Kacyiru'
  // },(err,result) => {
  //   if(err){
  //     return console.log('unable to insert to Users',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});