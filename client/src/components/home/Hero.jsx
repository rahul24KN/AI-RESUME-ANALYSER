import { Link } from "react-router-dom";

function Hero() {
  return (

    <section className="pt-8 lg:pt-12 pb-20 px-6 lg:px-12">

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">

        <div className="flex flex-col justify-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight">
            The Future Of Hiring Starts Here.
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-8 font-light">
            AI Resume Analyzer is an intelligent recruitment platform that helps candidates optimize their resumes and improve ATS performance. It uses AI to analyze skills, identify gaps, and provide personalized recommendations. The platform generates interview questions based on resume content and evaluates candidate responses. Recruiters can efficiently screen and rank applicants using AI-driven insights. Built for modern hiring, it bridges the gap between talent and opportunity.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="px-8 py-4 rounded-2xl bg-[#F2E9DB] text-[#101820] font-semibold hover:bg-[#F2E9DB]/95 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#101820]/10"
            >
              Start Analysis
            </Link>

            <button className="px-8 py-4 rounded-2xl border border-[#F2E9DB]/20 bg-transparent text-[#F2E9DB] hover:bg-[#F2E9DB]/5 transition-all duration-300 transform hover:-translate-y-0.5">
              View Demo
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center">

          <div className="w-[360px] h-[360px] lg:w-[450px] lg:h-[450px] rounded-full border border-white/10 bg-[#11141C] flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-violet-500/10 opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <h2 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-[#F2E9DB] to-[#A59C94] bg-clip-text text-transparent relative z-10">
              91%
            </h2>

            <p className="text-gray-400 mt-4 text-base lg:text-lg relative z-10 font-medium tracking-wide">
              ATS Compatibility
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;