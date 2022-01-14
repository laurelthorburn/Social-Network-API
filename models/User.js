const { Schema, model } = require('mongoose');

const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

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
        validate: [validateEmail, 'Please enter a valid email address'],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thoughts'}], //array of _id values reference the Thought model, used to have [thoughtsSchema]
    friends:  [{ type: Schema.Types.ObjectId, ref: 'User'}], //should this be User or Users
     //array of _id values referencing the User model (self-reference)
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


//Create a virtual called friendCount that retrieves the length of the user's friends array field on query

userSchema.virtual('friendCount', function(){
  return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;