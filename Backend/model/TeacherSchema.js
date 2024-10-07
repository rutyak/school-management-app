const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  // photo: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
    trim: true,
    default: "unknown",
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
    default: "other",
  },
  dob: {
    type: String,
    required: true,
    default: "-",
  },
  contact: {
    type: String,
    required: true,
    default: "-",
  },
  salary: {
    type: Number,
    required: true,
    default: 0,
  },
  assignedClass: {
    type: String,
    required: true,
    default: "-",
  },
  father: {
    type: String,
    required: true,
    default: "-"
  },
  classconducted: {
    type: Number,
    required: true,
    default: 0
  },
  address: {
    type: String,
    required: true,
    default: "-"
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
