import React, { useEffect, useRef, useState } from "react";
import { Mail, Link as IconLink, GitBranch, Terminal, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Briefcase, Cpu } from "lucide-react";


const NAV_ITEMS = ["About", "Education", "Experience", "Projects", "Skills", "Contact"];

const EDUCATION = [
  {
    title: "M.Tech Computer Science & Engineering (Integrated 5 Years)",
    place: "Sri Ramakrishna Engineering College, Coimbatore",
    year: "2022 – 2027",
    score: "CGPA 8.1 / 10",
  },
  {
    title: "Higher Secondary Education (HSC)",
    place: "Vidyaa Vikas Matric Higher Secondary School, Coimbatore",
    year: "2021 – 2022",
    score: "90.3%",
  },
  {
    title: "Secondary Education (SSLC)",
    place: "Vidyaa Vikas Matric Higher Secondary School, Coimbatore",
    year: "2019 – 2020",
    score: "94.6%",
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Development Intern",
    company: "RBG.AI",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Engineered the core Multi-Level Task Management System, supporting nested subtasks, secure GridFS file attachments, commenting threads, and automated verification workflows.",
      "Architected a secure FastAPI backend with JWT & Google OAuth2, implementing role-based dashboards and automated Axios token injection interceptors.",
      "Built connection-pooled WebSocket managers and an APScheduler background engine for real-time chat sync, task updates, and automated attendance alerts.",
      "Configured comprehensive automated test coverages across critical user flows using Jest and Playwright to guarantee 95%+ overall platform uptime."
    ],
  },
  {
    role: "Web Development Intern",
    company: "Twisys Infotech",
    period: "Dec 2024",
    points: [
      "Engineered a fully responsive real estate property presentation dashboard layout utilizing custom HTML5 and dynamic CSS3 configurations.",
      "Integrated and deployed a conversational AI chatbot layer using Botpress to automate live customer property inquiries and user query loops.",
      "Developed secure client-side lead capture form elements to automatically collect, parse, and synchronize data from frontend inquiry submissions.",
      "Optimized frontend components, image asset behaviors, and interactive modules to significantly eliminate rendering lag and improve scroll response metrics."
    ],
  },
  {
    role: "Web Development Intern",
    company: "Kitkat Software Technologies",
    period: "Jun 2024",
    points: [
      "Developed modular web user interfaces using native HTML5 and CSS3 semantic code properties.",
      "Designed and deployed interactive frontend navigation schemas to refine end-user engagement tracking.",
      "Conducted systemic browser layout testing to guarantee cross-browser compatibility and accelerate high-speed asset rendering."
    ],
  },
];

const GITHUB_LINK = import.meta.env.VITE_GITHUB_URL || "#";
const LINKEDIN_LINK = import.meta.env.VITE_LINKEDIN_URL || "#";
const PROJECT_ECONNECT_URL = import.meta.env.VITE_PROJECT_ECONNECT_URL || "#";
const PROJECT_CORROSION_URL = import.meta.env.VITE_PROJECT_CORROSION_DETECTION_URL || "#";
const PROJECT_NATURECERT_URL = import.meta.env.VITE_PROJECT_NATURECERT_URL || "#";
const PROJECT_LAND_PROMOTERS_URL = import.meta.env.VITE_PROJECT_LAND_PROMOTERS_URL || "#";
const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS || "nithyasrir05@gmail.com";
const AVATAR_URL = import.meta.env.VITE_AVATAR_URL || "/avatar.jpg";
const RESUME_URL = import.meta.env.VITE_RESUME_URL || "/resume.pdf";

