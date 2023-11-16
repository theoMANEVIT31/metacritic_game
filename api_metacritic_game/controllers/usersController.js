const   express = require('express'),
        router = express.Router()

const usersService = require('../services/usersService')

router.get('/', async (req, res) => {
    const users = await usersService.getUsers()
    res.json({success: true, data: users})
})

router.get('/:id', (req, res) => {
    const user = usersService.getUserById(req.params.id)
    if(user){
        res.json({success: true, data: user})
    } else {
        res.status(404).json({success: false, message: 'User not found for this id'})
    }
})

// router.post('/', (req, res) => {
    
// })