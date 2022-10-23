const mongoose = require ('mongoose');


//* 'reaction' subdocument to be embedded into the parent -> Thought document
const reactionSchema = new mongoose.Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      maxLength: 280,
      required: true,
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

const thoughtSchema = new mongoose.Schema (
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

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;