const { Schema, model } = require ('mongoose');

// 'Reaction' subdocument to be embedded into the parent -> Thought document
const reactionSchema = new Schema (
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

// parent document 'Thought'
const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  },
);

// a virtual called 'reactionCount' that retrieves length of thought's reactions array field on query
thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length;
  });

// build an instance of our 'thought' model based on the schema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;