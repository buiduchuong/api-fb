const postController = require("../controllers/postController");
const postRoute = require('express').Router();


postRoute.post('/add',postController.addPost);
postRoute.post('/delete',postController.deletePost);
postRoute.post('/update',postController.update);
postRoute.post('/like',postController.updateLike);
postRoute.get('/getOne',postController.getOne);
postRoute.get('/getAll',postController.getAll);
module.exports = postRoute;