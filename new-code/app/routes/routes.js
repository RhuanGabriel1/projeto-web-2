const app = require('../../config/server');
const Books = require('../controllers/booksController');

module.exports = {
    getAllBooks: (app) => {
        app.get('/api/books', Books.apiGetAllBooks);
        
    },
    getBook: (app) => {
        app.get('/api/books/:id', Books.getBook);
    },
    addBook: (app) => {
        app.post('/api/books', Books.addBook);
    },
    deleteBook: (app) => {
        app.delete('/api/books/:id', Books.deleteBook);
    },
    loanBook: (app) =>{
        app.put('/api/books/loan/:id', Books.loanBook);
    },
    devolutionBook: (app) =>{
        app.put('/api/books/devolution/:id', Books.devolutionBook);
    },
    loanRequisityBook: () =>{
        app.put('/api/books/loan/requisity/:id', Books.loanRequisityBook);
    },
}