const mysql = require("mysql");
const host = 'localhost';
const user = 'root';
const password = 'gabi1201';

module.exports = () => {
    return dbConst = mysql.createConnection({
        host:host,
        user:user,
        password:password,
        database:database
 });
 };