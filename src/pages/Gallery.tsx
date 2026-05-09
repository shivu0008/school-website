import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Camera, 
  Star, 
  Sparkles, 
  Expand, 
  Heart,
  LayoutGrid,
  School,
  Trophy,
  Users,
  MessageCircle,
} from "lucide-react";
import Hero from "../components/ui/Hero";
import CTASection from "../components/ui/CTASection";
import SectionContainer from "../components/ui/SectionContainer";
import SEO from "../components/ui/SEO";

// FIREBASE IMPORTS
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [cloudImages, setCloudImages] = useState<any[]>([]);

  const categories = [
    { name: "All", icon: <LayoutGrid size={18} /> },
    { name: "Campus", icon: <School size={18} /> },
    { name: "Learning", icon: <Star size={18} /> },
    { name: "Events", icon: <Trophy size={18} /> },
    { name: "Students", icon: <Users size={18} /> }
  ];

  // Hardcoded Sample Images (Will always be present)
  const sampleImages = [
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa1b424d?q=80&w=800&auto=format&fit=crop", title: "Focused Learning", category: "Learning" },
    { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", title: "Cultural Festival", category: "Events" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", title: "Happy Moments", category: "Students" },
    { url: "https://images.unsplash.com/photo-1544391682-178c6a583bbd?q=80&w=800&auto=format&fit=crop", title: "Science Lab", category: "Learning" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", title: "Interactive Class", category: "Campus" },
    { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", title: "Library", category: "Campus" },
    { url: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=800&auto=format&fit=crop", title: "Young Leaders", category: "Students" },
    { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", title: "Awards Day", category: "Events" },
  ];

  useEffect(() => {
    // Real-time Cloud Images
    const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCloudImages(snapshot.docs.map(d => d.data()));
    });
    return () => unsubscribe();
  }, []);

  // Merge Samples + Cloud
  const allImages = [...cloudImages, ...sampleImages];

  const filteredImages = filter === "All" ? allImages : allImages.filter(img => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-24 pb-32 bg-white"
    >
      <SEO 
        title="School Gallery" 
        description="Glimpses of life at Education Junction Public School. View photos of our campus, learning activities, cultural events, and happy students."
      />
      <Hero 
        badgeIcon={<Camera size={18} className="text-brand-orange" />}
        badgeText="Life at Education Junction"
        hindiTitle="स्कूल की यादें"
        englishSubtitle="Capturing Every Smile"
        description="Experience the vibrant journey of our students through these glimpses of learning, growth, and joyful moments."
      />

      <SectionContainer>
         <div className="flex flex-wrap justify-center gap-3 bg-gray-50 p-2 md:p-3 rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-sm w-full md:w-fit mx-auto overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-full text-xs md:sm font-black transition-all duration-300 whitespace-nowrap ${
                  filter === cat.name 
                  ? "bg-brand-blue text-white shadow-xl scale-105" 
                  : "text-brand-blue/60 hover:text-brand-blue hover:bg-white"
                }`}
              >
                {cat.icon}
                <span className="uppercase tracking-widest">{cat.name}</span>
              </button>
            ))}
         </div>
      </SectionContainer>

      <SectionContainer>
        <motion.div 
          layout
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div 
                key={img.url + idx}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl border-4 border-white group cursor-zoom-in aspect-[4/3] md:aspect-auto"
              >
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                  alt={img.title} 
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60 md:opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                   <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <Sparkles size={14} className="text-brand-orange" />
                      <span className="bg-brand-orange text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] px-2 md:px-3 py-1 rounded-full">{img.category}</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-2 md:mb-4">{img.title}</h3>
                   <div className="flex items-center gap-2 text-white/60 font-black text-[10px] md:text-xs uppercase tracking-widest">
                      <Expand size={12} /> View Full Image
                   </div>
                </div>

                <div className="absolute top-4 md:top-8 right-4 md:right-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/20 backdrop-blur-xl p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/30 text-white hover:bg-brand-orange transition-colors">
                      <Heart size={18} md:size={20} className="fill-transparent hover:fill-current" />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
           {/* LEFT: SOCIAL PROOF CARD (7 Cols) */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-7 bg-gray-50 rounded-[4rem] p-12 lg:p-20 border-2 border-brand-blue/5 shadow-inner relative overflow-hidden group"
           >
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="relative z-10 space-y-12">
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                       Family Trust
                    </div>
                    <motion.h2 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="text-4xl lg:text-5xl font-black text-brand-blue tracking-tight uppercase cursor-default group/title flex flex-col gap-y-1"
                    >
                       <span className="flex gap-x-4">
                          <span>अभिभावकों</span>
                          <span>का</span>
                       </span>
                       <span className="text-brand-orange italic group-hover/title:text-brand-green transition-colors duration-500 flex gap-x-4">
                          <span>अटूट</span>
                          <span>विश्वास</span>
                       </span>
                    </motion.h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed font-sans max-w-xl">
                       Join a community where every parent's dream is nurtured with care and every child's potential is realized.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:border-brand-orange transition-colors">
                       <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                          <Users size={32} />
                       </div>
                       <div>
                          <p className="text-4xl font-black text-brand-blue tracking-tighter">500+</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Happy Families</p>
                       </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:border-brand-green transition-colors">
                       <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green">
                          <MessageCircle size={32} />
                       </div>
                       <div>
                          <p className="text-4xl font-black text-brand-blue tracking-tighter">24/7</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Parent Support</p>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* RIGHT: INTERACTIVE TESTIMONIAL ORB (5 Cols) */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-5 bg-brand-blue rounded-[4rem] p-12 flex flex-col justify-center items-center text-center relative overflow-hidden text-white"
           >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10 space-y-8">
                 <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full border-4 border-brand-orange p-1 animate-spin-slow">
                       <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          <img src="https://i.pravatar.cc/150?u=indian_mom" className="w-full h-full object-cover" alt="Parent" loading="lazy" />
                       </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-brand-orange text-white p-3 rounded-full shadow-lg">
                       <Heart size={20} fill="currentColor" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-bold italic leading-relaxed font-sans">
                       "The transformation in my son's confidence after joining Education Junction is truly magical. Best decision for his future!"
                    </p>
                    <div>
                       <p className="text-xl font-black text-brand-orange uppercase tracking-tighter leading-none">Mrs. Sunita Verma</p>
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mt-2">Satisfied Parent</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </SectionContainer>

      <CTASection 
        variant="compact"
        hindiTitle={
          <>
            <span className="flex gap-x-6">
              <span>सपनों</span>
              <span>की</span>
            </span>
            <span className="text-brand-orange italic drop-shadow-2xl underline decoration-white/10 underline-offset-[12px] flex gap-x-6">
              <span>नई</span>
              <span>शुरुआत</span>
            </span>
          </>
        }
        englishTitle="Your child's legacy isn't just about the photos we capture, it's about the future we build together."
        description="Your child's legacy isn't just about the photos we capture, it's about the future we build together."
        imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
      />
    </motion.div>
  );
};

export default Gallery;
