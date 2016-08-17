const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
