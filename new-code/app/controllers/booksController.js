const res = require('express/lib/response');
const Joi = require('joi');
const BookModel = require('../models/booksModel');

const Book = require('../models/booksModel');

const emailUsuário1 = "usuario1@gmail.com"
const emailUsuário2 = "usuario2@gmail.com"
const emailBibliotecario = "bilbiotecario@gmail.com"
const passwordUsers= "123"


const schema = Joi.object().keys({
    nome: Joi.string().required(),
    ano: Joi.string().required(),
    autor: Joi.string().required(),
    link: Joi.string().required(),
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
            res.status(500).json({ error: error });
        }

    }

    static async addBook(req, res, next) {
        console.log(`[Add Book Controller]`, req.body);
        const { error, value } = schema.validate(req.body);
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
    
    static async deleteBook(req, res) {
        try {
            const deleteBook = await BookModel.deleteBook(req.params.id);
            if (!deleteBook) return res.status(404).json(`Não existe livro cadastrado com o id ${req.params.id}.`);
            return res.status(200).json(`Livro ${req.params.id} removido com sucesso`);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async loanRequisityBook(req, res){
        try {
            
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async loanBook(req, res){
        try {
            
        } catch (error) {
            
        }
    }

    static async devolutionBook(req, res){
        try {
            //Criar uma pai de delete para complementar a api de update, criar schema para validacao
            const book = await Book.devolutionBook(req.params.id);
            if(!book) return res.status(404).json(`Livro ${req.params.id} não encontrado`);
            res.status(200).json(`Livro ${req.params.id} devolvido com sucesso`);
        } catch (error) {
            res.status(500).json({ error: error });         
        }
    }

    static async authUser(req, res) {
        try {
          const { email, password } = req.body;
          if (!email) {
            res.status(400).send({
              message: `Email inválido`,
            });
          }
          if(password==passwordUsers && email==emailUsuário1 
            || password==passwordUsers && email==emailUsuário2 
            || password==passwordUsers && email==emailBibliotecario){
            const token = generateToken({
                id: email,
            });
            return res.send({token});
          }
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }
} 