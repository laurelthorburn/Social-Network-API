const { Schema, model } = require('mongoose');
const userSchema = require('./User');

//TODO: Create a virtual called reactionCount that retrieves the length of the thoughts reactions array field on query

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

//TODO: This will not be a model, but rather will be used as the reaction field's sub document schema in thr Thought model

//Schema to create a reaction, not a model, sub doc to Thought model
const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            require: true,
            maxlength: 280,
        },
        username: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(), //user a getter method to format the timestamp on query
        }
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
);



const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;