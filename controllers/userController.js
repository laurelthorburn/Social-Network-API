const { User, Thoughts } = require('../models');

// --------------------------------------
// /api/users
module.exports = {
//GET ALL users
    getUsers(req, res) {
        User.find({})
        //populate user thoughts
        .populate('thoughts')
        //populate user friends
        .populate('friends')
        .select('-__v')
        .then(async (users) => {
            const userObj = {
                users,
                //do i need total of users here? if so, userCount: await userCount(),
            };
            return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
//GET a singe user by its _id and populated thought and friend data
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId})
            //populate user thoughts
            .populate({path: 'thoughts', select: '-__v'})
            //populate user friends
            .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(async (user) =>
        !user
        ? res.status(404).json({ message: 'No user with that ID, sorry mate' })
        : res.json({
            user,
        })
    )
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},
//POST a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
//PUT to update to update by _id
    updateUser(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.json(404).json({ message: "No user with this ID, feel free to create one instead" })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
//DELETE by _id
    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user like this exists' })
//BONUS: Remove a user's associated thoughts when deleted.
        : Thoughts.findOneAndUpdate(
            { users: req.params.userId },
            { $pull: {users: req.params.userId } },
            { multi: true} //if reference exists in multiple documents
        )
    )
    .then((thought) =>
    !thought
        ? res.status(404).json({ message: 'User was successfully deleted, user did not have any thoughts to delete.  Thank you for making my job just a little bit easier.' })
    : res.json({ message: 'User was deleted, nice job!' })
    )
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
    });
    },
    // --------------------------------------
// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
addFriend(req, res) {
    console.log('You just made a friend, lucky you!');
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true}
    )
    .then((user) =>
    !user
    ? res.status(404).json({ message: 'No student found with that ID, sorry mate.' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
// DELETE to remove a friend from a user's friend list
    removeFriend(req,res) {
        console.log("Darn man, I'm so sorry you lost a friend!");
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user found with that ID' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};
