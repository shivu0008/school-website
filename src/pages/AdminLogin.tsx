import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, User, Lock, ArrowRight, AlertCircle, Sparkles, KeyRound } from "lucide-react";
import SEO from "../components/ui/SEO";
import logo from "../assets/logo.jpeg";

// FIREBASE IMPORTS
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err: any) {
      console.error("Auth error:", err.code);
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError("Login failed. Check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <SEO title="Secure Admin Access" />

      {/* --- ELITE PERFORMANCE BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <motion.div 
           animate={{ opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_70%)]" 
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-6xl w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.4)] overflow-hidden relative z-10">
         
         {/* LEFT: BRANDING (7 Cols) */}
         <div className="lg:col-span-7 p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden bg-brand-blue/40 border-r border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 relative z-10"
            >
               <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-2xl shadow-xl">
                     <img src={logo} alt="Logo" className="w-12 h-12 object-contain rounded-lg" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-black text-white tracking-tighter leading-none">EDUCATION JUNCTION</h2>
                     <p className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.4em] mt-1">Admin Terminal</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <h3 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
                     Manage Your <br />
                     <span className="text-brand-orange italic underline decoration-white/10 underline-offset-[16px]">Legacy.</span>
                  </h3>
                  <p className="text-white/40 font-bold text-lg max-w-sm leading-relaxed">
                     "The future belongs to those who prepare for it today. Access the gateway to your institution's digital heart."
                  </p>
               </div>
            </motion.div>

            <div className="relative z-10 pt-12 flex gap-12 opacity-30">
               {[
                 { icon: <ShieldCheck size={20} />, text: "Secure SSL" },
                 { icon: <KeyRound size={20} />, text: "AES Encrypted" },
                 { icon: <Sparkles size={20} />, text: "Cloud Sync" }
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
                     {item.icon} {item.text}
                  </div>
               ))}
            </div>
         </div>

         {/* RIGHT: LOGIN FORM (5 Cols) */}
         <div className="lg:col-span-5 p-12 lg:p-20 flex flex-col justify-center bg-white/5">
            <div className="space-y-10">
               <div className="space-y-2 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 text-brand-orange font-black text-[10px] tracking-[0.5em] uppercase mb-2">
                     Identification Required
                  </div>
                  <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">Staff Login</h1>
               </div>

               <form onSubmit={handleLogin} className="space-y-6">
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-red-500/10 text-red-400 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold border border-red-500/20"
                    >
                       <AlertCircle size={18} /> {error}
                    </motion.div>
                  )}

                  <div className="space-y-4">
                     <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-orange transition-colors" size={18} />
                        <input 
                          type="email" 
                          placeholder="Admin Email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 focus:border-brand-orange/50 rounded-2xl outline-none font-bold text-white transition-all placeholder:text-white/10 text-sm"
                        />
                     </div>
                     <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-orange transition-colors" size={18} />
                        <input 
                          type="password" 
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 focus:border-brand-orange/50 rounded-2xl outline-none font-bold text-white transition-all placeholder:text-white/10 text-sm"
                        />
                     </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-orange text-white py-5 rounded-[2rem] font-black text-lg shadow-glow hover:bg-white hover:text-brand-blue transition-all duration-500 flex items-center justify-center gap-3 group uppercase tracking-widest"
                  >
                     {loading ? "Verifying..." : (
                       <>
                         Authenticate <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                       </>
                     )}
                  </button>
               </form>

               <div className="text-center pt-8 border-t border-white/5">
                  <button 
                    onClick={() => navigate("/")}
                    className="text-white/20 hover:text-brand-orange font-black text-[10px] uppercase tracking-[0.4em] transition-all"
                  >
                     ← Back to School Home
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminLogin;
