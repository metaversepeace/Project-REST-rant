//This controller page contains the rest of our site's routes
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('These are places')
})

module.exports = router