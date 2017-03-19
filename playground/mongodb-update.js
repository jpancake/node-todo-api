// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58cb74b1d0ba0a40eddea4bf')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(res => {
  //   console.log(res)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58cb6f83d0ba0a40eddea346')
  }, {
    $set: {
      name: 'Justin'
    },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then(res => {
    console.log(res)
  })

  // db.close()
})
