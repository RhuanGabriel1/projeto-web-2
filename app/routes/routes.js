const { home } = require('../controllers/homeController');
const { account } = require('../controllers/accountController');
const { signUp, addUser} = require('../controllers/signUpController');

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
        app.post('signUp/addUser', (req, res)=>{
            let user = req.body;
            res.render('signUpView.ejs', {user: user, errors: errors});
        });
    }


}