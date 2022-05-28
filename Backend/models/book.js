const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/BookShop");

const bookSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    category: {
        type: String
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;