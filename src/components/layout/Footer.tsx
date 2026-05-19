import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-2xl tracking-tight text-foreground">
                Nexus University
              </span>
            </Link>
            <p className="text-muted-foreground mt-2">
              Empowering the next generation of leaders, thinkers, and creators through world-class education and research.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="text-muted-foreground hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="text-muted-foreground hover:text-primary transition-colors">Faculty Directory</Link></li>
              <li><Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Campus Life</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/housing" className="text-muted-foreground hover:text-primary transition-colors">Student Housing</Link></li>
              <li><Link to="/athletics" className="text-muted-foreground hover:text-primary transition-colors">Athletics</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events & News</Link></li>
              <li><Link to="/alumni" className="text-muted-foreground hover:text-primary transition-colors">Alumni Network</Link></li>
              <li><Link to="/library" className="text-muted-foreground hover:text-primary transition-colors">Library</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 University Ave, Silicon Valley, CA 94025, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>admissions@nexus.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexus University. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
