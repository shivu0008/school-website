import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  UserPlus,
  ArrowRight,
  FileText,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import Hero from "../components/ui/Hero";
import SectionContainer from "../components/ui/SectionContainer";
import SEO from "../components/ui/SEO";

// FIREBASE IMPORTS
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "info", message: "जानकारी सुरक्षित की जा रही है..." });
    
    const schoolPhone = "7479987429";
    
    try {
      // 1. BACKUP TO FIREBASE CLOUD
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        studentClass: "Admission Inquiry",
        status: "new",
        timestamp: serverTimestamp()
      });

      // 2. CONSTRUCT WHATSAPP MESSAGE
      const message = `नमस्ते एजुकेशन जंक्शन! मैं *${formData.name}* हूँ। मैं स्कूल प्रवेश के लिए जानकारी चाहता/चाहती हूँ। कृपया मुझे मेरे इस नंबर पर संपर्क करें: *${formData.phone}*। धन्यवाद!`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${schoolPhone}?text=${encodedMessage}`;
      
      // 3. REDIRECT
      setStatus({ type: "success", message: "व्हाट्सएप खुल रहा है..." });
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error('Cloud backup failed, but continuing to WhatsApp...');
      const message = `नमस्ते एजुकेशन जंक्शन! मैं *${formData.name}* हूँ। मैं स्कूल प्रवेश के लिए जानकारी चाहता हूँ। नंबर: *${formData.phone}*`;
      window.open(`https://wa.me/${schoolPhone}?text=${encodeURIComponent(message)}`, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-24 pb-32 bg-white"
    >
      <SEO 
        title="Admissions 2026-27" 
        description="Secure your child's future at Education Junction Public School. Simple admission process, required documents list, and FAQ. Apply now."
      />
      <Hero 
        badgeIcon={<Sparkles size={18} className="text-brand-orange" />}
        badgeText="Join the Excellence"
        hindiTitle="सुनहरे भविष्य की मुस्कान यहाँ से"
        englishSubtitle="Simple Admission Process"
        description="We understand that choosing the right school is a big decision. We've made our process simple, welcoming, and entirely parent-focused." 
      /> <br />

      <SectionContainer className="relative -mt-12 lg:-mt-24 z-20">
         <div className="relative group">
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-video">
               <img 
                 src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=75&w=1200&auto=format&fit=crop" 
                 className="w-full h-full object-cover" 
                 alt="Happy Kids" 
                 loading="lazy"
               />
            </div>
         </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CALL CARD */}
          <motion.a 
            href="tel:7479987429"
            whileHover={{ y: -5 }}
            className="bg-brand-blue p-10 rounded-[3rem] shadow-xl flex flex-col justify-between group h-full border-b-8 border-brand-orange"
          >
            <div className="flex justify-between items-start">
               <div className="bg-white/10 p-5 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all shadow-xl">
                  <Phone size={32} fill="currentColor" />
               </div>
               <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
            </div>
            <div className="mt-12 space-y-2">
               <p className="text-white/50 font-black text-[10px] uppercase tracking-widest">Help on Phone</p>
               <h3 className="text-3xl font-black text-white leading-tight">सीधे कॉल करें</h3>
               <p className="text-3xl font-black text-brand-orange font-sans tracking-tighter">7479987429</p>
            </div>
          </motion.a>

          {/* WHATSAPP CARD */}
          <motion.a 
            href="https://wa.me/7479987429"
            whileHover={{ y: -5 }}
            className="bg-brand-green p-10 rounded-[3rem] shadow-xl flex flex-col justify-between group h-full"
          >
            <div className="flex justify-between items-start">
               <div className="bg-white/10 p-5 rounded-2xl text-white group-hover:bg-white group-hover:text-brand-green transition-all shadow-xl">
                  <MessageCircle size={32} fill="currentColor" />
               </div>
               <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
            </div>
            <div className="mt-12 space-y-2">
               <p className="text-white/60 font-black text-[10px] uppercase tracking-widest leading-none">Instant Chat</p>
               <h3 className="text-3xl font-black text-white leading-tight">व्हाट्सएप संदेश</h3>
               <p className="text-xl font-bold text-white uppercase opacity-80 tracking-widest font-sans">Message Now</p>
            </div>
          </motion.a>

          {/* COMPACT CALLBACK FORM */}
          <div className="premium-card p-10 relative overflow-hidden border-t-8 border-brand-blue flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-6 opacity-5">
                <UserPlus size={100} className="text-brand-blue" />
             </div>
             <div className="relative z-10 space-y-6">
                <div>
                   <h3 className="text-2xl font-black text-brand-blue leading-none">हमें बताएं</h3>
                   <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-1">Quick Callback</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                   <input 
                     type="text" 
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 p-4 rounded-2xl text-lg font-bold outline-none font-sans"
                     placeholder="Name / नाम"
                   />
                   <input 
                     type="tel" 
                     required
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 p-4 rounded-2xl text-lg font-bold outline-none font-sans"
                     placeholder="Mobile / मोबाइल"
                   />
                   <button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-brand-blue text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-brand-orange transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                   >
                      {isSubmitting ? "Sending..." : "REQUEST CALL"}
                   </button>
                   {status.message && <p className="text-center text-xs font-black text-brand-blue animate-pulse">{status.message}</p>}
                </form>
             </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center !pb-4">
         <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
               <h2 className="text-4xl lg:text-5xl font-black text-brand-blue leading-tight tracking-tighter uppercase">जरूरी दस्तावेज</h2>
               <p className="text-brand-orange font-bold text-xl uppercase tracking-widest font-sans italic leading-none">Required Documents</p>
               <div className="h-1 w-24 bg-brand-orange mx-auto lg:mx-0 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 "Child's Aadhaar Card",
                 "Birth Certificate",
                 "Previous School TC",
                 "Passport Size Photos",
                 "Parent's Aadhaar",
                 "Residence Proof"
               ].map((doc, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 group hover:bg-white hover:border-brand-orange transition-all">
                    <CheckCircle2 size={20} className="text-brand-green" />
                    <span className="font-bold text-gray-700 font-sans">{doc}</span>
                 </div>
               ))}
            </div>
         </div>
         <div className="bg-brand-blue p-12 lg:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <FileText size={200} />
            </div>
            <div className="relative z-10 space-y-8">
               <h3 className="text-4xl font-black italic tracking-tighter uppercase">Physical Help</h3>
               <p className="text-xl text-white/70 font-medium leading-relaxed">
                  चिंता न करें! यदि आपके पास दस्तावेज नहीं हैं या आप फॉर्म नहीं भर पा रहे हैं, तो स्कूल आएं। हमारा स्टाफ आपकी पूरी मदद करेगा।
               </p>
               <div className="flex items-center gap-4 bg-white/10 p-6 rounded-[2rem] border border-white/10">
                  <ShieldCheck size={32} className="text-brand-orange" />
                  <p className="font-black text-sm uppercase tracking-[0.2em]">100% In-Person Support</p>
               </div>
            </div>
         </div>
      </SectionContainer>

      <section className="bg-gray-50 pt-8 pb-8 mx-4 md:mx-10 rounded-[4rem] border border-gray-100">
         <SectionContainer className="max-w-4xl space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-5xl font-black text-brand-blue uppercase tracking-tighter">अक्सर पूछे जाने वाले प्रश्न</h2>
               <p className="text-brand-orange font-bold text-xl uppercase tracking-widest font-sans">Common Questions</p>
            </div>
            <div className="space-y-6">
               {[
                 { q: "प्रवेश के लिए क्या उम्र होनी चाहिए?", a: "नर्सरी के लिए बच्चे की उम्र 3+ वर्ष होनी चाहिए।" },
                 { q: "क्या स्कूल बस की सुविधा उपलब्ध है?", a: "हाँ, ग्रामीण क्षेत्रों के लिए सुरक्षित bus सेवा उपलब्ध है।" },
                 { q: "स्कूल का समय क्या है?", a: "सुबह 8:00 से दोपहर 2:00 बजे तक (सोमवार से शनिवार)।" },
                 { q: "क्या फीस का भुगतान किश्तों में किया जा सकता है?", a: "हाँ, हम अभिभावकों की सुविधा के लिए आसान किश्तों की सुविधा देते हैं।" },
                 { q: "प्रवेश परीक्षा (Entrance Test) का क्या नियम है?", a: "प्रारंभिक कक्षाओं के लिए केवल सामान्य संवाद होता है, जबकि कक्षा 1 से ऊपर के लिए एक बुनियादी योग्यता परीक्षा ली जाती है।" },
                 { q: "क्या स्कूल में यूनिफॉर्म और किताबें उपलब्ध हैं?", a: "हाँ, स्कूल में ही यूनिफॉर्म और सभी आवश्यक पाठ्यपुस्तकों का काउंटर उपलब्ध है।" },
                 { q: "क्या पढ़ाई के साथ खेलकूद पर भी ध्यान दिया जाता है?", a: "बिल्कुल! हम बच्चों के सर्वांगीण विकास के लिए योग, खेल, संगीत और कला को शिक्षा का हिस्सा मानते हैं।" },
                 { q: "सुरक्षा के लिए स्कूल में क्या विशेष प्रबंध हैं?", a: "पूरा परिसर सीसीटीवी कैमरों की निगरानी में है और महिला स्टाफ बच्चों की सुरक्षा और देखभाल के लिए हमेशा मौजूद रहती है।" }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:border-brand-orange transition-all cursor-pointer">
                    <div className="flex justify-between items-center">
                       <h4 className="text-xl font-black text-brand-blue hindi-text">{faq.q}</h4>
                       <ChevronDown size={20} className="text-brand-orange group-hover:rotate-180 transition-transform" />
                    </div>
                    <p className="mt-4 text-gray-500 font-bold font-sans text-sm border-t border-gray-50 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">{faq.a}</p>
                 </div>
               ))}
            </div>
         </SectionContainer>
      </section>

      <SectionContainer className="!pt-4">
         <div className="bg-brand-blue rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-3xl text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-transparent" />
            <div className="relative z-10 space-y-12">
               <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <MapPin size={48} className="text-brand-orange animate-bounce" />
               </div>
               <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-tight font-sans">
                 Visit Our Campus Today<br/>
                 <span className="text-brand-orange italic">स्कूल आकर अपना स्थान सुरक्षित करें</span>
               </h2>
               <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-left space-y-2">
                     <p className="text-white/40 font-black text-xs uppercase tracking-[0.3em]">Address</p>
                     <p className="text-xl font-bold text-white font-sans">Rural Education Hub, Near Village Center</p>
                  </div>
                  <div className="w-[1px] h-12 bg-white/20 hidden md:block" />
                  <div className="text-left space-y-2">
                     <p className="text-white/40 font-black text-xs uppercase tracking-[0.3em]">Contact</p>
                     <p className="text-xl font-bold text-white font-sans">7479987429</p>
                  </div>
               </div>
            </div>
         </div>
      </SectionContainer>
    </motion.div>
  );
};

export default Admissions;
