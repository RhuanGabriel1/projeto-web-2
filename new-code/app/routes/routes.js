const {apiGetAllBooks, addBook} = require('../controllers/booksController');
const Books = require('../controllers/booksController');

module.exports = {
    getAllBooks: (app) => {
        app.get('/api/books', Books.apiGetAllBooks);
    },
    addBook: (app) => {
        app.post('api/books', Books.addBook);
    },
}