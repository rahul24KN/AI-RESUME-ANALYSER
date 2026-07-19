function InterviewPreview() {

  return (

    <section
      id="interview"
      className="px-6 lg:px-12 py-32"
    >

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <span className="text-sky-300 text-sm uppercase tracking-widest">
            Interview Intelligence
          </span>

          <h2 className="text-6xl font-semibold mt-6 leading-tight">

            AI-Powered
            <br />

            Interview Practice

          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-9">

            Generate personalized technical and HR
            interview questions based on your resume,
            skills and career goals.

          </p>

          <p className="text-gray-400 text-xl mt-6 leading-9">

            Receive instant AI feedback, answer scoring,
            strengths analysis and improvement suggestions.

          </p>

        </div>

        {/* RIGHT */}
        <div className="
          bg-[#11141C]
          border border-white/5
          rounded-[40px]
          p-10
        ">

          <div className="
            border border-white/5
            rounded-3xl
            p-6
            bg-[#0B0D12]
          ">

            <p className="text-sky-300 text-sm mb-3">
              Question
            </p>

            <h3 className="text-xl font-medium">
              Explain React Virtual DOM and how it improves performance.
            </h3>

          </div>

          <div className="
            border border-white/5
            rounded-3xl
            p-6
            mt-6
            bg-[#0B0D12]
          ">

            <p className="text-sky-300 text-sm mb-3">
              AI Evaluation
            </p>

            <h3 className="text-5xl font-bold">
              8.9/10
            </h3>

            <p className="text-gray-400 mt-4">
              Strong understanding of Virtual DOM.
              Explain reconciliation process for
              a more complete answer.
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default InterviewPreview;