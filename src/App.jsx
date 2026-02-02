import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Targets from "./components/Targets";
import Saving from "./components/Saving";
import Spending from "./components/Spending";
import Tracking from "./components/Tracking";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/targets" element={<Targets />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/spending" element={<Spending />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>

      <Footer />
    </div>
  );
}
