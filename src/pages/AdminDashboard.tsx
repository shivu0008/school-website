import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Megaphone, 
  LogOut, 
  Plus, 
  Trash2, 
  Phone,
  Calendar,
  LucideImage,
  Upload,
  Link as LinkIcon,
  Camera,
  ArrowRight
} from "lucide-react";
import SectionContainer from "../components/ui/SectionContainer";
import SEO from "../components/ui/SEO";

// FIREBASE IMPORTS
import { auth, db } from "../firebase";
import { 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  updateDoc, 
  doc, 
  deleteDoc, 
  addDoc, 
  serverTimestamp 
} from "firebase/firestore";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Forms
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [newNotice, setNewNotice] = useState({ title: "", content: "", category: "General", priority: false });
  
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [galleryMethod, setGalleryFormMethod] = useState<"upload" | "url">("upload");
  const [newImage, setNewImage] = useState({ url: "", title: "", category: "Campus" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [adminEmail, setAdminEmail] = useState<string | null>("");
  
  const navigate = useNavigate();

  // CLOUDINARY SETTINGS
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; 
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET; 

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin/login");
      } else {
        setAdminEmail(user.email);
      }
    });

    const setupListener = (collectionName: string, setter: Function) => {
      const q = query(collection(db, collectionName), orderBy("timestamp", "desc"));
      return onSnapshot(q, (snapshot) => {
        setter(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      }, (err) => {
        console.error(`Firebase Error:`, err.message);
        setLoading(false);
      });
    };

    const unsubInq = setupListener("inquiries", setInquiries);
    const unsubNotice = setupListener("notices", setNotices);
    const unsubGallery = setupListener("gallery", setGalleryItems);

    return () => {
      unsubscribeAuth();
      unsubInq();
      unsubNotice();
      unsubGallery();
    };
  }, [navigate]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, "inquiries", id), { status });
    } catch (err: any) { alert("Error: " + err.message); }
  };

  const deleteNotice = async (id: string) => {
    if (!confirm("Delete notice?")) return;
    await deleteDoc(doc(db, "notices", id));
  };

  const deleteGalleryItem = async (id: string) => {
    if (!confirm("Remove this image?")) return;
    await deleteDoc(doc(db, "gallery", id));
  };

  const postNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "notices"), {
        ...newNotice,
        timestamp: serverTimestamp()
      });
      setShowNoticeForm(false);
      setNewNotice({ title: "", content: "", category: "General", priority: false });
    } catch (err: any) { alert("Notice Error: " + err.message); }
  };

  const postGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (galleryMethod === "url") {
      try {
        await addDoc(collection(db, "gallery"), {
          ...newImage,
          timestamp: serverTimestamp()
        });
        setShowGalleryForm(false);
        setNewImage({ url: "", title: "", category: "Campus" });
      } catch (err: any) { alert("Gallery URL Error: " + err.message); }
    } else {
      if (!selectedFile) return;
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );

        const data = await response.json();
        
        if (data.secure_url) {
          await addDoc(collection(db, "gallery"), {
            url: data.secure_url,
            title: newImage.title,
            category: newImage.category,
            timestamp: serverTimestamp()
          });
          setShowGalleryForm(false);
          setSelectedFile(null);
          setPreviewUrl(null);
          setNewImage({ url: "", title: "", category: "Campus" });
        } else {
          throw new Error(data.error?.message || "Upload Failed");
        }
      } catch (err: any) {
        alert("UPLOAD ERROR: " + err.message);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-brand-blue">
      <SEO title="Admin Dashboard" />
      
      <div className="bg-brand-blue text-white py-10 shadow-prestige-lg">
        <SectionContainer className="!py-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
             <h1 className="text-3xl font-black uppercase tracking-tighter">Admin Dashboard</h1>
             <p className="text-brand-orange font-bold text-xs uppercase tracking-[0.4em]">Education Junction - {adminEmail?.split('@')[0]}</p>
          </div>
          <button onClick={handleLogout} className="bg-white/10 hover:bg-red-500/20 px-6 py-3 rounded-xl font-bold flex items-center gap-3 border border-white/10 transition-all">
             <LogOut size={18} /> Logout
          </button>
        </SectionContainer>
      </div>

      <SectionContainer className="mt-10">
         <div className="flex gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            {[
              { id: "inquiries", label: "Inquiries", icon: <Users size={20} /> },
              { id: "notices", label: "Notice Board", icon: <Megaphone size={20} /> },
              { id: "gallery", label: "Gallery", icon: <LucideImage size={20} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "bg-brand-blue text-white shadow-xl scale-105" 
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
         </div>

         {loading ? (
            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
               <div className="w-12 h-12 bg-brand-orange rounded-full mb-4" />
               <p className="font-black text-gray-400 uppercase tracking-widest text-xs italic">Connecting Securely...</p>
            </div>
         ) : (
           <AnimatePresence mode="wait">
             {activeTab === "inquiries" && (
               <motion.div key="inq" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                 <h2 className="text-2xl font-black uppercase tracking-tighter">Admission Leads ({inquiries.length})</h2>
                 <div className="grid grid-cols-1 gap-4">
                    {inquiries.length > 0 ? inquiries.map(inq => (
                      <div key={inq.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-brand-orange transition-all">
                         <div className="flex items-center gap-6">
                            <div className="bg-gray-50 p-4 rounded-2xl text-brand-blue"><Users size={32} /></div>
                            <div>
                               <p className="text-xl font-black leading-none">{inq.name}</p>
                               <p className="text-brand-orange font-bold text-[10px] uppercase mt-2 tracking-widest">{inq.studentClass}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-8">
                            <div className="text-left">
                               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Mobile</p>
                               <a href={`tel:${inq.phone}`} className="text-xl font-black text-brand-blue flex items-center gap-2 hover:text-brand-orange transition-colors font-sans"><Phone size={14} /> {inq.phone}</a>
                            </div>
                            <select value={inq.status} onChange={(e) => updateInquiryStatus(inq.id, e.target.value)} className="px-4 py-2 rounded-xl font-black text-[10px] uppercase border-2">
                               <option value="new">New</option>
                               <option value="called">Called</option>
                               <option value="enrolled">Enrolled</option>
                               <option value="archived">Archived</option>
                            </select>
                         </div>
                      </div>
                    )) : <p className="text-center py-10 font-bold text-gray-300 italic">No inquiries found.</p>}
                 </div>
               </motion.div>
             )}

             {activeTab === "notices" && (
               <motion.div key="notice" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                 <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black uppercase tracking-tighter">School Notice Board ({notices.length})</h2>
                    <button onClick={() => setShowNoticeForm(!showNoticeForm)} className="bg-brand-orange text-white px-6 py-3 rounded-xl font-black flex items-center gap-2 shadow-lg hover:scale-105 transition-all uppercase text-sm">
                       <Plus size={18} /> {showNoticeForm ? "Close" : "Post Notice"}
                    </button>
                 </div>
                 {showNoticeForm && (
                   <form onSubmit={postNotice} className="bg-white p-10 rounded-3xl border-2 border-brand-orange/20 shadow-xl space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input type="text" required value={newNotice.title} onChange={e => setNewNotice({...newNotice, title: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold outline-none" placeholder="Title" />
                         <select value={newNotice.category} onChange={e => setNewNotice({...newNotice, category: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold outline-none">
                            <option value="General">General</option>
                            <option value="Exam">Exam</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Event">Event</option>
                         </select>
                      </div>
                      <textarea required rows={4} value={newNotice.content} onChange={e => setNewNotice({...newNotice, content: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold outline-none resize-none" placeholder="Description" />
                      <button className="bg-brand-blue text-white px-10 py-4 rounded-xl font-black shadow-lg hover:bg-brand-orange transition-all uppercase">Publish Instantly</button>
                   </form>
                 )}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {notices.map(notice => (
                      <div key={notice.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 group relative overflow-hidden">
                         <div className="flex justify-between items-start relative z-10">
                            <div className="bg-brand-blue/5 p-3 rounded-xl text-brand-orange"><Calendar size={20} /></div>
                            <button onClick={() => deleteNotice(notice.id)} className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                         </div>
                         <h3 className="text-xl font-black tracking-tight">{notice.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed">{notice.content}</p>
                      </div>
                    ))}
                 </div>
               </motion.div>
             )}

             {activeTab === "gallery" && (
               <motion.div key="gallery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                 <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Gallery Management ({galleryItems.length})</h2>
                    <button onClick={() => setShowGalleryForm(!showGalleryForm)} className="bg-brand-orange text-white px-6 py-3 rounded-xl font-black flex items-center gap-2 shadow-lg hover:scale-105 transition-all uppercase text-sm">
                       <Plus size={18} /> {showGalleryForm ? "Close Form" : "Upload From System"}
                    </button>
                 </div>
                 
                 {showGalleryForm && (
                   <form onSubmit={postGalleryItem} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border-2 border-brand-orange/20 shadow-2xl space-y-10">
                      <div className="flex gap-4 p-2 bg-gray-50 rounded-2xl w-fit">
                         <button type="button" onClick={() => setGalleryFormMethod("upload")} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black transition-all ${galleryMethod === "upload" ? "bg-brand-blue text-white shadow-lg" : "text-gray-400 hover:text-brand-blue"}`}>
                            <Upload size={16} /> FROM SYSTEM
                         </button>
                         <button type="button" onClick={() => setGalleryFormMethod("url")} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black transition-all ${galleryMethod === "url" ? "bg-brand-blue text-white shadow-lg" : "text-gray-400 hover:text-brand-blue"}`}>
                            <LinkIcon size={16} /> VIA URL
                         </button>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         <div className="space-y-6">
                            {galleryMethod === "upload" ? (
                               <div className="space-y-4">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Choose Image from Computer</label>
                                  <div className="relative group/file">
                                     <input type="file" accept="image/*" required onChange={handleFileSelect} className="hidden" id="system-upload" />
                                     <label htmlFor="system-upload" className="w-full flex flex-col items-center justify-center bg-gray-50 border-4 border-dashed border-gray-100 p-12 rounded-[2rem] cursor-pointer group-hover/file:border-brand-orange/30 transition-all text-center">
                                        <div className="bg-brand-orange/10 p-6 rounded-3xl text-brand-orange mb-4 group-hover/file:scale-110 transition-transform shadow-xl">
                                           <Camera size={40} />
                                        </div>
                                        <p className="text-brand-blue font-black text-sm uppercase tracking-widest leading-none mb-2">Click to select</p>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{selectedFile ? selectedFile.name : "PNG, JPG or JPEG"}</p>
                                     </label>
                                  </div>
                               </div>
                            ) : (
                               <div className="space-y-4">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Paste Web Image Link</label>
                                  <div className="relative">
                                     <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
                                     <input type="url" required value={newImage.url} onChange={e => setNewImage({...newImage, url: e.target.value})} className="w-full pl-14 pr-6 py-6 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 rounded-[1.5rem] outline-none font-bold text-brand-blue shadow-inner" placeholder="https://images.unsplash.com/..." />
                                  </div>
                               </div>
                            )}
                         </div>

                         <div className="space-y-8">
                            <div className="space-y-4">
                               <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Preview</label>
                               <div className="aspect-video rounded-[2rem] overflow-hidden bg-gray-100 border-2 border-gray-50 flex items-center justify-center relative group">
                                  {previewUrl || newImage.url ? (
                                     <img src={previewUrl || newImage.url} alt="Preview" className="w-full h-full object-cover" />
                                  ) : (
                                     <div className="text-center opacity-20">
                                        <LucideImage size={60} className="mx-auto mb-2" />
                                        <p className="text-xs font-black uppercase tracking-widest">No File Picked</p>
                                     </div>
                                  )}
                                  {isUploading && (
                                     <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md flex flex-col items-center justify-center p-10 space-y-6">
                                        <div className="relative flex h-12 w-12">
                                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                           <span className="relative inline-flex rounded-full h-12 w-12 bg-brand-orange flex items-center justify-center"><Upload size={24} className="text-white" /></span>
                                        </div>
                                        <p className="text-white font-black text-xs uppercase tracking-[0.4em] animate-pulse">Uploading...</p>
                                     </div>
                                  )}
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-4 border-t border-gray-100">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left block">Image Info</label>
                            <div className="grid grid-cols-1 gap-4">
                               <input type="text" required value={newImage.title} onChange={e => setNewImage({...newImage, title: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold outline-none border-2 border-transparent focus:border-brand-orange/20" placeholder="e.g., Annual Sports Day 2026" />
                               <select value={newImage.category} onChange={e => setNewImage({...newImage, category: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold outline-none border-2 border-transparent focus:border-brand-orange/20">
                                  <option value="Campus">Campus</option>
                                  <option value="Learning">Learning</option>
                                  <option value="Events">Events</option>
                                  <option value="Students">Students</option>
                               </select>
                            </div>
                         </div>
                         <button disabled={isUploading || (!selectedFile && !newImage.url)} className="w-full bg-brand-blue text-white px-10 py-5 rounded-[1.5rem] font-black text-xl shadow-xl hover:bg-brand-orange transition-all uppercase flex items-center justify-center gap-4 group/publish disabled:bg-gray-200">
                            PUBLISH TO GALLERY <ArrowRight size={24} className="group-hover/publish:translate-x-2 transition-transform" />
                         </button>
                      </div>
                   </form>
                 )}

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map(item => (
                      <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm group relative aspect-video">
                         <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={() => deleteGalleryItem(item.id)} className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-xl">
                               <Trash2 size={20} />
                            </button>
                         </div>
                         <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            <p className="text-[8px] font-black text-white uppercase tracking-widest">{item.category}</p>
                         </div>
                      </div>
                    ))}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
         )}
      </SectionContainer>
    </div>
  );
};

export default AdminDashboard;
