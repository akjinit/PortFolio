import { Briefcase, Code, User, GraduationCap, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background border-t border-border/10 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-fade-in">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Bio Card */}
          <div className="lg:col-span-5 space-y-8 bg-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl highlight-card">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Full-Stack Web Developer & <br/> 
                <span className="text-primary">Competitive Problem Solver</span>
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I build real-time, scalable web applications using React, Node.js, and MongoDB, crafting user-friendly interfaces that feel fast and reliable.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/40">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">B.Tech in ECE</p>
                <p className="text-sm text-muted-foreground">IIIT Kalyani (CGPA 9.43)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/Akshat_Kumar_Jha_Resume.pdf" target="_blank" className="cosmic-button flex-1 text-center py-3">
                Download CV
              </a>
              <a
                href="#contact"
                className="flex-1 text-center px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="gradient-border p-6 card-hover bg-card/60 backdrop-blur-sm sm:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary border border-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Code className="h-8 w-8" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-xl mb-1">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building highly reliable web apps using React, Node.js, Express, and MongoDB. I focus on clean architecture, scalable patterns, and seamless front-to-back integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-card/60 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="flex flex-col items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <Server className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Real-time Systems</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building real-time features with WebSockets, geospatial indexing, live state sync, and robust API design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-card/60 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[40px] group-hover:bg-yellow-500/20 transition-colors"></div>
              <div className="flex flex-col items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500">
                  <User className="h-7 w-7" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-2">Competitive Programming</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Solved 800+ algorithmic challenges on LeetCode & GFG, maintaining a rigorous focus on data structures and optimization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
