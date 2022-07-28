const user = require("../models/User");

async function addUser(req, res) {
  const newUser = await user.create(req.body);
  res.json(newUser);
}

async function getUsers(req, res) {
  const allUsers = await user.find({});
  res.json(allUsers);
}

async function getUser(req, res) {
  const foundUser = await user.findById(req.params.id).populate('friends');
  res.json(foundUser);
}

async function updateUser(req, res) {
  await user.findByIdAndUpdate(req.params.id, req.body);
  const updatedUser = await user.findById(req.params.id);
  res.json(updatedUser);
}

async function deleteUser(req, res) {
  const deletedUser = await user.findById(req.params.id);
  await user.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
}

async function addFriend(req, res) {
  const { userId, friendId } = req.params;
  await user.findByIdAndUpdate(userId, {
    $push: {
      friends: friendId,
    },
  });
  const updatedUser = await user.findById(userId);
  res.json(updatedUser);
}

async function deleteFriend(req,res){
    const { userId, friendId } = req.params;
  await user.findByIdAndUpdate(userId, {
    $pull: {
      friends: friendId,
    },
  });
  const updatedUser = await user.findById(userId);
  res.json(updatedUser);
}

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
};
