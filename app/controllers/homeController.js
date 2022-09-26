const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');

module.exports.home = (req, res) => {
    res.render('homeView.ejs');
}