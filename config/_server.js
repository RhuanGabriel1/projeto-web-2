let express = require('express');
const router = require("../app/routes/routes")

let app = express();
let port = process.env.PORT ||3000;

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/public/styles/styles.css",express.static(__dirname.split(path.se) + '/public'));
app.use(router);


app.listen(port, () =>{
    console.log('Servidor rodando com express na porta', port);
});

module.exports = app;