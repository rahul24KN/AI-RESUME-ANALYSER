function Testimonials() {

  const testimonials = [
    {
      name: "Final Year Student",
      text:
        "The ATS insights helped improve my resume score from 68% to 91%.",
    },
    {
      name: "Software Engineer",
      text:
        "The AI interview assistant helped me prepare for technical rounds effectively.",
    },
    {
      name: "Technical Recruiter",
      text:
        "Candidate screening became faster and more accurate using ATS analytics.",
    },
  ];

  return (

    <section className="px-6 lg:px-12 py-32">

      <span className="text-sky-300 text-sm uppercase tracking-widest">
        Testimonials
      </span>

      <h2 className="text-6xl font-semibold mt-6 mb-20">
        Trusted By Users
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        {testimonials.map((item) => (

          <div
            key={item.name}
            className="
              bg-[#11141C]
              border border-white/5
              rounded-[32px]
              p-10
            "
          >

            <div className="text-4xl mb-6">
              "
            </div>

            <p className="text-gray-300 leading-8 text-lg">

              {item.text}

            </p>

            <div className="mt-8">

              <h4 className="font-semibold">
                {item.name}
              </h4>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Testimonials;