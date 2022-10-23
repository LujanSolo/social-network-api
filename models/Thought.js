const { Schema, model } = require ('mongoose');

const thoughtSchema = new Schema (
  {
    thoughtText: {
      maxLength: 280,
      required: true,
      thoughtText: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;