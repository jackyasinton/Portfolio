import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, X, ArrowRight, FileText } from 'lucide-react';

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
            className="text-lg md:text-6xl font-display font-black tracking-tighter leading-none text-white/80 uppercase"
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
              className="text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-cinematic-gold font-medium"
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
          Personal Information
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-6xl font-display font-bold mb-8 leading-tight"
        >
          Yasinton <span className="italic text-cinematic-gold">Huvanundana</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-[10px] tracking-[0.4em] text-cinematic-gold uppercase mb-8 border-b border-cinematic-gold/20 pb-2">Personal Details</h4>
            <ul className="space-y-6 uppercase">
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Full Name</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">Yasinton Huvanundana</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Email</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold lowercase">jackyasinton@gmail.com</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Age</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">24 Years</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Nationality</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">Thai</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Based</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">Bangkok, Thailand</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] text-cinematic-gold uppercase mb-8 border-b border-cinematic-gold/20 pb-2">Education</h4>
            <ul className="space-y-6 uppercase">
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Degree</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">B.A. in Communication Arts</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">School</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">Assumption University</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">Period</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">2020 - 2024</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] text-cinematic-gold/50">GPA</span>
                <span className="text-xl md:text-2xl text-white font-display font-bold">3.07</span>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-cinematic-offwhite/60 leading-relaxed max-w-md mb-12 border-t border-white/5 pt-8"
        >
          Experienced in full-cycle video and content production, from concept and scriptwriting to filming and post-production. I specialize in managing production projects for corporate clients, particularly in Healthcare and marketing content, with a focus on visual storytelling and systematic problem-solving.
        </motion.p>
        
        <div className="grid grid-cols-2 gap-8">
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
  group?: string;
  period: "University Student" | "Internship" | "Work Experience";
  img: string;
  videoUrl?: string;
  fileType?: 'pdf' | 'video';
  description: string;
  details: string[];
  gallery: string[];
}

