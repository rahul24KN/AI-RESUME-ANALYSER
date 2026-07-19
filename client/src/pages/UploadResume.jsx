import { useState } from "react";

import axios from "axios";

import API from "../services/api";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  FaCloudUploadAlt,
} from "react-icons/fa";

function UploadResume() {

  const [file, setFile] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [questions, setQuestions] =
    useState([]);

  // FILE SELECTION
  const handleFileChange =
    (e) => {

      setFile(
        e.target.files[0]
      );
    };

  // UPLOAD RESUME
  const handleUpload =
    async () => {

      if (!file) {

        return alert(
          "Please select a file"
        );
      }

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "resume",
          file
        );

        // UPLOAD
        const res =
          await API.post(
            "/resume/upload",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setResult(
          res.data
        );

        // AI QUESTIONS
        const questionRes =
          await axios.post(
            "http://127.0.0.1:8000/generate-questions",
            {
              skills:
                res.data.parsedResume.skills,
            }
          );

        setQuestions(
          questionRes.data.questions
        );

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data?.message ||
          "Upload Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <DashboardLayout>

      <div className="relative z-10 text-white">

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-cyan-400 text-lg mb-2">
            AI Resume Intelligence
          </p>

          <h1 className="text-5xl font-bold">
            Upload Resume
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Analyze ATS compatibility, detect skill gaps,
            and generate AI-powered interview questions.
          </p>

        </div>

        {/* SMALL DROP BOX */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 shadow-2xl max-w-xl">

          <label
            className="
              border-2 border-dashed border-cyan-400/40
              rounded-2xl
              p-10
              flex flex-col items-center justify-center
              cursor-pointer
              hover:border-cyan-400
              hover:bg-cyan-500/5
              transition duration-300
            "
          >

            {/* ICON */}
            <div className="
              w-16 h-16 rounded-2xl
              bg-gradient-to-r from-cyan-500/20 to-blue-500/20
              flex items-center justify-center
              mb-4
            ">

              <FaCloudUploadAlt
                size={32}
                className="text-cyan-400"
              />

            </div>

            {/* TEXT */}
            <h2 className="text-xl font-bold text-white mb-2">
              Drop Resume Here
            </h2>

            <p className="text-gray-400 text-sm mb-5">
              PDF or DOCX
            </p>

            {/* BUTTON */}
            <span className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              px-5 py-2
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            ">
              Browse File
            </span>

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

          </label>

          {/* FILE INFO */}
          {file && (

            <div className="
              mt-5
              bg-white/5
              border border-white/10
              rounded-2xl
              p-4
            ">

              <p className="text-cyan-400 text-sm mb-1">
                Selected File
              </p>

              <p className="text-white font-medium">
                {file.name}
              </p>

              <button
                onClick={handleUpload}
                disabled={loading}
                className="
                  mt-4
                  w-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition
                "
              >

                {loading
                  ? "Analyzing..."
                  : "Upload & Analyze"}

              </button>

            </div>
          )}

        </div>

        {/* ATS RESULTS */}
        {result && (

          <div className="mt-10 space-y-8">

            {/* ATS SCORE */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT */}
                <div>

                  <p className="text-cyan-400 mb-2">
                    AI ATS Engine
                  </p>

                  <h2 className="text-4xl font-bold mb-4">
                    ATS Analysis Report
                  </h2>

                  <p className="text-gray-400 max-w-xl">
                    Your resume was analyzed using
                    AI-based ATS scoring algorithms.
                  </p>

                </div>

                {/* SCORE */}
                <div className="relative">

                  <div className="
                    w-52 h-52 rounded-full
                    bg-gradient-to-r from-cyan-500 to-purple-600
                    p-2 animate-pulse
                  ">

                    <div className="
                      w-full h-full rounded-full
                      bg-[#050816]
                      flex items-center justify-center
                      text-6xl font-bold text-white
                    ">

                      {result.atsResult.atsScore}%

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* MATCHED */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <h3 className="text-3xl font-bold mb-6 text-green-400">
                  Matched Skills
                </h3>

                <div className="flex gap-4 flex-wrap">

                  {result.atsResult.matchedSkills.map(
                    (skill, index) => (

                      <span
                        key={index}
                        className="
                          bg-green-500/20
                          border border-green-500/30
                          text-green-300
                          px-5 py-3
                          rounded-full
                        "
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* MISSING */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

                <h3 className="text-3xl font-bold mb-6 text-red-400">
                  Missing Skills
                </h3>

                <div className="flex gap-4 flex-wrap">

                  {result.atsResult.missingSkills.map(
                    (skill, index) => (

                      <span
                        key={index}
                        className="
                          bg-red-500/20
                          border border-red-500/30
                          text-red-300
                          px-5 py-3
                          rounded-full
                        "
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* SUGGESTIONS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

              <h3 className="text-3xl font-bold mb-6">
                AI Suggestions
              </h3>

              <div className="space-y-4">

                {result.atsResult.suggestions.map(
                  (suggestion, index) => (

                    <div
                      key={index}
                      className="
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        p-5
                      "
                    >

                      <p className="text-gray-300">
                        {suggestion}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>
        )}

        {/* QUESTIONS */}
        {questions.length > 0 && (

          <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>

                <p className="text-cyan-400 mb-2">
                  AI Interview Engine
                </p>

                <h2 className="text-4xl font-bold">
                  AI Interview Questions
                </h2>

              </div>

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-2xl animate-pulse">
                🤖
              </div>

            </div>

            <div className="space-y-5">

              {questions.map(
                (question, index) => (

                  <div
                    key={index}
                    className="
                      bg-white/5
                      border border-white/10
                      rounded-2xl
                      p-6
                    "
                  >

                    <p className="text-lg font-semibold text-white">
                      Q{index + 1}. {question}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>
        )}

      </div>

    </DashboardLayout>
  );
}

export default UploadResume;