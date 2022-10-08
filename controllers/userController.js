const User = require("../models/userModel");

const userController = {
    update: async (req, res) => {

        try {
            const id = req.body._id;
            const user = await User.findOneAndUpdate(id, req.body);
            user.save();

            res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error)

        }
    },
    get: async (req, res) => {
        try {
            const data = await User.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error)

        }

    },
    getOneUser: async (req, res) => {
        const account = req.body.account;
        try {
            const data = await User.findOne({"account": account });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error)

        }
    }
}

module.exports = userController;