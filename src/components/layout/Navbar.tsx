import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // If we are on the home page, the navbar is transparent at the top.
  // Other pages have a solid navbar from the start if we don't have a hero section overlapping.
  // Actually, let's keep the transparent-to-solid behavior for true premium feel, and pad content below.
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled || !isHome || isOpen
          ? 'bg-paper/90 backdrop-blur-md py-4 border-b border-primary/10 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link
          to="/"
          className="z-50 shrink-0"
        >
          <img 
            src="https://i.ibb.co/qLbqbWNr/537780350-17842048713566503-6192297241819794278-n.jpg" 
            alt="Brisbane Outdoor Logo" 
            className="h-10 md:h-14 w-auto object-contain rounded-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xs font-semibold uppercase tracking-widest transition-colors',
                (isScrolled || !isHome) ? 'text-primary/60 hover:text-primary' : 'text-white/80 hover:text-white',
                location.pathname === link.path && ((isScrolled || !isHome) ? 'text-primary border-b-2 border-accent pb-1' : 'text-white border-b-2 border-accent pb-1')
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              'px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300',
              (isScrolled || !isHome)
                ? 'bg-primary text-white hover:bg-primary-light'
                : 'bg-white text-primary hover:bg-white/90'
            )}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu
              className={cn(
                'w-6 h-6 transition-colors',
                (isScrolled || !isHome) ? 'text-charcoal' : 'text-white'
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-paper z-40 flex flex-col justify-center px-12"
          >
            <div className="flex flex-col space-y-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-charcoal hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col items-start gap-4 text-sm font-medium text-charcoal-light uppercase tracking-widest">
              <a href="tel:0490894087" className="hover:text-accent">0490 894 087</a>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-accent underline underline-offset-4">Get in touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
