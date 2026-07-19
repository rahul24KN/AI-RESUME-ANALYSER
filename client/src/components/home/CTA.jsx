import { Link } from "react-router-dom";

function CTA() {

  return (

    <section className="px-6 lg:px-12 py-32">

      <div className="
        bg-[#11141C]
        border border-white/5
        rounded-[40px]
        p-16 lg:p-24
        text-center
      ">

        <span className="text-sky-300 text-sm uppercase tracking-widest">
          Get Started
        </span>

        <h2 className="text-5xl lg:text-7xl font-semibold mt-8">

          Ready To Transform
          <br />

          Your Career?

        </h2>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-9">

          Join the next generation recruitment platform.
          Analyze resumes, improve ATS scores, prepare for
          interviews and unlock career opportunities with AI.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <Link
            to="/register"
            className="
              px-10 py-5
              rounded-2xl
              bg-white
              text-black
              font-medium
            "
          >
            Start Free
          </Link>

          <Link
            to="/login"
            className="
              px-10 py-5
              rounded-2xl
              border border-white/10
            "
          >
            View Platform
          </Link>

        </div>

      </div>

    </section>

  );
}

export default CTA;