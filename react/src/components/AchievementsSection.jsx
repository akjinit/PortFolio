import { Trophy, Award, Target, Code, Zap, Shield, ExternalLink, BookOpen } from 'lucide-react';

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">
          <span className="text-primary text-glow">Achievements</span>
        </h2>

        {/* Coding Platform Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-delay-1">
          <a
            href="https://leetcode.com/akjinit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm card-hover border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
          >
            <Code className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">LeetCode</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/akjinit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-sm card-hover border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
          >
            <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">GeeksforGeeks</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="bg-card p-8 rounded-lg shadow-lg card-hover gradient-border animate-fade-in-delay-2 relative overflow-hidden highlight-card max-w-2xl w-full">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-primary animate-pulse-subtle" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary/50">
                  <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">800+ Problems Solved</p>
                    <p className="text-sm text-muted-foreground">Across LeetCode and GeeksforGeeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary/50">
                  <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">LeetCode Rating: 1732</p>
                    <p className="text-sm text-muted-foreground">Consistent high performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary/50">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Weekly Contest Rankings</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">~1270 (Contest 478)</span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">~1466 (Contest 483)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary/50">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">1st Place - Intra-college Coding</p>
                    <p className="text-sm text-muted-foreground">CodeCubes Club Competition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary/50">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">4th Place - Hardware Track</p>
                    <p className="text-sm text-muted-foreground">StatusCode Hackathon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
