import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const WorkPage = ({ onBack }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "MeetHire",
      category: "Platform Design",
      year: "2024",
      description: "AI-powered campus hiring discovery platform connecting students with global recruiters.",
      fullDescription: "A comprehensive platform that streamlines the campus recruitment process using AI-driven matching algorithms. Features include real-time job postings, automated resume screening, and integrated video interview capabilities.",
      color: "from-indigo-600 to-purple-600",
      type: "UX Design | SaaS",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      features: [
        "AI-powered candidate matching",
        "Real-time job notifications",
        "Integrated video interviews",
        "Analytics dashboard"
      ],
      liveUrl: "https://www.meethire.in/"
    },
    {
      title: "Bilto",
      category: "HealthTech",
      year: "2024",
      description: "Comprehensive hospital billing SaaS platform designed for modern clinics and patient management.",
      fullDescription: "Modern healthcare billing solution that simplifies patient management, insurance claims, and financial reporting. Built with security and compliance at its core.",
      color: "from-emerald-500 to-teal-600",
      type: "Product Design",
      technologies: ["React", "PostgreSQL", "Express", "Stripe"],
      features: [
        "Automated billing system",
        "Insurance claim processing",
        "Patient portal",
        "Financial reporting"
      ]
    },
    {
      title: "Zyvo",
      category: "EdTech",
      year: "2023",
      description: "Revolutionary study application focusing on cognitive memory retention and collaborative learning.",
      fullDescription: "An innovative learning platform that uses spaced repetition and active recall techniques to enhance memory retention. Includes collaborative study rooms and progress tracking.",
      color: "from-orange-500 to-red-600",
      type: "App Design",
      technologies: ["React Native", "Firebase", "Redux"],
      features: [
        "Spaced repetition algorithm",
        "Collaborative study rooms",
        "Progress analytics",
        "Flashcard system"
      ],
      liveUrl: "https://zyvo-web-three.vercel.app/"
    },
    {
      title: "Brand Packaging Design",
      category: "Graphic Design",
      year: "2024",
      description: "Creative packaging design for banana chips brand with modern aesthetics.",
      fullDescription: "Developed comprehensive brand packaging design focusing on visual appeal and market positioning. Created eye-catching designs that stand out on retail shelves.",
      color: "from-yellow-500 to-orange-600",
      type: "Graphic Design",
      technologies: ["Adobe Photoshop", "Illustrator", "InDesign"],
      features: [
        "Brand identity design",
        "Product packaging",
        "Label design",
        "Marketing materials"
      ],
      image: "/images/banna%20chips%20packing.png"
    },
    {
      title: "Creative Poster Design",
      category: "Graphic Design",
      year: "2024",
      description: "Professional poster designs for events and promotional campaigns.",
      fullDescription: "Created visually striking poster designs for various events and campaigns, focusing on typography, color theory, and visual hierarchy.",
      color: "from-pink-500 to-purple-600",
      type: "Graphic Design",
      technologies: ["Adobe Photoshop", "Illustrator", "Canva"],
      features: [
        "Event poster design",
        "Typography design",
        "Color composition",
        "Print-ready files"
      ],
      image: "/images/06e91b2c-88de-4619-bb23-fc482df0f6ae.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            A comprehensive showcase of my work in design, development, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#161616] border border-[#262626] rounded-3xl overflow-hidden hover:border-gray-500 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image/Visual Section */}
                <div className={`h-[280px] lg:h-[350px] w-full relative overflow-hidden bg-[#1a1a1a]`}>
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        style={{ objectPosition: 'center' }}
                        onError={(e) => {
                          console.log('Image failed to load:', project.image);
                          e.target.style.display = 'none';
                        }}
                        onLoad={() => console.log('Image loaded:', project.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 group-hover:from-black/20 group-hover:to-black/20 transition-all pointer-events-none"></div>
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.color}`}>
                      <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                          backgroundSize: '50px 50px'
                        }}></div>
                      </div>
                      
                      {/* Floating Project Number */}
                      <div className="absolute top-8 left-8 text-[80px] font-black opacity-10 group-hover:opacity-20 transition-opacity">
                        0{idx + 1}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2">
                          {project.type} • {project.year}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-white transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                      {project.fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold hover:border-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="w-1 h-1 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-all">
                      <ExternalLink size={14} />
                      View Live
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2 border border-[#262626] rounded-full text-sm font-bold hover:bg-[#161616] hover:border-gray-500 transition-all">
                      <Github size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Like what you see?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Let's work together on your next project
          </p>
          <button className="bg-[#d4ff00] text-black px-8 py-3 rounded-full font-black hover:scale-105 transition-all"
            style={{ 
              boxShadow: '0 0 40px rgba(212, 255, 0, 0.6), 0 0 80px rgba(212, 255, 0, 0.3)'
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
