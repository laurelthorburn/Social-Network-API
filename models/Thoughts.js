const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");
const moment = require('moment');

//Schema to create a thought model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(), //user getter method to format the timestamp on query
      get: (timeVal) => moment(timeVal).format('MM/DD/YYYY [at] hh:mm a')
    },
    username: {
      //don't forget to push the created thought's _id to the associated user's thoughts array field
      type: String,
      required: true,
    },
    //array of nested documents created with the reactionSchema
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//Create a virtual called reactionCount that retrieves the length of the thoughts reactions array field on query

// thoughtsSchema.virtual('reactionCount', function() {
//     return reactions.this.length;
// })

thoughtsSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});

const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
