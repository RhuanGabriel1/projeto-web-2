const dbConnection = require('../../config/dbConnection')
const  logger  = require('../logger/winston');
const {addUser} = require('../models/signUpModel');

module.exports.signUp = (app, req, res) => {
    res.render('signUpView.ejs', {errors: {}, user: {}});
}

module.exports.addUser = (app, req, res) =>{
    let user = req.body;
    const dbConn = dbConnection();
    addUser(dbConn, user, (error, result)=>{
        console.log("error: " + error);
        if(error?.message?.lenght>0){
            logger.log({
                level: 'error',
                message: error.message
            });
            return;
        }
        else{
            res.redirect('/account');
            console.log("Deu certo!");
        }
    });
}