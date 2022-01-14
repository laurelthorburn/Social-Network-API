const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");

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
    },
    username: {
      //don't forget to push the created thought's _id to the associated user's thoughts array field
      type: String,
      required: true,
    },
    reactions:
      //array of nested documents created with the reactionSchema
      [reactionsSchema],
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

thoughtsSchema.virtual('reactionCount').get(function() {
    return reactions.this.length;
})

const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
