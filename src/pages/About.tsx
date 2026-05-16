import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif italic text-primary mb-6">Our Story</h1>
          <p className="text-lg text-charcoal/80 leading-relaxed font-sans">
            Brisbane Outdoor is dedicated to creating outdoor spaces that combine beauty, functionality, and long-lasting craftsmanship.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[21/9] rounded-sm overflow-hidden mb-24"
        >
          <img 
            src="https://images.unsplash.com/photo-1595844730298-b960fa25fa41?q=80&w=2692&auto=format&fit=crop" 
            alt="Landscaping work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h2 className="text-4xl font-serif italic text-primary">The Brisbane Outdoor Difference</h2>
            <p className="text-charcoal/80 leading-relaxed">
              From modern landscaping to custom outdoor structures, we take pride in delivering professional results tailored to each client's vision. We understand that your home doesn't stop at the walls—it extends into your garden, patio, and beyond.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              We believe outdoor spaces should feel like an extension of your home — clean, welcoming, and built for everyday living. Our skilled team brings years of expertise, specialized knowledge, and a commitment to precision.
            </p>
            
            <div className="pt-8 mt-8 border-t border-primary/10">
              <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-accent mb-4">Our Focus Is Simple</h3>
              <ul className="space-y-3">
                {['Quality work', 'Honest service', 'Premium materials', 'Transformations that stand out'].map(focus => (
                  <li key={focus} className="flex items-center text-charcoal font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop" alt="Pergola" className="w-full h-[300px] object-cover rounded-sm" />
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" alt="Retaining Wall" className="w-full h-[300px] object-cover rounded-sm mt-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
