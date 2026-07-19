
const ATSScore =
  require("../models/ATSScore");

const ParsedResume =
  require("../models/ParsedResume");

const Resume =
  require("../models/Resume");


// GET CANDIDATE DASHBOARD STATS
const getDashboardStats =
  async (req, res) => {

    try {

      const userId =
        req.user._id;


      // GET ATS SCORES
      const atsScores =
        await ATSScore.find({

          user: userId,

        }).sort({
          createdAt: -1,
        });


      // GET RESUMES
      const resumes =
        await Resume.find({

          user: userId,

        }).sort({
          createdAt: -1,
        });


      // GET PARSED RESUMES
      const parsedResumes =
        await ParsedResume.find({

          user: userId,

        }).sort({
          createdAt: -1,
        });


      // LATEST ATS
      const latestATS =
        atsScores.length > 0
          ? atsScores[0]
          : null;


      // LATEST PARSED RESUME
      const latestParsedResume =
        parsedResumes.length > 0
          ? parsedResumes[0]
          : null;


      // CALCULATE AVERAGE ATS
      let averageATS = 0;

      if (atsScores.length > 0) {

        const totalATS =
          atsScores.reduce(

            (sum, item) =>
              sum + item.atsScore,

            0
          );

        averageATS =
          Math.round(
            totalATS /
            atsScores.length
          );
      }


      // COLLECT ALL SKILLS
      let allSkills = [];

      parsedResumes.forEach(
        (resume) => {

          if (resume.skills) {

            allSkills.push(
              ...resume.skills
            );
          }
        }
      );


      // UNIQUE SKILLS
      const uniqueSkills =
        [...new Set(allSkills)];


      // RESPONSE
      res.status(200).json({

        totalResumes:
          resumes.length,

        totalATSAnalyses:
          atsScores.length,

        averageATS,

        latestATS,

        latestParsedResume,

        skills: uniqueSkills,

        atsHistory: atsScores,

        resumes,
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

  getDashboardStats,
};
