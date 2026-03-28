import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, X, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const line1 = "JACK";
  const line2 = "YASINTON HUVANUNDANA";
  const subtitle = "CREATIVITY IS POWER";

  return (
    <section id="home" className="snap-section flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover desaturate contrast-125"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black via-transparent to-cinematic-black" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-5xl md:text-[12rem] font-display font-black tracking-tighter leading-none text-white"
          >
            {line1}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-xl md:text-6xl font-display font-black tracking-tighter leading-none text-white/80 uppercase"
          >
            {line2}
          </motion.h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-1">
          {subtitle.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.03 }}
              className="text-[10px] md:text-xs tracking-[0.5em] text-cinematic-gold font-medium"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-cinematic-gold/50">Scroll to Begin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-cinematic-gold w-5 h-5" />
        </motion.div>
      </motion.div>
      
      {/* Light Leak Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cinematic-gold/5 to-transparent pointer-events-none" />
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="snap-section grid lg:grid-cols-2 min-h-screen">
      <div className="relative h-[40vh] md:h-[50vh] lg:h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ 
            scale: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 1 },
            whileHover: { duration: 0.6, ease: "easeInOut" }
          }}
          className="w-full h-full cursor-pointer group"
        >
          <img 
            src="https://drive.google.com/thumbnail?id=1dAY2mOZh_LoUqEm9hUxDFr6LkyoPNIlY&sz=w1600" 
            alt="Portrait" 
            className="w-full h-full object-cover object-top lg:object-center contrast-110 transition-all duration-700 group-hover:contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cinematic-gold/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cinematic-black" />
        </motion.div>
      </div>
      
      <div className="flex flex-col justify-center p-12 md:p-24 bg-cinematic-black">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-8"
        >
          VDO Producer & Editor
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-6xl font-display font-bold mb-8 leading-tight"
        >
          Crafting stories through <span className="italic text-cinematic-gold">cinematic</span> and <span className="italic text-cinematic-gold">storytelling</span> for your brand.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-cinematic-offwhite/60 leading-relaxed max-w-md mb-12"
        >
          Experienced in full-cycle video and content production, from concept and scriptwriting to filming and post-production. I specialize in managing production projects for corporate clients, particularly in Healthcare and marketing content, with a focus on visual storytelling and systematic problem-solving.
        </motion.p>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-cinematic-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase">VDO Producer & Editor</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-cinematic-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Content Strategist</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase mb-4">Personal</h4>
            <ul className="text-[10px] tracking-widest text-cinematic-offwhite/40 space-y-2 uppercase">
              <li>Age: 24 Years</li>
              <li>Nationality: Thai</li>
              <li>Based: Bangkok</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase mb-4">Qualities</h4>
            <ul className="text-[10px] tracking-widest text-cinematic-offwhite/40 space-y-2 uppercase">
              <li>Detail Oriented</li>
              <li>Pressure Resistant</li>
              <li>Strategic Planner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: "Motion Graphic" | "Film & Production" | "Design" | "Photography" | "VDO Creation" | "Creative";
  subCategory?: string;
  period: "University Student" | "Internship" | "Work Experience";
  img: string;
  videoUrl?: string;
  description: string;
  details: string[];
  gallery: string[];
}

const projects: Project[] = [
  // Motion Graphic
  { 
    id: "mg-1",
    title: "WINTER WORLD TOUR", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    description: "High-value commercial production for the Winter World Tour campaign.",
    details: ["After Effects", "Commercial Production", "Visual Effects"],
    gallery: ["https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800"]
  },
  // Film & Production
  { 
    id: "fp-1",
    title: "RAJYINDEE HOSPITAL SERIES", 
    year: "2025", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Medical & Healthcare",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    description: "Comprehensive content production covering 12 medical centers for Rajyindee Hospital, ensuring high-quality visual storytelling for healthcare excellence.",
    details: ["Production Management", "Healthcare Content", "Directing", "Quality Control"],
    gallery: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "fp-2",
    title: "LUXURY REAL ESTATE", 
    year: "2025", 
    role: "VDO Editor", 
    category: "Film & Production",
    subCategory: "Real Estate & Luxury",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Cinematic showcase for high-end properties valued over 100 million THB, focusing on architectural elegance and lifestyle branding.",
    details: ["Cinematography", "Color Grading", "Luxury Branding", "Post-Production"],
    gallery: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "fp-3",
    title: "DLG CORPORATE FILM", 
    year: "2025", 
    role: "Lead Producer", 
    category: "Film & Production",
    subCategory: "Corporate & Branding",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200",
    description: "High-end corporate branding film for Digital Light Group, showcasing the full spectrum of production capabilities and creative vision.",
    details: ["Creative Strategy", "Production Oversight", "Client Relations", "Technical Directing"],
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "fp-4",
    title: "MEDICAL INNOVATION SHOWCASE", 
    year: "2025", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Medical & Healthcare",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    description: "Visual documentation of advanced medical procedures and cutting-edge equipment for specialized clinics and research centers.",
    details: ["Technical Directing", "Medical Accuracy", "Visual Storytelling", "Cinematography"],
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "fp-5",
    title: "COMMERCIAL TVC CAMPAIGN", 
    year: "2025", 
    role: "Production Manager", 
    category: "Film & Production",
    subCategory: "Commercial & TVC",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    description: "Managing large-scale TV commercial production with over 20+ crew members, ensuring seamless logistics and high production value.",
    details: ["Crew Coordination", "Budget Management", "Logistics", "Timeline Management"],
    gallery: [
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800"
    ]
  },
  { 
    id: "fp-6",
    title: "BRANDED DOCUMENTARY", 
    year: "2025", 
    role: "VDO Editor", 
    category: "Film & Production",
    subCategory: "Documentary & Story",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    description: "Capturing authentic brand stories through a documentary lens, focusing on human connection and narrative depth.",
    details: ["Narrative Editing", "Sound Design", "Color Grading", "Storytelling"],
    gallery: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    ]
  },
  // Design
  { 
    id: "ds-1",
    title: "WELLNESS BRAND CONTENT", 
    year: "2025", 
    role: "Content Creator", 
    category: "Design",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    description: "Developing visual content and marketing strategy for wellness and lifestyle brands.",
    details: ["Graphic Design", "Marketing Strategy", "Visual Identity"],
    gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"]
  },
  // Photography
  { 
    id: "ph-1",
    title: "PRODUCTION MANAGEMENT", 
    year: "2025", 
    role: "Production Lead", 
    category: "Film & Production",
    subCategory: "Corporate & Branding",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    description: "Coordinating and managing over 20 production crews for large-scale corporate projects.",
    details: ["Team Leadership", "Timeline Management", "Quality Control"],
    gallery: ["https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=800"]
  },
  { 
    id: "uni-1",
    title: "PROJECTION MAPPING", 
    year: "2024", 
    role: "Digital Media Artist", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    description: "Experimental projection mapping project for architectural surfaces.",
    details: ["3D Mapping", "Visual Art", "Technical Setup"],
    gallery: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"]
  },
  // VDO Creation
  { 
    id: "vdo-p-1",
    title: "สืบสุขภาพ", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/4lMT_cHgaXM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=4lMT_cHgaXM&list=PLUl4gxkKqtSM5T-q3Lmd9DeJVWgtkKYg9",
    description: "Medical series for Rajthanee Hospital focusing on healthcare investigation and awareness.",
    details: ["Healthcare Content", "Production Management", "Directing"],
    gallery: ["https://img.youtube.com/vi/4lMT_cHgaXM/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-2",
    title: "ROLE MODEL", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/dlFUVCemv_M/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dlFUVCemv_M&list=PLUl4gxkKqtSNKXGaCfX8Z91mmZrPSDv8q",
    description: "Series showcasing healthcare role models and their impact on the community.",
    details: ["Interview Series", "Storytelling", "Production Oversight"],
    gallery: ["https://img.youtube.com/vi/dlFUVCemv_M/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-3",
    title: "HEALTHY HOME", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/7hnD4psuhfw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=7hnD4psuhfw&list=PLUl4gxkKqtSPuxDsklug6QC5p3wxPMas4",
    description: "Educational series about maintaining a healthy living environment at home.",
    details: ["Educational Content", "Home Wellness", "Creative Direction"],
    gallery: ["https://img.youtube.com/vi/7hnD4psuhfw/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-4",
    title: "เปิดปุ่มสุขภาพ", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/jL_Zek3XoTE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/jL_Zek3XoTE?feature=share",
    description: "Short-form content for quick healthcare tips and insights.",
    details: ["Short-form Video", "Social Media", "Quick Content"],
    gallery: ["https://img.youtube.com/vi/jL_Zek3XoTE/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-5",
    title: "มุมไม่ลับ", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/bIqJuFZzXIk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=bIqJuFZzXIk&list=PLUl4gxkKqtSP5tCaVqmm6jZ2r3pCSn6CQ&pp=0gcJCbwEOCosWNin",
    description: "Behind-the-scenes and exclusive insights into healthcare practices.",
    details: ["Documentary Style", "Exclusive Content", "Production Management"],
    gallery: ["https://img.youtube.com/vi/bIqJuFZzXIk/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-6",
    title: "MASTER ยา", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/_N6doTCRKUE/maxresdefault.jpg",
    videoUrl: "https://youtu.be/_N6doTCRKUE?si=ZksUTSmtecPRJNEF",
    description: "Educational series about medication and pharmaceutical knowledge.",
    details: ["Pharmaceutical Content", "Educational Series", "Technical Directing"],
    gallery: ["https://img.youtube.com/vi/_N6doTCRKUE/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-7",
    title: "MOVE SMART TALK", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/TdJtPbBw3Zk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TdJtPbBw3Zk&list=PLUl4gxkKqtSPyEbmjytNv88EG_YP9G1m5",
    description: "Talk show series focusing on smart movement and physical health.",
    details: ["Talk Show", "Physical Health", "Production Oversight"],
    gallery: ["https://img.youtube.com/vi/TdJtPbBw3Zk/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-8",
    title: "HEALTHY KITCHEN", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/NAplV_m0vT0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=NAplV_m0vT0&list=PLUl4gxkKqtSOMfJ4A4j1AIhajnX7iXdbk",
    description: "Cooking series focusing on healthy recipes and nutrition.",
    details: ["Cooking Show", "Nutrition", "Creative Direction"],
    gallery: ["https://img.youtube.com/vi/NAplV_m0vT0/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-9",
    title: "HEALTH ME FIT", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/nLdzJyOn-GQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=nLdzJyOn-GQ&list=PLUl4gxkKqtSPY1GGNGOT-WRoO8BDBhXAL&pp=0gcJCbwEOCosWNin",
    description: "Fitness series for health enthusiasts, focusing on exercise and wellness.",
    details: ["Fitness Content", "Wellness", "Production Management"],
    gallery: ["https://img.youtube.com/vi/nLdzJyOn-GQ/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-10",
    title: "HEALTH CREDIT", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/s_Mz-vid2eA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=s_Mz-vid2eA&list=PLUl4gxkKqtSM5u9k_8LeeLVlUTtXjLusp",
    description: "Series about health credits and benefits for patients and the community.",
    details: ["Healthcare Benefits", "Informative Series", "Production Oversight"],
    gallery: ["https://img.youtube.com/vi/s_Mz-vid2eA/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-11",
    title: "พูดให้ KID", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/pGnHLTfVPpQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/pGnHLTfVPpQ?feature=share",
    description: "Short-form content focusing on children's health and communication.",
    details: ["Pediatric Health", "Short-form Video", "Creative Direction"],
    gallery: ["https://img.youtube.com/vi/pGnHLTfVPpQ/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-12",
    title: "DR. CARE", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/TdwaiJpKbdk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TdwaiJpKbdk&list=PLUl4gxkKqtSMLgtXyG1Fo4YStj8Y42x-_",
    description: "Series focusing on doctor-patient care and medical expertise.",
    details: ["Medical Expertise", "Patient Care", "Production Management"],
    gallery: ["https://img.youtube.com/vi/TdwaiJpKbdk/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-13",
    title: "ทนายไทยในสวีเดน", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/6TlepQqWqgI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/6TlepQqWqgI?si=ILNzjrfGXA7gq9jz",
    description: "Content for Thai lawyers in Sweden, focusing on legal advice and community support.",
    details: ["Legal Content", "Community Support", "Social Media"],
    gallery: ["https://img.youtube.com/vi/6TlepQqWqgI/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-14",
    title: "SUCCESS VISION", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/ORhwv59-vrk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/ORhwv59-vrk?feature=share",
    description: "Visionary content focusing on success stories and business insights.",
    details: ["Business Insights", "Success Stories", "Production Oversight"],
    gallery: ["https://img.youtube.com/vi/ORhwv59-vrk/maxresdefault.jpg"]
  },
  { 
    id: "vdo-p-15",
    title: "WINTER WORLD TOUR", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "VDO Producer",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/w1JokK2LKNo/maxresdefault.jpg",
    videoUrl: "https://youtu.be/w1JokK2LKNo?si=NSSTGeHAxZABqFjb",
    description: "Cinematic production for the Winter World Tour campaign.",
    details: ["Travel Content", "Cinematic Production", "Creative Direction"],
    gallery: ["https://img.youtube.com/vi/w1JokK2LKNo/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-1",
    title: "MUSIC VIDEO EDIT", 
    year: "2025", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    description: "Dynamic editing for a contemporary music video, focusing on rhythm and visual impact.",
    details: ["Rhythmic Editing", "Color Grading", "Visual Effects"],
    gallery: ["https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800"]
  },
  { 
    id: "vdo-e-2",
    title: "CORPORATE INTERVIEW EDIT", 
    year: "2025", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "Professional editing for corporate interviews, ensuring clear messaging and polished visuals.",
    details: ["Interview Editing", "Audio Mastering", "Motion Graphics"],
    gallery: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"]
  },
  // Creative
  { 
    id: "cr-1",
    title: "BRAND STORYTELLING", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    period: "Work Experience",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "Developing unique brand narratives and creative concepts for digital marketing.",
    details: ["Creative Direction", "Storyboarding", "Concept Development"],
    gallery: ["https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800"]
  }
];

export const Work: React.FC<{ 
  onProjectSelect: (p: Project) => void;
  onCategorySelect: (cat: Project['category']) => void;
}> = ({ onProjectSelect, onCategorySelect }) => {
  const categories: Project['category'][] = ["Motion Graphic", "Film & Production", "Design", "Photography", "VDO Creation", "Creative"];

  const categoryImages: Record<Project['category'], string> = {
    "Motion Graphic": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    "Film & Production": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    "Design": "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    "Photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200",
    "VDO Creation": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200",
    "Creative": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <section id="work" className="snap-section relative bg-cinematic-charcoal p-6 md:p-12 lg:p-24 py-24 overflow-hidden">
      {/* Cinematic Background Video */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            x: [-15, 15, -15],
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover desaturate brightness-50"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Overlays for depth and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black via-transparent to-cinematic-black opacity-80" />
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            backgroundColor: ["#0A0A0A", "#C9A84C10", "#0A0A0A"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-10">
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">Selected Works</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onCategorySelect(cat)}
              className="group relative aspect-video overflow-hidden bg-black interactive md:cursor-none flex items-center justify-center border border-white/5"
            >
              {/* Category Cover Image */}
              <img 
                src={categoryImages[cat]} 
                alt={cat}
                className="absolute inset-0 w-full h-full object-cover opacity-40 md:group-hover:opacity-60 md:group-hover:scale-110 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-cinematic-black/40 md:group-hover:bg-cinematic-gold/10 transition-colors" />
              
              <h3 className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter text-white md:group-hover:text-cinematic-gold transition-colors text-center px-8 uppercase leading-none drop-shadow-2xl">
                {cat}
              </h3>
              
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-[8px] md:text-[10px] tracking-widest text-cinematic-gold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10">
                EXPLORE CATEGORY →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CategoryDetail: React.FC<{ 
  category: Project['category']; 
  onClose: () => void;
  onProjectSelect: (p: Project) => void;
}> = ({ category, onClose, onProjectSelect }) => {
  const filteredProjects = projects.filter(p => p.category === category);
  
  // Get unique subcategories for this category
  const subCategories = Array.from(new Set(filteredProjects.map(p => p.subCategory).filter(Boolean))) as string[];
  
  // Sort subcategories: VDO Producer first for VDO Creation
  if (category === "VDO Creation") {
    subCategories.sort((a, b) => {
      if (a === "VDO Producer") return -1;
      if (b === "VDO Producer") return 1;
      return 0;
    });
  }
  const periods: Project['period'][] = ["Work Experience", "Internship", "University Student"];

  const subCategoryImages: Record<string, string> = {
    "Medical & Healthcare": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    "Real Estate & Luxury": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "Corporate & Branding": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    "Commercial & TVC": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    "Documentary & Story": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    "VDO Producer": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    "VDO Editor": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
  };

  const categoryHeaderImages: Record<Project['category'], string> = {
    "Motion Graphic": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920",
    "Film & Production": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920",
    "Design": "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1920",
    "Photography": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920",
    "VDO Creation": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1920",
    "Creative": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1920"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[9998] bg-cinematic-charcoal overflow-y-auto"
    >
      {/* Category Header Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={categoryHeaderImages[category]}
          alt={category}
          className="w-full h-full object-cover opacity-40 desaturate"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-charcoal via-transparent to-transparent" />
        
        <div className="absolute bottom-12 left-6 md:bottom-16 md:left-12 lg:left-24 z-10">
          <button 
            onClick={onClose}
            className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase hover:text-white transition-colors mb-4 block interactive"
          >
            ← Back to Categories
          </button>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-none">{category}</h2>
        </div>

        {category === "Film & Production" && (
          <div className="absolute bottom-12 right-6 md:bottom-16 md:right-12 lg:right-24 z-10">
            <a 
              href="https://drive.google.com/drive/folders/1BcESeIwHPa04G-F-YrM6dnFAxZkvsust?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cinematic-gold/30 text-[10px] tracking-[0.4em] uppercase text-cinematic-gold hover:bg-cinematic-gold/10 transition-all interactive text-center backdrop-blur-sm"
            >
              Access Production Folder
            </a>
          </div>
        )}
      </div>

      <div className="p-6 md:p-12 lg:p-24 space-y-24 max-w-7xl mx-auto">
        {(category === "Film & Production" || category === "VDO Creation") && subCategories.length > 0 ? (
          // Group by Subcategory for Film & Production and VDO Creation
          subCategories.map(subCat => {
            const subCatProjects = filteredProjects.filter(p => p.subCategory === subCat);
            return (
              <div key={subCat} className="space-y-8">
                <div className="relative h-32 md:h-48 w-full overflow-hidden border border-white/5">
                  <img 
                    src={subCategoryImages[subCat]} 
                    alt={subCat}
                    className="w-full h-full object-cover opacity-30 desaturate"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cinematic-black to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8 md:px-12">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold tracking-[0.2em] text-white uppercase">
                      {subCat}
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {subCatProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => onProjectSelect(project)}
                      className="group relative aspect-video overflow-hidden bg-black interactive md:cursor-none"
                    >
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 md:opacity-40 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-cinematic-black to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase">{project.role}</span>
                        <h3 className="text-xl md:text-2xl font-display font-bold mt-2">{project.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          // Default grouping by Period
          periods.map(period => {
            const periodProjects = filteredProjects.filter(p => p.period === period);
            if (periodProjects.length === 0) return null;

            return (
              <div key={period}>
                <h3 className="text-[10px] md:text-xs tracking-[0.5em] text-cinematic-gold/50 uppercase mb-6 md:mb-8 border-b border-white/5 pb-4">
                  {period}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {periodProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => onProjectSelect(project)}
                      className="group relative aspect-video overflow-hidden bg-black interactive md:cursor-none"
                    >
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 md:opacity-40 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-cinematic-black to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase">{project.role}</span>
                        <h3 className="text-xl md:text-3xl font-display font-bold mt-2">{project.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

const getEmbedUrl = (url: string) => {
  if (!url) return null;
  
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  
  // Facebook
  if (url.includes('facebook.com')) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&width=560`;
  }
  
  return url;
};

export const ProjectDetail: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const embedUrl = getEmbedUrl(project.videoUrl || '');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-cinematic-black overflow-y-auto"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-10 bg-gradient-to-b from-cinematic-black to-transparent">
        <div className="text-[8px] md:text-[10px] tracking-[0.5em] text-cinematic-gold uppercase">
          {project.category} / {project.year}
        </div>
        <button 
          onClick={onClose}
          className="p-2 md:p-4 text-cinematic-gold hover:text-white transition-colors interactive"
        >
          <X size={24} md:size={32} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-black">
        {embedUrl ? (
          <div className="w-full h-full">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 desaturate"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent" />
          </>
        )}
        
        <div className="absolute bottom-16 left-6 md:bottom-24 md:left-24 pointer-events-none">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-9xl font-display font-black tracking-tighter text-white uppercase"
          >
            {project.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 mt-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 md:w-12 h-[1px] bg-cinematic-gold" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-cinematic-gold uppercase">{project.role}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-16 md:py-24 grid md:grid-cols-3 gap-16 md:gap-24">
        <div className="md:col-span-2">
          <h3 className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-6 md:mb-8">The Narrative</h3>
          <p className="text-xl md:text-4xl font-display font-medium leading-relaxed text-cinematic-offwhite/80">
            {project.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-16 md:mt-24">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="aspect-[4/5] overflow-hidden bg-cinematic-charcoal"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-6 md:mb-8">Production Details</h3>
          <ul className="space-y-4 md:space-y-6">
            {project.details.map((detail, i) => (
              <li key={i} className="flex items-center gap-4 text-[10px] md:text-sm tracking-widest uppercase text-cinematic-offwhite/60">
                <div className="w-1.5 h-1.5 bg-cinematic-gold rounded-full" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-16 md:mt-24 p-6 md:p-8 border border-white/5 bg-white/5 backdrop-blur-sm">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cinematic-gold mb-4">Project Status</h4>
            <p className="text-[10px] md:text-xs text-cinematic-offwhite/40 leading-loose mb-6">
              COMPLETED PRODUCTION<br />
              RELEASED Q{Math.floor(Math.random() * 4) + 1} {project.year}
            </p>
            
            {project.videoUrl && (
              <a 
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 border border-cinematic-gold text-[8px] tracking-[0.3em] uppercase text-cinematic-gold hover:bg-cinematic-gold hover:text-black transition-all interactive text-center mb-4"
              >
                Watch on {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? 'YouTube' : project.videoUrl.includes('facebook.com') ? 'Facebook' : 'Platform'}
              </a>
            )}

            {project.category === "Film & Production" && (
              <a 
                href="https://drive.google.com/drive/folders/1BcESeIwHPa04G-F-YrM6dnFAxZkvsust?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full py-3 border border-cinematic-gold/30 text-[8px] tracking-[0.3em] uppercase text-cinematic-gold hover:bg-cinematic-gold/10 transition-all interactive text-center"
              >
                View Full Production
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-24 text-center border-t border-white/5">
        <button 
          onClick={onClose}
          className="text-[10px] tracking-[0.8em] uppercase text-cinematic-gold hover:text-white transition-colors interactive"
        >
          Return to Reel
        </button>
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Multimedia Production",
      skills: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Lighting & Camera Ops"]
    },
    {
      title: "Graphic Design",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Visual Storytelling"]
    },
    {
      title: "AI & Content Strategy",
      skills: ["ChatGPT / Gemini", "Content Planning", "Scriptwriting", "Creative Concepts"]
    }
  ];

  return (
    <section id="skills" className="snap-section relative flex flex-col justify-center bg-transparent px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-24"
        >
          <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-4 block">Capabilities</span>
          <h2 className="text-3xl md:text-7xl font-display font-black tracking-tighter uppercase leading-tight">Professional <span className="text-cinematic-gold italic">Expertise</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono text-cinematic-gold/40">0{idx + 1}</span>
                <h3 className="text-xl font-display font-bold tracking-widest uppercase group-hover:text-cinematic-gold transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-cinematic-gold/30" />
                    <span className="text-sm tracking-[0.2em] uppercase text-cinematic-offwhite/60 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-cinematic-offwhite/30 text-[10px] tracking-[0.4em] uppercase max-w-md text-center md:text-left">
            Specializing in <span className="text-cinematic-gold">End-to-End Production</span>, <span className="text-cinematic-gold">Creative Strategy</span>, and <span className="text-cinematic-gold">Quality Control</span>.
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-cinematic-gold animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cinematic-gold">Available for Professional Production</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Resume: React.FC = () => {
  const experience = [
    {
      title: "VDO Producer & VDO Editor",
      company: "Digital Light Group Co., Ltd.",
      period: "2025 - 2026",
      desc: "Managed end-to-end video production for corporate clients, including Rajyindee Hospital. Coordinated 20+ production crews and ensured high-quality visual storytelling."
    }
  ];

  const education = [
    {
      degree: "B.A. in Communication Arts",
      school: "Assumption University",
      year: "2020 - 2024",
      desc: "Major in Digital Media. GPA 3.07. Specialized in end-to-end digital media production and visual communication."
    }
  ];

  return (
    <section id="resume" className="snap-section relative bg-transparent flex flex-col justify-center p-6 md:p-12 lg:p-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 relative z-10">
        <div>
          <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-16 block">Experience</span>
          <div className="space-y-16">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-cinematic-gold -translate-x-1/2 rounded-full" />
                <div className="text-xs font-mono text-cinematic-gold/60 mb-2">{exp.period}</div>
                <h3 className="text-2xl font-display font-bold mb-2">{exp.title}</h3>
                <div className="text-[10px] tracking-widest uppercase text-cinematic-offwhite/40 mb-4">{exp.company}</div>
                <p className="text-sm text-cinematic-offwhite/60 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase mb-16 block">Education</span>
          <div className="space-y-16">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-cinematic-gold -translate-x-1/2 rounded-full" />
                <div className="text-xs font-mono text-cinematic-gold/60 mb-2">{edu.year}</div>
                <h3 className="text-2xl font-display font-bold mb-2">{edu.degree}</h3>
                <div className="text-[10px] tracking-widest uppercase text-cinematic-offwhite/40 mb-4">{edu.school}</div>
                <p className="text-sm text-cinematic-offwhite/60 leading-relaxed">{edu.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <button className="px-8 py-4 border border-cinematic-gold/30 text-[10px] tracking-[0.4em] uppercase text-cinematic-gold hover:bg-cinematic-gold hover:text-cinematic-black transition-all interactive">
              Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="contact" className="snap-section relative bg-transparent flex flex-col justify-between p-12 md:p-24 overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-display font-black tracking-tighter leading-none mb-12">
            LET'S <span className="text-cinematic-gold italic">CREATE</span><br />SOMETHING.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mt-16 w-full max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase">Call</span>
              <a href="tel:0982315993" className="text-xl md:text-3xl font-display hover:text-cinematic-gold transition-colors interactive break-all">098-231-5993</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase">Email</span>
              <a href="mailto:jackyasintonforwork@gmail.com" className="text-xl md:text-3xl font-display hover:text-cinematic-gold transition-colors interactive break-all">jackyasintonforwork@gmail.com</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <span className="text-[10px] tracking-[0.5em] text-cinematic-gold uppercase">Location</span>
              <p className="text-xl md:text-3xl font-display">Bangkok, Thailand</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <footer className="w-full pt-12 md:pt-24 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 md:gap-12 text-[10px] tracking-[0.4em] uppercase text-cinematic-offwhite/30">
          <a href="#" className="hover:text-cinematic-gold transition-colors interactive">Instagram</a>
          <a href="#" className="hover:text-cinematic-gold transition-colors interactive">LinkedIn</a>
          <a href="#" className="hover:text-cinematic-gold transition-colors interactive">Behance</a>
        </div>
        
        <div className="text-[10px] tracking-[0.4em] uppercase text-cinematic-offwhite/20 text-center lg:text-right">
          © {currentYear} Yasinton Huvanundana. <br className="md:hidden" /> All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};
