import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Heart, 
  Target, 
  Users, 
  Globe, 
  Star, 
  History,
  Award,
  Sparkles
} from "lucide-react";
import Hero from "../components/ui/Hero";
import SectionContainer from "../components/ui/SectionContainer";
import CTASection from "../components/ui/CTASection";
import SEO from "../components/ui/SEO";

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExcellence = currentYear - 2019;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-32 pb-32 bg-white"
    >
      <SEO 
        title="Our Story & Vision" 
        description="Learn about the legacy of Education Junction Public School. Since 2019, we have been committed to empowering rural talent with global standards."
      />
      <Hero 
        badgeIcon={<History size={16} className="text-brand-orange" />}
        badgeText="Our Legacy Since 2019"
        hindiTitle="हमारी कहानी और संकल्प"
        englishSubtitle="Our Story & Commitment"
        description="Dedicated to empowering rural talent through a fusion of modern technology, CBSE standards, and deep-rooted Indian values."
      />

      <SectionContainer className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 text-brand-orange font-black text-[10px] tracking-[0.3em]">
            <div className="w-10 h-[2px] bg-brand-orange"></div> THE GENESIS
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-brand-blue tracking-tighter leading-none">
            ग्रामीण बच्चों के लिए<br />
            <span className="text-brand-orange italic font-sans text-2xl lg:text-3xl">A New Vision.</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-600 font-medium leading-relaxed">
            <p className="hindi-text text-xl border-l-8 border-brand-orange pl-8 py-2">
              एजुकेशन जंक्शन पब्लिक स्कूल की शुरुआत 2019 में इस विश्वास के साथ हुई थी कि स्थान किसी बच्चे की क्षमता को सीमित नहीं करना चाहिए। हमने ग्रामीण क्षेत्रों में गुणवत्तापूर्ण शिक्षा की कमी को दूर करने का संकल्प लिया।
            </p>
            <p className="font-sans">
              Since our establishment, we have bridged the gap between rural surroundings and global opportunities. We don't just teach subjects; we ignite the spark of curiosity and build the character required for the 21st century.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-gray-100">
               <div className="flex flex-col gap-3">
                  <div className="bg-brand-blue text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-xl">
                    <Sparkles size={24} />
                  </div>
                  <p className="font-black text-brand-blue text-lg uppercase tracking-tighter">Modern Campus</p>
                  <p className="text-sm text-gray-500 font-sans">World-class infrastructure designed for the specific needs of primary learners.</p>
               </div>
               <div className="flex flex-col gap-3">
                  <div className="bg-brand-orange text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-xl">
                    <Users size={24} />
                  </div>
                  <p className="font-black text-brand-blue text-lg uppercase tracking-tighter">Expert Mentors</p>
                  <p className="text-sm text-gray-500 font-sans">A team of dedicated educators who treat every student like their own family.</p>
               </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-6 bg-brand-blue/[0.03] rounded-[3rem] -rotate-2 -z-10" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] aspect-[4/5] border-[12px] border-white ring-1 ring-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=75&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              alt="Founding Vision" 
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-brand-orange p-8 rounded-[2.5rem] shadow-3xl text-white">
             <p className="text-4xl font-black leading-none">{yearsOfExcellence}+</p>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-80">Years of Growth</p>
          </div>
        </motion.div>
      </SectionContainer>

      <section className="bg-brand-blue py-32 mx-4 md:mx-10 rounded-[3rem] relative shadow-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <SectionContainer className="relative z-10 text-center space-y-20">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">हमारे मुख्य मूल्य</h2>
            <p className="text-brand-orange font-bold text-xl lg:text-2xl italic font-sans tracking-tight uppercase">Our Foundation Pillars</p>
            <div className="h-1 w-24 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Heart size={36} />, title: "Compassion", h: "सहानुभूति", d: "We nurture every child with the warmth and care of a second home." },
              { icon: <Target size={36} />, title: "Excellence", h: "उत्कृष्टता", d: "Striving for the highest academic standards since our first day." },
              { icon: <Award size={36} />, title: "Honesty", h: "ईमानदारी", d: "Instilling strong moral values and integrity in our students." },
            ].map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] flex flex-col items-center gap-6 transition-all group"
              >
                <div className="bg-brand-orange/10 p-5 rounded-2xl text-brand-orange group-hover:scale-110 transition-transform shadow-2xl">
                  {v.icon}
                </div>
                <div className="space-y-2">
                   <h3 className="text-2xl font-black text-white uppercase leading-none font-sans tracking-tighter">{v.title}</h3>
                   <p className="text-brand-orange font-bold text-xl tracking-wide hindi-text">{v.h}</p>
                </div>
                <p className="text-white/50 font-medium text-base leading-relaxed font-sans">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
           <div className="absolute inset-0 bg-brand-orange rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-700 -z-10" />
           <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-[10px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=75&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                alt="Joyful Students" 
                loading="lazy"
              />
           </div>
           <div className="absolute top-10 -right-10 bg-white p-6 rounded-full shadow-3xl border-4 border-brand-orange animate-bounce">
              <p className="text-brand-blue font-black text-center leading-none uppercase font-sans text-sm">Top Tier<br/><span className="text-[10px] text-gray-400 font-bold">Rural Education</span></p>
           </div>
        </div>

        <div className="space-y-10">
           <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-brand-blue tracking-tighter leading-tight uppercase">
                सीखने का उत्तम दर्शन<br />
                <span className="text-brand-orange italic font-sans text-2xl lg:text-3xl">Our Philosophy.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed font-sans italic">
                "We believe education is the key that unlocks the door to a world of endless possibilities."
              </p>
           </div>

           <div className="space-y-8">
              {[
                { icon: <ShieldCheck />, title: "Safety First", h: "सर्वोच्च सुरक्षा", d: "A 24/7 monitored safe haven for your precious child." },
                { icon: <Globe />, title: "Global Skills", h: "वैश्विक कौशल", d: "Preparing students for international competition." },
                { icon: <Star />, title: "Individual Care", h: "व्यक्तिगत ध्यान", d: "Small class sizes for personalized growth trajectories." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group items-center">
                   <div className="bg-brand-blue/5 p-4 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-md">
                      {item.icon}
                   </div>
                   <div className="space-y-1">
                      <p className="text-xl font-black text-brand-blue uppercase tracking-tighter font-sans leading-none">{item.title}</p>
                      <p className="text-brand-orange font-bold text-lg tracking-wide hindi-text leading-none">{item.h}</p>
                      <p className="text-gray-500 font-sans text-xs font-medium mt-1">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </SectionContainer>

      <CTASection 
        variant="compact"
        badgeText="Be a part of our family"
        hindiTitle={
          <>
            <span>बदलते कल की</span>
            <span className="text-brand-orange italic">शानदार शुरुआत</span>
          </>
        }
        englishTitle="Sparkling Beginning"
        description="Start your child's journey with us today and watch them grow into a global leader."
        imageSrc="https://images.unsplash.com/photo-1544391682-178c6a583bbd?q=80&w=1200&auto=format&fit=crop"
        infoBadgeIcon={<History size={40} className="text-brand-orange mb-4" />}
        infoBadgeTitle="Since 2019"
        infoBadgeSubtitle="Years of Excellence"
      />
    </motion.div>
  );
};

export default About;
