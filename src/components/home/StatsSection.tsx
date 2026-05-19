import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Briefcase, GraduationCap, Globe } from 'lucide-react';

const stats = [
  { id: 1, label: 'Active Students', value: 15000, suffix: '+', icon: Users, color: 'text-blue-500' },
  { id: 2, label: 'Placement Rate', value: 98, suffix: '%', icon: Briefcase, color: 'text-green-500' },
  { id: 3, label: 'Expert Faculty', value: 850, suffix: '+', icon: GraduationCap, color: 'text-purple-500' },
  { id: 4, label: 'Global Rank', value: 24, suffix: 'th', icon: Globe, color: 'text-orange-500' },
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentVal = Math.floor(from + (to - from) * easeOut);
      
      setCount(currentVal);

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
}

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 glass-card border-none bg-white/40 dark:bg-black/20"
              >
                <div className={`p-4 rounded-2xl bg-background shadow-sm mb-4 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2 flex items-baseline">
                  <Counter from={0} to={stat.value} />
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
