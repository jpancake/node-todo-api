const { ObjectID } = require('mongoose')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// const id = '58cdf044156e4434a467bc78'
//
// if (!objectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   completed: false
// }).then(todo => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By Id', todo)
// }).catch(e => { console.log(e) })

const id = '58ccb75f9f269c49c87fa4ba'

User.findById(id).then(user => {
  if (!user) {
    return console.log('Id not found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch(e => { console.log(e) })
