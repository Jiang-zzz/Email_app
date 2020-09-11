const passport = require("passport");

// googleauth
module.exports = (app) => {
  
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"], //info from google server
    })
  );

  app.get("/auth/google/callback",
  passport.authenticate("google"),
  (req,res) =>{
    res.redirect('/surveys')
  }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
