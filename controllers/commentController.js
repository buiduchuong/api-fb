const Comment = require("../models/commentsModel");

const commentController = {
    // them cmt
    addCmt: async (req, res) => {
        try {
            console.log(req.body)
            const newComment = new Comment(req.body);
             newComment.save();
            res.status(200).send("Them ok");

        } catch (error) {
            res.status(500).send("Loi them cmt");
        }


    }
}

module.exports = commentController;