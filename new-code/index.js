const app = require("./config/server");
const routes = require("./app/routes/routes");

routes.getAllBooks(app);
routes.addBook(app);
routes.getBookById(app);
