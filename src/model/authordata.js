//access mongoose
const mongoose = require('mongoose');
//connect db
mongoose.connect('mongodb://localhost:27017/library');
//schema defenition
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
        name:String,
        works:String,
        genre:String,
        image:String
});
//model creation
const Authordata = mongoose.model('authordata',AuthorSchema);
//export
module.exports = Authordata;