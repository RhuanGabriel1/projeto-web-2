const {apiGetAllBooks} = require('../controllers/booksController');
const Books = require('../controllers/booksController');

module.exports = {
    getAllBooks: (app) =>{
        app.get('/api/books', Books.apiGetAllBooks);
    },
}