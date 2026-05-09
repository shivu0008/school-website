import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Phone, 
  BookOpen, 
  Trophy, 
  CheckCircle2,
  Sparkles,
  Star,
  Quote,
  Heart
} from "lucide-react";
import { translations } from "../translations";
import SectionContainer from "../components/ui/SectionContainer";
import CTASection from "../components/ui/CTASection";
import SEO from "../components/ui/SEO";
import NoticeBoard from "../components/ui/NoticeBoard";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExcellence = currentYear - 2019;

  return (
    <div className="flex flex-col bg-white">
      <SEO 
        title="Best CBSE School in Region" 
        description="Education Junction Public School offers premium CBSE education, nurturing rural talent with modern technology and moral values. Enroll your child today."
        keywords="Education Junction, Best School, CBSE School Rural, Top Primary School, Quality Education"
      />
      {/* --- MODERN ACADEMIC HERO --- */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 skew-x-[-10deg] translate-x-20 z-0 hidden lg:block" />
        
        <SectionContainer className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-lg"
            >
              <Sparkles size={16} className="text-brand-orange" />
              <span className="text-brand-orange font-bold text-[10px] uppercase tracking-widest">Premium Schooling in Rural India</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight premium-hindi-heading"
              >
                {translations.home.hero.hindi}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-400 uppercase tracking-tight font-sans"
              >
                {translations.home.hero.english}
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed font-sans"
            >
              Building a stronger foundation for the next generation with modern <span className="text-brand-blue font-bold underline decoration-brand-orange decoration-2 underline-offset-4">CBSE curriculum</span> and traditional values.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <Link to="/admissions" className="btn-primary px-8 py-4 text-base flex items-center gap-3 shadow-orange-500/20">
                APPLY NOW <ArrowRight size={20} />
              </Link>
              <a href="tel:7479987429" className="btn-secondary px-8 py-4 text-base flex items-center gap-3 shadow-brand-blue/20">
                <Phone size={18} /> CALL US
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 border-t border-gray-100"
            >
              {[
                { icon: <CheckCircle2 className="text-brand-green" size={16} />, text: "Nursery - Class 8" },
                { icon: <CheckCircle2 className="text-brand-green" size={16} />, text: "CBSE Curriculum" },
                { icon: <CheckCircle2 className="text-brand-green" size={16} />, text: "Safe Campus" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-[10px] font-black text-brand-blue/60 uppercase tracking-widest font-sans">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-gray-100 rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-[500px] object-cover" 
                alt="Joyful Learning" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-3 z-20"
            >
              <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-xl font-black text-brand-blue leading-none">100%</p>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-1">Quality Results</p>
              </div>
            </motion.div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* --- TRUST MARQUEE --- */}
      <div className="bg-brand-blue py-6 overflow-hidden text-sm md:text-base">
        <div className="animate-marquee flex gap-12 font-black text-white uppercase italic tracking-tighter hindi-text">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap">
              <Sparkles className="text-brand-orange" size={16} />
              {translations.home.admissions.hindi} | {translations.home.admissions.english}
              <Star className="text-brand-orange fill-brand-orange" size={16} />
            </span>
          ))}
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-gray-50">
        <SectionContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Students", val: "500+", icon: <Users size={20} /> },
            { label: "Faculty", val: "25+", icon: <GraduationCap size={20} /> },
            { label: "Years", val: `${yearsOfExcellence}+`, icon: <Trophy size={20} /> },
            { label: "Safety", val: "100%", icon: <ShieldCheck size={20} /> },
          ].map((stat, i) => (
            <div key={i} className="premium-card p-8 text-center flex flex-col items-center gap-3 hover:border-brand-orange hover:-translate-y-1">
              <div className="text-brand-orange mb-1">{stat.icon}</div>
              <p className="text-4xl font-black text-brand-blue tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </SectionContainer>
      </section>

      {/* --- DYNAMIC NOTICE BOARD --- */}
      <NoticeBoard />

      {/* --- PRINCIPAL'S MESSAGE --- */}
      <SectionContainer className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-brand-orange font-black text-[10px] tracking-[0.3em]">
             LEADERSHIP MESSAGE
          </div>
          <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tighter premium-hindi-heading">
            प्रधानाध्यापक का संदेश<br />
            <span className="text-brand-orange font-sans text-xl lg:text-2xl italic">Principal's Vision</span>
          </h2>
          <div className="relative p-8 bg-gray-50 rounded-[2.5rem] border-l-[10px] border-brand-blue">
            <Quote className="absolute top-4 right-8 text-gray-200" size={60} />
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed italic relative z-10 hindi-text">
              "हमारा उद्देश्य केवल साक्षरता नहीं, बल्कि बच्चों का सर्वांगीण विकास है। हम ग्रामीण प्रतिभाओं को तराश कर उन्हें वैश्विक प्रतिस्पर्धा के लिए तैयार कर रहे हैं।"
            </p>
          </div>
          <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-full border-[3px] border-brand-orange overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Principal" loading="lazy" />
             </div>
             <div>
                <p className="text-xl font-black text-brand-blue uppercase tracking-tighter leading-none font-sans">Dr. S. Kumar</p>
                <p className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mt-1 font-sans">Principal, Education Junction</p>
             </div>
          </div>
        </motion.div>

        <div className="relative">
           <div className="absolute -inset-3 bg-brand-orange rounded-[3rem] rotate-2 -z-10" />
           <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Child Studying and Laughing" 
                loading="lazy"
              />
           </div>
        </div>
      </SectionContainer>

      {/* --- ACADEMIC PILLARS --- */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <SectionContainer className="relative z-10">
          <div className="text-center space-y-4 mb-20">
             <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none font-sans text-brand-orange">Our Foundations</h2>
             <div className="h-1 w-24 bg-white/20 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen size={40} />, title: "CBSE Standard", h: "CBSE पाठ्यक्रम", d: "Academic excellence following national standards for Class 8." },
              { icon: <Heart size={40} />, title: "Values", h: "संस्कार", d: "Building character through moral and cultural education." },
              { icon: <ShieldCheck size={40} />, title: "Safety", h: "सुरक्षा", d: "Modern security protocols to ensure student well-being." },
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center group"
              >
                <div className="text-brand-orange mb-6 inline-block bg-white/5 p-5 rounded-xl group-hover:scale-110 transition-transform">{p.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-1 font-sans">{p.title}</h3>
                <p className="text-brand-orange font-bold text-xl mb-4 tracking-wide hindi-text">{p.h}</p>
                <p className="text-white/60 font-medium text-base leading-relaxed font-sans">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <CTASection 
        variant="compact"
        badgeText="Limited Seats Available"
        hindiTitle={
          <>
            <span>Join Our</span>
            <br />
            <span className="text-brand-orange italic">Academic Family</span>
          </>
        }
        englishTitle="Academic Family"
        description="Your child's success story begins with a single step towards world-class education."
        imageSrc="https://images.unsplash.com/photo-1544391682-178c6a583bbd?q=80&w=1200&auto=format&fit=crop"
        infoBadgeTitle="CBSE"
        infoBadgeSubtitle="Affiliated Excellence"
      />
    </div>
  );
};

export default Home;
