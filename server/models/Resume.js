
const mongoose = require("mongoose");

const resumeSchema =
  new mongoose.Schema(

    {
      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      originalName: {
        type: String,
      },

      resumePath: {
        type: String,
      },

      uploadedAt: {

        type: Date,

        default: Date.now,
      },
    },

    { timestamps: true }
  );

module.exports =
  mongoose.model(
    "Resume",
    resumeSchema
  );
