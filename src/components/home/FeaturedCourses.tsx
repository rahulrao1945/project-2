import { FEATURED_COURSES } from '../../data/mock';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            title="Featured Programs" 
            subtitle="Discover our most popular and highly-rated academic programs designed for the future."
            align="left"
          />
          <Link to="/courses">
            <Button variant="outline" className="hidden md:flex gap-2">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                    {course.department}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-orange-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4 line-clamp-2">{course.title}</h3>
                  
                  <div className="mt-auto flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{course.fees}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/courses">
            <Button variant="outline" className="w-full">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
