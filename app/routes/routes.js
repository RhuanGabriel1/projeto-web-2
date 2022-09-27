const { home } = require('../controllers/homeController');
const { account } = require('../controllers/accountController');

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
    
}