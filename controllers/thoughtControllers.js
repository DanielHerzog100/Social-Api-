const thought=require('../models/thoughts');

async function addThought(req, res) {
    const newThought = await thought.create(req.body);
    res.json(newUser);
  }
  
  async function getThoughts(req, res) {
    const allThoughts = await thought.find({});
    res.json(allThoughts);
  }
  
  async function getThought(req, res) {
    const foundThought = await thought.findById(req.params.id).populate('friends');
    res.json(foundThought);
  }
  
  async function updateThought(req, res) {
    await thought.findByIdAndUpdate(req.params.id, req.body);
    const updatedThought = await thought.findById(req.params.id);
    res.json(updatedThought);
  }
  
  async function deleteThought(req, res) {
    const deletedThought = await thought.findById(req.params.id);
    await thought.findByIdAndDelete(req.params.id);
    res.json(deletedThought);
  }

module.exports={
    addThought,
    getThoughts,
    getThought,
    updateThought,
    deleteThought

}