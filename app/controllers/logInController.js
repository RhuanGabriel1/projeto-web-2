const dbConnection = require('../../config/dbConnection')
// const  logger  = require('../logger/winston');
const crypto = require('crypto');
const {authenticateUser} = require('../models/logInModel');

module.exports.authenticateUser = (app, req, res) =>{
    let user = req.body;
    let passwordCrypto = crypto.createHash('md5').update(user.password).digest('hex');
    user.password = passwordCrypto;
    const dbConn = dbConnection();
    authenticateUser(dbConn, user,  (error, result)=>{
        console.log("result: " + result.lenght);
        if(result.lenght > 0){
            console.log("Usuário autenticado");
            console.log("Req session: "+ req.session);
            req.session.loggedIn = true;
        }
        else{
            console.log("result: " + result.lenght);
            console.log("Falha na autenticação!");
            // res.end("Falha na autenticação!");
        }
    });
};