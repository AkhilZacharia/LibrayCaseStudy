const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
        username:String,
        email:String,
        password:String,
        type:String
});
const Logindata = mongoose.model('logindata',LoginSchema);

module.exports = Logindata;