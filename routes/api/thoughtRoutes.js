const router = require('express').Router();

const {
  createThought,
  getThought,
  getSingleThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');


//* route to get all thoughts and create new thought
router.route('/')
  .get(getThought)
  .post(createThought);

//* route for fetching individual thought, updating/deleting that thought
router.route('/:userId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // //* route for adding and deleting friends from a user
router.route('/:userId/friends/:friendId')
.post(addReaction)
.delete(deleteReaction)

module.exports = router;
