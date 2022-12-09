const res = require('express/lib/response');
const Joi = require('joi');
const BookModel = require('../models/booksModel');
const jwt = require('jsonwebtoken'); 
const SECRET = 'chave-privada';


const Book = require('../models/booksModel');

const schema = Joi.object().keys({
    nome: Joi.string().required().min(1).max(50),
    ano: Joi.string().required().min(1).max(50),
    autor: Joi.string().required().min(1).max(50),
    urlimagem: Joi.string().required().min(1).max(350)
});

const schemaUsuarios = Joi.object().keys({
    email: Joi.string().required().min(1).max(100),
    senha: Joi.string().required().min(1).max(100),
 });

module.exports = class Books {
    static async getAllBooks(res) {
        console.log('Controller book - get books');
        try {
            const books = await Book.getAllBooks();
            if (!books) {
                res.status(404).json('Não existe um livro cadastrado');
                return;
            }
            res.status(200).json(books);

        } catch (error) {
            console.log(`getAllBooks error -> ${error}`);
            res.status(500).json({ error: error });
            return;
        }
    }

    static async addBook(req, res) {
        console.log(`[Add Book Controller]`, req.body);
        
        const token = req.headers['access-token'];

        jwt.verify(token, SECRET, (error, decoded) => {
            if (error) {
               res.status(401).json({ error: error });
               return;
            }
   
            req.email = decoded.email;
         });
        const { error } = schema.validate(req.body);
        // console.log(`[Controller add Book erro: ] ${value} - ${error.details}`);
        if (error) {
            const result = {
                msg: `Livro não incluído. Campos não foram preenchidos corretamente`,
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
            const book = await Book.getBook(booksId);
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
            const book = await Book.deleteBook(bookId);
            if (!book) return res.status(404).json(`Não existe livro cadastrado com o id ${bookId}.`);

            const deleteBook = await BookModel.deleteBook(req.params.id);
            return res.status(200).json(deleteBook);

        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async authUser(req, res) {
        console.log('[Auth User Controller]', req.body);
  
        const { error, value } = schemaUsuarios.validate(req.body);
        if (error) {
           const result = {
              msg: 'Usuário nao  autenticado o usuário. Campos inválidos!',
              error: error.details
           }
           res.status(404).json(result);
           return;
        }
        try {
           const addedUser = await Book.authUser(req.body);
           res.status(200).json(addedUser);
        } catch (error) {
           res.status(500).json({ error: error });
        }
     }
     static async signBook(req, res) {
        console.log('[Sign Book Controller]', req.body);
  
        const token = req.headers['x-access-token'];
  
        jwt.verify(token, SECRET, (error, decoded) => {
           if (error) {
              res.status(401).json({ error: error });
              return;
           }
  
           req.email = decoded.email;
        });
  
        try {
           if (req.email != null) {
              const data = await Book.signBook(req.params.id, req.email);
              if (!data) return res.status(404).json({ error: 'Não foi possível encontrar o livro!' });
              res.status(200).json(data);
           }
        } catch (error) {
           res.status(500).json({ error: error });
        }
     }
  
} 