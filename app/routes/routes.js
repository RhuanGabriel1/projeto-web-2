const { home } = require('../controllers/homeController');

module.exports ={

    home: (app) => {
        app.get('/', (req, res) => {
            home(app, req, res);
        });
    },

}