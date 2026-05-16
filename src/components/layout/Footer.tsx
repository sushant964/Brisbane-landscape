import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal pt-20 pb-8 mt-12 md:mt-24 border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <img 
                src="https://i.ibb.co/qLbqbWNr/537780350-17842048713566503-6192297241819794278-n.jpg" 
                alt="Brisbane Outdoor Logo" 
                className="h-12 w-auto object-contain rounded-sm"
              />
            </Link>
            <p className="text-charcoal/80 text-sm leading-relaxed max-w-xs">
              Premium landscaping and outdoor solutions designed to elevate your property with style, functionality, and lasting quality.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-charcoal/80 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-6">Services</h4>
            <ul className="space-y-4 pl-0">
              {['Landscaping', 'Pergolas', 'Decking', 'Fences', 'Retaining Walls'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-charcoal/80 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0490894087" className="flex items-center text-sm text-charcoal/80 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                  0490 894 087
                </a>
              </li>
              <li>
                <a href="mailto:info@brisbaneoutdoor.com.au" className="flex items-center text-sm text-charcoal/80 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                  info@brisbaneoutdoor.com.au
                </a>
              </li>
              <li className="flex items-start text-sm text-charcoal/80 group">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 opacity-60" />
                  <span>Serving Brisbane<br />and Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal/60 uppercase tracking-wider font-bold">
            &copy; {new Date().getFullYear()} Brisbane Custom Outdoor Solutions Pty Ltd. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/brisbane_outdoor_pty_ltd_?igsh=MWh5b2dxOWZ5NXpwdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-sm border border-primary/20 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
