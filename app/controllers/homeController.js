const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');
const { getBooks, getBook  } = require('../models/homeModel')

module.exports.home = (app, req, res) => {
    const dbConn = dbConnection();
    getBooks(dbConn, (error,result)=>{
        if(error){
            console.log(error);
            console.log("problema ao autenticar!");
            return;
        }
        res.render('homeView.ejs', {livros: result});
    });

module.exports.changeFormPaintingController = (app, req, res) => {
        console.log('Formulario para alteração de livro');
        let bookId = req.query.idobra;
        dbConn = dbConnection();
        getBook(bookId, dbConn, (error, result) => {
          console.log(error);
          let book = result[0];
          res.render('insertBook', { book: book, errors: error , op: 'c'});
        });
      }; 
}