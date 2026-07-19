
const User = require("../models/User");

const ATSScore = require("../models/ATSScore");

const ParsedResume = require(
  "../models/ParsedResume"
);


// GET ANALYTICS
const getAnalytics = async (
  req,
  res
) => {

  try {

    // Candidates
    const candidates =
      await User.find({
        role: "candidate",
      });


    // ATS Scores
    const atsScores =
      await ATSScore.find();


    // Parsed Resumes
    const resumes =
      await ParsedResume.find();


    // Total Candidates
    const totalCandidates =
      candidates.length;


    // Average ATS
    const averageATS =
      atsScores.length > 0
        ? (
            atsScores.reduce(
              (sum, item) =>
                sum + item.atsScore,
              0
            ) / atsScores.length
          ).toFixed(2)
        : 0;


    // Status Counts
    const shortlisted =
      candidates.filter(
        (c) =>
          c.status === "Shortlisted"
      ).length;


    const rejected =
      candidates.filter(
        (c) =>
          c.status === "Rejected"
      ).length;


    const pending =
      candidates.filter(
        (c) =>
          c.status === "Pending"
      ).length;


    // Top Skills
    const skillsMap = {};


    resumes.forEach((resume) => {

      resume.skills.forEach((skill) => {

        skillsMap[skill] =
          (skillsMap[skill] || 0) + 1;
      });
    });


    const topSkills =
      Object.entries(skillsMap)

        .sort((a, b) =>
          b[1] - a[1]
        )

        .slice(0, 5);


    res.status(200).json({

      totalCandidates,

      averageATS,

      shortlisted,

      rejected,

      pending,

      topSkills,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};


module.exports = {
  getAnalytics,
};
