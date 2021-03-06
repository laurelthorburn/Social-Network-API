const { User, Thoughts } = require("../models");

module.exports = {
  // /api/thoughts
  // GET to get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      //populate thought reactions
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // GET to get a single thought by its _id
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      //populate thought reactions
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID, drat" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id.toString() } },
          { new: true }
        ).then((updatedUser) => {
            res.json(updatedUser);
        })
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      //populate thought reactions
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res
              .json(404)
              .json({
                message:
                  "No thought with this ID, go spend some time thinking...",
              })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to remove a thought by its _id
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought like this exists" })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: "No more thinking for you." }))
      .catch((err) => res.status(500).json(err));
  },
  // /api/thoughts/:thoughtId/reactions
  // POST to create a reaction stored in a single thought's reactions array field
  addReaction(req, res) {
    console.log("Calm down, no need to over react...");
    console.log(req.body);
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      //populate thought reactions
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought found with this ID, sorry friend" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    console.log("Adios reaction");
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
