import { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Palette, 
  Layers, 
  Zap, 
  Github, 
  Twitter, 
  Linkedin,
  Sparkles,
  Award,
  TrendingUp
} from 'lucide-react';

// Custom Hook for Reveal on Scroll
const useReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const RevealSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useReveal();
  
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "MeetHire",
      category: "Platform Design",
      year: "2024",
      description: "AI-powered campus hiring discovery platform connecting students with global recruiters.",
      color: "from-indigo-600 to-purple-600",
      type: "UX Design | SaaS"
    },
    {
      title: "Bilto",
      category: "HealthTech",
      year: "2024",
      description: "Comprehensive hospital billing SaaS platform designed for modern clinics and patient management.",
      color: "from-emerald-500 to-teal-600",
      type: "Product Design"
    },
    {
      title: "Zyvo",
      category: "EdTech",
      year: "2023",
      description: "Revolutionary study application focusing on cognitive memory retention and collaborative learning.",
      color: "from-orange-500 to-red-600",
      type: "App Design"
    }
  ];

  const experience = [
    {
      company: "Innovate Labs",
      role: "Lead Product Designer",
      period: "2023 - Present",
      description: "Driving the design vision for next-generation SaaS tools, managing a team of 4 designers."
    },
    {
      company: "Creative Pulse",
      role: "Senior UI/UX Designer",
      period: "2021 - 2023",
      description: "Revamped the core mobile experience leading to a 40% increase in user retention."
    }
  ];

  const services = [
    { title: "UX Design", icon: <Layers className="w-5 h-5" />, desc: "From wireframes to user journeys utilizing various UX techniques." },
    { title: "Visual Design", icon: <Palette className="w-5 h-5" />, desc: "Compelling designs that align with brand identity and aesthetics." },
    { title: "Prototyping", icon: <Zap className="w-5 h-5" />, desc: "High-fidelity interactive prototypes built for testing and handoff." },
    { title: "Development", icon: <Code2 className="w-5 h-5" />, desc: "Responsive implementation using modern frameworks and clean code." }
  ];

  const stats = [
    { label: "Projects Delivered", value: "50+", icon: <Award className="w-5 h-5" /> },
    { label: "Happy Clients", value: "30+", icon: <Sparkles className="w-5 h-5" /> },
    { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black font-sans scroll-smooth relative overflow-x-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Custom Cursor */}
      <div 
        className="cursor-trail hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: cursorVariant === 'hover' ? 'scale(2)' : 'scale(1)'
        }}
      />
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          @keyframes subtle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float { animation: subtle-float 6s ease-in-out infinite; }
          
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient { 
            background-size: 200% 200%;
            animation: gradient-shift 8s ease infinite; 
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .shimmer-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            animation: shimmer 3s infinite;
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.1); }
            50% { box-shadow: 0 0 40px rgba(255,255,255,0.2); }
          }
          .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .rotate-slow { animation: rotate-slow 20s linear infinite; }
          
          .text-gradient {
            background: linear-gradient(135deg, #fff 0%, #888 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hover-lift {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .hover-lift:hover {
            transform: translateY(-8px);
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .cursor-trail {
            pointer-events: none;
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
            transition: transform 0.15s ease-out;
            z-index: 9999;
          }
          
          @keyframes loader-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(0.8); opacity: 1; }
          }
          
          @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(-100%); }
          }
          
          @keyframes fade-out {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          
          .loader-ring {
            animation: loader-spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
          }
          
          .pulse-ring {
            animation: pulse-ring 2s ease-in-out infinite;
          }
        `}
      </style>
      
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px] animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[150px] animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated Logo/Icon */}
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 w-32 h-32 border-2 border-white/20 rounded-full pulse-ring"></div>
              
              {/* Spinning loader */}
              <div className="w-32 h-32 border-4 border-white/10 border-t-white rounded-full loader-ring"></div>
              
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-black tracking-tighter">M.</span>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-center space-y-4">
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
                Loading Experience
              </div>
              
              {/* Progress Bar */}
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 via-white to-blue-500 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              {/* Percentage */}
              <div className="text-2xl font-bold tabular-nums">
                {Math.floor(loadingProgress)}%
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `subtle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-6 transition-all duration-500 ${scrolled ? 'translate-y-[-10px]' : 'translate-y-0'}`}>
        <div className="max-w-fit mx-auto bg-[#161616]/70 backdrop-blur-xl border border-[#262626] rounded-full px-6 py-2 flex items-center gap-6 md:gap-8 shadow-2xl">
          <a href="#work" className="text-xs md:text-sm font-medium hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-xs md:text-sm font-medium hover:text-white transition-colors">About</a>
          <div className="text-lg font-black tracking-tighter mx-2">M.</div>
          <a href="#services" className="text-xs md:text-sm font-medium hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-xs md:text-sm font-medium hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="mb-32 flex flex-col items-center text-center">
          <RevealSection delay={100}>
            <div className="inline-flex items-center gap-2 bg-[#161616] border border-[#262626] rounded-full px-4 py-1 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Available for projects</span>
            </div>
          </RevealSection>
          
          <RevealSection delay={300}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-10 max-w-4xl leading-[1.1]">
              Crafting <span className="text-gradient italic font-serif">digital</span> products that scale.
            </h1>
          </RevealSection>
          
          <RevealSection delay={400}>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Award-winning designer & developer specializing in creating exceptional digital experiences that drive business growth.
            </p>
          </RevealSection>

          <RevealSection delay={500} className="flex flex-col md:flex-row gap-4 mb-16">
            <button 
              className="group bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl relative overflow-hidden"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span className="relative z-10">Get in touch</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <a 
              href="#work" 
              className="border border-[#262626] px-10 py-4 rounded-full font-bold hover:bg-[#161616] hover:border-gray-500 transition-all hover-lift"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              View my work
            </a>
          </RevealSection>
          
          {/* Stats Section */}
          <RevealSection delay={600} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#161616]/50 backdrop-blur-sm border border-[#262626] rounded-3xl p-6 hover:border-gray-500 transition-all hover-lift group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </RevealSection>
        </section>

        {/* Bento Grid - Featured Work */}
        <section id="work" className="mb-32">
          <RevealSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
            <p className="text-gray-500 text-base">A selection of projects that showcase my expertise</p>
          </RevealSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <RevealSection key={idx} delay={idx * 150}>
                <div 
                  className="group relative bg-[#161616] border border-[#262626] rounded-[40px] overflow-hidden transition-all duration-500 hover:border-gray-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.05)] hover-lift cursor-pointer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className={`h-[240px] w-full bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out relative overflow-hidden`}>
                    {/* Abstract decoration */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                    {/* Animated grid overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                      }}></div>
                    </div>
                  </div>
                  <div className="p-6 relative bg-[#161616]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{project.type} • {project.year}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45 pulse-glow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
          
          {/* Experience */}
          <RevealSection className="md:col-span-8 bg-[#161616] border border-[#262626] rounded-[40px] p-10">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              Experience <div className="h-px bg-gray-800 flex-grow"></div>
            </h3>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row md:items-start gap-6 relative">
                  <div className="md:w-1/3">
                    <h4 className="font-bold text-xl group-hover:text-white transition-colors">{exp.company}</h4>
                    <p className="text-sm text-gray-500 font-medium">{exp.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-semibold text-gray-200 text-lg mb-2">{exp.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* About */}
          <RevealSection delay={200} className="md:col-span-4 bg-[#161616] border border-[#262626] rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-tr from-gray-700 to-gray-400 rounded-full mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 hover:rotate-6">
                 {/* Placeholder for Profile Img */}
              </div>
              <h3 className="text-2xl font-bold mb-6">About me</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-10">
                Designer by heart, developer by craft. I bridge the gap between "looks good" and "works great". Currently scaling startups across the globe from my studio.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 border border-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </RevealSection>

          {/* Services */}
          <RevealSection className="md:col-span-12 bg-[#161616] border border-[#262626] rounded-[40px] p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-2xl font-bold mb-12 relative z-10">Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col gap-6 cursor-pointer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 group-hover:text-white transition-colors">{service.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* Core Stack - Scrolling Marquee style mockup */}
          <RevealSection delay={300} className="md:col-span-12 bg-[#161616] border border-[#262626] rounded-[40px] p-10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {['Next.js', 'Typescript', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL', 'Figma', 'Node.js', 'React Native'].map((t, i) => (
                <span 
                  key={i} 
                  className="px-6 py-3 bg-white/5 border border-white/5 rounded-full text-sm font-semibold hover:border-white/20 hover:bg-white/10 transition-all whitespace-nowrap hover-lift cursor-pointer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {t}
                </span>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* CTA Section */}
        <RevealSection className="mt-40 mb-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent blur-3xl"></div>
          <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight relative z-10">
            Ready to <span className="text-gradient animate-gradient">start</span>?
          </h2>
          <a 
            href="mailto:hello@manohar.com" 
            className="inline-flex items-center gap-4 text-2xl md:text-4xl font-semibold border-b-2 border-transparent hover:border-white transition-all pb-2 mb-16 relative z-10 group"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            hello@manohar.com 
            <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" size={32} />
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20 border-t border-[#1f1f1f] pt-12 text-gray-500 text-sm">
            <div className="space-y-4">
               <p className="font-bold text-white uppercase tracking-widest text-[10px]">Follow me</p>
               <div className="flex flex-col gap-2">
                 <a href="#" className="hover:text-white transition-colors w-fit">Twitter/X</a>
                 <a href="#" className="hover:text-white transition-colors w-fit">Instagram</a>
               </div>
            </div>
            <div className="space-y-4">
               <p className="font-bold text-white uppercase tracking-widest text-[10px]">Site</p>
               <div className="flex flex-col gap-2">
                 <a href="#work" className="hover:text-white transition-colors w-fit">Work</a>
                 <a href="#about" className="hover:text-white transition-colors w-fit">About</a>
               </div>
            </div>
            <div className="flex items-end justify-start md:justify-end">
               <p>© 2026 MANOHAR</p>
            </div>
          </div>
        </RevealSection>

      </div>
    </div>
  );
};

export default App;