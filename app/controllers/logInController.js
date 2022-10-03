const dbConnection = require('../../config/dbConnection')
// const  logger  = require('../logger/winston');
const crypto = require('crypto');
const {authenticateUser} = require('../models/logInModel');

module.exports.authenticateUser = (app, req, res) =>{
    let user = req.body;
    // let passwordCrypto = crypto.createHash('md5').update(user.password).digest('hex');
    // user.password = passwordCrypto;
    const dbConn = dbConnection();
    authenticateUser(dbConn, user,  (error, result)=>{
        console.log("result: " + JSON.stringify(result));
        if(result[0]?.email){
            console.log("Usuário autenticado");
            return;
        }else{
            console.log("Deu errado");
        }
    });
};