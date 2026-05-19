import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { EventsSection } from '../components/home/EventsSection';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-0">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient instead of video for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-900 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass px-6 py-2 rounded-full mb-8 border-white/20"
          >
            <span className="text-white font-medium text-sm">Ranked #1 for Innovation 2025</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
          >
            Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 drop-shadow-md"
          >
            Join a global community of innovators, thinkers, and leaders at Nexus University.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/apply">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl shadow-white/10 text-lg h-14 px-8 rounded-2xl">
                Apply Now
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="glass" className="w-full sm:w-auto text-white border-white/30 text-lg h-14 px-8 rounded-2xl">
                Explore Courses
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-2">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <StatsSection />
      <FeaturedCourses />
      <TestimonialsSection />
      <EventsSection />
    </div>
  );
}
