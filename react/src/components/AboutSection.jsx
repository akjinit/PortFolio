import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-stack web developer & competitive problem solver
            </h3>

            <p className="text-muted-foreground">
              I&apos;m a B.Tech student at IIIT Kalyani (CGPA 9.43) studying
              Electronics & Communication Engineering. I build real-time,
              scalable web applications using React, Node.js, and MongoDB.
            </p>

            <p className="text-muted-foreground">
              Relevant coursework: Data Structures & Algorithms, Machine Learning,
              C Programming, Computer Networks.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving algorithmic challenges, optimizing performance,
              and crafting user-friendly interfaces that feel fast and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="/resume.pdf" target="_blank" className="cosmic-button">
                Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building reliable web apps using React, Node.js, Express, and
                    MongoDB with clean architecture and scalable patterns.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-time Systems</h4>
                  <p className="text-muted-foreground">
                    Building real-time features with WebSockets, geospatial
                    search, and optimized state sync.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Competitive Programming</h4>
                  <p className="text-muted-foreground">
                    Solved 800+ problems (LeetCode, GFG) and maintain an active
                    focus on algorithms and data structures.
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
