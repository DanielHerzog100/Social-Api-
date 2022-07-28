const express =  require('express')
const thoughtController= require('../../controllers/thoughtControllers')

const router = express.Router()

router.post('/',thoughtController.addThought)
router.get('/',thoughtController.getThoughts)
router.get('/:id',thoughtController.getThought)
router.put('/:id',thoughtController.updateThought)
router.delete('/:id',thoughtController.deleteThought)




module.exports = router