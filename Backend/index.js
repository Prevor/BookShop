const express = require('express')
const app = express()
const port = 3000
const Book = require('./models/book')
const cors = require('cors');

app.use(cors());

app.get('/', async(req, res) => {

    const books = await Book.find({});

    try {
        res.json(JSON.stringify(books));
    } catch (error) {
        res.status(500).json(error);
    }
})


app.get('/books/category/:category', async(req, res) => {
    const books = await Book.find({ category: req.params.category }).exec();
    res.json(JSON.stringify(books))
})

app.get('/book/:url', async(req, res) => {
    const book = await Book.findOne({ url: req.params.url }).exec();
    res.json(JSON.stringify(book));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})