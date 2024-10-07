const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    // photo:{
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        required: true,
        trim: true,
        default: "unknown"
    },
    id:{
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
        default: "-"
    },
    dob: {
        type: String,
        required: true,
        default: "-" 
    },
    contact: {
        type: String,
        required: true,
        default: "-"
    },
    fees: {
        type: String,
        required: true,
        min: 0,
        default: "-"
    },
    className: {
        type: String,
        required: true,
        default: "-"
    },
    father: {
        type: String,
        required: true,
        default: "-"
    },
    attendance: {
        type: Number,
        required: true,
        default: 0
    },
    address: {
        type: String,
        required: true,
        default: "-"
    }
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
