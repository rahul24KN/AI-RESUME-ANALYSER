
import { useState } from "react";

import API from "../services/api";

import { useNavigate } from "react-router-dom";


function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        formData
      );

      navigate("/");

    } catch (error) {

      console.log(error);
    }
  };


  return (
  <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-6">

    {/* SPACE BACKGROUND */}
    <div className="absolute inset-0">

      {/* MAIN GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0a0f2c]" />

      {/* STARS */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-24 right-32 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-52 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-80 right-20 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>
      </div>

      {/* GLOW ORBS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* FLOATING PLANETS */}
      <div className="absolute top-20 right-40 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-bounce"></div>

      <div className="absolute bottom-24 left-32 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
    </div>

    {/* MAIN CONTENT */}
    <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex justify-center">
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-12 w-full max-w-xl min-h-[700px] overflow-hidden text-white shadow-2xl">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

          {/* BIG LETTER */}
          <div className="text-9xl font-black opacity-10 mb-20 animate-pulse">
            H
          </div>

          <p className="text-cyan-300 mb-4">
            HireSphere
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Join The Future Of Recruitment
          </h1>

          <p className="text-gray-300 leading-8">
            Build your AI-powered career journey with
            resume analysis, ATS scoring, interview
            intelligence, and smart job matching.
          </p>

          

        </div>
      </div>

      {/* REGISTER FORM */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl"
        >

          {/* LOGO */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white tracking-wider">
              HireSphere
            </h1>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl font-bold mb-10 text-white">
            Register
          </h2>

          {/* ROLE */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Select Role
            </label>

            <select
              name="role"
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl p-4 outline-none focus:border-cyan-400 transition"
            >
              <option
                value="candidate"
                className="bg-black"
              >
                Candidate
              </option>

              <option
                value="recruiter"
                className="bg-black"
              >
                Recruiter
              </option>
            </select>
          </div>

          {/* NAME */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl p-4 outline-none focus:border-cyan-400 transition"
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Johndoe@gmail.com"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl p-4 outline-none focus:border-purple-400 transition"
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl p-4 outline-none focus:border-pink-400 transition"
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Create Account
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-300 mt-6">
            Already have an account?

            <span
              onClick={() => navigate("/")}
              className="text-cyan-400 ml-2 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </form>
      </div>

    </div>
  </div>
);
}

export default Register;

