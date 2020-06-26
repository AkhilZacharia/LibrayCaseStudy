//access mongoose
const mongoose = require('mongoose');
//connect db
mongoose.connect('mongodb://localhost:27017/library');
//schema defenition
const Schema = mongoose.Schema;
const BookSchema = new Schema({
        title:String,
        author:String,
        genre:String,
        image:String
});
//model creation
const Bookdata = mongoose.model('bookdata',BookSchema);
//export
module.exports = Bookdata;