function ATSPreview() {

  return (

    <section
      id="ats"
      className="px-6 lg:px-12 py-32"
    >

      <div className="
        bg-[#11141C]
        border border-white/5
        rounded-[40px]
        p-12
      ">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <span className="text-sky-300 text-sm uppercase tracking-widest">
              ATS Intelligence
            </span>

            <h2 className="text-5xl font-semibold mt-6">
              Resume Analysis Report
            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-8">

              Our ATS engine evaluates keyword relevance,
              formatting quality, technical skills and role
              compatibility.

            </p>

          </div>

          {/* RIGHT */}
          <div>

            <div className="
              border border-white/5
              rounded-3xl
              p-8
              bg-[#0B0D12]
            ">

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  ATS Score
                </h3>

                <span className="text-4xl font-bold text-sky-300">
                  91%
                </span>

              </div>

              {/* MATCHED */}
              <div className="mt-10">

                <h4 className="text-lg font-medium mb-4">
                  Matched Skills
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="
                      px-4 py-2
                      rounded-xl
                      bg-green-500/10
                      text-green-300
                    "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* MISSING */}
              <div className="mt-10">

                <h4 className="text-lg font-medium mb-4">
                  Missing Skills
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Docker",
                    "AWS",
                    "CI/CD",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="
                      px-4 py-2
                      rounded-xl
                      bg-red-500/10
                      text-red-300
                    "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* AI SUGGESTION */}
              <div className="
                mt-10
                border border-sky-500/10
                bg-sky-500/5
                rounded-2xl
                p-5
              ">

                <p className="text-gray-300">

                  Adding Docker, AWS and CI/CD projects
                  can increase ATS compatibility by 12%.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default ATSPreview;