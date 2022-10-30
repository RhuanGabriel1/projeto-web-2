const {MongoClient} = require('mongodb');
require('dotenv').config();

console.log("Olha ->"+process.env.mongoUri);

const client = new MongoClient(process.env.mongoUri);

module.exports = client;

// const mysql = require("mysql2");
// const database = 'biblioteca';
// const host = 'localhost';
// const user = 'root';
// const password = 'root';

// module.exports = () => {
//     return dbConst = mysql.createConnection({
//         host:host,
//         user:user,
//         password:password,
//         database:database
//  });
//  };
