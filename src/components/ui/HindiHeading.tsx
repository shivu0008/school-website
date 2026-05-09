import { motion } from "framer-motion";

interface HindiHeadingProps {
  hindiText: string;
  englishText: string;
  className?: string;
  align?: "center" | "left";
}

const HindiHeading = ({ hindiText, englishText, className = "", align = "center" }: HindiHeadingProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`space-y-4 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.h1 
        variants={fadeInUp}
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight premium-hindi-heading"
      >
        {hindiText}
      </motion.h1>
      <motion.p 
        variants={fadeInUp}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 uppercase tracking-tighter italic font-sans"
      >
        {englishText}
      </motion.p>
    </div>
  );
};

export default HindiHeading;
