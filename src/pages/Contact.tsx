import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Headphones,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import Hero from "../components/ui/Hero";
import SectionContainer from "../components/ui/SectionContainer";
import QuoteSection from "../components/ui/QuoteSection";
import SEO from "../components/ui/SEO";

const Contact = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-24 pb-32 bg-white"
    >
      <SEO 
        title="Contact Us" 
        description="Have questions? Connect with Education Junction Public School directly via call, WhatsApp, or visit our campus. We are here to help."
      />
      <Hero 
        badgeIcon={<Headphones size={18} className="text-brand-orange" aria-hidden="true" />}
        badgeText="Personalized Parent Support"
        hindiTitle="हम आपके लिए यहाँ हैं"
        englishSubtitle="Direct Connection Hub"
        description="We believe in real conversations. Connect with our academic experts directly via call, message, or a campus visit."
      />

      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CALL CARD */}
          <motion.a 
            href="tel:7479987429"
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden bg-brand-blue p-8 rounded-[3rem] shadow-xl flex flex-col items-center text-center gap-6 border-b-[12px] border-brand-orange h-full"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
               <Phone size={150} className="text-white" />
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all shadow-xl ring-1 ring-white/10">
              <Phone size={36} fill="currentColor" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="text-3xl font-black text-white leading-none">सीधे कॉल करें</h3>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest font-sans italic opacity-80">Helpline</p>
            </div>
            <p className="text-4xl font-black text-white tracking-tighter relative z-10 font-sans">7479987429</p>
            <div className="mt-auto bg-white text-brand-blue px-8 py-3 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl group-hover:bg-brand-orange group-hover:text-white transition-all">
               Call Now
            </div>
          </motion.a>

          {/* WHATSAPP CARD */}
          <motion.a 
            href="https://wa.me/7479987429"
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden bg-brand-green p-8 rounded-[3rem] shadow-xl flex flex-col items-center text-center gap-6 border-b-[12px] border-white/20 h-full"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
               <MessageCircle size={150} className="text-white" />
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-green transition-all shadow-xl ring-1 ring-white/10">
              <MessageCircle size={36} fill="currentColor" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="text-3xl font-black text-white leading-none drop-shadow-lg">व्हाट्सएप</h3>
              <p className="text-white/80 font-bold text-xs uppercase tracking-widest font-sans italic opacity-70">Instant Chat</p>
            </div>
            <div className="mt-auto bg-white text-brand-green px-10 py-4 rounded-full text-2xl font-black shadow-2xl transition-all font-sans uppercase">
               WhatsApp
            </div>
          </motion.a>

          {/* MINIMALIST MAP CARD */}
          <div className="relative group lg:col-span-1 h-full min-h-[400px]">
             <div className="absolute inset-0 bg-brand-orange rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-700 opacity-5 shadow-inner" />
             <motion.a 
                href="https://www.google.com/maps/search/?api=1&query=Education+Junction+Public+School"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl bg-gray-100 flex items-center justify-center relative group/map cursor-pointer block h-full"
             >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=75&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover/map:grayscale-0 group-hover/map:scale-110 transition-all duration-[2000ms] opacity-30" />
                <div className="absolute inset-0 bg-brand-blue/70 backdrop-blur-[2px] group-hover/map:bg-brand-blue/40 group-hover/map:backdrop-blur-none transition-all duration-700" />
                
                <div className="relative z-10 p-8 text-center space-y-6">
                   <div className="bg-white/10 backdrop-blur-2xl w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl ring-2 ring-white/20">
                      <MapPin size={36} className="text-brand-orange" fill="currentColor" />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">Find <span className="text-brand-orange italic">Campus</span></h4>
                      <p className="text-white/40 font-bold text-[8px] uppercase tracking-[0.4em] font-sans">Open in Google Maps</p>
                   </div>
                   <div className="inline-flex items-center gap-3 bg-white text-brand-blue px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-orange hover:text-white transition-all duration-300">
                      Get Route <Navigation size={14} className="animate-pulse" />
                   </div>
                </div>
             </motion.a>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-blue p-8 lg:p-12 rounded-[4rem] shadow-3xl border-t-[12px] border-brand-orange relative overflow-hidden text-white"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <MapPin size={150} className="text-white" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {[
                { icon: <MapPin className="text-brand-orange" />, title: "स्थान / Location", desc: "Rural Education Hub, CBSE Excellence Campus Center." },
                { icon: <Clock className="text-brand-green" />, title: "समय / Office Hours", desc: "Monday - Saturday: 8:00 AM to 2:00 PM Sharp." },
                { icon: <CheckCircle2 className="text-brand-orange" />, title: "सहयोग / Support", desc: "Our academic counselors will guide you through everything." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group cursor-default">
                   <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-fit group-hover:bg-brand-green/20 group-hover:border-brand-green/30 transition-all duration-500 shadow-glow group-hover:shadow-brand-green/20">{item.icon}</div>
                   <div className="space-y-1">
                      <p className="text-lg font-black text-white uppercase font-sans leading-none tracking-tighter group-hover:text-brand-green transition-colors">{item.title}</p>
                      <p className="text-white/50 text-sm font-medium font-sans leading-tight">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      </SectionContainer>

      <div className="pb-12">
        <QuoteSection 
          quote={
            <>
              "Learning gives <span className="text-brand-orange italic underline decoration-white/20 underline-offset-[12px]">creativity</span>. <br className="hidden md:block" />
              Creativity leads to <span className="text-brand-green italic">thinking</span>. <br className="hidden md:block" />
              Thinking provides <span className="text-white underline decoration-brand-orange decoration-4 underline-offset-8">knowledge</span>. <br className="hidden md:block" />
              Knowledge makes you <span className="bg-gradient-to-r from-brand-orange to-brand-green bg-clip-text text-transparent">great</span>."
            </>
          }
          author="A.P.J. Abdul Kalam"
          authorTitle="Former President & Visionary Scientist"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
