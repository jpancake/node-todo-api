const { ObjectID } = require('mongoose')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// // Todo.remove()
//
// Todo.remove({}).then(result => {
//   console.log(result)
// })
//
//
// // Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '58cf42ade174e468b70e4113'}).then(todo => {
//   console.log(todo)
// })
//
// // Todo.findByIdAndRemove
// Todo.findByIdAndRemove('58cf42ade174e468b70e4113').then(todo => {
//   console.log(todo)
// })