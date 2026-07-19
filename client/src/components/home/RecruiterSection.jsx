function RecruiterSection() {

  const features = [
    "Candidate Search",
    "Resume Analytics",
    "Skill Filtering",
    "ATS Ranking",
    "Smart Shortlisting",
    "Performance Insights",
  ];

  return (

    <section className="px-6 lg:px-12 py-32">

      <div className="
        bg-[#11141C]
        border border-white/5
        rounded-[40px]
        p-14
      ">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <span className="text-sky-300 text-sm uppercase tracking-widest">
              Recruiter Intelligence
            </span>

            <h2 className="text-6xl font-semibold mt-6">

              Hire Smarter
              <br />

              With AI

            </h2>

            <p className="text-gray-400 text-xl mt-8 leading-9">

              Empower recruiters with advanced candidate
              search, ATS rankings and skill-based filtering
              to identify the best talent faster.

            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">

            {features.map((item) => (

              <div
                key={item}
                className="
                  bg-[#0B0D12]
                  border border-white/5
                  rounded-3xl
                  p-6
                "
              >

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-sky-500/10
                  flex items-center
                  justify-center
                  mb-4
                ">
                  ✓
                </div>

                <h3 className="font-medium">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default RecruiterSection;