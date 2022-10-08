const commentController = require('../controllers/commentController');

const commentRoute = require('express').Router();


commentRoute.post('/add', commentController.addCmt);
module.exports = commentRoute;