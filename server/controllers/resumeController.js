
const Resume = require("../models/Resume");

const ParsedResume = require(
  "../models/ParsedResume"
);

const ATSScore = require(
  "../models/ATSScore"
);

const axios = require("axios");

const FormData = require("form-data");

const fs = require("fs");


// UPLOAD RESUME
const uploadResume =
  async (req, res) => {

    try {

      // CHECK FILE
      if (!req.file) {

        return res.status(400).json({
          message:
            "No file uploaded",
        });
      }


      // SAVE RESUME
      const resume =
        await Resume.create({

          user: req.user._id,

          originalName:
            req.file.originalname,

          resumePath:
            req.file.path,
        });


      // SEND FILE TO FASTAPI
      const formData =
        new FormData();

      formData.append(

        "file",

        fs.createReadStream(
          req.file.path
        )
      );


      // PARSE RESUME
      const aiResponse =
        await axios.post(

          "http://127.0.0.1:8000/parse-resume",

          formData,

          {
            headers:
              formData.getHeaders(),
          }
        );


      // SAVE PARSED DATA
      const parsedResume =
        await ParsedResume.create({

          user: req.user._id,

          resume: resume._id,

          skills:
            aiResponse.data.skills || [],

          resumeText:
            (
              aiResponse.data
                .resume_text || ""
            ).substring(0, 5000),
        });


      // SAMPLE JD SKILLS
      const jdSkills = [

        "python",

        "react",

        "mongodb",

        "docker",

        "aws",
      ];


      // CALCULATE ATS
      const atsResponse =
        await axios.post(

          "http://127.0.0.1:8000/calculate-ats",

          {
            resume_skills:
              aiResponse.data.skills,

            jd_skills:
              jdSkills,
          }
        );


      // SAVE ATS RESULT
      const atsResult =
        await ATSScore.create({

          user: req.user._id,

          resume: resume._id,

          atsScore:
            atsResponse.data.ats_score,

          matchedSkills:
            atsResponse.data
              .matched_skills,

          missingSkills:
            atsResponse.data
              .missing_skills,

          suggestions:
            atsResponse.data
              .suggestions,

          jdSkills,
        });


      res.status(201).json({

        message:
          "Resume uploaded & analyzed successfully",

        parsedResume,

        atsResult,
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
  uploadResume,
};
