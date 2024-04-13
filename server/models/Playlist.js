const mongoose = require("mongoose")
const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    thumbnail : {
        type: String,
        required : true,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref : "user",
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "user",
    }],
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref: "user",
    }]
})

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;