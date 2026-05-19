import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, align = 'center', className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', {
      'items-center text-center': align === 'center',
      'items-start text-left': align === 'left',
      'items-end text-right': align === 'right',
    }, className)} {...props}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
