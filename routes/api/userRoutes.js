const express =  require('express')
const userController= require('../../controllers/userControllers')

const router = express.Router()

router.post('/',userController.addUser)
router.get('/',userController.getUsers)
router.get('/:id',userController.getUser)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

router.post('/:userId/friends/:friendId', userController.addFriend)
router.delete('/:userId/friends/:friendId', userController.deleteFriend)


module.exports = router