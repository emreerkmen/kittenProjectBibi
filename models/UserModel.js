const mongoose = require("mongoose");
const fs = require("fs");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const passportLocalMongoose = require("passport-local-mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      lowercase: true,
      validate: [
        validator.default.isEmail,
        "Please enter a valid email address",
      ],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 4,
    },
    password: {
      type: String,
      required: [true, "Please enter password for your account"],
      minlength: [6, "Your password must be a t least 6 characters long"],
      select: false,
    },
    firstname: { type: String, trim: true, minlength: 3 },
    lastname: { type: String, trim: true, minlength: 3 },
    avatar: { data: Buffer, contentType: String },
    short_desc: { type: String, maxLength: 50 },
    description: { type: String, minlength: 150 },
    occupation: { type: String },
    score: { type: Number },
    country: { type: String },
    adverts: [{ type: Schema.ObjectId, ref: "ADVERT" }],
  },
  {
    timestamps: true,
  }
);

// Encrypting Passwords before Saving
userSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  if (user.password) {
    await bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next(err);
      });
    });
  }
});

//Compare password in database
userSchema.methods.comparePassword = async function (enterPassword) {
  try {
    return await bcrypt.compare(enterPassword.toString(), this.password);
  } catch (err) {
    return false;
  }
};

userSchema.methods.gravatar = function (size) {
  if (!size) size = 200;
  if (!this.email) return "https://gravatar.com/avatar/?s=" + size + "&d=retro";
  let md5 = crypto.createHash("md5").update(this.email).digest("hex");
  return "https://gravatar.com/avatar/" + md5 + "?s=" + size + "&d=retro";
};
userSchema.plugin(passportLocalMongoose);
const USER = mongoose.model("USER", userSchema);

// let user =new USER
// user.avatar.data = fs.readFileSync('public/images/profilpic.jpg')
// user.avatar.contentType = 'image/jpg'

module.exports = USER;
