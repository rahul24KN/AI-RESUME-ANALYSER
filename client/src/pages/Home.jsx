import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import Features from "../components/home/Features";
import ATSPreview from "../components/home/ATSPreview";
import InterviewPreview from "../components/home/InterviewPreview";
import RecruiterSection from "../components/home/RecruiterSection";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

function Home() {

  return (

    <div className="
      bg-[#0B0D12]
      text-white
      min-h-screen
      overflow-x-hidden
    ">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">

        <div className="
          absolute
          top-0
          left-1/4
          w-[500px]
          h-[500px]
          bg-[#643335]/12
          blur-[150px]
          rounded-full
        "></div>

        <div className="
          absolute
          bottom-10
          right-10
          w-[600px]
          h-[600px]
          bg-[#F2E9DB]/4
          blur-[180px]
          rounded-full
        "></div>

      </div>

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Features />

      <ATSPreview />

      <InterviewPreview />

      <RecruiterSection />

      <Testimonials />

      <CTA />

      <Footer />

    </div>

  );
}

export default Home;