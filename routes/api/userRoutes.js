const router = require('express').Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// route to get all users and create new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// route for fetching individual user, updating/deleting that user
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// route for adding and deleting friends from a user
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

module.exports = router;
