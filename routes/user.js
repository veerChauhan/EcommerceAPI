const router = require('express').Router()
router.get('/',(req, res) => {
    console.log('User router is tyested')
    res.send({
        message :"Hello User"
    })
})

module.exports = router