const USER = require("../models/UserModel");
const passport = require("passport");
const passportConfig = require("../config/passport");

module.exports = {
  getUser: async (id, done) => {
    await USER.findById(id, function (err, data) {
      if (err) return console.log(err);
      done(null, data);
    });
  },
  getUserByUsername: async (username) => {
    await USER.find({ username: username }, function (err, data) {
      if (err) {
        return console.log(err);
      } else {
        //console.log("data: " + data)
        return data;
      }
    });
  },
  createUser: async (email, username, password) => {
    const user = USER({
      email: email,
      username: username,
      password: password,
    });
    try {
      return await user.save();
    } catch (error) {
      throw error;
    }
  },
  createAndSaveUser: async (done) => {
    const ozge = USER({
      email: "ozgenuronec@gmail.com",
      username: "ozgeonec",
      password: "112233",
      firstname: "Ozge",
      lastname: "Onec",
      avatar:
        "https://www.google.com.tr/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_font_awesome.svg&psig=AOvVaw2iw8bxfnCMStn_mnE-rgWA&ust=1607517021180000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIip29qxvu0CFQAAAAAdAAAAABAD",
      short_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel nibh dolor. Nulla at laoreet libero, in molestie ex. Duis molestie sollicitudin efficitur. Donec justo magna, vestibulum eget nulla quis, lobortis faucibus quam. Nulla facilisi. Mauris pretium, est sed tristique ultricies, metus risus pretium erat, eu egestas risus justo a erat. Vivamus a risus nec orci mattis rutrum. Etiam eleifend elit sed imperdiet lobortis. Donec lectus leo, laoreet ut turpis id, cursus viverra ipsum. Etiam condimentum, diam non maximus pharetra, erat nunc blandit velit, ut fermentum nulla massa sit amet nisl. Mauris nec rutrum velit. Praesent cursus felis id ligula accumsan blandit. Aliquam placerat nibh vitae accumsan consequat. Nulla facilisi. Nam ultricies purus neque, eget accumsan magna porttitor mollis.",
      occupation: "Developer",
      country: "Turkey",
    });
    await ozge.save(function (err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
    return ozge;
  },
};
