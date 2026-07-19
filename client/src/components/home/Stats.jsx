function Stats() {

  const stats = [
    ["10K+", "Resumes Analyzed"],
    ["95%", "ATS Accuracy"],
    ["5000+", "Interview Sessions"],
    ["50+", "Technology Domains"],
  ];

  return (

    <section className="px-6 lg:px-12 py-24">

      <div className="grid md:grid-cols-4 gap-8">

        {stats.map((item) => (

          <div
            key={item[1]}
            className="bg-[#11141C] border border-white/5 rounded-3xl p-10"
          >

            <h2 className="text-5xl font-bold text-white">
              {item[0]}
            </h2>

            <p className="text-gray-400 mt-4">
              {item[1]}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Stats;