const PROJECTS = [
  {
    title: "E-Connect Workforce Management Platform",
    desc: "A centralized full-stack workflow platform featuring a multi-level task management engine, secure GridFS attachments, and connection-pooled WebSockets optimized to eliminate tool fragmentation and maintain 95% uptime.",
    tech: ["React.js", "FastAPI", "MongoDB", "WebSockets", "APScheduler"],
    github: PROJECT_ECONNECT_URL,
    glow: "#10b981",
  },
  {
    title: "Corrosion Detection in Wind Turbine Motors",
    desc: "An automated predictive maintenance AI system engineered to replace manual high-altitude turbine inspections. Utilizes thermal imaging data and a YOLOv5 model to achieve 90% corrosion classification accuracy with instant Twilio SMS alerting.",
    tech: ["YOLOv5", "OpenCV", "WebSockets", "Twilio API"],
    github: PROJECT_CORROSION_URL,
    glow: "#eda18f",
  },
  {
    title: "Eco-Friendly Compliance System",
    desc: "An all-in-one sustainability web platform built to track personal carbon footprints and offer eco-tips. Features dynamic daily challenge tracking matrix dashboards driven by live WebSocket telemetry and high-speed REST APIs.",
    tech: ["React.js", "Node.js", "WebSockets", "REST APIs"],
    github: PROJECT_NATURECERT_URL,
    glow: "#10b981",
  },
  {
    title: "Land Promoters Website",
    desc: "A responsive real estate single-page application built to seamlessly manage customer inquiries. Implements an automated Nodemailer SMTP email routing engine with secure server-side validation to prevent spam and ensure data integrity.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
    github: PROJECT_LAND_PROMOTERS_URL,
    glow: "#f5b78b",
  },
];

const SKILLS = {
  "Programming Languages": ["JavaScript", "Python", "Java", "SQL"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB"],
  Testing: ["Jest", "Playwright", "Postman"],
  Tools: ["Git", "GitHub", "VS Code"],
  "AI / ML": ["YOLOv5", "OpenCV"],
};

const SKILL_LOGO_FALLBACK = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  YOLOv5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  Playwright: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-plain.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
};

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

function KineticParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 20;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height + height,
        radius: Math.random() * 12 + 10,
        speedY: -(Math.random() * 0.4 + 0.2), 
        speedX: Math.sin(Math.random() * Math.PI) * 0.15,
        opacity: Math.random() * 0.04 + 0.02, 
        pulseSpeed: Math.random() * 0.01 + 0.003,
        pulseFactor: 0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulseFactor += p.pulseSpeed;

        const currentRadius = p.radius + Math.sin(p.pulseFactor) * 1.5;

        if (p.y < -40) {
          p.y = height + Math.random() * 50;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius);
        gradient.addColorStop(0, `rgba(52, 211, 153, ${p.opacity + 0.04})`);
        gradient.addColorStop(0.6, `rgba(16, 185, 129, ${p.opacity})`);
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }} />;
}

