import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { ReactNode } from "react";

interface QuoteSectionProps {
  quote: ReactNode;
  author: string;
  authorTitle?: string;
  className?: string;
}

const QuoteSection = ({ 
  quote, 
  author, 
  authorTitle, 
  className = "" 
}: QuoteSectionProps) => {
  return (
    <section className={`section-container relative ${className}`}>
       <motion.div 
         initial={{ opacity: 0, scale: 0.98 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         className="relative group overflow-hidden rounded-[4rem] shadow-3xl bg-brand-blue min-h-[450px] flex items-center justify-center border-b-[16px] border-brand-orange"
       >
          {/* --- PERFORMANCE OPTIMIZED BACKGROUND --- */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
             {/* Single efficient glow pulse */}
             <motion.div 
               animate={{ opacity: [0.05, 0.15, 0.05] }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-transparent to-brand-green/20"
             />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 flex flex-col items-center text-center">
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white/5 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 mb-10 shadow-2xl"
             >
                <Quote size={48} className="text-brand-orange" fill="currentColor" />
             </motion.div>

             <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-10"
             >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-sans drop-shadow-2xl">
                  {quote}
                </h2>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                     <div className="h-[2px] w-12 bg-brand-orange/50 rounded-full" />
                     <p className="text-brand-orange font-black text-xl md:text-2xl uppercase tracking-[0.4em] italic font-sans">
                       {author}
                     </p>
                     <div className="h-[2px] w-12 bg-brand-orange/50 rounded-full" />
                  </div>
                  {authorTitle && (
                    <p className="text-white/40 font-bold text-[10px] uppercase tracking-[0.5em]">{authorTitle}</p>
                  )}
                </div>
             </motion.div>
          </div>
       </motion.div>
    </section>
  );
};

export default QuoteSection;
