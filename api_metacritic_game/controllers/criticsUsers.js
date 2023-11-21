const express = require('express'),
      router = express.Router();

const criticsUsersService = require('../services/criticsUsers');

router.get('/', async (req, res) => {
   const criticsUsers = await criticsUsersService.getCriticsUsers();
   res.json({success: true, data: criticsUsers});
});

router.post('/', (req, res) => {
   try {
    criticsUsersService.addCriticsUsers(req.body.idR, req.body.idU, req.body.description);
      res.status(201).json({success: true, message: `CriticsUser has been added`});
   } catch (e) {
      res.status(400).json({success: false, message: 'CriticsUser has not been added', error: e.message});
   }
});

/*
router.put('/:idU/:idR', (req, res) => {
    criticsUsersService.putCriticsUserById(req.params.idR, req.params.idU);
    res.json({success: true, message: 'CriticsUser has been modified'});
 });
*/

router.delete('/:idU/:idR', (req, res) => {
   criticsUsersService.deleteCriticsUserById(req.params.idR, req.params.idU);
   res.json({success: true, message: 'CriticsUser has been deleted'});
});

router.get('/:idU/:idR', (req, res) => {
    const criticsUser = criticsUsersService.getCriticsUserById(req.params.idR, req.params.idU);
    if (criticsUser) {
       res.json({success: true, data: criticsUser});
    } else {
       res.status(404).json({success: false, message: 'CriticsUser not found for this id'});
    }
 });

module.exports = router;