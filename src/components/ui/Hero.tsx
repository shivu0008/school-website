import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroProps {
  badgeIcon?: ReactNode;
  badgeText?: string;
  hindiTitle: string;
  englishSubtitle: string;
  description: string;
  className?: string;
}

const Hero = ({ 
  badgeIcon, 
  badgeText, 
  hindiTitle, 
  englishSubtitle, 
  description, 
  className = "" 
}: HeroProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={`relative pt-10 lg:pt-20 overflow-hidden text-center px-6 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-blue/[0.03] -skew-y-3 origin-top-left -z-10" />
      
      <div className="max-w-7xl mx-auto space-y-10">
        {badgeText && (
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-brand-orange/10 border border-brand-orange/20 px-6 py-2 rounded-full shadow-sm"
          >
            {badgeIcon}
            <span className="text-brand-orange font-black text-xs uppercase tracking-[0.4em]">{badgeText}</span>
          </motion.div>
        )}

        <div className="space-y-4">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight premium-hindi-heading"
          >
            {hindiTitle}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 uppercase tracking-tighter italic font-sans"
          >
            {englishSubtitle}
          </motion.p>
        </div>

        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
