
import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";


function Login() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      email: "",

      password: "",
    });


  const [loading,
    setLoading] =
    useState(false);


  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };


  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res =
          await API.post(

            "/auth/login",

            formData
          );


        // SAVE TOKEN
        localStorage.setItem(

          "token",

          res.data.token
        );


        // SAVE ROLE
        localStorage.setItem(

          "role",

          res.data.user.role
        );


        // SAVE USER
        localStorage.setItem(

          "user",

          JSON.stringify(
            res.data.user
          )
        );


        // REDIRECT
        if (
          res.data.user.role ===
          "recruiter"
        ) {

          navigate(
            "/recruiter"
          );

        } else {

          navigate(
            "/candidate-dashboard"
          );
        }

      } catch (error) {

        console.log(error);

        alert(

          error.response?.data
            ?.message ||

          "Login Failed"
        );

      } finally {

        setLoading(false);
      }
    };


 return (
  <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-6">

    {/* SPACE BACKGROUND */}
    <div className="absolute inset-0">
      
      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0a0f2c]" />

      {/* STARS */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-52 right-40 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-72 right-20 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"></div>
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* FLOATING PLANETS */}
      <div className="absolute top-20 right-40 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-[2px] animate-bounce"></div>

      <div className="absolute bottom-20 left-40 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-pulse"></div>
    </div>

    {/* MAIN CONTAINER */}
    <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE */}
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
            Sign in
          </h2>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Johndoe@gmail.com"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl p-4 outline-none focus:border-cyan-400 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl p-4 outline-none focus:border-purple-400 transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-3 mb-6">
            <input type="checkbox" />

            <p className="text-sm text-gray-300">
              Remember me
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            {loading
              ? "Logging in..."
              : "Sign in"}
          </button>

          {/* LINKS */}
          <div className="mt-6 text-sm text-gray-300">
            <p>
              Don't have an account?
              <Link
                to="/register"
                className="text-cyan-400 font-semibold ml-1"
              >
                Sign up
              </Link>
            </p>

            <p className="mt-2 hover:text-cyan-400 cursor-pointer transition">
              Forgot Password
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-10">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition">
              G
            </div>

            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition">
              GH
            </div>

            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition">
              F
            </div>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
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
            Explore the Future of AI Recruitment
          </h1>

          <p className="text-gray-300 leading-8">
            AI Resume Analyzer is an intelligent recruitment platform that evaluates resumes, calculates ATS scores, and provides AI-driven interview and career insights
          </p>


        </div>
      </div>

    </div>
  </div>
);
}
export default Login;
