import { HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export function GlassCard({ className, children, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn('glass-card p-6', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
