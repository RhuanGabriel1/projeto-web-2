const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');
const { getBooks } = require('../models/homeModel')

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
}