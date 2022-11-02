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
}