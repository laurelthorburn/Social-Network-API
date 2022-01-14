
const { Schema, Types } = require('mongoose');
const moment = require('moment');

//TODO: Getter for date

//This will not be a model, but rather will be used as the reaction field's sub document schema in thr Thought model
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
            get: (timeVal) => moment(timeVal).format('MM/DD/YYYY [at] hh:mm a')
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