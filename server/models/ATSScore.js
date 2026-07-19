
const mongoose = require("mongoose");

const atsScoreSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },

    atsScore: Number,

    matchedSkills: [String],

    missingSkills: [String],

    suggestions: [String],

    jdSkills: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ATSScore",
  atsScoreSchema
);

