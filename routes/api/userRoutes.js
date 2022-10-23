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

//todo bonus: remove a user's thoughts when deleted
//* route to get all users and create new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// //* route for fetching individual user, updating/deleting that user
// router.route('/:userId')
//   .get(getSingleUser)
//   .update(updateUser) //*add to userController functions
//   .delete(deleteUser); //*add to userController functions

// //* route for adding and deleting friends from a user
// router.route('/:userId/friends/:friendId')
//   .post(addFriend) //*add to userController functions
//   .delete(deleteFriend)  //*add to userController functions

module.exports = router;
