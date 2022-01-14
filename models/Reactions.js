
const { Schema, Types } = require('mongoose');

//TODO: Getter for date

//This will not be a model, but rather will be used as the reaction field's sub document schema in thr Thought model
//Schema to create a reaction, not a model, sub doc to Thought model
const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
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

module.exports = reactionsSchema;