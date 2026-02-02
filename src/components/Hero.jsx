import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-20 px-4 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        {/* TEXT */}
        <span className="mt-35 text-sm text-blue-400 tracking-wide">
          Smart Expense Tracking
        </span>

        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Track. Save. Control.
          <br />
          <span className="text-blue-500">Your Money with NORTON</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl">
          Norton helps you track expenses, monitor savings, and understand
          spending habits.
        </p>

        {/* BUTTONS */}
        <NavLink to="/tracking">
          <div className="mt-8 flex gap-4">
            <button className="px-16 py-4 rounded-3xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Start Tracking
            </button>
          </div>
        </NavLink>

        {/* FEATURES */}
        <div className="mt-12 max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          {[
            {
              title: "Smart Spending",
              desc: "Understand where your money goes with clear insights.",
            },
            {
              title: "Savings Tracker",
              desc: "Set goals and track your savings progress easily.",
            },
            {
              title: "Monthly Reports",
              desc: "Visual reports for weekly, monthly, and yearly expenses.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
