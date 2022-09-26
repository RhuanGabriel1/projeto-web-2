const { home } = require('../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get(
    "/", home
);

module.exports = router;

// module.exports ={

//     home: (app) => {
//         app.get('/', (req, res) => {
//             home(app, req, res);
//         });
//     },

// }