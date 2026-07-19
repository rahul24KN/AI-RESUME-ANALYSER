function Features() {

  const features = [
    {
      title: "Resume Analysis",
      desc: "Extract skills, projects, education and experience automatically.",
    },
    {
      title: "ATS Scoring",
      desc: "Evaluate resume compatibility against modern ATS systems.",
    },
    {
      title: "Skill Gap Detection",
      desc: "Identify missing technologies and improvement opportunities.",
    },
    {
      title: "AI Interviews",
      desc: "Generate personalized technical and HR interview questions.",
    },
    {
      title: "Job Matching",
      desc: "Match candidates with relevant opportunities using AI.",
    },
    {
      title: "Analytics Dashboard",
      desc: "Track performance, ATS growth and interview readiness.",
    },
  ];

  return (

    <section
      id="features"
      className="px-6 lg:px-12 py-32"
    >

      <span className="text-sky-300 text-sm uppercase tracking-widest">
        Platform Capabilities
      </span>

      <h2 className="text-6xl font-semibold mt-6 mb-20">
        Everything You Need
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="
            bg-[#11141C]
            border border-white/5
            rounded-3xl
            p-10
            hover:border-white/10
            transition
          "
          >

            <h3 className="text-2xl font-semibold mb-5">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Features;