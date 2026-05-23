import Link from "next/link";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">

        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
          AI-Powered Hiring Intelligence
        </div>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight tracking-tight md:text-8xl">
          Screen and rank candidates with semantic AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          HireLens AI helps recruiters analyze resumes, detect missing skills,
          and rank candidates intelligently using transformer-based NLP.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/dashboard"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Get Started
          </Link>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Live Demo
          </button>

        </div>

      </section>

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />

    </main>
  );
}