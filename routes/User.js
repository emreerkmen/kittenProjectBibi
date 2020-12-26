const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
let USER = require('../models/UserModel');

// function (err,data){
//   if (err) {return next(err);}
//   if (!data) {
//     return next({ message: "Missing callback argument" });
//   }
//   USER.findById(data._id, function (err, user) {
//     if (err) {return next(err);}
//     res.json(user);
//     //user.remove();
//   })
// }
/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  const user = await userController.getUser(req.params.id)
  res.send(user);
});

router.get('/create-save-user',  function (req,res,next){
  let createdUser = userController.createAndSaveUser()
  res.json(createdUser)
})
router.get('/home',function (req,res,next){
  res.json({ greeting: 'hello API' });
})
module.exports = router;
