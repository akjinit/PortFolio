import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, LayoutTemplate, Database, Wrench, Layers } from "lucide-react";
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVercel, SiC } from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";

const skills = [
  // Languages
  { name: "C", level: 85, category: "languages", icon: SiC, color: "text-blue-500" },
  { name: "C++", level: 80, category: "languages", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Java", level: 80, category: "languages", icon: FaJava, color: "text-red-500" },
  { name: "JavaScript", level: 90, category: "languages", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", level: 80, category: "languages", icon: FaPython, color: "text-blue-400" },
  { name: "SQL", level: 75, category: "languages", icon: Database, color: "text-slate-400" },

  // Frontend
  { name: "React", level: 90, category: "frontend", icon: FaReact, color: "text-cyan-400" },
  { name: "HTML5", level: 90, category: "frontend", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", level: 85, category: "frontend", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: SiTailwindcss, color: "text-cyan-500" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", level: 80, category: "backend", icon: SiExpress, color: "text-foreground" },
  { name: "MongoDB", level: 80, category: "backend", icon: SiMongodb, color: "text-green-600" },
  { name: "WebSockets", level: 75, category: "backend", icon: TbApi, color: "text-purple-500" },
  { name: "REST APIs", level: 80, category: "backend", icon: TbApi, color: "text-indigo-500" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: FaGithub, color: "text-foreground" },
  { name: "Postman", level: 80, category: "tools", icon: SiPostman, color: "text-orange-500" },
  { name: "VS Code", level: 95, category: "tools", icon: TbBrandVscode, color: "text-blue-500" },
  { name: "Vercel / Render", level: 75, category: "tools", icon: SiVercel, color: "text-foreground" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "frontend", label: "Frontend", icon: LayoutTemplate },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20 border-y border-border/40">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                )}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon || Code2;
            return (
              <div
                key={`${skill.name}-${activeCategory}`}
                className="bg-card/50 px-4 py-3 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-sm flex flex-col justify-center group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className={cn("text-lg", skill.color)} />
                    <span className="font-medium text-sm group-hover:text-primary transition-colors">{skill.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-1.5 rounded-full origin-left transition-all duration-1000 ease-out animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
