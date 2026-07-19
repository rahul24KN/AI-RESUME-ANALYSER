import { useState } from "react";

import API from "../services/api";

import DashboardLayout from "../layouts/DashboardLayout";

function MockInterview() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  // EVALUATE ANSWER
  const handleEvaluate =
    async () => {

      if (!question || !answer) {

        return alert(
          "Please fill all fields"
        );
      }

      try {

        setLoading(true);

        const res =
          await API.post(
            "/interview/evaluate",
            {
              question,
              answer,
            }
          );

        setResult(
          res.data
        );

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data?.message ||
          "Evaluation Failed"
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
            AI Interview Assistant
          </p>

          <h1 className="text-5xl font-bold">
            Mock Interview
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Practice interview questions and get
            AI-powered feedback on your answers.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* QUESTION BOX */}
          <div className="
            bg-white/10
            backdrop-blur-xl
            border border-cyan-500/20
            rounded-[28px]
            p-6
            shadow-2xl
            max-w-xl
          ">

            <div className="flex items-center gap-3 mb-5">

              <div className="
                w-12 h-12 rounded-2xl
                bg-cyan-500/20
                flex items-center justify-center
                text-2xl
              ">
                ❓
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Interview Question
                </h2>

                <p className="text-gray-400 text-sm">
                  Enter technical or HR questions
                </p>

              </div>

            </div>

            <input
              type="text"
              value={question}
              onChange={(e) =>
                setQuestion(
                  e.target.value
                )
              }
              placeholder="Tell me about yourself..."
              className="
                w-full
                bg-black/20
                border border-cyan-500/20
                rounded-2xl
                p-4
                outline-none
                text-white
                placeholder-gray-500
                focus:border-cyan-400
                transition
              "
            />

          </div>

          {/* ANSWER BOX */}
          <div className="
            bg-white/10
            backdrop-blur-xl
            border border-purple-500/20
            rounded-[28px]
            p-6
            shadow-2xl
            max-w-xl
          ">

            <div className="flex items-center gap-3 mb-5">

              <div className="
                w-12 h-12 rounded-2xl
                bg-purple-500/20
                flex items-center justify-center
                text-2xl
              ">
                ✍️
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Your Answer
                </h2>

                <p className="text-gray-400 text-sm">
                  Write your response clearly
                </p>

              </div>

            </div>

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(
                  e.target.value
                )
              }
              placeholder="Write your answer..."
              className="
                w-full
                h-52
                bg-black/20
                border border-purple-500/20
                rounded-2xl
                p-4
                outline-none
                text-white
                placeholder-gray-500
                focus:border-purple-400
                transition
                resize-none
              "
            />

          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleEvaluate}
          disabled={loading}
          className="
            mt-8
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            px-8 py-4
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
            shadow-2xl
          "
        >

          {loading
            ? "Evaluating..."
            : "Evaluate Answer"}

        </button>

        {/* RESULT */}
        {result && (

          <div className="
            mt-10
            bg-white/10
            backdrop-blur-xl
            border border-green-500/20
            rounded-[32px]
            p-8
            shadow-2xl
            max-w-4xl
          ">

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">

              <div className="
                w-16 h-16 rounded-2xl
                bg-gradient-to-r
                from-green-500/20
                to-cyan-500/20
                flex items-center justify-center
                text-3xl
              ">
                🤖
              </div>

              <div>

                <p className="text-cyan-400">
                  AI Feedback Engine
                </p>

                <h2 className="text-3xl font-bold">
                  Evaluation Result
                </h2>

              </div>

            </div>

            {/* RESULT BOX */}
            <div className="
              bg-black/20
              border border-white/10
              rounded-2xl
              p-6
              overflow-x-auto
            ">

              <pre className="
                whitespace-pre-wrap
                text-gray-300
                text-sm
              ">

                {JSON.stringify(
                  result,
                  null,
                  2
                )}

              </pre>

            </div>

          </div>
        )}

      </div>

    </DashboardLayout>
  );
}

export default MockInterview;