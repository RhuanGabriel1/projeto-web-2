const res = require('express/lib/response');
const Joi = require('joi');

const Book = require('../models/booksModel');

module.exports = class Books{
    static async apiGetAllBooks (req, res, next){
        console.log('Controller book - get books');
        try {
            const books = await Book.getAllBooks();
            if(!books){
                res.status(400).json('Não existe um livro cadastrado');
                return;
            }
            res.json(books);
        } catch (error) {
            console.log(`getAllBooks error -> ${error}`);
            res.status(500).json({error:error});
        }
    }
}