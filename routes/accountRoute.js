
const AccountController = require("../controllers/accountController");
const RouteAcc = require('express').Router();

RouteAcc.post("/register", AccountController.accRegister);

RouteAcc.post("/login", AccountController.login);



module.exports = RouteAcc;

