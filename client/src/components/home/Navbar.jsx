import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B0D12]/80 backdrop-blur-xl border-b border-white/5">

      <div className="px-6 lg:px-12 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-semibold text-white">
          AI Resume Analyzer
        </h1>

        <div className="hidden md:flex gap-10 text-gray-400">

          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#ats">ATS</a>
          <a href="#interview">Interview AI</a>

        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-[#F2E9DB]/20 text-[#F2E9DB] hover:bg-[#F2E9DB]/5 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-[#F2E9DB] text-[#101820] font-semibold hover:bg-[#F2E9DB]/90 transition-all duration-300"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;