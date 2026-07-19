
const ATSScore = require("../models/ATSScore");

const ParsedResume = require(
  "../models/ParsedResume"
);

const Interview = require(
  "../models/Interview"
);

const Resume = require(
  "../models/Resume"
);

const User = require("../models/User");


// GET ALL CANDIDATES
const getAllCandidates = async (
  req,
  res
) => {

  try {

    const {
      skill,
      minATS,
      status,
    } = req.query;


    // Fetch all candidate users
    const candidates =
      await User.find({
        role: "candidate",
      }).select("-password");


    let result = [];


    for (const candidate of candidates) {

      // Latest ATS
      const atsData =
        await ATSScore.findOne({
          user: candidate._id,
        }).sort({
          createdAt: -1,
        });


      // Latest Parsed Resume
      const parsedData =
        await ParsedResume.findOne({
          user: candidate._id,
        }).sort({
          createdAt: -1,
        });


      // Latest Resume
      const resumeData =
        await Resume.findOne({
          user: candidate._id,
        }).sort({
          createdAt: -1,
        });


      // Interview Stats
      const interviewCount =
        await Interview.countDocuments({
          user: candidate._id,
        });


      // Final values
      const atsScore =
        atsData?.atsScore || 0;

      const skills =
        parsedData?.skills || [];


      result.push({

        _id: candidate._id,

        name: candidate.name,

        email: candidate.email,

        role: candidate.role,

        status:
          candidate.status || "Pending",

        atsScore,

        skills,


        createdAt:
          candidate.createdAt,

        resumePath:
          resumeData?.resumePath || null,
        interviewCount,

      });
    }


    // Filter by skill
    if (skill) {

      result = result.filter((item) =>

        item.skills.some((s) =>

          s.toLowerCase().includes(
            skill.toLowerCase()
          )
        )
      );
    }


    // Filter by ATS Score
    if (minATS) {

      result = result.filter(
        (item) =>

          item.atsScore >= Number(minATS)
      );
    }


    // Filter by Status
    if (status) {

      result = result.filter(
        (item) =>

          item.status.toLowerCase() ===
          status.toLowerCase()
      );
    }


    // Sort by ATS descending
    result.sort(
      (a, b) =>
        b.atsScore - a.atsScore
    );


    res.status(200).json({
      totalCandidates:
        result.length,

      candidates: result,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// UPDATE CANDIDATE STATUS
const updateCandidateStatus =
  async (req, res) => {

    try {

      const { status } = req.body;


      const updatedCandidate =
        await User.findByIdAndUpdate(

          req.params.id,

          { status },

          { new: true }
        ).select("-password");


      res.status(200).json({

        message:
          "Candidate status updated",

        candidate:
          updatedCandidate,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
};


module.exports = {

  getAllCandidates,

  updateCandidateStatus,
};
