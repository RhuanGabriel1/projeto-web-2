const { log } = require('winston');
const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');
const {addUser} = require('../models/signUpModel');

module.exports.signUp = (app, req, res) => {
    res.render('signUpView.ejs', {errors: {}, user: çç{}});
}

module.exports.addUser = (aap, req, res) =>{
    let user = req.body;
    const dbConn = dbConnection();
    addUser(user, dbConn, (error, result)=>{
        if(error){
            logger.log({
                level: 'error',
                message: error.message
            });
        }
        else{
            console.log("Deu certo!");
        }
    });
}