const projects: Project[] = [
  // Motion Graphic
  { 
    id: "mg-1",
    title: "WINTER WORLD TOUR I", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/DJjYMK1bwcw/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/DJjYMK1bwcw?si=SCsVSgTFsuJaqKtl",
    description: "Cinematic motion graphics for the Winter World Tour campaign.",
    details: ["After Effects", "Commercial Production", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/DJjYMK1bwcw/maxresdefault.jpg"]
  },
  { 
    id: "mg-2",
    title: "WINTER WORLD TOUR II", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/NekiHJ2A4UM/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/NekiHJ2A4UM?si=NuF81kQf_PlwWvsN",
    description: "Dynamic visual effects for the Winter World Tour series.",
    details: ["After Effects", "Visual Effects", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/NekiHJ2A4UM/maxresdefault.jpg"]
  },
  { 
    id: "mg-3",
    title: "WINTER WORLD TOUR III", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/ONP2LWCjC9w/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ONP2LWCjC9w?si=bdo9Z03SxN__O67W",
    description: "Creative motion design for global travel campaigns.",
    details: ["After Effects", "Creative Direction", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/ONP2LWCjC9w/maxresdefault.jpg"]
  },
  { 
    id: "mg-4",
    title: "WINTER WORLD TOUR IV", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/ORXOWwJq1Y4/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ORXOWwJq1Y4?si=PV0ZxMw4W-hMPfSJ",
    description: "High-impact motion graphics for winter-themed promotions.",
    details: ["After Effects", "Promotional Content", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/ORXOWwJq1Y4/maxresdefault.jpg"]
  },
  { 
    id: "mg-5",
    title: "WINTER WORLD TOUR V", 
    year: "2025", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/CGYe4zwzviw/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/CGYe4zwzviw?si=jliiOucDHzuzC3RR",
    description: "Final installment of the Winter World Tour motion series.",
    details: ["After Effects", "Series Finale", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/CGYe4zwzviw/maxresdefault.jpg"]
  },
  { 
    id: "mg-6",
    title: "CA GREET EVENT 2023", 
    year: "2023", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/JqoTRSC2MwA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/JqoTRSC2MwA",
    description: "Teaser for the Fashion Show at the CA Greet Event 2023.",
    details: ["Event Teaser", "Fashion Show", "Motion Graphics"],
    gallery: ["https://img.youtube.com/vi/JqoTRSC2MwA/maxresdefault.jpg"]
  },
  { 
    id: "mg-7",
    title: "CA GREET PROJECTION MAPPING 2023", 
    year: "2023", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/HcShBECx_UI/hqdefault.jpg",
    videoUrl: "https://youtu.be/HcShBECx_UI",
    description: "Projection mapping project for the CA Greet Event 2023.",
    details: ["Projection Mapping", "Event Visuals", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/HcShBECx_UI/hqdefault.jpg"]
  },
  { 
    id: "mg-8",
    title: "KMA APP ADVERTISING (VFX 3D)", 
    year: "2023", 
    role: "VFX Artist", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/ga1EFg4wgo0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ga1EFg4wgo0?si=P6u7fNYdHxko2mb5",
    description: "Full story version with 3D VFX for the KMA application advertising contest.",
    details: ["3D VFX", "Storytelling", "Visual Effects"],
    gallery: ["https://img.youtube.com/vi/ga1EFg4wgo0/maxresdefault.jpg"]
  },
  { 
    id: "mg-9",
    title: "THE EYELAB", 
    year: "2023", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/MMIqDdA54mI/maxresdefault.jpg",
    videoUrl: "https://youtu.be/MMIqDdA54mI?si=kyYZ4wCPrcOiw69i",
    description: "Promotional content for THE EYELAB anti-dark circle serum.",
    details: ["Product Promotion", "Healthcare", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/MMIqDdA54mI/maxresdefault.jpg"]
  },
  { 
    id: "mg-10",
    title: "ADVERTISING CONTEST: KRU PENSRI CANDY 2022", 
    year: "2022", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://drive.google.com/thumbnail?id=1YdrAvskKBZrx1AaZNCmSc9tz6_6FP8Ow&sz=w1600",
    videoUrl: "https://www.facebook.com/reel/842998787138888",
    description: "Advertising contest entry for Kru Pensri Candy.",
    details: ["Advertising Contest", "Social Media", "Motion Design"],
    gallery: ["https://drive.google.com/thumbnail?id=1YdrAvskKBZrx1AaZNCmSc9tz6_6FP8Ow&sz=w800"]
  },
  { 
    id: "mg-11",
    title: "LESASHA 2022", 
    year: "2022", 
    role: "Motion Designer", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/gyf00Sw7fR8/maxresdefault.jpg",
    videoUrl: "https://youtu.be/gyf00Sw7fR8?si=CMeAf3eVZ8s8X",
    description: "Advertising contest entry for Lesasha.",
    details: ["Advertising Contest", "Brand Promotion", "Motion Design"],
    gallery: ["https://img.youtube.com/vi/gyf00Sw7fR8/maxresdefault.jpg"]
  },
  { 
    id: "mg-12",
    title: "MATTE PAINTING CLASS", 
    year: "2022", 
    role: "Digital Artist", 
    category: "Motion Graphic",
    period: "University Student",
    img: "https://img.youtube.com/vi/Ayo_HSOqJog/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Ayo_HSOqJog",
    description: "Class work for Digital Motion Graphic focusing on matte painting.",
    details: ["Matte Painting", "Digital Art", "Class Project"],
    gallery: ["https://img.youtube.com/vi/Ayo_HSOqJog/maxresdefault.jpg"]
  },
  // Film & Production
  { 
    id: "fp-1",
    title: "Thanaithai in Sweden", 
    year: "2024", 
    role: "VDO Producer & Editor", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1ox8MdS-QqbM1fNAJ0cEser44nIvSyXSj&sz=w1600",
    description: "Comprehensive production scope including live streaming and short-form video content for the 'Thai Lawyer in Sweden' platform.",
    details: ["Live Streaming", "Short Form Video", "Content Production"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1ox8MdS-QqbM1fNAJ0cEser44nIvSyXSj&sz=w800",
      "https://drive.google.com/thumbnail?id=1G3jbexhgzpO8524ltQrWTpQCiJWkr15-&sz=w800",
      "https://drive.google.com/thumbnail?id=1WftdmjY2FiTYZWD42IBgz8yZqwSOSfxW&sz=w800",
      "https://drive.google.com/thumbnail?id=13RGn7mY2wz1jDIWtt3oU4bRKDnvJvTww&sz=w800",
      "https://drive.google.com/thumbnail?id=1Zqqx7sGZQaH_lPhUXxqhW7rVg0tkl4LC&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZaKHiQSOfdM0q0KiszPMuBuBhoXJtje8&sz=w800",
      "https://drive.google.com/thumbnail?id=1FW8CAd3fD5CZyJ4hf_p21CcDtDhhb-H3&sz=w800",
      "https://drive.google.com/thumbnail?id=1FsgnKGg8pCxadcAYl9pH6KWw1wLxWFPJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1wL1MlFauDN50-bblYXo6TbgKU6S2ojrV&sz=w800",
      "https://drive.google.com/thumbnail?id=1WmS4kLHB1q7OaMgYMjPJCcut9p_BLN2T&sz=w800",
      "https://drive.google.com/thumbnail?id=1Ksyl250NeOC5p5WQokprHmvclpeVjzgu&sz=w800",
      "https://drive.google.com/thumbnail?id=1PYtxjrEoDeyzAVNofYYQDjJikv8spY_q&sz=w800",
      "https://drive.google.com/thumbnail?id=1PUEI2WxWBOFBeTAU6FVjTW9Mc1A_jLjq&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZebH2MduFj-g4YS08y6FxN9pJ_bFPkR0&sz=w800",
      "https://drive.google.com/thumbnail?id=10YQL8vgwq5ZZNi65sQcZdAK4Xd5UtxDE&sz=w800",
      "https://drive.google.com/thumbnail?id=1pwZPZ37G7wcWqasUxKCf9AHKI0nW1ajy&sz=w800"
    ]
  },
  { 
    id: "fp-2",
    title: "Rajthanee Hospital", 
    year: "2024", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1JiIflKAV-37Uqh5Uq28lwJf6EormkdFT&sz=w1600",
    description: "Year-long production of over 10 programs, encompassing short-form videos, feature-length content, and live broadcasts.",
    details: ["Medical Content", "Year-long Production", "Live & Recorded"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1JiIflKAV-37Uqh5Uq28lwJf6EormkdFT&sz=w800",
      "https://drive.google.com/thumbnail?id=1SyMtn8IKZFkj1d3Sv0iITpogSTsw6A8n&sz=w800",
      "https://drive.google.com/thumbnail?id=1Y31Ldb5z2PsGCUZFHREtuBlNvKH7ALdF&sz=w800",
      "https://drive.google.com/thumbnail?id=1o92ItwjtcVrzxIvcaFxnz_aaiJjbrr-3&sz=w800",
      "https://drive.google.com/thumbnail?id=1ic6-JosrL3VE4SmW77R5jPV3V-r8QOiT&sz=w800",
      "https://drive.google.com/thumbnail?id=1JdwDWxmTHavIg64cMlkpaam44Z3oG2TC&sz=w800",
      "https://drive.google.com/thumbnail?id=1QN-dUdOTMpaA60t7SHoTCG721Ql-n3ap&sz=w800",
      "https://drive.google.com/thumbnail?id=1uCcgzf-HNCO5lMPCb4rQfO_lebOyZhm5&sz=w800",
      "https://drive.google.com/thumbnail?id=1W0zOjbmhgpzbQn5eYDpK5F-u0EAcr3mH&sz=w800",
      "https://drive.google.com/thumbnail?id=1-VusHfDCiBbrr61iM2KOkkOAbMq65FSp&sz=w800",
      "https://drive.google.com/thumbnail?id=1DKqqVtBidjxj5ZKYWaMSMZzMIBJheb6O&sz=w800",
      "https://drive.google.com/thumbnail?id=1sh-lIJkHTYuHYYGvWlF2qL-twlQ4jjHH&sz=w800",
      "https://drive.google.com/thumbnail?id=1wrGP40iDkHTxiY95Ea0zxbhmb5xpHzzB&sz=w800",
      "https://drive.google.com/thumbnail?id=1PSRaMov2w3at0tvzRWQG_V-wvzYA0oWo&sz=w800",
      "https://drive.google.com/thumbnail?id=1ySMQQwG8gmMmoXhnRM_DaekziHnxFk43&sz=w800",
      "https://drive.google.com/thumbnail?id=1KvS7wZyapJ4YROUZ4W5MKdS0BSmIPuqk&sz=w800",
      "https://drive.google.com/thumbnail?id=1SPN0eCYJ-xl5l_bR4sMTcvgC_tqrmmiO&sz=w800",
      "https://drive.google.com/thumbnail?id=17_yf0rWk8PoBGCK6Bos2WeOd0fiz8NMz&sz=w800",
      "https://drive.google.com/thumbnail?id=1sROZ20MXOUZpHjMKqEx3iwYD9R6h9JU3&sz=w800",
      "https://drive.google.com/thumbnail?id=1-sqkinRNPq9LYO7l6cD62X22juUU4u0J&sz=w800",
      "https://drive.google.com/thumbnail?id=1eHqS5DEvD_PPnY83Cj2A4f9OUD6FcClz&sz=w800",
      "https://drive.google.com/thumbnail?id=1xEpTRZRIxAkBjfg-Anp9925dFVLKXvLb&sz=w800",
      "https://drive.google.com/thumbnail?id=1EiMTW_HLD_8tXcoqOQFPMvz3n8wQEdEl&sz=w800",
      "https://drive.google.com/thumbnail?id=1hmmDxgAFhZtXQBe1RZmx-TAOec67kuER&sz=w800",
      "https://drive.google.com/thumbnail?id=1BewSCBBEAAhPyeuNmWAve1gb1y8fHB4F&sz=w800",
      "https://drive.google.com/thumbnail?id=1Nnrt4q53J9u1EpPdM6a626BRwSnO54A9&sz=w800",
      "https://drive.google.com/thumbnail?id=1VqrRrOqE7XHzZyr_9_DHeIov7QQHbJU8&sz=w800",
      "https://drive.google.com/thumbnail?id=1m3MJ792dICLkx2jjXBCpGDwkOE1d3Mt9&sz=w800",
      "https://drive.google.com/thumbnail?id=17wteofFMwB8PMcs5robStfYdBUQm-HVC&sz=w800",
      "https://drive.google.com/thumbnail?id=1uIcGXP-aKs3k5XylHYQ9JqS1E0ZACJYF&sz=w800",
      "https://drive.google.com/thumbnail?id=17D4zVpnPbIsO1tITSqZIKzTVg2yj_Idw&sz=w800",
      "https://drive.google.com/thumbnail?id=1sduuZv_ry1RyvRGcXuJfQ1FnBfEZ6hSA&sz=w800"
    ]
  },
  { 
    id: "fp-3",
    title: "AIYARA", 
    year: "2024", 
    role: "VDO Editor", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1LFB8or1kVqANGANOrIdid_XPiAFWK1q2&sz=w1600",
    description: "Filming and post-production of promotional videos for 'AIYARA', a premier Thai restaurant in Sweden.",
    details: ["Restaurant Promotion", "Food Cinematography", "Social Media Content"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1LFB8or1kVqANGANOrIdid_XPiAFWK1q2&sz=w800",
      "https://drive.google.com/thumbnail?id=1n-UzUPjNf9kxFKdXJ-9sgW4y2maGwCJY&sz=w800",
      "https://drive.google.com/thumbnail?id=18rjKaeUY36szD5TBzxAGPow3kCOHqXRD&sz=w800",
      "https://drive.google.com/thumbnail?id=13fzuYE1IjLRd_MoYWQPLaxMPD63_U4vT&sz=w800",
      "https://drive.google.com/thumbnail?id=1pF0yx60rKut5aF781ZQAr_7Kxw1AbWNS&sz=w800"
    ]
  },
  { 
    id: "fp-4",
    title: "Elderweiss Dental House", 
    year: "2024", 
    role: "VDO Editor", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1YVVF2MCVLwgVTqIcG9lsJGW3h3xCLBGP&sz=w1600",
    description: "Cinematography and editing of professional video content for Elderweiss Dental House clinic.",
    details: ["Dental Clinic", "Medical Marketing", "Post-Production"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1YVVF2MCVLwgVTqIcG9lsJGW3h3xCLBGP&sz=w800",
      "https://drive.google.com/thumbnail?id=1L1Rse2onFvV2kOJGqSAai-P9Rn8xFlod&sz=w800",
      "https://drive.google.com/thumbnail?id=1s-WuuuTQnx-dnhLEILh__GAvOB1mfQmq&sz=w800",
      "https://drive.google.com/thumbnail?id=1h51_i-FsNOZySf2FwYoSVT4B-fz9wTZZ&sz=w800",
      "https://drive.google.com/thumbnail?id=14xot2Ps1FX8oooty0JxsdcdRxL_g4-c0&sz=w800",
      "https://drive.google.com/thumbnail?id=1gXq3Ndqo2R1e6a4Xr-M-HHfYNmBFI9HV&sz=w800",
      "https://drive.google.com/thumbnail?id=1eRmSKPOF_8gm_L-vVbmL51gO59PTHXWy&sz=w800",
      "https://drive.google.com/thumbnail?id=1K-Ac5lq3gjndf43-7Z7uDPtn3vUPht3r&sz=w800",
      "https://drive.google.com/thumbnail?id=1DdhxI2PqYqNcwVbhzAQb7nnb8DIZ3qwI&sz=w800",
      "https://drive.google.com/thumbnail?id=1ai3OU7QeLg5PIIeMkxN5qMsc7UdJXAqX&sz=w800"
    ]
  },
  { 
    id: "fp-5",
    title: "Blessing International Academy", 
    year: "2024", 
    role: "Photographer & Videographer", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1GjNAkRlfh0Mve3C1q2mxfkZTJ4BKs8_Q&sz=w1600",
    description: "Professional photography and videography coverage for student honors and academic achievement award ceremonies.",
    details: ["Event Coverage", "Photography", "Videography"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1GjNAkRlfh0Mve3C1q2mxfkZTJ4BKs8_Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1UR1ADhDVJkFY9AcRas_pc3aSrXGxHiIq&sz=w800",
      "https://drive.google.com/thumbnail?id=1ozIQD7QIdAKAZr18UELy_ESPKENpb-C5&sz=w800",
      "https://drive.google.com/thumbnail?id=11jCqp0jbZUr6uEWxAOFN2uM8RtI12ZMW&sz=w800",
      "https://drive.google.com/thumbnail?id=1mLrRD0_cgUrRval08QoU3tuFNzpTkNxQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1WFGDpx8JtCdJJxPQ5cy3e3E6_Ky0YoHQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1jh9xIM3kGWnHcD0PYmgo41vHuc3T_6Ue&sz=w800",
      "https://drive.google.com/thumbnail?id=1E9Qd0qIc4uUf9agKDI12byrpe0yyhE1b&sz=w800",
      "https://drive.google.com/thumbnail?id=11OSiyTpbbzvinzOoceW8e03dhM3cAyDA&sz=w800"
    ]
  },
  { 
    id: "fp-6",
    title: "Parfait Wellness Clinic", 
    year: "2024", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1qaK6PzsT1RJFOqkmHkncIBRwq3XkJs5w&sz=w1600",
    description: "Production of high-impact advertising videos for facial aesthetic procedures and wellness treatments.",
    details: ["Beauty Clinic", "Advertising", "Visual Content"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1qaK6PzsT1RJFOqkmHkncIBRwq3XkJs5w&sz=w800",
      "https://drive.google.com/thumbnail?id=1irIh5YpmM5VJVSD6DckTPbZ7eSSwpuWM&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZuON9UxAYZN0bp-Bq6jImFP4jRsX55M4&sz=w800",
      "https://drive.google.com/thumbnail?id=1mBzGoE7mjY4v0hZv5Jnws-ivrtmv7dlf&sz=w800",
      "https://drive.google.com/thumbnail?id=1Rm0VPYhVQ8j55DdYam7UR2NrSxrbtRw2&sz=w800",
      "https://drive.google.com/thumbnail?id=1SvnHnPphm2FKqaRenIX0SkNtNdV0M78y&sz=w800"
    ]
  },
  { 
    id: "fp-7",
    title: "Success Vision Consulting", 
    year: "2024", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1HqrCqR6QuAgHKpNiv7rBq_YMpUQ3FvHe&sz=w1600",
    description: "Video production focused on insurance services marketing and strategic personal branding content.",
    details: ["Insurance Marketing", "Personal Branding", "Professional Content"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1HqrCqR6QuAgHKpNiv7rBq_YMpUQ3FvHe&sz=w800",
      "https://drive.google.com/thumbnail?id=16IpAQWXm5HPvbSH-Q3GJwsbj2WTygdW1&sz=w800",
      "https://drive.google.com/thumbnail?id=1jpbxJK-H8uQr8sQbIJASUylmiLgLuUec&sz=w800",
      "https://drive.google.com/thumbnail?id=1O0Chfq1J64ymI-GT8dCryuvHXgqZrMpf&sz=w800",
      "https://drive.google.com/thumbnail?id=103soSenZGu_ySYfBKYKsaIZSKT2s3ElG&sz=w800",
      "https://drive.google.com/thumbnail?id=1i_5VeC0tWSxfeN1O7cR2Ic1re57zyAYE&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZrDbbBcZH7MPvOimQ-yIfyQ7HwdI-3Ec&sz=w800",
      "https://drive.google.com/thumbnail?id=1vdOkSDxVBPUFUNscSJTgW0ecMvew7RQb&sz=w800",
      "https://drive.google.com/thumbnail?id=146uEW36eGNGh6mRcTYbQb_QjPEuDfUjR&sz=w800",
      "https://drive.google.com/thumbnail?id=1A69PLUrqRgtvDkchJsBjPqEzeonmTXDc&sz=w800",
      "https://drive.google.com/thumbnail?id=1dfzrnj9l4zCnNfxgyIYeb5muaz8uQ-rW&sz=w800",
      "https://drive.google.com/thumbnail?id=10Yy-r8-E1SGGQldfvn7EMG8taJpswhnT&sz=w800"
    ]
  },
  { 
    id: "fp-8",
    title: "Winter World Tour Advertising", 
    year: "2024", 
    role: "VDO Producer", 
    category: "Film & Production",
    subCategory: "Client Work",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1yZhLNzlJpK852c-fAk3B95Ji-B-Npm93&sz=w1600",
    description: "Commercial advertising project showcasing winter travel programs for Winter World Tour.",
    details: ["Travel Advertising", "Winter Tour", "Commercial Production"],
    gallery: [
      "https://drive.google.com/thumbnail?id=1yZhLNzlJpK852c-fAk3B95Ji-B-Npm93&sz=w800",
      "https://drive.google.com/thumbnail?id=1wNeyWkr-fi5wH0t5abSo2rCcqkO2VV2W&sz=w800",
      "https://drive.google.com/thumbnail?id=16MjF2FFcRwvDC1iNBQAH76gcdEZdQv1n&sz=w800",
      "https://drive.google.com/thumbnail?id=1CgfGWgQxu8Z8qNh_39BosImX6sBOLaUB&sz=w800",
      "https://drive.google.com/thumbnail?id=1DyAX8BCXEO5oxgUPcDz1uD8ZkKCl5dWB&sz=w800",
      "https://drive.google.com/thumbnail?id=1q2nAnnqSWBkH6SmcLv3nGcqu2ACov212&sz=w800",
      "https://drive.google.com/thumbnail?id=1zTwlcTBk2VNnYkABtqWUG8hnu5Rj1Bgv&sz=w800",
      "https://drive.google.com/thumbnail?id=1LwclOrnmiPjVoPAq16wdjlxHZCAdnO4Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1rAWgGp-fYfRSqhChrXa5x0EHrJNMSQs1&sz=w800"
    ]
  },
  // Design
  { 
    id: "ds-1",
    title: "Design Collection 1", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1ljDc_EYD9eRodCUE6_fvrYmTuc_0TouH&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1ljDc_EYD9eRodCUE6_fvrYmTuc_0TouH&sz=w1200"]
  },
  { 
    id: "ds-2",
    title: "Design Collection 2", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1vX2yXya2KSZBPcw_54NHbxpB5tRJ3FGE&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1vX2yXya2KSZBPcw_54NHbxpB5tRJ3FGE&sz=w1200"]
  },
  { 
    id: "ds-3",
    title: "Design Collection 3", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1yLRDl146lcLNYnWJTj4FCEKA5uEbPuh0&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1yLRDl146lcLNYnWJTj4FCEKA5uEbPuh0&sz=w1200"]
  },
  { 
    id: "ds-4",
    title: "Design Collection 4", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1G47RJ77BH3CNCIc-sNsTSei6h_riGXMl&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1G47RJ77BH3CNCIc-sNsTSei6h_riGXMl&sz=w1200"]
  },
  { 
    id: "ds-5",
    title: "Design Collection 5", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=11Hsg6nZlLxSnWhDRV1DooT9JpUuP3_Qm&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=11Hsg6nZlLxSnWhDRV1DooT9JpUuP3_Qm&sz=w1200"]
  },
  { 
    id: "ds-6",
    title: "Design Collection 6", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1OgztyV1lVNxuoS7RMK7w2q0HxZYqe-LI&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1OgztyV1lVNxuoS7RMK7w2q0HxZYqe-LI&sz=w1200"]
  },
  { 
    id: "ds-7",
    title: "Design Collection 7", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1CZ3svYXVIR1x1ppDNsMKA6Ysz4Yux_mA&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1CZ3svYXVIR1x1ppDNsMKA6Ysz4Yux_mA&sz=w1200"]
  },
  { 
    id: "ds-8",
    title: "Design Collection 8", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1_mp0fguo3PL6tffOlmVu6LN24Sg5Yd9I&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1_mp0fguo3PL6tffOlmVu6LN24Sg5Yd9I&sz=w1200"]
  },
  { 
    id: "ds-9",
    title: "Design Collection 9", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1BrVC1Mn-ufAdHkSGAq12jJ3wgirn292d&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1BrVC1Mn-ufAdHkSGAq12jJ3wgirn292d&sz=w1200"]
  },
  { 
    id: "ds-10",
    title: "Design Collection 10", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1KwOHtlYy0R9cmP2i2F2fn-KOk_bxPYTb&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1KwOHtlYy0R9cmP2i2F2fn-KOk_bxPYTb&sz=w1200"]
  },
  { 
    id: "ds-11",
    title: "Design Collection 11", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1AJW8ARRfLpnMyVmWzDLcnW7KSM_DU25g&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1AJW8ARRfLpnMyVmWzDLcnW7KSM_DU25g&sz=w1200"]
  },
  { 
    id: "ds-12",
    title: "Design Collection 12", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1upw2VP_H2NVLq--WFVlRBRUQ2AJmUs5M&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1upw2VP_H2NVLq--WFVlRBRUQ2AJmUs5M&sz=w1200"]
  },
  { 
    id: "ds-13",
    title: "Design Collection 13", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1BrC_hCDpOXm-4dC8GEc64QdmPpfYkb5c&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1BrC_hCDpOXm-4dC8GEc64QdmPpfYkb5c&sz=w1200"]
  },
  { 
    id: "ds-14",
    title: "Design Collection 14", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1ASe3vTCpd9sDYVIYefux5_eINduZ6qW0&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1ASe3vTCpd9sDYVIYefux5_eINduZ6qW0&sz=w1200"]
  },
  { 
    id: "ds-15",
    title: "Design Collection 15", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1_j70Rnsz6HBNc15sWYR5i4FbOCS4Q8Co&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1_j70Rnsz6HBNc15sWYR5i4FbOCS4Q8Co&sz=w1200"]
  },
  { 
    id: "ds-16",
    title: "Design Collection 16", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1MEKwuwUtr5qLOZdSJRrhuUisUgVEIcyy&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1MEKwuwUtr5qLOZdSJRrhuUisUgVEIcyy&sz=w1200"]
  },
  { 
    id: "ds-17",
    title: "Design Collection 17", 
    year: "2024", 
    role: "Designer", 
    category: "Design",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1P0HMAhsiH4uinhm2gvFfkRgMJ8pJ7VWZ&sz=w1200",
    description: "Graphic design and visual communication projects.",
    details: ["Graphic Design", "Visual Identity", "Branding"],
    gallery: ["https://drive.google.com/thumbnail?id=1P0HMAhsiH4uinhm2gvFfkRgMJ8pJ7VWZ&sz=w1200"]
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
    img: "https://img.youtube.com/vi/tgvYitpsaP4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/shorts/tgvYitpsaP4",
    description: "Short-form content for quick healthcare tips and insights.",
    details: ["Short-form Video", "Social Media", "Quick Content"],
    gallery: ["https://img.youtube.com/vi/tgvYitpsaP4/maxresdefault.jpg"]
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
    title: "Thanaithai in Sweden", 
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
    title: "สืบสุขภาพ", 
    year: "2025", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/4lMT_cHgaXM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=4lMT_cHgaXM&list=PLUl4gxkKqtSM5T-q3Lmd9DeJVWgtkKYg9",
    description: "Medical series editing for Rajthanee Hospital.",
    details: ["Healthcare Content", "Video Editing", "Post-Production"],
    gallery: ["https://img.youtube.com/vi/4lMT_cHgaXM/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-2",
    title: "ROLE MODEL", 
    year: "2025", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/dlFUVCemv_M/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dlFUVCemv_M&list=PLUl4gxkKqtSNKXGaCfX8Z91mmZrPSDv8q",
    description: "Editing for the Role Model series, highlighting healthcare professionals.",
    details: ["Interview Series", "Video Editing", "Storytelling"],
    gallery: ["https://img.youtube.com/vi/dlFUVCemv_M/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-3",
    title: "PROJECT: ENIGMATIC AI - THESIS", 
    year: "2024", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/Lctdu_zp9kU/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Lctdu_zp9kU?si=ZbyNZSSoknmwLGHl",
    description: "Thesis project exploring AI through cinematic editing.",
    details: ["Thesis Project", "Cinematic Editing", "AI Concept"],
    gallery: ["https://img.youtube.com/vi/Lctdu_zp9kU/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-4",
    title: "PROJECT: MIDTERM PROJECT MUSIC VIDEO", 
    year: "2023", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/UOxKw01eUlc/maxresdefault.jpg",
    videoUrl: "https://youtu.be/UOxKw01eUlc",
    description: "Midterm music video project focusing on rhythmic editing and visual style.",
    details: ["Music Video", "Rhythmic Editing", "University Project"],
    gallery: ["https://img.youtube.com/vi/UOxKw01eUlc/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-5",
    title: "PROJECT: EYELAB COMMERCIAL", 
    year: "2023", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/zLl977VMmCM/maxresdefault.jpg",
    videoUrl: "https://youtu.be/zLl977VMmCM?si=CvVEVGmtJWS_BYKV",
    description: "Commercial project for Eyelab, focusing on product presentation.",
    details: ["Commercial", "Product Editing", "Motion Graphics"],
    gallery: ["https://img.youtube.com/vi/zLl977VMmCM/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-6",
    title: "PROJECT: CA PRESIDENT COMMITTEE", 
    year: "2023", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/s3i7bZtzF8Q/maxresdefault.jpg",
    videoUrl: "https://youtu.be/s3i7bZtzF8Q",
    description: "Promotional video for the CA President Committee.",
    details: ["Promotion", "Committee Video", "Event Editing"],
    gallery: ["https://img.youtube.com/vi/s3i7bZtzF8Q/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-7",
    title: "PROJECT: TRAILER LITTLE SHADOW", 
    year: "2023", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/OKgkGAsotS4/maxresdefault.jpg",
    videoUrl: "https://youtu.be/OKgkGAsotS4",
    description: "Trailer for the 'Little Shadow' project.",
    details: ["Trailer", "Film Editing", "Suspense"],
    gallery: ["https://img.youtube.com/vi/OKgkGAsotS4/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-8",
    title: "PROJECT: เจ็บจนพอ - WANYAI [แว่นใหญ่] | {COVER} PATRICK NOELLEE", 
    year: "2022", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/Vfmi8lT6cgU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Vfmi8lT6cgU",
    description: "Music video cover edit for Patrick Noellee.",
    details: ["Music Video", "Cover Song", "Cinematic Editing"],
    gallery: ["https://img.youtube.com/vi/Vfmi8lT6cgU/maxresdefault.jpg"]
  },
  { 
    id: "vdo-e-9",
    title: "PROJECT: SHORT FILM ไม่อยาก PRESENTED BY ABAC X KBU", 
    year: "2022", 
    role: "VDO Editor", 
    category: "VDO Creation",
    subCategory: "VDO Editor",
    period: "University Student",
    img: "https://img.youtube.com/vi/4mLMWmBKips/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=4mLMWmBKips",
    description: "Short film project presented by ABAC X KBU.",
    details: ["Short Film", "Narrative Editing", "Collaboration"],
    gallery: ["https://img.youtube.com/vi/4mLMWmBKips/maxresdefault.jpg"]
  },
  { 
    id: "vdo-re-1",
    title: "REAL ESTATE SHOWCASE I", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "Real Estate & Luxury",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/jKVVYc_5cHQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jKVVYc_5cHQ",
    description: "High-end real estate production showcasing luxury properties and architectural details.",
    details: ["Luxury Real Estate", "Cinematic Production", "Property Showcase"],
    gallery: ["https://img.youtube.com/vi/jKVVYc_5cHQ/maxresdefault.jpg"]
  },
  { 
    id: "vdo-re-2",
    title: "REAL ESTATE SHOWCASE II", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "Real Estate & Luxury",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/g7s9aHVZQq4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=g7s9aHVZQq4",
    description: "Professional property tour highlighting modern living spaces and premium amenities.",
    details: ["Property Tour", "Interior Cinematography", "Marketing Content"],
    gallery: ["https://img.youtube.com/vi/g7s9aHVZQq4/maxresdefault.jpg"]
  },
  { 
    id: "vdo-re-3",
    title: "REAL ESTATE SHOWCASE III", 
    year: "2025", 
    role: "VDO Producer", 
    category: "VDO Creation",
    subCategory: "Real Estate & Luxury",
    period: "Work Experience",
    img: "https://img.youtube.com/vi/zT1EbtKNL1k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zT1EbtKNL1k",
    description: "Cinematic real estate presentation focusing on lifestyle and location benefits.",
    details: ["Lifestyle Production", "Location Showcase", "Real Estate Marketing"],
    gallery: ["https://img.youtube.com/vi/zT1EbtKNL1k/maxresdefault.jpg"]
  },
  // Creative
  { 
    id: "cr-c-1",
    title: "Prosper & Topfrom Creative Idea.pdf", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    subCategory: "Creative Content",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=13yGvI63I80jEAuH5plnfsfQ6Xn-CJVn7&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/13yGvI63I80jEAuH5plnfsfQ6Xn-CJVn7/view?usp=drive_link",
    fileType: 'pdf',
    description: "Creative concept and strategy for Prosper & Topfrom.",
    details: ["Creative Strategy", "Content Development", "Digital Media"],
    gallery: ["https://drive.google.com/thumbnail?id=13yGvI63I80jEAuH5plnfsfQ6Xn-CJVn7&sz=w1200"]
  },
  { 
    id: "cr-c-2",
    title: "Winter World Tour Creative Idea.pdf", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    subCategory: "Creative Content",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Hk5saJXinqgJNiRmknP-yS5vEzobTq68&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1Hk5saJXinqgJNiRmknP-yS5vEzobTq68/view?usp=drive_link",
    fileType: 'pdf',
    description: "Global creative campaign concept for Winter World Tour.",
    details: ["Visual Storytelling", "Concept Art", "Creative Direction"],
    gallery: ["https://drive.google.com/thumbnail?id=1Hk5saJXinqgJNiRmknP-yS5vEzobTq68&sz=w1200"]
  },
  { 
    id: "cr-c-3",
    title: "Rajthanee Creative Series.pdf", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    subCategory: "Creative Content",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1m_mG9QVZRP97_amSQoVdlOn_Ok63Eu2R&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1m_mG9QVZRP97_amSQoVdlOn_Ok63Eu2R/view?usp=drive_link",
    fileType: 'pdf',
    description: "Creative series development for Rajthanee Hospital.",
    details: ["Brand Identity", "Multimedia", "Creative Concepts"],
    gallery: ["https://drive.google.com/thumbnail?id=1m_mG9QVZRP97_amSQoVdlOn_Ok63Eu2R&sz=w1200"]
  },
  { 
    id: "cr-c-4",
    title: "Success Vision Creative Idea.pdf", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    subCategory: "Creative Content",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1hwSuMOUjTl6Rz-t5WJMMkchNUNqpG0kH&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1hwSuMOUjTl6Rz-t5WJMMkchNUNqpG0kH/view?usp=drive_link",
    fileType: 'pdf',
    description: "Strategic creative ideas for Success Vision insurance planning.",
    details: ["Social Media", "Engagement Strategy", "Content Planning"],
    gallery: ["https://drive.google.com/thumbnail?id=1hwSuMOUjTl6Rz-t5WJMMkchNUNqpG0kH&sz=w1200"]
  },
  { 
    id: "cr-c-5",
    title: "Thanaithai in Sweden Creative Idea.pdf", 
    year: "2025", 
    role: "Creative Director", 
    category: "Creative",
    subCategory: "Creative Content",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=14Yh34DIXsVcpSQReMNCbdpUTiB3i4Z3m&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/14Yh34DIXsVcpSQReMNCbdpUTiB3i4Z3m/view?usp=drive_link",
    fileType: 'pdf',
    description: "Creative content strategy for Thai lawyers in Sweden.",
    details: ["Marketing Content", "Visual Impact", "Creative Execution"],
    gallery: ["https://drive.google.com/thumbnail?id=14Yh34DIXsVcpSQReMNCbdpUTiB3i4Z3m&sz=w1200"]
  },
  { 
    id: "cr-s-1",
    title: "รายการซีรีย์สืบสุขภาพ.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "โรงพยาบาลราชธานี",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1eHkZ0CLiYFYSW_jm7MDAY2EQ-FRA_07V&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1eHkZ0CLiYFYSW_jm7MDAY2EQ-FRA_07V/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการซีรีย์ Short Film เกี่ยวกับนักสืบที่สืบค้นปัญหาสุขภาพกับผู้ต้องหา",
    details: ["Screenwriting", "Narrative Structure", "Script Development"],
    gallery: ["https://drive.google.com/thumbnail?id=1eHkZ0CLiYFYSW_jm7MDAY2EQ-FRA_07V&sz=w1200"]
  },
  { 
    id: "cr-s-2",
    title: "รายการซีรีย์สืบสุขภาพSS2.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "โรงพยาบาลราชธานี",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=19A3TQfOMv5lgNIhev7Tj34T_iZEdP0MK&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/19A3TQfOMv5lgNIhev7Tj34T_iZEdP0MK/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการซีรีย์ Short Film เกี่ยวกับนักสืบที่สืบค้นปัญหาสุขภาพกับผู้ต้องหา",
    details: ["Character Development", "Dialogue", "Storytelling"],
    gallery: ["https://drive.google.com/thumbnail?id=19A3TQfOMv5lgNIhev7Tj34T_iZEdP0MK&sz=w1200"]
  },
  { 
    id: "cr-s-3",
    title: "รายการ Health Me Fit.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "โรงพยาบาลราชธานี",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1UMRLCFtdeKgOJ9adxqH7MolRxUZ0ISHb&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1UMRLCFtdeKgOJ9adxqH7MolRxUZ0ISHb/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการให้ความรู้เกี่ยวกับการกายภาพและชีวิตประจำวัน",
    details: ["World Building", "Genre Writing", "Creative Writing"],
    gallery: ["https://drive.google.com/thumbnail?id=1UMRLCFtdeKgOJ9adxqH7MolRxUZ0ISHb&sz=w1200"]
  },
  { 
    id: "cr-s-4",
    title: "รายการ Move Smart Talk.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "โรงพยาบาลราชธานี",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1sJHj8aj0t9Q2sqmLwgEQoQrGO6876AGc&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1sJHj8aj0t9Q2sqmLwgEQoQrGO6876AGc/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการสัมภาษณ์นักกีฬาอาชีพกับคุณหมอกายภาพ เรื่องของกีฬาและร่างกาย",
    details: ["Plot Development", "Script Analysis", "Film Writing"],
    gallery: ["https://drive.google.com/thumbnail?id=1sJHj8aj0t9Q2sqmLwgEQoQrGO6876AGc&sz=w1200"]
  },
  { 
    id: "cr-s-5",
    title: "รายการ Masterยา.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "โรงพยาบาลราชธานี",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1sqpqQ91a7iM9J74ZGK0WpKC_BL2CCwYn&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1sqpqQ91a7iM9J74ZGK0WpKC_BL2CCwYn/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการที่ให้ความรู้เรื่องของยาในรูปแบบสัมภาษณ์คุณหมอ",
    details: ["Collaboration", "Multimedia Writing", "Creative Process"],
    gallery: ["https://drive.google.com/thumbnail?id=1sqpqQ91a7iM9J74ZGK0WpKC_BL2CCwYn&sz=w1200"]
  },
  { 
    id: "cr-s-6",
    title: "รายการ AIYARA ร้านอาหารไทยในสวีเดน.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "AIYARA",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1re4FW6HLgekFTc2jrmdm1P5xJ6Q1M4LU&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1re4FW6HLgekFTc2jrmdm1P5xJ6Q1M4LU/view?usp=drive_link",
    fileType: 'pdf',
    description: "ประวัติความเป็นมาของร้านอาหาร AIYARA ร้านอาหารไทยในสวีเดน",
    details: ["Narrative Techniques", "Advanced Writing", "Storytelling"],
    gallery: ["https://drive.google.com/thumbnail?id=1re4FW6HLgekFTc2jrmdm1P5xJ6Q1M4LU&sz=w1200"]
  },
  { 
    id: "cr-s-7",
    title: "รายการ VisionTalk by Success Vision.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "Success Vision",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1n4nsTNuF4mY1J7K8HDXTOVqlpZxqchXg&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1n4nsTNuF4mY1J7K8HDXTOVqlpZxqchXg/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการเกี่ยวกับเรื่องประกันและการวางแผนภาษี",
    details: ["Creative Writing", "Media Formats", "Scripting"],
    gallery: ["https://drive.google.com/thumbnail?id=1n4nsTNuF4mY1J7K8HDXTOVqlpZxqchXg&sz=w1200"]
  },
  { 
    id: "cr-s-8",
    title: "Success Vision Presentation 1.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "Success Vision",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1X2f7Tz7PQXRjelkoFwRmhVkikKL0tZRG&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1X2f7Tz7PQXRjelkoFwRmhVkikKL0tZRG/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการเกี่ยวกับเรื่องประกันและการวางแผนภาษี",
    details: ["Thematic Writing", "Script Development", "Creative Storytelling"],
    gallery: ["https://drive.google.com/thumbnail?id=1X2f7Tz7PQXRjelkoFwRmhVkikKL0tZRG&sz=w1200"]
  },
  { 
    id: "cr-s-9",
    title: "Success Vision Presentation 2.pdf", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "Success Vision",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1FGN75apq3gXkOL8J2As9CCcyhueGZhod&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1FGN75apq3gXkOL8J2As9CCcyhueGZhod/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการเกี่ยวกับเรื่องประกันและการวางแผนภาษี",
    details: ["Cinematic Writing", "Visual Concepts", "Storytelling"],
    gallery: ["https://drive.google.com/thumbnail?id=1FGN75apq3gXkOL8J2As9CCcyhueGZhod&sz=w1200"]
  },
  { 
    id: "cr-s-10",
    title: "ทนายไทย Article 1", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "ทนายไทยในสวีเดน",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1l7UzmVaPNpUdRPxCEak-XUZIXBoSF_2h&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1l7UzmVaPNpUdRPxCEak-XUZIXBoSF_2h/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการที่ให้ความรู้ด้านกฎหมายกับผู้หญิงไทยในสวีเดนในรูปแบบทั้ง วิดีโอ Podcast และ บทความ",
    details: ["Film Writing", "TV Scripting", "Professional Writing"],
    gallery: ["https://drive.google.com/thumbnail?id=1l7UzmVaPNpUdRPxCEak-XUZIXBoSF_2h&sz=w1200"]
  },
  { 
    id: "cr-s-11",
    title: "ทนายไทย Article 2", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "ทนายไทยในสวีเดน",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=19K5c0qmvzH4KF6yp_ytU26OqQVwtmJu3&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/19K5c0qmvzH4KF6yp_ytU26OqQVwtmJu3/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการที่ให้ความรู้ด้านกฎหมายกับผู้หญิงไทยในสวีเดนในรูปแบบทั้ง วิดีโอ Podcast และ บทความ",
    details: ["Narrative Development", "Creative Scripting", "Storytelling"],
    gallery: ["https://drive.google.com/thumbnail?id=19K5c0qmvzH4KF6yp_ytU26OqQVwtmJu3&sz=w1200"]
  },
  { 
    id: "cr-s-12",
    title: "ทนายไทย podcast", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "ทนายไทยในสวีเดน",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1_u8g8fW8mhKR9f_C_XHCxnbe--c2Ddqv&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1_u8g8fW8mhKR9f_C_XHCxnbe--c2Ddqv/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการที่ให้ความรู้ด้านกฎหมายกับผู้หญิงไทยในสวีเดนในรูปแบบทั้ง วิดีโอ Podcast และ บทความ",
    details: ["Advanced Screenwriting", "Modern Media", "Creative Writing"],
    gallery: ["https://drive.google.com/thumbnail?id=1_u8g8fW8mhKR9f_C_XHCxnbe--c2Ddqv&sz=w1200"]
  },
  { 
    id: "cr-s-13",
    title: "ทนายไทย Script Short VDO", 
    year: "2024", 
    role: "Screenwriter", 
    category: "Creative",
    subCategory: "Screen writing",
    group: "ทนายไทยในสวีเดน",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1u-ykwSswTnWWGjo9NkJiQ7LvgZTUxJQL&sz=w1200",
    videoUrl: "https://drive.google.com/file/d/1u-ykwSswTnWWGjo9NkJiQ7LvgZTUxJQL/view?usp=drive_link",
    fileType: 'pdf',
    description: "รายการที่ให้ความรู้ด้านกฎหมายกับผู้หญิงไทยในสวีเดนในรูปแบบทั้ง วิดีโอ Podcast และ บทความ",
    details: ["Thematic Storytelling", "Script Development", "Creative Writing"],
    gallery: ["https://drive.google.com/thumbnail?id=1u-ykwSswTnWWGjo9NkJiQ7LvgZTUxJQL&sz=w1200"]
  },
  { 
    id: "ph-1",
    title: "Photography Collection 01", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Apd_Iduw2tc4KFsKzHhthE9rxjH4Vol8&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1Apd_Iduw2tc4KFsKzHhthE9rxjH4Vol8&sz=w1200"]
  },
  { 
    id: "ph-2",
    title: "Photography Collection 02", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1OQyBxtaN2tDMnjNTcbK45dckz08i-5ap&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1OQyBxtaN2tDMnjNTcbK45dckz08i-5ap&sz=w1200"]
  },
  { 
    id: "ph-3",
    title: "Photography Collection 03", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1r5L1KXumtt1K9m158wey1v5QwduzE7wr&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1r5L1KXumtt1K9m158wey1v5QwduzE7wr&sz=w1200"]
  },
  { 
    id: "ph-4",
    title: "Photography Collection 04", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1q5PAivu5U7RFX49Y_vpc9PSSWEwHw7Cx&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1q5PAivu5U7RFX49Y_vpc9PSSWEwHw7Cx&sz=w1200"]
  },
  { 
    id: "ph-5",
    title: "Photography Collection 05", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=14GZdprEXjdT-yaUcF0EGmhJTgUkF3iJK&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=14GZdprEXjdT-yaUcF0EGmhJTgUkF3iJK&sz=w1200"]
  },
  { 
    id: "ph-6",
    title: "Photography Collection 06", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=18V0lzrZuABOXF8lqQUcjr-9XyMtgA9i6&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=18V0lzrZuABOXF8lqQUcjr-9XyMtgA9i6&sz=w1200"]
  },
  { 
    id: "ph-7",
    title: "Photography Collection 07", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1etPOjhuNN243izllPPBvfCfEb4WSmmup&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1etPOjhuNN243izllPPBvfCfEb4WSmmup&sz=w1200"]
  },
  { 
    id: "ph-8",
    title: "Photography Collection 08", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=18iN89IgtCU6ZPLoQgNoVstcQTjL6WL0X&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=18iN89IgtCU6ZPLoQgNoVstcQTjL6WL0X&sz=w1200"]
  },
  { 
    id: "ph-9",
    title: "Photography Collection 09", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1FXgvRmfeFaqO2a0c9KGqFG_1gQaBXQHL&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1FXgvRmfeFaqO2a0c9KGqFG_1gQaBXQHL&sz=w1200"]
  },
  { 
    id: "ph-10",
    title: "Photography Collection 10", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1qY3B2C_B0o3ZHcaOCD47S_IdfxJzFgDe&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1qY3B2C_B0o3ZHcaOCD47S_IdfxJzFgDe&sz=w1200"]
  },
  { 
    id: "ph-11",
    title: "Photography Collection 11", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1sEAychZaP7srrb5LJIOfH5AEnKxN-71c&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1sEAychZaP7srrb5LJIOfH5AEnKxN-71c&sz=w1200"]
  },
  { 
    id: "ph-12",
    title: "Photography Collection 12", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Uuwroya3-S49pKXbafX_hIe9FukIfV56&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1Uuwroya3-S49pKXbafX_hIe9FukIfV56&sz=w1200"]
  },
  { 
    id: "ph-13",
    title: "Photography Collection 13", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1FxFs-vqJkLT4aaT2HCDubUcDnyWTvFJh&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1FxFs-vqJkLT4aaT2HCDubUcDnyWTvFJh&sz=w1200"]
  },
  { 
    id: "ph-14",
    title: "Photography Collection 14", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1KUMGvGOkg-tV0DbKxalIR-sOMPhXxX9B&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1KUMGvGOkg-tV0DbKxalIR-sOMPhXxX9B&sz=w1200"]
  },
  { 
    id: "ph-15",
    title: "Photography Collection 15", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1V1gEjFKQfSB2WnpfXtEfAC2GMICy1xAO&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1V1gEjFKQfSB2WnpfXtEfAC2GMICy1xAO&sz=w1200"]
  },
  { 
    id: "ph-16",
    title: "Photography Collection 16", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Es0YOHM9SJYqxlYkimNIFu_KXFefvGH5&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1Es0YOHM9SJYqxlYkimNIFu_KXFefvGH5&sz=w1200"]
  },
  { 
    id: "ph-17",
    title: "Photography Collection 17", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1uqm_SRls7VE9uwbxikXdXUCuBOu3oxOQ&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1uqm_SRls7VE9uwbxikXdXUCuBOu3oxOQ&sz=w1200"]
  },
  { 
    id: "ph-18",
    title: "Photography Collection 18", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1aToQg4ERxX1tkmDAKS7urhN8SA4AF2qE&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1aToQg4ERxX1tkmDAKS7urhN8SA4AF2qE&sz=w1200"]
  },
  { 
    id: "ph-19",
    title: "Photography Collection 19", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Yc5zGs9bwTOd7DsrDATXYNxvuF16xdMx&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1Yc5zGs9bwTOd7DsrDATXYNxvuF16xdMx&sz=w1200"]
  },
  { 
    id: "ph-20",
    title: "Photography Collection 20", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1-yxuFCR1PFGO3ZEJdAaZSpku1nhsQ06f&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1-yxuFCR1PFGO3ZEJdAaZSpku1nhsQ06f&sz=w1200"]
  },
  { 
    id: "ph-21",
    title: "Photography Collection 21", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=19K3dGA71ykuKMuTt5c4xt8FPmf-8u138&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=19K3dGA71ykuKMuTt5c4xt8FPmf-8u138&sz=w1200"]
  },
  { 
    id: "ph-22",
    title: "Photography Collection 22", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1RT6Q8xbjor2o7uvtfJf6O9sS_LF76-1p&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1RT6Q8xbjor2o7uvtfJf6O9sS_LF76-1p&sz=w1200"]
  },
  { 
    id: "ph-23",
    title: "Photography Collection 23", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1vN6NXxhqr4sWY3aS0ic5gLen1l-Cu4_t&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1vN6NXxhqr4sWY3aS0ic5gLen1l-Cu4_t&sz=w1200"]
  },
  { 
    id: "ph-24",
    title: "Photography Collection 24", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=16k8LxaDS1-Y5V4vda6X23Q5n9R2vgEzU&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=16k8LxaDS1-Y5V4vda6X23Q5n9R2vgEzU&sz=w1200"]
  },
  { 
    id: "ph-25",
    title: "Photography Collection 25", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=10-fiUuliGv1HbtrMQf0mqx1wqQWhKZmW&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=10-fiUuliGv1HbtrMQf0mqx1wqQWhKZmW&sz=w1200"]
  },
  { 
    id: "ph-26",
    title: "Photography Collection 26", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1sslJd-cbyTVQ4WMxpnlAGURQjddp9NJs&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1sslJd-cbyTVQ4WMxpnlAGURQjddp9NJs&sz=w1200"]
  },
  { 
    id: "ph-27",
    title: "Photography Collection 27", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1Gh2UAH-dzuhRnVHGyDENUKGcuqHjQF1H&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1Gh2UAH-dzuhRnVHGyDENUKGcuqHjQF1H&sz=w1200"]
  },
  { 
    id: "ph-28",
    title: "Photography Collection 28", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1gY3X0G4ih8MUvi0hwtB_VyjrImk4JZZz&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1gY3X0G4ih8MUvi0hwtB_VyjrImk4JZZz&sz=w1200"]
  },
  { 
    id: "ph-29",
    title: "Photography Collection 29", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1wZA1uzFDyFYzLZHCHQLEZXfE7vRkJEVi&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1wZA1uzFDyFYzLZHCHQLEZXfE7vRkJEVi&sz=w1200"]
  },
  { 
    id: "ph-30",
    title: "Photography Collection 30", 
    year: "2024", 
    role: "Photographer", 
    category: "Photography",
    subCategory: "Gallery",
    period: "Work Experience",
    img: "https://drive.google.com/thumbnail?id=1uGxQYubiC9W1Ocsul3DVj26opDnzOE73&sz=w1200",
    description: "A collection of professional photography capturing moments and atmospheres.",
    details: ["Composition", "Visual Storytelling", "Lighting"],
    gallery: ["https://drive.google.com/thumbnail?id=1uGxQYubiC9W1Ocsul3DVj26opDnzOE73&sz=w1200"]
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
              className="group relative aspect-video overflow-hidden bg-black interactive flex items-center justify-center border border-white/5"
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
    "Commercial & TVC": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    "Documentary & Story": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    "VDO Producer": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    "VDO Editor": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    "Creative Content": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    "Screen writing": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800"
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
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-none">{category}</h2>
        </div>

        <button 
          onClick={onClose}
          className="fixed top-6 right-6 md:top-12 md:right-12 z-[10000] p-4 text-cinematic-gold hover:text-white transition-colors interactive"
          aria-label="Close category"
        >
          <X size={32} />
        </button>
      </div>

      <div className="p-6 md:p-12 lg:p-24 space-y-24 max-w-7xl mx-auto">
        {category === "Photography" || category === "Design" ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden bg-black mb-6"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-cover opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
              </motion.div>
            ))}
          </div>
        ) : (category === "Film & Production" || category === "VDO Creation" || category === "Creative") && subCategories.length > 0 ? (
          // Group by Subcategory for Film & Production, VDO Creation and Creative
          subCategories.map(subCat => {
            const subCatProjects = filteredProjects.filter(p => p.subCategory === subCat);
            return (
              <div key={subCat} className="space-y-12">
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

                {/* Divide by Period within Subcategory for VDO Creation or Group for Creative */}
                {category === "VDO Creation" || category === "Creative" ? (
                  <div className="space-y-16">
                    {category === "VDO Creation" ? (
                      periods.map(period => {
                        const periodProjects = subCatProjects.filter(p => p.period === period);
                        if (periodProjects.length === 0) return null;
                        return (
                          <div key={period} className="space-y-8">
                            <h4 className="text-[10px] tracking-[0.4em] text-cinematic-gold/60 uppercase border-l-2 border-cinematic-gold pl-4">
                              {period}
                            </h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                              {periodProjects.map((project, i) => (
                                <motion.div
                                  key={project.id}
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  onClick={() => onProjectSelect(project)}
                                  className="group relative aspect-video overflow-hidden bg-black interactive"
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
                      // Creative category grouping by 'group' field
                      (() => {
                        const groups = Array.from(new Set(subCatProjects.map(p => p.group).filter(Boolean))) as string[];
                        
                        if (groups.length === 0) {
                          return (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                              {subCatProjects.map((project, i) => (
                                <motion.div
                                  key={project.id}
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  onClick={() => onProjectSelect(project)}
                                  className="group relative aspect-video overflow-hidden bg-black interactive"
                                >
                                  <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover opacity-60 md:opacity-40 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
                                  <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-cinematic-black to-transparent transition-opacity duration-500 ${subCat === "Screen writing" ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"}`}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase">{project.role}</span>
                                      {project.fileType === 'pdf' && (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-cinematic-gold/20 border border-cinematic-gold/30 rounded-sm">
                                          <FileText size={10} className="text-cinematic-gold" />
                                          <span className="text-[8px] font-bold text-cinematic-gold uppercase">PDF</span>
                                        </div>
                                      )}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display font-bold mt-2">{project.title}</h3>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          );
                        }

                        return groups.map(group => {
                          const groupProjects = subCatProjects.filter(p => p.group === group);
                          return (
                            <div key={group} className="space-y-8">
                              <h4 className="text-[10px] tracking-[0.4em] text-cinematic-gold/60 uppercase border-l-2 border-cinematic-gold pl-4">
                                {group}
                              </h4>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {groupProjects.map((project, i) => (
                                  <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => onProjectSelect(project)}
                                    className="group relative aspect-video overflow-hidden bg-black interactive"
                                  >
                                    <img 
                                      src={project.img} 
                                      alt={project.title} 
                                      className="w-full h-full object-cover opacity-60 md:opacity-40 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
                                    <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-cinematic-black to-transparent transition-opacity duration-500 ${subCat === "Screen writing" ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"}`}>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase">{project.role}</span>
                                        {project.fileType === 'pdf' && (
                                          <div className="flex items-center gap-1 px-2 py-0.5 bg-cinematic-gold/20 border border-cinematic-gold/30 rounded-sm">
                                            <FileText size={10} className="text-cinematic-gold" />
                                            <span className="text-[8px] font-bold text-cinematic-gold uppercase">PDF</span>
                                          </div>
                                        )}
                                      </div>
                                      <h3 className="text-xl md:text-2xl font-display font-bold mt-2">{project.title}</h3>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          );
                        });
                      })()
                    )}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {subCatProjects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => onProjectSelect(project)}
                        className="group relative aspect-video overflow-hidden bg-black interactive"
                      >
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 md:opacity-40 md:group-hover:opacity-80 md:group-hover:scale-105 transition-all duration-700 desaturate md:group-hover:desaturate-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 border-[8px] md:border-[12px] border-cinematic-black pointer-events-none" />
                        <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-cinematic-black to-transparent transition-opacity duration-500 ${subCat === "Screen writing" ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] tracking-[0.3em] text-cinematic-gold uppercase">{project.role}</span>
                            {project.fileType === 'pdf' && (
                              <div className="flex items-center gap-1 px-2 py-0.5 bg-cinematic-gold/20 border border-cinematic-gold/30 rounded-sm">
                                <FileText size={10} className="text-cinematic-gold" />
                                <span className="text-[8px] font-bold text-cinematic-gold uppercase">PDF</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl md:text-2xl font-display font-bold mt-2">{project.title}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
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
                      className="group relative aspect-video overflow-hidden bg-black interactive"
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

  // Google Drive
  const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^\/]+)/);
  if (gdMatch) return `https://drive.google.com/file/d/${gdMatch[1]}/preview`;
  
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
          <X className="w-6 h-6 md:w-8 md:h-8" />
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
              <div className="flex items-center gap-3">
                <span className="text-[10px] md:text-xs tracking-[0.4em] text-cinematic-gold uppercase">{project.role}</span>
                {project.fileType === 'pdf' && (
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-cinematic-gold/20 border border-cinematic-gold/30 rounded-sm">
                    <FileText size={12} className="text-cinematic-gold" />
                    <span className="text-[10px] font-bold text-cinematic-gold uppercase">PDF</span>
                  </div>
                )}
              </div>
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
                {project.fileType === 'pdf' ? (
                  <span className="flex items-center justify-center gap-2">
                    <FileText size={12} />
                    Open Original PDF
                  </span>
                ) : (
                  `Watch on ${project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? 'YouTube' : project.videoUrl.includes('facebook.com') ? 'Facebook' : 'Platform'}`
                )}
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
      {/* Section Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920" 
          alt="" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black via-transparent to-cinematic-black" />
      </div>

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
            <a 
              href="https://drive.google.com/file/d/1OIedhhPIYfvXbtUh-zJwvwYEHYjYi4N2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-cinematic-gold/30 text-[10px] tracking-[0.4em] uppercase text-cinematic-gold hover:bg-cinematic-gold hover:text-cinematic-black transition-all interactive"
            >
              Download Full CV
            </a>
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
      {/* Section Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1516387153529-7a390379b888?auto=format&fit=crop&q=80&w=1920" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-cinematic-black" />
      </div>

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
          {/* Social links removed as per request */}
        </div>
        
        <div className="text-[10px] tracking-[0.4em] uppercase text-cinematic-offwhite/20 text-center lg:text-right">
          © {currentYear} Yasinton Huvanundana. <br className="md:hidden" /> All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};
