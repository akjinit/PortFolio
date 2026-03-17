export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Achievements & <span className="text-primary">Hackathons</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-card p-8 rounded-lg shadow-xs card-hover">
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>Solved 800+ problems across LeetCode and GeeksforGeeks.</li>
              <li>Maintained a LeetCode rating of 1732.</li>
              <li>Ranked ~1270 in LeetCode Weekly Contest 478.</li>
              <li>Ranked ~1466 in LeetCode Weekly Contest 483.</li>
              <li>1st place in an intra-college coding competition (CodeCubes Club).</li>
              <li>4th place in the Hardware Track at the StatusCode Hackathon.</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs card-hover">
            <h3 className="text-2xl font-semibold mb-4">Hackathon Project</h3>
            <h4 className="text-lg font-semibold">Autonomous Fire‑Fighting Robot</h4>
            <p className="text-muted-foreground mt-3">
              Built a robot with line-following, obstacle avoidance, and fire
              detection to autonomously navigate and safely suppress fires.
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mt-4">
              <li>Resolved sensor interference between IR and flame sensors through iterative tuning.</li>
              <li>Optimized control logic for reliable navigation and actuation under dynamic conditions.</li>
              <li>Secured 4th position in the Hardware Track among competing teams.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
