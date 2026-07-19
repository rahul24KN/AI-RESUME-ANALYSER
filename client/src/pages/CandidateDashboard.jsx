import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

import DashboardLayout from
  "../layouts/DashboardLayout";

function CandidateDashboard() {

  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // FETCH DASHBOARD DATA
  useEffect(() => {

    const fetchDashboard =
      async () => {

        try {

          const res =
            await API.get(
              "/dashboard"
            );

          setDashboard(
            res.data
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchDashboard();

  }, []);

  // LOADING
  if (loading) {

    return (

      <DashboardLayout>

        <div className="min-h-screen flex items-center justify-center text-white">

          <h1 className="text-3xl font-bold animate-pulse">
            Loading Dashboard...
          </h1>

        </div>

      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      {/* BACKGROUND */}
      <div className="relative min-h-screen overflow-hidden text-white">

        {/* SPACE BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0a0f2c]" />

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* STARS */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-6 md:p-10">

          {/* HEADER */}
          <div className="mb-10">

            <p className="text-cyan-400 text-lg mb-2">
              AI Resume Analyzer
            </p>

            <h1 className="text-5xl font-bold">
              Candidate Dashboard
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl">
              Track ATS performance, analyze resumes,
              monitor interview readiness, and improve
              your AI career profile.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* ATS SCORE */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

              <p className="text-cyan-300 mb-3">
                Latest ATS Score
              </p>

              <h2 className="text-6xl font-bold text-cyan-400">
                {dashboard?.latestATS?.atsScore || 0}%
              </h2>

              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{
                    width: `${dashboard?.latestATS?.atsScore || 0}%`,
                  }}
                ></div>
              </div>

            </div>

            {/* TOTAL RESUMES */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

              <p className="text-purple-300 mb-3">
                Total Resumes
              </p>

              <h2 className="text-6xl font-bold text-purple-400">
                {dashboard?.totalResumes || 0}
              </h2>

              <p className="text-gray-400 mt-4">
                Uploaded resumes tracked by AI
              </p>

            </div>

            {/* AVERAGE ATS */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">

              <p className="text-pink-300 mb-3">
                Average ATS
              </p>

              <h2 className="text-6xl font-bold text-pink-400">
                {dashboard?.averageATS || 0}%
              </h2>

              <p className="text-gray-400 mt-4">
                Overall resume performance
              </p>

            </div>

          </div>

          {/* SKILLS */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-10">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                Skills Intelligence
              </h2>

              <span className="text-cyan-400">
                AI Detected
              </span>

            </div>

            <div className="flex flex-wrap gap-4">

              {dashboard?.skills?.map(
                (skill, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 text-white hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                )
              )}

            </div>

          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ATS HISTORY */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-6">
                ATS History
              </h2>

              <div className="space-y-4">

                {dashboard?.atsHistory?.map(
                  (item) => (

                    <div
                      key={item._id}
                      className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition"
                    >

                      <div>

                        <p className="font-semibold">
                          Resume Analysis
                        </p>

                        <p className="text-sm text-gray-400">
                          AI ATS Evaluation
                        </p>

                      </div>

                      <div className="text-2xl font-bold text-cyan-400">
                        {item.atsScore}%
                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* RESUME HISTORY */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-6">
                Resume History
              </h2>

              <div className="space-y-4">

                {dashboard?.resumes?.map(
                  (resume) => (

                    <div
                      key={resume._id}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition"
                    >

                      <p className="font-semibold text-lg">
                        {resume.originalName}
                      </p>

                      <p className="text-sm text-gray-400 mt-2">
                        {new Date(
                          resume.createdAt
                        ).toLocaleString()}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default CandidateDashboard;