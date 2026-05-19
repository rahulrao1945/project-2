import { EVENTS } from '../../data/mock';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EventsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Don't miss out on what's happening around the campus."
            align="left"
          />
          <Link to="/events">
            <Button variant="outline" className="hidden md:flex gap-2">
              All Events <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl text-center">
                  <span className="block text-xs font-bold text-primary uppercase">
                    {event.date.split(' ')[0]}
                  </span>
                  <span className="block text-xl font-heading font-bold text-foreground">
                    {event.date.split(' ')[1].replace(',', '')}
                  </span>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
