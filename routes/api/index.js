const express =  require('express')
const userRouter = require('./userRoutes')
const thoughtsRouter = require('./thoughtsRoutes')

const router = express.Router()

router.use("/user",userRouter)
router.use("/thoughts",thoughtsRouter)

module.exports = router;