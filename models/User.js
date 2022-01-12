const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');
const reactionsSchema = require('./Reactions');

//Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    thoughts: [thoughtsSchema],
    friends: [this],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const User = model('user', userSchema);
module.exports = User;