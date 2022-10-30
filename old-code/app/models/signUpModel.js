module.exports = {
    addUser : (dbConnection, user, callback) => {
        sql = `insert into user (email, name, password) VALUES ("${user.email}", "${user.name}", "${user.password}");`
        dbConnection.query(sql, callback);
    }
}