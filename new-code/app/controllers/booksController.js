const res = require('express/lib/response');
const Joi = require('joi');
const BookModel = require('../models/booksModel');

const Book = require('../models/booksModel');

const schema = Joi.object().keys({
    nome: Joi.string().required().min(1).max(50),
    ano: Joi.string().required().min(1).max(50),
    autor: Joi.string().required().min(1).max(50),
    urlimagem: Joi.string().required().min(1).max(350)
});

module.exports = class Books {
    static async apiGetAllBooks(req, res, next) {
        console.log('Controller book - get books');
        try {
            const books = await Book.getAllBooks();
            if (!books) {
                res.status(400).json('Não existe um livro cadastrado');
                return;
            }
            res.json(books);
        } catch (error) {
            console.log(`getAllBooks error -> ${error}`);
            res.status(500).json({ error: error });
        }
    }

    static async addBook(req, res, next) {
        console.log(`[Add Book Controller]`, req.body);
        const { error, value } = schema.validate(req.body);
        // console.log(`[Controller add Book erro: ] ${value} - ${error.details}`);
        if (error) {
            const result = {
                msg: `Filme não incluído. Campos não foram preenchidos corretamente`,
                error: error.details
            }
            res.status(404).json(result);
            return;
        }
        try {
            const addedBook = await Book.addBook(req.body);
            res.status(200).json(addedBook);
        } catch (error) {
            res.status(500).json({ error: error });
        }

    }
    static async getBook(req, res) {
        try {
            const booksId = req.params.id;
            const book = await BookModel.getBook(booksId);
            if (!book)
                return res.status(404).json(`Não existe book cadastrada com o id ${booksId}.`);
            else
                return res.status(200).json(book);
        } catch (error) {
            console.log(`[Controller - get book by id error] ${error}`);
            return res.status(500).json(error);
        }

    }
    static async deleteBook(req, res) {
        try {
            //Verifica se livro existe
            const bookId = req.params.id;
            const book = await BookModel.deleteBook(bookId);
            if (!book) return res.status(404).json(`Não existe livro cadastrado com o id ${bookId}.`);

            const deleteBook = await BookModel.deleteBook(req.params.id);
            return res.status(200).json(deleteBook);

        } catch (error) {
            return res.status(500).json(error);
        }
    }
} 