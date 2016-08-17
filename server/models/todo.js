const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now }
});

todoSchema.statics.toggle = function(id, cb) {
  // this === Todo model
  this.findById(id, (err, todo) => {
    if(err) return cb(err);

    todo.isComplete = !todo.isComplete;
    todo.save(cb);
  })
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
