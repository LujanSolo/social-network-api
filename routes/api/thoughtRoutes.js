const router = require('express').Router();

const {
  createThought,
  getThought,
  getSingleThought,
  deleteThought,
  updateThought,
} = require('../../controllers/userController.js');


//* route to get all thoughts and create new thought
router.route('/')
  .get(getThought)
  .post(createThought);

//* route for fetching individual thought, updating/deleting that thought
router.route('/:userId')
  .get(getSingleThought)
  .update(updateThought) //*add to userController functions
  .delete(deleteThought); //*add to userController functions

module.exports = router;
