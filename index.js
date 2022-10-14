const server = require("./config/server");
const routes = require("./app/routes/routes");

routes.home(server);
routes.account(server);
routes.signUp(server);
routes.addUser(server);
routes.authenticateUser(server);
routes.insertBook(server);