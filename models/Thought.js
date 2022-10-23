const { Schema, model } = require ('mongoose');


//* 'reaction' subdocument to be embedded into the parent -> Thought document
const reactionSchema = new Schema (
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
  }
)

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