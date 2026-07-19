function About() {
  return (

    <section
      id="about"
      className="px-6 lg:px-12 py-32"
    >

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <span className="text-sky-300 text-sm uppercase tracking-widest">
            About Platform
          </span>

          <h2 className="text-6xl font-semibold mt-6 leading-tight">

            Built For
            <br />

            Modern Recruitment

          </h2>

        </div>

        <div>

          <p className="text-xl text-gray-400 leading-9">

            AI Resume Analyzer is an intelligent recruitment
            platform designed to help candidates and recruiters
            make better hiring decisions.

          </p>

          <p className="text-xl text-gray-400 leading-9 mt-8">

            Using AI-powered resume parsing, ATS scoring,
            interview intelligence and analytics, the platform
            transforms traditional hiring into a data-driven process.

          </p>

        </div>

      </div>

    </section>

  );
}

export default About;