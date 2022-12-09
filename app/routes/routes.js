const res = require('express/lib/response');
const Books = require('../controllers/booksController');

module.exports = {
    getAllBooks: (app) => {
        app.get('/api/books', Books.getAllBooks);
    },
    addBook: (app) => {
        app.post('/api/books', Books.addBook); // depois add livro
    },
    getBook: (app) => {
        app.get('/api/books/:id', Books.getBook);
    },
    deleteBook: (app) => {
        app.delete('/api/books/:id', Books.deleteBook);
    },
    authUser: (app) => {
        console.log('[Routes] auth user')
        app.post('/api/authUser', Books.authUser); // primeiro autentica
    },
    signBook: (app) => {
        console.log('[Routes] sign Book')
        app.post('/api/signBook/:id', Books.signBook); // depois entra
    },
}