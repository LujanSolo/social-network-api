const User = require('../models/User');

module.exports = {
  
  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //get a single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user  
          ? res.status(404).json({ message: 'No user with this id...' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((user =>
      !user
        ? res.status(404).json({ message: 'No such user exists' })
        : Thought.deleteMany({ _id: { $in: user.thoughts } })
    )
    .then(() => res.json({ message: 'User and their thoughts - deleted!' }))
    .catch((err) => res.status(500).json(err));
  },


};

//todo Add delete, update, etc based on routes