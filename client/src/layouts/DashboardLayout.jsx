import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

function DashboardLayout({
  children,
}) {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [isOpen, setIsOpen] =
    useState(false);

  const role =
    localStorage.getItem(
      "role"
    );

  // LOGOUT
  const handleLogout =
    () => {

      localStorage.clear();

      navigate("/login");
    };

  // ACTIVE LINK
  const activeLink =
    (path) => {

      return location.pathname === path
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
        : "text-gray-300 hover:bg-white/10";
    };

  return (

    <div className="flex min-h-screen bg-black overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0a0f2c]" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* SIDEBAR */}
      <div
        onMouseEnter={() =>
          setIsOpen(true)
        }
        onMouseLeave={() =>
          setIsOpen(false)
        }
        className={`
          fixed top-0 left-0 h-screen z-50
          transition-all duration-500
          ${isOpen
            ? "w-72"
            : "w-24"
          }
        `}
      >

        <div className="h-full bg-white/10 backdrop-blur-xl border-r border-white/10 shadow-2xl p-4 flex flex-col">

          {/* LOGO */}
          <div className="mb-10 flex items-center gap-4 px-2">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-2xl">
              🚀
            </div>

            {isOpen && (
              <div>

                <h1 className="text-2xl font-bold text-white">
                  HireSphere
                </h1>

                <p className="text-cyan-400 text-sm">
                  AI Platform
                </p>

              </div>
            )}

          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-4">

            {/* CANDIDATE */}
            {role === "candidate" && (

              <>

                <Link
                  to="/candidate-dashboard"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition duration-300 ${activeLink(
                    "/candidate-dashboard"
                  )}`}
                >

                  <span className="text-2xl">
                    🏠
                  </span>

                  {isOpen && (
                    <span>
                      Dashboard
                    </span>
                  )}

                </Link>

                <Link
                  to="/upload"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition duration-300 ${activeLink(
                    "/upload"
                  )}`}
                >

                  <span className="text-2xl">
                    📄
                  </span>

                  {isOpen && (
                    <span>
                      Upload Resume
                    </span>
                  )}

                </Link>

                <Link
                  to="/mock-interview"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition duration-300 ${activeLink(
                    "/mock-interview"
                  )}`}
                >

                  <span className="text-2xl">
                    🎤
                  </span>

                  {isOpen && (
                    <span>
                      Mock Interview
                    </span>
                  )}

                </Link>

              </>
            )}

            {/* RECRUITER */}
            {role === "recruiter" && (

              <>

                <Link
                  to="/recruiter"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition duration-300 ${activeLink(
                    "/recruiter"
                  )}`}
                >

                  <span className="text-2xl">
                    📊
                  </span>

                  {isOpen && (
                    <span>
                      Recruiter Dashboard
                    </span>
                  )}

                </Link>

                <Link
                  to="/analytics"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition duration-300 ${activeLink(
                    "/analytics"
                  )}`}
                >

                  <span className="text-2xl">
                    📈
                  </span>

                  {isOpen && (
                    <span>
                      Analytics
                    </span>
                  )}

                </Link>

              </>
            )}

          </nav>

          {/* AI CARD */}
          {isOpen && (

            <div className="mt-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-5">

              <p className="text-cyan-300 text-sm mb-2">
                AI Assistant
              </p>

              <h2 className="text-white text-lg font-bold leading-snug">
                Improve your hiring intelligence
              </h2>

              <button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                Open AI
              </button>

            </div>

          )}

          {/* SPACER */}
          <div className="flex-1"></div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 bg-red-500/80 hover:bg-red-600 text-white p-4 rounded-2xl transition duration-300"
          >

            <span className="text-2xl">
              🚪
            </span>

            {isOpen && (
              <span>
                Logout
              </span>
            )}

          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div
        className={`
          relative z-10 flex-1 p-6 transition-all duration-500
          ${isOpen
            ? "ml-72"
            : "ml-24"
          }
        `}
      >

        {/* TOP NAVBAR */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] px-8 py-5 mb-6 flex items-center justify-between shadow-2xl">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 mt-1">
              AI-powered recruitment dashboard
            </p>

          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl cursor-pointer hover:scale-110 transition">
              🔔
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-2xl px-4 py-2">

              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>

              <div>

                <p className="text-white font-semibold capitalize">
                  {role}
                </p>

                <p className="text-gray-400 text-sm">
                  AI User
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* PAGE CONTENT */}
        <div>

          {children}

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;