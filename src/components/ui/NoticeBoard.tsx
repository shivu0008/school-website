import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Megaphone, Calendar, ChevronRight, Sparkles, Clock } from "lucide-react";

// FIREBASE IMPORTS
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  priority: boolean;
  date: any;
}

const NoticeBoard = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // REAL-TIME LISTENER FOR FIREBASE
    const q = query(collection(db, "notices"), orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const noticesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().timestamp?.toDate() || new Date()
      })) as Notice[];
      
      setNotices(noticesData);
      setLoading(false);
    }, (error) => {
      console.error("Firebase fetch error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <section className="section-container">
      <div className="bg-brand-blue rounded-[3rem] overflow-hidden shadow-2xl relative border-t-8 border-brand-orange">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Header Column (4 Cols) */}
          <div className="lg:col-span-4 bg-white/5 p-12 flex flex-col justify-center gap-6 border-r border-white/5">
             <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center shadow-glow animate-pulse">
                <Megaphone size={32} className="text-white" />
             </div>
             <div className="space-y-2">
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">सूचना पट्ट</h2>
                <p className="text-brand-orange font-bold text-lg uppercase tracking-widest italic font-sans">Notice Board</p>
             </div>
             <p className="text-white/40 text-sm font-medium font-sans">Stay updated with the latest campus announcements, exam schedules, and holiday alerts.</p>
          </div>

          {/* Notices List (8 Cols) */}
          <div className="lg:col-span-8 p-8 lg:p-12 space-y-6 max-h-[500px] overflow-y-auto custom-scrollbar">
            <AnimatePresence>
              {notices.length > 0 ? (
                notices.map((notice) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/10 transition-all group ${notice.priority ? 'border-l-4 border-l-brand-orange' : ''}`}
                  >
                    <div className="bg-white/10 p-4 rounded-xl text-brand-orange group-hover:scale-110 transition-transform">
                       <Calendar size={24} />
                    </div>
                    <div className="flex-1 space-y-1">
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-brand-orange/20 text-brand-orange rounded-md">
                             {notice.category}
                          </span>
                          <span className="text-white/30 text-[10px] flex items-center gap-1 font-sans">
                             <Clock size={10} /> {new Date(notice.date).toLocaleDateString()}
                          </span>
                       </div>
                       <h3 className="text-xl font-black text-white tracking-tight">{notice.title}</h3>
                       <p className="text-white/60 text-sm font-medium font-sans line-clamp-1 group-hover:line-clamp-none transition-all">{notice.content}</p>
                    </div>
                    <ChevronRight className="text-white/20 group-hover:text-brand-orange group-hover:translate-x-2 transition-all hidden md:block" />
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-4">
                   <Sparkles className="text-white/10" size={60} />
                   <p className="text-white/30 font-black uppercase tracking-widest text-sm italic">No active notices at this moment.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
