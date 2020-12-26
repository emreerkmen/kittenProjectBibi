let express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
const adController = require('../controllers/AdvertController')

const passport = require('passport');
const {authenticate} = require('passport');
const passportConfig = require('../config/passport');
const cors = require("cors");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',cors(),function (req,res,next){
  console.log('emre');
  res.json({ greeting: 'hello API' });
})

router.get('/test',cors(),function (req,res,next){
  console.log('emre');
  res.json({ greeting: 'hello API' });
})

router.get('/create-save-user', async function (req,res,next){
  console.log(req.params)
  let createdUser = await userController.createAndSaveUser()
  res.json(createdUser)
})
/* USER ROUTE */
//router.get('/user')


/* SIGNUP ROUTE */
router.post('/signup', async function (req,res,next){
  console.log("test");
  console.log(req.body)
  let createdUser = await userController.createUser(req.body.email,req.body.username,req.body.password)
  console.log(createdUser)
  req.logIn(createdUser,function (err) {
    if (err) return next(err);
    console.log("req.logIn");
    res.redirect('/');
  })
  res.send("You are a registered user now");
})

/* LOGIN ROUTE */
router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/profile', // redirect to the secure profile section
  failureRedirect : '/profile2', // redirect back to the signup page if there is an error
  //failureFlash : true // allow flash messages
}),function (req,res){
  console.log(req);
  console.log(res);
})


/*router.post('/login', function(req, res, next) {
  console.log(req.url);
  passport.authenticate('local-login', function(err, user, info) {
      console.log("authenticate");
      console.log(err);
      console.log(user);
      console.log(req.user);
      console.log(info);
  })(req, res, next);
});*/
 
router.get('/checkauth', passportConfig.isAuthenticated, function(req, res){

  res.status(200).json({
      status: 'Login successful!',
      user : req.user
  });
});

/*router.get('/:username', function (req,res,next){
  //let user = await userController.getUserByUsername(req.params.username)
  //res.json(user)
  res.json({ greeting: 'hello API' });
})*/

/* PROFILE ROUTE */
router.get('/profile', (req, res, next) => {
  res.json({ greeting: 'login is success' });
});

/* PROFILE ROUTE */
router.get('/profile2', (req, res, next) => {
  console.log("hello");
  console.log(req.body);
  res.json({ greeting: '2hello API' });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
/* ADVERT ROUTE */
router.get('/create-ad', async function (req,res,next){
  let newGig = await adController.createAdvert()
  res.json(newGig)
})



module.exports = router;
