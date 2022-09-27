const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');

module.exports.signUp = (app, req, res) => {
    res.render('signUpView.ejs');
}