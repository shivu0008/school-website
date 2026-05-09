import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  FlaskConical, 
  Palette, 
  Music, 
  Lightbulb, 
  Star, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";
import Hero from "../components/ui/Hero";
import SectionContainer from "../components/ui/SectionContainer";
import CTASection from "../components/ui/CTASection";
import SEO from "../components/ui/SEO";

const Academics = () => {
  const programs = [
    {
      title: "Foundation Stage",
      hindi: "प्रारंभिक चरण (नर्सरी और केजी)",
      age: "Ages 3-5",
      icon: <Star />,
      iconColor: "text-brand-orange",
      features: ["Play-based learning", "Language development", "Motor skills", "Social interaction"]
    },
    {
      title: "Primary School",
      hindi: "प्राथमिक शिक्षा (कक्षा 1-5)",
      age: "Ages 6-10",
      icon: <BookOpen />,
      iconColor: "text-brand-blue",
      features: ["Core CBSE Subjects", "EVS & Computers", "Creative Arts", "Moral Science"]
    },
    {
      title: "Middle School",
      hindi: "मिडिल स्कूल (कक्षा 6-8)",
      age: "Ages 11-14",
      icon: <GraduationCap />,
      iconColor: "text-brand-green",
      features: ["Advanced Sciences", "Social Studies", "Vocational Skills", "Leadership training"]
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-32 pb-32 bg-white"
    >
      <SEO 
        title="Academics & Curriculum" 
        description="Explore our CBSE-based academic programs from Foundation to Middle School. We focus on academic excellence, creativity, and growth."
      />
      <Hero 
        badgeIcon={<Sparkles size={16} className="text-brand-orange" />}
        badgeText="Academic Excellence"
        hindiTitle="शैक्षणिक उत्कृष्टता और विकास"
        englishSubtitle="Academic Excellence & Growth"
        description="Empowering students with a rigorous CBSE curriculum designed to foster critical thinking, creativity, and a lifelong passion for learning."
      />

      <SectionContainer className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-t-[10px] border-brand-orange space-y-8 flex flex-col items-center text-center group transition-all ring-1 ring-gray-100"
            >
              <div className={`w-20 h-20 bg-brand-blue/5 rounded-[2rem] flex items-center justify-center scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg ${p.iconColor}`}>
                {p.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-brand-blue uppercase leading-tight font-sans">{p.title}</h3>
                <p className="text-brand-orange font-bold text-lg leading-tight hindi-text">{p.hindi}</p>
                <div className="h-1 w-12 bg-gray-100 mx-auto rounded-full mt-4" />
              </div>
              <ul className="space-y-4 text-left w-full pt-4">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold text-gray-500 text-sm font-sans">
                    <CheckCircle2 size={16} className="text-brand-green" /> {f}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] pt-4">{p.age}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-brand-blue py-32 mx-4 md:mx-10 rounded-[4rem] relative overflow-hidden shadow-3xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <SectionContainer className="relative z-10 text-center space-y-24">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none">किताबों से परे शिक्षा</h2>
            <p className="text-brand-orange font-bold text-2xl lg:text-3xl italic font-sans tracking-tight uppercase">Beyond the Classroom</p>
            <div className="h-1.5 w-32 bg-brand-orange mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: <FlaskConical size={40} />, title: "Science Lab", h: "विज्ञान लैब" },
              { icon: <Palette size={40} />, title: "Arts & Crafts", h: "कला और शिल्प" },
              { icon: <Music size={40} />, title: "Music & Dance", h: "संगीत और नृत्य" },
              { icon: <Lightbulb size={40} />, title: "Technology", h: "तकनीकी शिक्षा" },
            ].map((a, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-6 group"
              >
                <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl group-hover:bg-brand-orange transition-all duration-500">
                  {a.icon}
                </div>
                <div className="space-y-1">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter font-sans">{a.title}</h3>
                   <p className="text-brand-orange font-bold text-lg hindi-text">{a.h}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10 order-2 lg:order-1">
           <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter leading-tight uppercase">
                सीखने का उत्तम वातावरण<br />
                <span className="text-brand-orange italic font-sans text-2xl lg:text-3xl tracking-[0.2em]">Academic Infrastructure.</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed font-sans">
                Our classrooms are bright, airy, and equipped with the latest teaching aids. We maintain a healthy student-teacher ratio to ensure personalized attention for every child.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm flex flex-col gap-2 group hover:border-brand-orange transition-colors">
                 <p className="text-4xl font-black text-brand-blue font-sans group-hover:text-brand-orange transition-colors">20:1</p>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-sans">Student Ratio</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm flex flex-col gap-2 group hover:border-brand-orange transition-colors">
                 <p className="text-4xl font-black text-brand-blue font-sans group-hover:text-brand-orange transition-colors">100%</p>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-sans">Digital Ready</p>
              </div>
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
           <div className="absolute -inset-4 bg-brand-orange rounded-[4rem] rotate-3 -z-10 opacity-10" />
           <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white aspect-video relative group">
              <img 
                src="https://images.unsplash.com/photo-1544391682-178c6a583bbd?q=75&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                alt="Modern Classroom" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors" />
           </div>
        </motion.div>
      </SectionContainer>

      <CTASection 
        variant="compact"
        badgeText="The Peak of Academic Excellence"
        hindiTitle={
          <>
            <span>बच्चे के भविष्य की</span>
            <span className="text-brand-orange italic">शानदार नींव</span>
          </>
        }
        englishTitle="Stellar Foundation"
        description="Empower your child with the knowledge and values needed to lead in a globalized world."
        imageSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
        infoBadgeTitle="CBSE"
        infoBadgeSubtitle="Standards"
      />
    </motion.div>
  );
};

export default Academics;
