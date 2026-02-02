import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <NavLink to="/" className="flex items-center space-x-1">
              <span className="text-lg sm:text-xl md:text-xl font-medium">
                <span className="text-white">NOR</span>
                <span className="text-blue-400">TON</span>
              </span>
            </NavLink>
          </div>

          {/* NAV LINKS*/}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink
              to="/targets"
              className="text-gray-300 hover:text-white text-sm lg:tesxt-base"
            >
              Targets
            </NavLink>

            <NavLink
              to="/saving"
              className="text-gray-300 hover:text-white text-sm lg:tesxt-base"
            >
              Saving
            </NavLink>

            <NavLink
              to="/spending"
              className="text-gray-300 hover:text-white text-sm lg:tesxt-base"
            >
              Spending
            </NavLink>
          </div>

          <button
            className="md:hidden items-center p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <NavLink
              to="/targets"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:tesxt-base"
            >
              Targets
            </NavLink>

            <NavLink
              to="/saving"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Saving
            </NavLink>

            <NavLink
              to="/spending"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Spending
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
