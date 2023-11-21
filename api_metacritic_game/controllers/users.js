const express = require('express'),
      router = express.Router();

const usersService = require('../services/users');

router.get('/', async (req, res) => {
   const users = await usersService.getUsers();
   res.json({success: true, data: users});
});

router.post('/', (req, res) => {
   try {
      usersService.addUsers(req.body.idU, req.body.name);
      res.status(201).json({success: true, message: `User has been added`});
   } catch (e) {
      res.status(400).json({success: false, message: 'User has not been added', error: e.message});
   }
});

/*
router.put('/:idU', (req, res) => {
    usersService.putUserById(req.params.idU);
    res.json({success: true, message: 'User has been modified'});
 });

router.delete('/:idU', (req, res) => {
   usersService.deleteUserById(req.params.idU);
   res.json({success: true, message: 'User has been deleted'});
});
*/

router.get('/:idU', (req, res) => {
    const user = usersService.getUserById(req.params.idU);
    if (user) {
       res.json({success: true, data: user});
    } else {
       res.status(404).json({success: false, message: 'User not found for this id'});
    }
 });

module.exports = router;