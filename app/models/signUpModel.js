module.exports = {
    addUser : (dbConnection, user, callback) => {
        let sql = 'insert into user (email, name, password) values("${user.email}", "${user.name}", "${user.password}")';
        dbConnection.query(sql, callback);
    }
}