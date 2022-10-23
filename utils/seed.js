const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', async () => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    
  }
})









console.table(users);
