import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs, FaDatabase, FaBrain, FaServer, FaCogs } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiLeaflet, 
  SiJavascript, 
  SiExpress, 
  SiSocketdotio, 
  SiPostgresql, 
  SiPrisma 
} from "react-icons/si";

const LeetcodeIcon = ({ className, size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.513-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.469 2.336-1.469 3.897 0 1.56.488 2.83 1.469 3.811l10.1 10.101c.515.515 1.367.497 1.902-.038.535-.536.55-1.387.037-1.901l-2.609-2.636a5.055 5.055 0 0 0 2.445-1.337l-2.467 2.503z"/>
    <path d="M20.725 10.518H11.233c-.752 0-1.36.608-1.36 1.36s.608 1.36 1.36 1.36h9.492c.752 0 1.36-.608 1.36-1.36s-.608-1.36-1.36-1.36z"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: "AI Finance Platform",
    description:
      "A modern AI-powered finance application with real-time expense tracking, predictive forecasting, and a highly responsive dashboard for intelligent financial insights.",
    images: [
      "/projects/ai-finance-1.png",
      "/projects/ai-finance-2.png",
      "/projects/ai-finance-3.png"
    ],
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "AI/ML", icon: FaBrain, color: "text-pink-500" }
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/akjinit/Ai-Finance",
  },
  {
    id: 2,
    title: "Real-Time Ride Booking Platform",
    description:
      "Production-grade ride booking app featuring live driver discovery using geospatial queries, OTP-based secure verification, real-time trip tracking, and a seamless map-based UI.",
    images: ["/projects/project1.png", "/projects/project1-2.png"],
    tags: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-foreground" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-foreground" },
      { name: "Leaflet", icon: SiLeaflet, color: "text-[#199900]" }
    ],
    demoUrl: "https://full-stack-ridesharingapp-client.onrender.com",
    githubUrl: "https://github.com/akjinit/Full-Stack-RideSharingApp",
  },
  {
    id: 3,
    title: "ClipNote — Personal Snippet Manager",
    description:
      "A lightweight, highly performant snippet manager with persistent local storage, instant CRUD operations, markdown support, and an optimized keyboard-first user experience.",
    images: ["/projects/project2.png"],
    tags: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Storage", icon: FaDatabase, color: "text-blue-500" }
    ],
    demoUrl: "https://notes-saver-megt.vercel.app",
    githubUrl: "https://github.com/akjinit/NotesSaver",
  },
  {
    id: 4,
    title: "Savourly — Recipe Discovery",
    description:
      "A dynamic recipe discovery platform powered by external food APIs. Includes robust search functionality, advanced filtering options, and client-side caching to ensure incredibly fast load times.",
    images: ["/projects/project3.png"],
    tags: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "REST APIs", icon: FaServer, color: "text-purple-500" },
      { name: "Cache", icon: FaDatabase, color: "text-indigo-500" },
      { name: "Responsive", icon: FaCogs, color: "text-orange-500" }
    ],
    demoUrl: "https://aksavourly.netlify.app",
    githubUrl: "https://github.com/akjinit/Savourly.in",
  },
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md card-hover flex flex-col h-full border border-border/50">
      <div className="h-72 overflow-hidden relative bg-secondary/20 border-b border-border/30">
        {project.images && project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} screenshot \${idx + 1}`}
            className={cn(
              "absolute top-0 left-0 w-full h-full object-cover object-top transition-all duration-1000",
              idx === currentImageIndex ? "opacity-100 group-hover:scale-105" : "opacity-0"
            )}
          />
        ))}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <span
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border/50 rounded-full bg-secondary/30 text-secondary-foreground"
              >
                <Icon className={cn("text-sm", tag.color)} />
                {tag.name}
              </span>
            );
          })}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30">
          <div className="flex space-x-3 w-full justify-end">
            {project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Source <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              className="cosmic-button w-fit flex items-center gap-2"
              target="_blank"
              href="https://leetcode.com/akjinit/"
            >
              <LeetcodeIcon size={18} />
              LeetCode Profile
            </a>
            <a
              className="cosmic-button w-fit flex items-center gap-2"
              target="_blank"
              href="https://github.com/akjinit"
            >
              <Github size={18} />
              Check My Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
