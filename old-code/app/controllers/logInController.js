// const dbConnection = require('../../config/dbConnection')
// // const  logger  = require('../logger/winston');
// // const crypto = require('crypto');
// const {authenticateUser} = require('../models/logInModel');

// module.exports.authenticateUser = (app, req, res) =>{
//     let user = req.body;
//     // let passwordCrypto = crypto.createHash('md5').update(user.password).digest('hex');
//     // user.password = passwordCrypto;
//     const dbConn = dbConnection();
//     authenticateUser(dbConn, user,  (error, result)=>{
//         if(error){
//             console.log(error);
//             console.log("problema ao autenticar!");
//         }
//         console.log("result: " + JSON.stringify(result));
//         if(result[0]?.email){
//             req.session.loggedIn = true;
//             console.log("Usuário autenticado com sucesso");
//             // res.end('Usuário autenticado com sucesso !');
//             return;
//         }else{
//             console.log("Usuário não autenticado!");
//             // res.end('Usuário não autenticado !');
//         }
//     });
// };