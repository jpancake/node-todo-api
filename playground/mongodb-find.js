// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('58cb5b4363f10434700e4db6')
  // }).toArray().then(docs => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, err => {
  //   console.log('Unable to fetch todos', err)
  // })

  db.collection('Users').find({name: 'Justin Razon'}).count().then(count => {
    console.log('Users')
    console.log(`Users count: ${count}`)
  }, err => {
    console.log('Unable to fetch todos', err)
  })

  // db.close()
})
