const Post = require("../models/postModel");

const postController = {
    //add
    addPost: async (req, res) => {
        try {
            console.log(req.body);
            const newPost = new Post(req.body);
            const savePost = await newPost.save();
            res.status(200).json({ err: "success" });

        } catch (error) {
            res.status(500).json(error);
        }
    },
    //delete
    deletePost: async (req, res) => {
        try {
            const id = req.body.id;
            const postCurrent = await Post.findOneAndDelete(id);
            const savePost = postCurrent.save();
            res.status(200).json({ err: "success" });

        } catch (error) {
            res.status(500).json(error);
        }
    },
    //update
    update: async (req, res) => {
        try {
            const id = req.body.id;
            const postCurrent = await Post.findByIdAndUpdate(id, req.body);
            const savePost = postCurrent.save();
            res.status(200).json({ err: "success" });

        } catch (error) {
            res.status(500).json(error);
        }
    },
    //  getAlldata
    getAll: async (req, res) => {
        try {

            const postCurrent = await Post.find();
            // const savePost = postCurrent.save();
            res.status(200).json(postCurrent);

        } catch (error) {
            res.status(500).json(error);
        }
    },
    // get1byid
    getOne: async (req, res) => {
        try {
            const id = req.body.id;
            const postCurrent = await Post.findById(id);
            // const savePost = postCurrent.save();
            res.status(200).json(postCurrent);

        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = postController;