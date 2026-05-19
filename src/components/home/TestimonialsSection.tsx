import { TESTIMONIALS } from '../../data/mock';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Student Voices" 
          subtitle="Hear from our community about their experiences and successes at Nexus."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-foreground leading-relaxed flex-1 mt-4 mb-8">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
