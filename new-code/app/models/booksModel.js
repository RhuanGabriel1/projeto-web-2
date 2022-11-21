const client = require('../../config/dbConnection');
const {ObjectId} = require('mongodb');

module.exports = class BookModel {

    static async getAllBooks(){
        console.log('getAllBooks');
        const result = await client.db("projeto-web").collection("books").find();
        const books = await result.toArray();
        console.log(books);
        return books;
    }

    static async addBook(data){
        console.log(`addBook -> ${data}`);
        try {
            const newBook = {nome: data.nome, ano: data.ano, autor: data.autor, link: data.link}
            const addedBook = await client.db("projeto-web").collection("books").insertOne(newBook);
            console.log(`Novo livro inserido com o id ${addedBook.insertedId}`);
            return addedBook;
        } catch (error) {
            console.log(`[bookService] Error: ${error}`);
        }
    }

}