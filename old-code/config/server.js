const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;

// let express = require('express');
// let expressSession = require('express-session');

// let app = express();
// let port = process.env.port ||4000;

// app.set("view engine", "ejs");
// app.use(express.static('./public'));
// app.set("views", "./app/views");
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.use(expressSession({
//     secret: 'senhasecreta',
//     resave: false,
//     saveUninitialized: false
// }));

// app.listen(port, () =>{
//     console.log('Servidor rodando com express na porta', port);
// });

// module.exports = app;