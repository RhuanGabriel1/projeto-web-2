module.exports = {
    authenticateUser: (dbConnection, user, callback) => {
        sql = `select * from user where email = "${user.email}" and password = "${user.password}";`
        dbConnection.query(sql, callback);
    }
}