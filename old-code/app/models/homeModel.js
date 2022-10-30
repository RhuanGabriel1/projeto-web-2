module.exports = {
    getBooks: (dbConnection, callback) =>{
        dbConnection.query("select * from livro", callback);
    }
}