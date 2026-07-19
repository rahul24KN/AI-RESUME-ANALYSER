const mongoose = require("mongoose");

const parsedResumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },

    skills: [String],

    resumeText: {
      type: String,
      maxlength: 5000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ParsedResume",
  parsedResumeSchema
);