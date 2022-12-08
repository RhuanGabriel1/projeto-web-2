const res = require('express/lib/response');
const Books = require('../controllers/booksController');

module.exports = {
    getAllBooks: (app) => {
        app.get('/api/books', Books.apiGetAllBooks);
        
    },
    addBook: (app) => {
        app.post('/api/books', Books.addBook);
    },
    getBook: (app) => {
        app.get('/api/books/:id', Books.getBook);
    },
    deleteBook: (app) => {
        app.delete('/api/books/:id', Books.deleteBook);
    }
   
}