import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Droplets, 
  Wind, 
  Wifi, 
  Library, 
  Trophy, 
  Monitor,
  HeartPulse,
  Sparkles,
  School,
  CheckCircle2
} from "lucide-react";
import Hero from "../components/ui/Hero";
import SectionContainer from "../components/ui/SectionContainer";
import CTASection from "../components/ui/CTASection";
import SEO from "../components/ui/SEO";

const Facilities = () => {
  const mainFacilities = [
    {
      icon: <School size={40} />,
      title: "Modern Classrooms",
      hindi: "साफ-सुथरी कक्षाएं",
      desc: "Spacious, cross-ventilated classrooms equipped with ergonomic furniture and modern teaching aids to ensure a comfortable learning environment.",
      color: "brand-blue"
    },
    {
      icon: <Droplets size={40} />,
      title: "Pure Drinking Water",
      hindi: "शुद्ध पेयजल",
      desc: "RO-purified water stations installed across the campus, providing safe and clean drinking water for all students and staff.",
      color: "brand-orange"
    },
    {
      icon: <Trophy size={40} />,
      title: "Elite Sports Ground",
      hindi: "खेल का मैदान",
      desc: "Extensive play areas for various sports, including football, cricket, and specialized junior play zones for motor skill development.",
      color: "brand-green"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Safe & Secure Campus",
      hindi: "सुरक्षित परिसर",
      desc: "24/7 CCTV surveillance and trained security personnel ensure a completely safe environment for your precious child.",
      color: "brand-blue"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-32 pb-32 bg-white"
    >
      <SEO 
        title="Campus Facilities" 
        description="Explore the world-class infrastructure at Education Junction Public School. From digital labs to safe play areas, we provide everything for your child's growth."
      />

      <Hero 
        badgeIcon={<Sparkles size={16} className="text-brand-orange" />}
        badgeText="World-Class Infrastructure"
        hindiTitle="बेहतर भविष्य के लिए आधुनिक सुविधाएँ"
        englishSubtitle="Designed for Excellence"
        description="We provide a nurturing environment backed by high-end facilities that bridge the gap between traditional learning and modern technology."
      />

      {/* --- CORE INFRASTRUCTURE GRID --- */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mainFacilities.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 lg:p-16 rounded-[3.5rem] bg-gray-50 border border-gray-100 flex flex-col gap-8 group transition-all hover:bg-white hover:shadow-2xl`}
            >
              <div className="flex justify-between items-start">
                 <div className={`p-6 rounded-3xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-orange group-hover:text-white transition-all shadow-lg`}>
                   {f.icon}
                 </div>
                 <div className="bg-white px-4 py-2 rounded-full border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">Essential</div>
              </div>
              <div className="space-y-4">
                 <h3 className="text-3xl font-black text-brand-blue uppercase tracking-tighter leading-none">{f.title}</h3>
                 <p className="text-brand-orange font-bold text-xl leading-none hindi-text italic">{f.hindi}</p>
                 <p className="text-gray-500 font-medium leading-relaxed font-sans text-lg pt-4">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* --- PREMIUM HIGHLIGHT SECTION (DIGITAL & LIBRARY) --- */}
      <section className="bg-brand-blue py-32 mx-4 md:mx-10 rounded-[4rem] relative overflow-hidden shadow-3xl text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        
        <SectionContainer className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none">डिजिटल लर्निंग लैब</h2>
                 <p className="text-brand-orange font-bold text-2xl lg:text-3xl italic font-sans tracking-tight uppercase leading-none">The Digital Frontier</p>
                 <div className="h-1.5 w-24 bg-brand-orange rounded-full" />
              </div>
              <p className="text-xl text-white/60 font-medium leading-relaxed font-sans max-w-xl">
                 Our state-of-the-art computer lab is equipped with the latest systems and high-speed internet, ensuring our students are tech-savvy from an early age.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { icon: <Monitor className="text-brand-orange" />, text: "1:1 Student-PC Ratio" },
                   { icon: <Wifi className="text-brand-green" />, text: "Safe Fiber Internet" },
                   { icon: <Library className="text-brand-orange" />, text: "E-Learning Resources" },
                   { icon: <Wind className="text-brand-green" />, text: "Fully Air-Conditioned" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                       {item.icon}
                       <span className="font-bold text-sm uppercase tracking-widest">{item.text}</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative group">
              <div className="absolute -inset-4 bg-brand-orange rounded-[3rem] rotate-3 opacity-20 blur-2xl group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-3xl aspect-video">
                 <img 
                   src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" 
                   className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                   alt="Digital Lab" 
                   loading="lazy"
                 />
              </div>
           </div>
        </SectionContainer>
      </section>

      {/* --- HEALTH & TRANSPORT --- */}
      <SectionContainer className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
         <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
               <div className="absolute inset-0 bg-brand-green/5 rounded-[4rem] -rotate-3" />
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Safe Transportation" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white space-y-2">
                     <p className="font-black text-xs uppercase tracking-widest opacity-60 leading-none">Logistics</p>
                     <p className="text-3xl font-black italic leading-none">Safe Bus Service</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
               <div className="inline-flex items-center gap-2 text-brand-green font-black text-[10px] tracking-[0.4em] uppercase">
                  Care & Safety
               </div>
               <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter leading-tight uppercase">सर्वांगीण विकास हेतु <br /> <span className="text-brand-orange italic underline decoration-gray-100 underline-offset-[16px]">विशेष सुविधाएँ</span></h2>
               <p className="text-xl text-gray-500 font-medium leading-relaxed font-sans">
                  Beyond academics, we focus on the health, hygiene, and safe transportation of every student.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
               {[
                 { icon: <HeartPulse className="text-brand-orange" />, t: "First-Aid Center", h: "प्राथमिक चिकित्सा", d: "A dedicated health room with trained staff for immediate medical care." },
                 { icon: <Wifi className="text-brand-green" />, t: "GPS Enabled Buses", h: "GPS वाली बसें", d: "Track your child's journey in real-time with our secure bus fleet." }
               ].map((item, i) => (
                  <div key={i} className="space-y-4">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-50 rounded-xl">{item.icon}</div>
                        <p className="font-black text-brand-blue uppercase tracking-tighter">{item.t}</p>
                     </div>
                     <p className="text-brand-orange font-bold text-lg hindi-text leading-none">{item.h}</p>
                     <p className="text-gray-500 text-sm font-medium leading-relaxed font-sans">{item.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </SectionContainer>

      {/* --- THE FACILITY PLEDGE --- */}
      <SectionContainer>
         <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 text-center space-y-16">
               <div className="space-y-4">
                  <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter uppercase leading-none">Why Choose Our Campus?</h2>
                  <div className="h-1 w-24 bg-brand-blue mx-auto rounded-full" />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    "Zero Noise Pollution Environment",
                    "RO Filtered Water Stations",
                    "Modern Fire Safety Protocols",
                    "CCTV Surveillance (24/7)",
                    "Elite Sports Infrastructure",
                    "Digital Smart Classrooms"
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                       <div className="bg-white p-2 rounded-full shadow-lg text-brand-green group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 size={24} />
                       </div>
                       <span className="font-black text-brand-blue/70 uppercase tracking-widest text-xs text-left leading-tight">{p}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </SectionContainer>

      <CTASection 
        variant="compact"
        badgeText="Explore Our World"
        hindiTitle={
          <>
            <span>सर्वश्रेष्ठ सुविधाओं के साथ</span>
            <span className="text-brand-orange italic">शानदार कल</span>
          </>
        }
        englishTitle="Excellent Future"
        description="Experience a campus designed to bring out the best in every child. Visit us today to see our infrastructure in action."
        imageSrc="https://images.unsplash.com/photo-1544391682-178c6a583bbd?q=80&w=1200&auto=format&fit=crop"
        infoBadgeTitle="Campus"
        infoBadgeSubtitle="Standards"
      />
    </motion.div>
  );
};

export default Facilities;
