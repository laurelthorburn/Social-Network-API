const { Schema, model, now } = require('mongoose');
const reactionsSchema = require('./Reactions');
const userSchema = require('./User');

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
            type: String,
            require: true,
        },
        reactions: 
//array of nested documents created with the reactionSchema
        [reactionsSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        // id: false,
      }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;