const UserController = require("../controllers/userController");
const RouteUser = require("express").Router();

RouteUser.post("/update", UserController.update);
RouteUser.get("/", UserController.get);

// RouteUser.post("/login", AccountController.login);



module.exports = RouteUser;
