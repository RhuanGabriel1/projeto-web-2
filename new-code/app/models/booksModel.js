const client = require('../../config/dbConnection');
const { ObjectId } = require('mongodb');

module.exports = class BookModel {

    static async getAllBooks() {
        console.log('getAllBooks');
        const result = await client.db("projeto-web").collection("books").find();
        const books = await result.toArray();
        console.log(books);
        return books;
    }

    static async addBook(data) {
        console.log(`addBook -> ${data}`);
        try {
            const newBook = { nome: data.nome, ano: data.ano, autor: data.autor, link: data.link }
            const addedBook = await client.db("projeto-web").collection("books").insertOne(newBook);
            console.log(`Novo livro inserido com o id ${addedBook.insertedId}`);
            return addedBook;
        } catch (error) {
            console.log(`[bookService] Error: ${error}`);
        }
    }
    static async getBook(bookId) {
        console.log(`[estou no BookModel , getById] ${bookId}`);
        bookId = new ObjectId(bookId);
        const book = await client.db("projeto-web").collection("books").findOne({
            _id: bookId
        });
        return book;
    }
    static async deleteBook(bookId) {
        console.log(`[Book Model - delete Book] ${bookId}`);
        const query = {
            _id: new ObjectId(bookId)
        };
        try {
            return await client.db("projeto-web").collection("books").deleteOne(query);
        } catch (error) {
            console.log(`[bookService] Error: ${error}`);
        }
    
}
}