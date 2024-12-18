import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <Cpu className="w-7 h-7 text-blue-400 transition-all duration-300 group-hover:scale-110" />
            <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-white text-xl font-bold">OMAR QM</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#case-studies">Case studies</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

export default Navbar;