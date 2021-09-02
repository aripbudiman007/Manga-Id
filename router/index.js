const router = require('express').Router()
const mangaRouter = require('./mangaRouter')

router.get('/', (req, res) => {
    res.send({"message":"Success connect to the world"})
})

router.use('/manga', mangaRouter)

module.exports = router