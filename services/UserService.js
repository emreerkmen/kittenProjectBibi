let User = require('../models/UserModel');
let mongoose = require('mongoose');
let multer = require('multer');
let fs = require('fs');




// const createAndSaveUser = (done) => {
//     let ozge = new User({
//     firstname:"Ozge",
//     lastname:"Onec",
//     username:"ozgeonec",
//     short_desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel nibh dolor. Nulla at laoreet libero, in molestie ex. Duis molestie sollicitudin efficitur. Donec justo magna, vestibulum eget nulla quis, lobortis faucibus quam. Nulla facilisi. Mauris pretium, est sed tristique ultricies, metus risus pretium erat, eu egestas risus justo a erat. Vivamus a risus nec orci mattis rutrum. Etiam eleifend elit sed imperdiet lobortis. Donec lectus leo, laoreet ut turpis id, cursus viverra ipsum. Etiam condimentum, diam non maximus pharetra, erat nunc blandit velit, ut fermentum nulla massa sit amet nisl. Mauris nec rutrum velit. Praesent cursus felis id ligula accumsan blandit. Aliquam placerat nibh vitae accumsan consequat. Nulla facilisi. Nam ultricies purus neque, eget accumsan magna porttitor mollis.",
//     occupation: "Developer",
//     country:"Turkey"
//   });
//     ozge.save(function(err, data) {
//         if (err) return console.error(err);
//         done(null, data)
//     });
// };


//exports.createAndSaveUser = createAndSaveUser;