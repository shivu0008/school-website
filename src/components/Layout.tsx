import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, ChevronRight, GraduationCap, ShieldCheck, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import logo from "../assets/logo.jpeg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // --- SECRET SHORTCUT: Alt + A to jump to Admin ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "a") {
        navigate("/admin/login");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Facilities", path: "/facilities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-warm-bg font-sans">
      {/* Premium Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 group-hover:scale-105 transition-transform">
               <img src={logo} alt="Education Junction School Logo" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-brand-blue leading-none">EDUCATION JUNCTION</span>
              <span className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.3em] mt-1">Public School</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  location.pathname === link.path 
                    ? "bg-brand-blue text-white shadow-prestige-sm" 
                    : "text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-gray-200 mx-4" />
            <a 
              href="tel:7479987429"
              className="bg-brand-orange text-white px-6 py-3 rounded-full text-sm font-black shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              aria-label="Call school helpline"
            >
              <Phone size={16} /> 7479987429
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <a href="tel:7479987429" className="text-brand-orange p-2" aria-label="Call school">
              <Phone size={24} />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-blue p-2 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-bold px-6 py-4 rounded-2xl transition-all ${
                      location.pathname === link.path 
                        ? "bg-brand-blue text-white shadow-lg" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-[1px] bg-gray-100 my-2" />
                <a 
                  href="tel:7479987429"
                  className="flex items-center gap-4 px-6 py-4 bg-brand-orange/10 text-brand-orange rounded-2xl font-black"
                  aria-label="Call school helpline"
                >
                  <Phone size={20} /> 7479987429
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 min-h-[70vh]">
        {children}
      </main>

      {/* --- ELITE PRESTIGE FOOTER --- */}
      <footer className="bg-brand-blue text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-white to-brand-green opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
            
            {/* School Identity (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-2xl shadow-glow">
                  <img src={logo} alt="Education Junction Logo" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter leading-none">EDUCATION JUNCTION</h2>
                  <p className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.3em] mt-1">Public School</p>
                </div>
              </div>
              <p className="text-white/50 text-lg font-medium leading-relaxed font-sans italic">
                "Empowering the rural talent of tomorrow with world-class CBSE standards and timeless moral values."
              </p>
              <div className="flex gap-4">
                {[Phone, MessageCircle].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href={i === 0 ? "tel:7479987429" : "https://wa.me/7479987429"}
                    whileHover={{ y: -5, backgroundColor: '#F97316' }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors"
                    aria-label={i === 0 ? "Call us" : "Message us on WhatsApp"}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links (3 Cols) */}
            <div className="lg:col-span-3 space-y-8">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Navigation</h3>
              <div className="grid grid-cols-1 gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-white/60 hover:text-white font-bold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Contact (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-brand-orange">Direct Access</h3>
              <div className="space-y-6">
                <a href="tel:7479987429" className="block group" aria-label="Call school helpline">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Campus Helpline</p>
                  <p className="text-3xl font-black group-hover:text-brand-orange transition-colors font-sans tracking-tighter">7479987429</p>
                </a>
                <div className="pt-6 border-t border-white/5">
                   <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Admission Office</p>
                   <p className="text-lg font-bold text-white/80 leading-relaxed font-sans">
                     Rural Education Hub, Near Village Center,<br />
                     Open Mon-Sat: 8:00 AM - 2:00 PM
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-2">
               <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                 © {currentYear} Education Junction Public School. All Rights Reserved.
               </p>
               <Link to="/admin/login" className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black text-white/10 hover:text-brand-orange transition-all uppercase tracking-[0.3em] group">
                  <Lock size={10} className="group-hover:animate-bounce" /> Staff Portal
               </Link>
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
               <span className="flex items-center gap-2"><ShieldCheck size={12} className="text-brand-green" /> Safety Verified</span>
               <span className="flex items-center gap-2"><GraduationCap size={12} className="text-brand-orange" /> CBSE Affiliated</span>
            </div>
          </div>
        </div>

        {/* Floating Call Action (Mobile Only) */}
        <motion.a 
          href="tel:7479987429"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-brand-orange text-white p-5 rounded-[2rem] shadow-3xl z-50 md:hidden flex items-center justify-center border-4 border-white"
          aria-label="Call Now"
        >
          <Phone size={28} fill="currentColor" />
        </motion.a>
      </footer>
    </div>
  );
};

export default Layout;
