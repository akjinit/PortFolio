import { Trophy, Award, Target, Code, Zap, Shield, ExternalLink, BookOpen } from 'lucide-react';

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background border-t border-border/10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          <span className="text-primary text-glow">Achievements</span>
        </h2>

        {/* Coding Platform Links */}
        <div className="flex justify-center flex-wrap gap-6 mb-16 animate-fade-in-delay-1">
          <a
            href="https://leetcode.com/akjinit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-card rounded-lg shadow-sm card-hover border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
          >
            <Code className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">LeetCode</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/akjinit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-card rounded-lg shadow-sm card-hover border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
          >
            <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">GeeksforGeeks</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-delay-2">
          
          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex flex-col h-full relative z-10">
              <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">800+ Problems Solved</h3>
              <p className="text-muted-foreground flex-grow">Solved over 800 algorithmic challenges across platforms like LeetCode and GeeksforGeeks, mastering data structures and complex logic.</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex flex-col h-full relative z-10">
              <div className="p-4 rounded-full bg-blue-500/10 w-fit mb-4">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">LeetCode Rating: 1860</h3>
              <p className="text-muted-foreground flex-grow">Consistently ranked high in global algorithmic contests, showcasing strong problem-solving speed and accuracy.</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex flex-col h-full relative z-10">
              <div className="p-4 rounded-full bg-yellow-500/10 w-fit mb-4">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Contest Rankings</h3>
              <p className="text-muted-foreground flex-grow mb-4">Secured impressive global ranks in competitive programming.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">Top ~1270 (Contest 478)</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">Top ~1466 (Contest 483)</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex flex-col h-full relative z-10">
              <div className="p-4 rounded-full bg-orange-500/10 w-fit mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">1st Place Winner</h3>
              <p className="text-muted-foreground flex-grow">Secured the first position in the Intra-college Coding Competition organized by the CodeCubes Club.</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex flex-col h-full relative z-10">
              <div className="p-4 rounded-full bg-green-500/10 w-fit mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">4th Place Hackathon</h3>
              <p className="text-muted-foreground flex-grow">Achieved 4th place in the Hardware Track during the intensive StatusCode Hackathon.</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md card-hover border border-border/50 relative overflow-hidden highlight-card flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="flex flex-col items-center text-center relative z-10 opacity-70 hover:opacity-100 transition-opacity">
               <Trophy className="w-12 h-12 text-primary animate-pulse-subtle mb-3" />
               <p className="font-medium">Always Striving For More</p>
            </div>
          </div>

        </div>

        {/* Live LeetCode Stats */}
        <div className="mt-12 flex justify-center animate-fade-in-delay-2 w-full">
          <div className="bg-card p-6 rounded-xl shadow-md border border-border/50 overflow-hidden w-full max-w-3xl highlight-card">
            <h3 className="text-xl font-bold mb-4 text-center">Live LeetCode Stats</h3>
            <div className="flex justify-center overflow-x-auto w-full">
              <a href="https://leetcode.com/akjinit/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://leetcard.jacoblin.cool/akjinit?theme=dark&font=Syne&ext=activity" 
                  alt="Live LeetCode Stats" 
                  className="rounded-lg max-w-full hover:scale-[1.02] transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
