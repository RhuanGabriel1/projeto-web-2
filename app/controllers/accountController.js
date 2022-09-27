const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');

module.exports.account = (app, req, res) => {
    res.render('accountView.ejs');
}