const { home } = require('../controllers/homeController');
const { account } = require('../controllers/accountController');
const { signUp, addUser} = require('../controllers/signUpController');
const { authenticateUser } = require('../controllers/logInController');
const {check, validationResult} = require('express-validator');
const  logger  = require('../logger/winston');

module.exports = {
    home: (app) => {
        app.get('/', (req, res) => {
            home(app, req, res);
        });
    },

    account: (app) => {
        app.get('/account', (req, res) => {
            account(app, req, res);
        });
    },

    signUp: (app) => {
        app.get('/signUp', (req, res) => {
            signUp(app, req, res);
        });
    },

    addUser: (app) =>{
        app.post('/signUp/addUser',[
            check('email').isEmail().normalizeEmail().withMessage('O email deve ser válido'),
            check('name').isLength({min:3, max:20}).withMessage('Nome deve ter no mínimo 3 e no máximo 25 caracteres'),
            check('password').isLength({min:5, max:20}).withMessage('Senha deve ter no mínimo 5 no máximo 25 caracteres'),
            check('confirmpassword').isLength({min:5, max:20}).custom((value, {req}) =>{
                if(value!==req.body.password){
                    console.log("Senhas devem ser iguais ");
                }
                return true;
            }),
        ], (req, res)=>{
            addUser(app, req, res);
        });
    },

    authenticateUser: (app) =>{
        app.post('/authUser',[
            check('email').isEmail().normalizeEmail().withMessage('O email deve ser válido')
        ], (req, res) => {
            // const user = req.body;
            authenticateUser(app, req, res);
        }); 
    }
}