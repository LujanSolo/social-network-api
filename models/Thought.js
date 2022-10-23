const { Schema, Types } = require ('mongoose');

const thoughtSchema = new Schema (
  {
    thoughtID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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

module.exports = thoughtSchema;