module.exports = (req, res, next) => {
  if (req.user.credits < 1){
    return res.status(403).send({ error: "not enough credits" });
  }
  // nothing wrong, send to the next middleware
  next();
}