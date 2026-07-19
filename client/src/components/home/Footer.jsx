function Footer() {

  return (

    <footer className="
      border-t border-white/5
      px-6 lg:px-12
      py-20
    ">

      <div className="grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>

          <h2 className="text-2xl font-semibold">
            AI Resume Analyzer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">

            AI-powered recruitment intelligence platform
            for candidates and recruiters.

          </p>

        </div>

        {/* PRODUCT */}
        <div>

          <h3 className="font-semibold mb-5">
            Product
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Resume Analysis</li>
            <li>ATS Scoring</li>
            <li>Skill Gap Detection</li>
            <li>Interview Intelligence</li>

          </ul>

        </div>

        {/* PLATFORM */}
        <div>

          <h3 className="font-semibold mb-5">
            Platform
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Candidate Dashboard</li>
            <li>Recruiter Dashboard</li>
            <li>Analytics</li>
            <li>Job Matching</li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="font-semibold mb-5">
            Connect
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>Support</li>

          </ul>

        </div>

      </div>

      <div className="
        border-t border-white/5
        mt-16
        pt-8
        text-center
        text-gray-500
      ">

        © 2026 AI Resume Analyzer.
        All Rights Reserved.

      </div>

    </footer>

  );
}

export default Footer;