export default function ModernPortfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;
        const top = section.offsetTop - 160;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollProjects = (dir) => {
    if (!projectRef.current) return;
    const container = projectRef.current;
    const scrollVal = container.clientWidth * 0.85;
    container.scrollBy({ left: dir === "left" ? -scrollVal : scrollVal, behavior: "smooth" });
  };

  const scrollToProject = (index) => {
    if (!projectRef.current) return;
    const panels = projectRef.current.querySelectorAll('.project-glass-panel');
    if (panels[index]) {
      panels[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (!projectRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const panels = projectRef.current.querySelectorAll('.project-glass-panel');
            const index = Array.from(panels).indexOf(entry.target);
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      {
        root: projectRef.current,
        threshold: 0.55,
      }
    );

    const panels = projectRef.current.querySelectorAll('.project-glass-panel');
    panels.forEach((panel) => observer.observe(panel));

    return () => {
      panels.forEach((panel) => observer.unobserve(panel));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-core">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #f8fafc;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }

        .portfolio-core {
          background: linear-gradient(-45deg, #f8fafc, #f1f5f9, #ecfdf5, #f4fbf7);
          background-size: 400% 400%;
          animation: auroraFlow 16s ease infinite;
          min-height: 100vh;
          position: relative;
        }

        @keyframes auroraFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .scroll-tracker {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #34d399, #059669);
          z-index: 2000;
          transition: width 0.1s ease-out;
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(248, 250, 252, 0.8);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(4, 120, 87, 0.06);
        }

        .nav-scrolled {
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .logo {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -1px;
          color: #0f172a;
        }

        .logo span { color: #065f46; }

        .nav-links {
          display: flex;
          gap: 10px;
        }

        .hamburger {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }

        .hamburger .bar {
          width: 20px;
          height: 2px;
          background: #0f172a;
          display: block;
          border-radius: 2px;
          position: relative;
        }

        .hamburger .bar::before,
        .hamburger .bar::after {
          content: "";
          width: 20px;
          height: 2px;
          background: #0f172a;
          position: absolute;
          left: 0;
          border-radius: 2px;
        }

        .hamburger .bar::before { top: -6px; }
        .hamburger .bar::after { top: 6px; }

        .nav-links button {
          border: none;
          background: none;
          color: #334155; 
          cursor: pointer;
          font-size: 14px;
          padding: 10px 16px;
          border-radius: 10px;
          transition: 0.3s ease;
          font-family: inherit;
          font-weight: 500;
        }

        .nav-links button:hover,
        .nav-links button.active {
          background: rgba(4, 120, 87, 0.12) !important;
          color: #065f46 !important;
          font-weight: 600;
        }

        section {
          padding: 110px 7%;
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 48px;
          letter-spacing: -1px;
          color: #0f172a; 
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-title span {
          font-family: 'Inter', sans-serif;
          color: #10b981;
          font-size: 20px;
          font-weight: 700;
        }

        .section-title::after {
          content: "";
          height: 1.5px;
          flex: 1;
          background: linear-gradient(90deg, #10b981 0%, rgba(16, 185, 129, 0.3) 30%, transparent 100%);
          margin-left: 8px;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
          padding: 120px 7% 80px;
          box-sizing: border-box;
          width: 100%;
        }

        .hero-left {
          flex: 1;
          max-width: 650px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .hero-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 25px;
        }

        .tagline-pill {
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #047857;
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .hero h1 {
          font-size: clamp(54px, 7.5vw, 90px);
          line-height: 0.95;
          letter-spacing: -4px;
          margin-bottom: 20px;
        }

        .gradient {
          background: linear-gradient(90deg, #059669, #10b981, #065f46);
          -webkit-background-clip: text;
          color: transparent;
        }

        .subtitle {
          font-size: 24px;
          color: #0f172a; 
          margin-bottom: 24px;
          font-weight: 700;
        }

        .subtitle-highlight {
          color: #047857;
          font-weight: 700;
          background: rgba(4, 120, 87, 0.08);
          padding: 4px 14px;
          border-radius: 999px;
        }

        .hero .desc {
          color: #334155; 
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 32px;
          font-size: 15.5px;
          font-weight: 500;
        }

        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        .btn-prime {
          background: #065f46;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 14px;
          font-weight: 700;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 20px rgba(6, 95, 70, 0.15);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-prime:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(6, 95, 70, 0.25);
          background: #047857;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(15, 23, 42, 0.16);
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 14px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s cubic-bezier(.25,.8,.25,1);
          font-family: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-secondary:hover {
          border-color: #10b981;
          color: #065f46;
          transform: translateY(-3px);
          background: #ffffff;
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.12);
        }

        .hero-inline-socials { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 5px; }

        .hero-social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 14px;
          text-decoration: none;
          color: #0f172a;
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.08);
          transition: 0.3s ease;
          font-size: 14px;
          font-weight: 600;
        }

        .hero-social-link:hover {
          transform: translateY(-3px);
          border-color: rgba(16, 185, 129, 0.35);
          background: rgba(16, 185, 129, 0.08);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.08);
        }

        .avatar {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: linear-gradient(135deg,#10b981,#059669);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 20px 50px rgba(16,185,129,0.15);
          overflow: hidden; 
          position: relative;
          border: 4px solid #ffffff;
          transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
        }

        .avatar:hover { transform: scale(1.04) rotate(1deg); }
        .avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 50%; }

        /* ==========================================================================
           📦 GLASS CARD SYSTEM OVERHAUL: REMOVED CONGESTED SPACING & ADDED ROOM TO BREATHE
           ========================================================================== */
        .glass-card, .card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(12px);
        }

        .glass-card:hover, .card:hover {
          transform: translateY(-6px) scale(1.01);
          background: #ffffff;
          border-color: rgba(16, 185, 129, 0.45);
          box-shadow: 
            0 20px 40px rgba(4, 120, 87, 0.06),
            0 0 25px rgba(16, 185, 129, 0.18);
        }

        /* EDUCATION STACK */
        .edu-stack { display: flex; flex-direction: column; gap: 24px; }
        .edu-item {
          padding: 36px 32px; /* Generous internal breathing room */
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 32px;
          width: 100%;
        }
        .edu-meta h3 { font-size: 19px; color: #0f172a; margin-bottom: 10px; font-weight: 700; line-height: 1.4; }
        .edu-meta p { color: #334155; font-size: 14.5px; font-weight: 500; }
        .edu-grade { text-align: right; white-space: nowrap; }
        .edu-grade h4 { color: #065f46; font-size: 18px; margin-bottom: 6px; font-weight: 700; }
        .edu-grade p { color: #334155; font-size: 13.5px; font-weight: 500; }

        /* EXPERIENCES TIMELINE ROWS */
        .timeline-container { 
          position: relative; 
          padding-left: 20px; 
          display: flex;
          flex-direction: column;
          gap: 32px; 
        }
        
        .timeline-line {
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 2px;
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.4), rgba(15, 23, 42, 0.05));
        }
        
        .timeline-block { 
          position: relative; 
          padding-left: 40px; 
        }
        
        .timeline-icon-pointer {
          position: absolute;
          left: -11px;
          top: 24px; /* Centered with larger paddings */
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          z-index: 2;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
          transition: all 0.3s ease;
        }
        
        .timeline-block:hover .timeline-icon-pointer {
          background: #10b981;
          color: #ffffff;
          scale: 1.15;
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.5);
        }

        .timeline-content { padding: 36px 32px; } /* Relaxed spacing */
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          padding-bottom: 16px;
        }
        .timeline-header h3 { font-size: 20px; color: #0f172a; font-weight: 700; }
        .timeline-header h4 { color: #059669; font-size: 15px; margin-top: 6px; font-weight: 600; }
        .timeline-header .period { color: #334155; font-size: 14px; font-weight: 500; }
        
        .timeline-content ul { padding-left: 20px; display: flex; flex-direction: column; gap: 12px; } /* Distinct gap between points */
        .timeline-content li { color: #334155; font-size: 15px; line-height: 1.75; font-weight: 500; }

        /* PROJECTS SCROLL WINDOW */
        .projects-carousel-wrapper { position: relative; width: 100%; }
        .scroll-window {
          overflow-x: auto;
          scrollbar-width: none;
          padding: 20px 0;
          scroll-snap-type: x mandatory;
        }
        .scroll-window::-webkit-scrollbar { display: none; }
        .project-track { display: flex; gap: 24px; align-items: stretch; }
        .project-glass-panel { scroll-snap-align: start; }
        
        /* FIXED PROJECT PANEL HEIGHT CONFIG */
        .project-glass-panel {
          min-width: 360px;
          max-width: 400px;
          flex: 1;
          padding: 38px 32px;
          text-decoration: none;
          color: #0f172a;
          min-height: 340px; /* Ensured no card crushes the content layout */
        }

        .scroll-window { -webkit-overflow-scrolling: touch; }

        .carousel-dots { display: none; gap: 8px; justify-content: center; margin-top: 12px; }
        .carousel-dots .dot { width: 10px; height: 10px; border-radius: 999px; background: rgba(15,23,42,0.12); border: none; cursor: pointer; transition: transform 0.18s ease, background 0.18s ease; }
        .carousel-dots .dot.active { background: #065f46; transform: scale(1.25); }
        
        .glow-overlay {
          position: absolute;
          width: 180px; height: 180px;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.15;
          right: -60px; top: -60px;
          pointer-events: none;
          transition: all 0.4s ease;
        }

        .project-glass-panel:hover .glow-overlay { opacity: 0.35; scale: 1.25; }
        .project-glass-panel h3 { font-size: 21px; margin-bottom: 14px; font-weight: 700; line-height: 1.4; }
        .project-glass-panel p { color: #334155; font-size: 14.5px; line-height: 1.75; margin-bottom: 24px; font-weight: 500; }
        
        /* Push meta tags and links dynamically to the bottom edge */
        .project-meta-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag-pill {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(6, 95, 70, 0.08);
          color: #065f46;
          font-size: 12px;
          font-weight: 700;
        }

        .project-action-foot {
          color: #065f46;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ctrl-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: none;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
        }
        .ctrl-btn:hover { background: #10b981; color: #ffffff; box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }
        .ctrl-btn.l-pos { left: -14px; }
        .ctrl-btn.r-pos { right: -14px; }

        /* Mobile swipe hint button */
        .mobile-swipe-hint {
          display: none;
        }

        /* Mobile nav overlay (hidden by default) */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          z-index: 2000;
          pointer-events: none;
          transition: opacity 0.25s ease;
          opacity: 0;
        }

        .mobile-nav.open { opacity: 1; pointer-events: auto; }

        .mobile-nav-panel {
          width: 260px;
          max-width: 80%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), #ffffff);
          box-shadow: 0 20px 50px rgba(15,23,42,0.12);
          backdrop-filter: blur(8px);
          padding: 28px 18px;
        }

        .mobile-nav-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px 10px;
          background: transparent;
          border: none;
          color: #065f46;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          border-radius: 14px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus {
          background: rgba(6,95,70,0.12);
          color: #065f46;
          outline: none;
        }

        .mobile-nav-link.active {
          background: rgba(6,95,70,0.16);
          color: #065f46;
        }

        .mobile-nav-link.active:hover {
          background: rgba(6,95,70,0.2);
        }

        .mobile-nav-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(2,6,23,0.32);
        }

        /* SKILLS ARCHITECTURE INTERFACES */
        .skills-hub {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 20px;
          padding: 12px 0;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          align-items: start;
        }
        .skill-row-matrix {
          display: grid;
          grid-template-columns: minmax(120px, 170px) minmax(0, 1fr);
          align-items: center;
          gap: 24px;
          padding: 16px 24px;
          border-radius: 20px;
          width: 100%;
          min-width: 0;
        }
        .skill-row-matrix .cat-label {
          font-size: 12px;
          font-weight: 800;
          color: #065f46;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .skills-badge-pool {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          min-width: 0;
        }
        .skill-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.06);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        
        .skill-badge:hover {
          transform: translateY(-3px);
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.08);
        }
        .skill-badge img { width: 18px; height: 18px; object-fit: contain; }
        .skill-badge span { font-size: 13.5px; font-weight: 600; color: #0f172a; }

        /* CENTER ALIGNED CONTACT BOX INTERACTION */
        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .contact-card-box {
          width: 100%;
          max-width: 950px;
          padding: 64px 48px;
          text-align: center;
        }
        .contact-card-box h3 { font-size: 34px; font-weight: 800; color: #0f172a; margin-bottom: 16px; letter-spacing: -1px; }
        .contact-card-box p { color: #334155; max-width: 640px; margin: 0 auto 40px; line-height: 1.8; font-size: 16px; font-weight: 500; }
        
        .contact-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          justify-content: center;
        }
        
        .contact-anchor {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px;
          border-radius: 20px;
          text-decoration: none;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          text-align: left;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .contact-anchor:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.35);
          background: rgba(16, 185, 129, 0.08);
          box-shadow: 0 15px 30px rgba(16, 185, 129, 0.12);
        }
        
        .contact-anchor svg { color: #065f46; flex-shrink: 0; }
        .contact-anchor .label-desc span { display: block; color: #334155; font-size: 11px; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.5px; font-weight: 600; }
        .contact-anchor .label-desc strong { color: #0f172a; font-size: 14.5px; font-weight: 600; word-break: break-all; }

        footer {
          padding: 40px 7%;
          text-align: center;
          color: #334155;
          font-size: 14px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          position: relative;
          z-index: 2;
          font-weight: 500;
        }

        @media (max-width: 1100px) {
          .skills-hub { grid-template-columns: 1fr; }
          .skill-row-matrix { grid-template-columns: 1fr; gap: 20px; padding: 24px; }
        }

        @media (max-width: 900px) {
          .hero { flex-direction: column-reverse; text-align: center; padding-top: 140px; padding-bottom: 60px; gap: 40px; min-height: auto; }
          .hero-actions, .hero-inline-socials { justify-content: center; width: 100%; }
          nav .nav-links { display: none; }
          .hamburger { display: inline-flex; }
          .mobile-swipe-hint { display: none; }
          .ctrl-btn { display: none; }
          .ctrl-btn.l-pos { left: 8px; }
          .ctrl-btn.r-pos { right: 8px; }
          .avatar { width: 220px; height: 220px; }
          section { padding: 80px 5%; }
          .skill-row-matrix { gap: 16px; padding: 24px; }
          .edu-item { padding: 28px; gap: 24px; }
          .timeline-content { padding: 28px; }
          .carousel-dots { display: flex; }
          /* ctrl-btn remains visible on mobile */
          .contact-card-box { padding: 40px 20px; }
          .project-glass-panel { min-width: 280px; max-width: 320px; padding: 20px; }
          .project-track { gap: 16px; }
        }
      `}</style>

      <div className="scroll-tracker" style={{ width: `${scrollProgress}%` }} />

      <KineticParticleBackground />

      <nav className={scrolled ? "nav-scrolled" : ""}>
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMobileNavOpen(true)}
        >
          <span className="bar" />
        </button>
        <div className="logo">
          NR<span>.</span>
        </div>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div className={"mobile-nav" + (mobileNavOpen ? " open" : "")} onClick={() => setMobileNavOpen(false)}>
        <div className="mobile-nav-backdrop" />
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Menu</div>
            <button onClick={() => setMobileNavOpen(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18 }}>✕</button>
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`mobile-nav-link ${active === item ? 'active' : ''}`}
              onClick={() => { scrollToSection(item); setMobileNavOpen(false); }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ABOUT / HERO SECTION */}
      <section className="hero" id="about">
        <div className="hero-left">
          {/* <div className="tagline-pill">
            <Terminal size={14} /> Available for Internships & Full-Stack Roles
          </div> */}
          <Reveal delay={100}>
            <h1>
              <span className="gradient">NITHYASRI R</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="subtitle">
              <span className="subtitle-highlight">Full-Stack Developer</span>
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="desc">
              Full-Stack Developer passionate about building scalable web applications, real-time systems, and AI-powered solutions. Experienced in developing modern production-ready platforms using React.js, FastAPI, Node.js, MongoDB, and Python through impactful industry internships and hands-on projects.

            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-actions">
              <button className="btn-prime" onClick={() => scrollToSection("contact")}>
                Contact Me <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection("projects")}>
                View Projects
              </button>
              <a className="btn-secondary" href={RESUME_URL} target="_blank" rel="noreferrer">
                View Resume
              </a>
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Reveal delay={300}>
            <div className="avatar-pod">
              <div className="avatar">
                <img src={AVATAR_URL} alt="Nithyasri R Profile Asset" className="avatar-img" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <Reveal>
          <h2 className="section-title">
            <span>01.</span> Education
          </h2>
        </Reveal>
        <div className="edu-stack">
          {EDUCATION.map((edu, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <div className="glass-card edu-item">
                <div className="edu-meta">
                  <h3>{edu.title}</h3>
                  <p>{edu.place}</p>
                </div>
                <div className="edu-grade">
                  <h4>{edu.score}</h4>
                  <p>{edu.year}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <Reveal>
          <h2 className="section-title">
            <span>02.</span> Experience
          </h2>
        </Reveal>
        <div className="timeline-container">
          <div className="timeline-line" />
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={i * 140}>
              <div className="timeline-block">
                <div className="timeline-icon-pointer">
                  {i === 0 ? <Cpu size={12} /> : <Briefcase size={12} />}
                </div>
                <div className="glass-card timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul>
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS SCROLL DECK */}
      <section id="projects">
        <Reveal>
          <h2 className="section-title">
            <span>03.</span> Projects
          </h2>
        </Reveal>
        <div className="projects-carousel-wrapper">
          <button className="ctrl-btn l-pos" onClick={() => scrollProjects("left")} aria-label="Slide Left">
            <ChevronLeft size={18} />
          </button>
          <div className="scroll-window" ref={projectRef}>
            <div className="project-track">
              {PROJECTS.map((proj, idx) => (
                <a key={idx} href={proj.github} target="_blank" rel="noreferrer" className="glass-card project-glass-panel">
                  <div className="glow-overlay" style={{ background: proj.glow }} />
                  <div>
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>
                  <div className="project-meta-footer">
                    <div className="tag-row">
                      {proj.tech.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <div className="project-action-foot">
                      View Repository →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button className="ctrl-btn r-pos" onClick={() => scrollProjects("right")} aria-label="Slide Right">
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="carousel-dots" role="tablist" aria-label="Projects pagination">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              className={"dot" + (activeProject === idx ? " active" : "")}
              onClick={() => scrollToProject(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section id="skills">
        <Reveal>
          <h2 className="section-title">
            <span>04.</span> Technical Skills
          </h2>
        </Reveal>
        <div className="glass-card skills-hub">
          {Object.entries(SKILLS).map(([cat, skillsArr], idx) => (
            <div key={cat} className="skill-row-matrix" style={{ borderBottom: idx !== Object.keys(SKILLS).length - 1 ? '1px solid rgba(15,23,42,0.04)' : 'none' }}>
              <div className="cat-label">{cat}</div>
              <div className="skills-badge-pool">
                {skillsArr.map((s) => (
                  <div key={s} className="skill-badge">
                    <img src={SKILL_LOGO_FALLBACK[s]} alt={`${s} toolkit symbol`} onError={(e) => { e.target.style.display='none'; }} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SETUP */}
      <section id="contact">
        <Reveal>
          <h2 className="section-title">
            <span>05.</span> Contact
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="contact-wrapper">
            <div className="glass-card contact-card-box">
              <h3>Let’s Connect</h3>
              <p>
                Passionate about building modern web applications and solving real-world problems through clean, scalable software solutions.
              </p>
              <div className="contact-links-grid">
                <a className="contact-anchor" href={`mailto:${EMAIL_ADDRESS}`}>
                  <Mail size={22} />
                  <div className="label-desc">
                    <span>Email Address</span>
                    <strong>{EMAIL_ADDRESS}</strong>
                  </div>
                </a>
                <a className="contact-anchor" href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
                  <IconLink size={22} />
                  <div className="label-desc">
                    <span>LinkedIn Connection</span>
                    <strong>Connect Professionally</strong>
                  </div>
                </a>
                <a className="contact-anchor" href={GITHUB_LINK} target="_blank" rel="noreferrer">
                  <GitBranch size={22} />
                  <div className="label-desc">
                    <span>GitHub Codebase</span>
                    <strong>View My Projects</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
         © 2026 Nithyasri R. All rights reserved.
      </footer>
    </div>
  );
}