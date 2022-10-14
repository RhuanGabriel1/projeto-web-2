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
        app.post('/signUp/addUser',
        [
            check('email').isEmail().normalizeEmail().withMessage('O email deve ser válido'),
            check('name').isLength({min:3, max:20}).withMessage('Nome deve ter no mínimo 3 e no máximo 25 caracteres'),
            check('password').isLength({min:5, max:20}).withMessage('Senha deve ter no mínimo 5 no máximo 25 caracteres'),
            check('confirmpassword').custom((value, { req }) =>{
                if(value!==req.body.password){
                    console.log("Senhas devem ser iguais ");
                    return false;
                }
                return true;
            })
        ], (req, res)=>{
                const withErrors = validationResult(req);
                let user = req.body;
                if(!withErrors.isEmpty()){
                    console.log("Deu erro!");
                    let errors = withErrors.array();
                    // res.render('signUpView.ejs', {errors: errors, user: user});
                    // signUp(app, req, res);
                    return;
                }
            addUser(app, req, res);
        });
    },

    authenticateUser: (app) =>{
        app.post('/authUser',[
            check('email').isEmail().normalizeEmail().withMessage('O email deve ser válido')
        ], (req, res) => {
            const withErrors = validationResult(req);
            const user = req.body;
            if (!withErrors.isEmpty()){
                console.log("Deu erro!");
                let errors = withErrors.array();
                //  res.render('loginInView.ejs', {errors: {}, user: {}});
                // account(app, req, res);
                return;
            }
            authenticateUser(app, req, res);
        }); 
    },

    insertBook: (app) => {
        app.get('/inserilivro', function (req, res) {
            res.render('insertBook.ejs', { errors: {}, book: {} });
        });
    },
    savebook: (app) => {
        app.post('/livro/salvar', [

            check('nome').isLength({ min: 1, max: 100 }).withMessage('Nome deve ter no mínimo 5 caracteres'),
            check('autor').isLength({ min: 1, max: 250 }).withMessage('descrição deve ter no mínimo 5 caracteres'),
            check('ano').isLength({ min: 0, max: 2100 }).isNumeric().withMessage('Ano deve ser numérico e conter 4 números.'),
            check('urlimagem').isURL().withMessage('URL da imagem deve conter um link')


        ], (req, res) => {
            const err = validationResult(req);
            painting = req.body;
            let operation = req.query.op
            console.log("rota salvar");
            if (!err.isEmpty()) {
                let errors = err.array();
                res.render('insertBook.ejs', { errors: errors, painting: painting});
                return;
            } else{
                console.log(operation);
                switch (operation) {
                  case 'i': addBookController(app, req, res);
                  case 'c': changeBookController(app, req, res);
                  default: console.log('Operação não prevista');
                }
            }
        });
        
    }

}