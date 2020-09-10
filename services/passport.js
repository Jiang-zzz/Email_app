const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

// serializeUser: user to cookie
// deserializeUser: cookie to user
//the "user" is a mongoose model from done() in passport.use()
// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
// https://hackernoon.com/passportjs-the-confusing-parts-explained-edca874ebead
passport.serializeUser((user, done) => {
  // user.id is mongodb generated id (like primary key)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
// https://stackoverflow.com/questions/32153865/what-is-done-callback-function-in-passport-strategy-configure-use-function
// https://github.com/jaredhanson/passport-local/blob/master/lib/strategy.js#L80
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      // heroku deployment uses proxy which is not trusted by google oauth in default setting
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
      // console.log("access token: ", accessToken);
      // console.log("refresh token: ", refreshToken);
      // console.log("profile", profile);
    }
  )
);
