const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //equal to the above comment

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

//load the schema into mongoose as 'users'
mongoose.model("users", userSchema);
