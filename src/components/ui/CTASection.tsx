import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, GraduationCap, Star, Award, Zap } from "lucide-react";
import type { ReactNode } from "react";

interface CTASectionProps {
  variant?: "blue" | "orange" | "dimension" | "compact";
  badgeText?: string;
  hindiTitle: ReactNode;
  englishTitle?: string;
  description: string;
  imageSrc: string;
  enrollLink?: string;
  phoneText?: string;
  phoneHref?: string;
  infoBadgeIcon?: ReactNode;
  infoBadgeTitle?: string;
  infoBadgeSubtitle?: string;
  trustItems?: Array<{ icon: ReactNode, text: string }>;
}

const CTASection = ({
  variant = "blue",
  badgeText = "The Final Step",
  hindiTitle,
  description,
  imageSrc,
  enrollLink = "/admissions",
  phoneText = "HELPDESK",
  phoneHref = "tel:7479987429",
  infoBadgeIcon = <GraduationCap size={40} className="text-brand-orange mb-4" />,
  infoBadgeTitle = "Academic Excellence",
  infoBadgeSubtitle = "CBSE Standard Curriculum",
  trustItems = [
    { icon: <Star size={16} />, text: "Ranked #1 For Development" },
    { icon: <Award size={16} />, text: "State-of-the-Art Campus" },
    { icon: <Zap size={16} />, text: "Digital Learning Integrated" }
  ]
}: CTASectionProps) => {
  const isOrange = variant === "orange";
  const isDimension = variant === "dimension";
  const isCompact = variant === "compact";

  if (isDimension) {
    return (
      <section className="section-container pt-12 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[600px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(10,37,64,0.3)] bg-brand-blue group"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
             <img src={imageSrc} className="w-full h-full object-cover opacity-20 grayscale scale-105 group-hover:scale-100 transition-transform duration-[3000ms]" alt="Background" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent" />
             <motion.div 
               animate={{ opacity: [0.1, 0.2, 0.1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-1/2 left-0 w-full h-full bg-brand-orange/20 rounded-full blur-[120px]" 
             />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24 space-y-12">
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
                <div className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                   {badgeText}
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
                   {hindiTitle}
                </h2>
                <p className="text-lg md:text-xl text-white/60 font-bold italic max-w-2xl font-sans leading-relaxed mx-auto">
                   "{description}"
                </p>
             </motion.div>

             <div className="flex flex-wrap justify-center gap-8">
                <Link 
                  to={enrollLink} 
                  className="bg-brand-orange text-white px-10 py-5 rounded-[2rem] text-xl font-black shadow-2xl hover:bg-white hover:text-brand-orange transition-all duration-500 flex items-center gap-3 uppercase"
                >
                   Enroll Now <ArrowRight size={24} />
                </Link>
                
                <a 
                  href={phoneHref}
                  className="bg-white/5 border border-white/20 text-white px-8 py-5 rounded-[2rem] text-xl font-black hover:bg-white/10 transition-all flex flex-col items-center gap-0 group/call"
                >
                   <span className="text-[8px] uppercase tracking-[0.4em] opacity-40 mb-1">{phoneText}</span>
                   <span className="text-2xl tracking-tighter flex items-center gap-3">
                      <Phone size={20} className="text-brand-orange" /> 7479987429
                   </span>
                </a>
             </div>

             <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/5 w-full max-w-4xl">
                {trustItems.map((item, i) => (
                   <div key={i} className="flex items-center gap-2 text-white/30 font-black text-[9px] uppercase tracking-[0.3em]">
                      <span className="text-brand-orange">{item.icon}</span>
                      {item.text}
                   </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (isCompact) {
    return (
      <section className="section-container pt-20 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-brand-blue shadow-2xl group"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
             <img src={imageSrc} className="w-full h-full object-cover opacity-20 grayscale scale-105 group-hover:scale-100 transition-transform duration-[3000ms]" alt="Background" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent" />
             <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[100px] rounded-full translate-x-1/2" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-16">
             <div className="lg:col-span-8 space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-1.5 rounded-full">
                   <span className="text-brand-orange font-black text-[9px] uppercase tracking-[0.4em]">{badgeText}</span>
                </div>
                <div className="space-y-4">
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
                      {hindiTitle}
                   </h2>
                   <p className="text-lg lg:text-xl text-white/60 font-bold italic font-sans max-w-xl">
                      "{description}"
                   </p>
                </div>
                <div className="flex flex-wrap gap-6">
                   <Link to={enrollLink} className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-white hover:text-brand-orange transition-all flex items-center gap-3 uppercase">
                      Enroll Now <ArrowRight size={20} />
                   </Link>
                   <a href={phoneHref} className="flex flex-col justify-center group/call">
                      <p className="text-white/40 font-black text-[9px] uppercase tracking-widest leading-none mb-1">{phoneText}</p>
                      <p className="text-2xl font-black text-white tracking-tighter group-hover:text-brand-orange transition-colors">7479987429</p>
                   </a>
                </div>
             </div>
             <div className="lg:col-span-4 hidden lg:block relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] rotate-2 group-hover:rotate-0 transition-transform duration-700">
                   <img src={imageSrc} className="w-full h-full object-cover" alt="Student" />
                </div>
                <div className="absolute -inset-4 bg-brand-orange opacity-10 rounded-[3rem] -rotate-2 -z-10" />
             </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="section-container pt-12 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden rounded-[4rem] ${isOrange ? "bg-brand-orange" : "bg-brand-blue"} shadow-[0_50px_100px_rgba(10,37,64,0.3)]`}
      >
        <div className="absolute inset-0 z-0 opacity-40">
           <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${isOrange ? "bg-white/20" : "bg-brand-orange/5"} rounded-full blur-[150px] -mr-96 -mt-96`} />
           <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${isOrange ? "bg-brand-blue/20" : "bg-brand-green/5"} rounded-full blur-[120px] -ml-48 -mb-48`} />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="p-12 lg:p-24 space-y-12 flex flex-col justify-center border-r border-white/5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`inline-flex items-center gap-4 ${isOrange ? "text-brand-blue" : "text-brand-orange"}`}
            >
              <div className={`h-[1px] w-12 ${isOrange ? "bg-brand-blue" : "bg-brand-orange"}`} />
              <span className="font-black text-xs uppercase tracking-[0.5em]">{badgeText}</span>
            </motion.div>

            <div className="space-y-8">
              <h2 className={`text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.3] uppercase flex flex-col gap-y-2`}>
                 {hindiTitle}
              </h2>
              <p className={`text-xl lg:text-2xl ${isOrange ? "text-brand-blue/60" : "text-white/40"} font-bold font-sans italic max-w-xl leading-relaxed`}>
                 "{description}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to={enrollLink} 
                className={`${isOrange ? "bg-brand-blue" : "bg-brand-orange"} text-white px-12 py-6 rounded-[2rem] text-2xl font-black shadow-2xl hover:bg-white ${isOrange ? "hover:text-brand-blue" : "hover:text-brand-orange"} transition-all duration-500 text-center flex items-center justify-center gap-4 group`}
              >
                ENROLL NOW <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href={phoneHref}
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-[2rem] text-2xl font-black hover:bg-white/10 transition-all text-center flex items-center justify-center gap-4"
              >
                <Phone size={24} /> {phoneText}
              </a>
            </div>
          </div>

          <div className="relative group/visual overflow-hidden min-h-[400px]">
             <img 
               src={imageSrc} 
               className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover/visual:grayscale-0 group-hover/visual:scale-105 transition-all duration-[2000ms]" 
               alt="Visual Prestige" 
             />
             <div className={`absolute inset-0 bg-gradient-to-r ${isOrange ? "from-brand-orange via-brand-orange/60" : "from-brand-blue via-brand-blue/60"} to-transparent lg:bg-gradient-to-l`} />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/20 text-white shadow-3xl max-w-xs"
             >
                {infoBadgeIcon}
                <p className="text-2xl font-black italic tracking-tighter leading-none mb-2">{infoBadgeTitle}</p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">{infoBadgeSubtitle}</p>
             </motion.div>
          </div>
        </div>

        <div className="bg-white/5 border-t border-white/5 p-8 flex flex-wrap justify-center gap-12 lg:gap-24">
           {trustItems.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 ${isOrange ? "text-brand-blue/40" : "text-white/30"} font-black text-[10px] uppercase tracking-[0.4em]`}>
                 <span className={isOrange ? "text-brand-blue" : "text-brand-orange"}>{item.icon}</span>
                 {item.text}
              </div>
           ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
