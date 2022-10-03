const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const postChema = {
    user: {
        type: ObjectId,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    likes: {
        type: Number,
    },
    comments: {
        type: Number
    },
    timeAgo: {
        type: String
    }


}

const Post = mongoose.model('Post', postChema);
module.exports = Post;