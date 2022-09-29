const mysql = require("mysql2");
const database = 'biblioteca';
const host = 'localhost';
const user = 'root';
const password = 'root';

module.exports = () => {
    return dbConst = mysql.createConnection({
        host:host,
        user:user,
        password:password,
        database:database
 });
 };

