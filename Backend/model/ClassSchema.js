const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    className:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    teacher:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: "-"
    },
    classlimit: {
        type: Number,
        required: true,
        default: 0
    },
    year:{
        type: String,
        required: true,
        default: "-"
    },
})

const Class = mongoose.model("Class",ClassSchema);

module.exports = Class;