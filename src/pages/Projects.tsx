import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const projects = [
  { id: 1, category: 'Landscaping', img: 'https://i.ibb.co/7J10Xcf3/649229902-17870239440566503-8928511924535667264-n.jpg', title: 'Modern Oasis', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, category: 'Fencing', img: 'https://i.ibb.co/LVtJtnx/649242661-17870239431566503-4452633462084410392-n.jpg', title: 'Secure Boundary', span: 'col-span-1 row-span-1' },
  { id: 3, category: 'Pergolas', img: 'https://i.ibb.co/Z1BmTXyn/649247839-17870239419566503-7030159472870534725-n.jpg', title: 'Shaded Retreat', span: 'col-span-1 row-span-1' },
  { id: 4, category: 'Decking', img: 'https://i.ibb.co/wD1mgXR/IMG-20260516-193550-229.jpg', title: 'Luxury Entertainer', span: 'col-span-1 row-span-1' },
  { id: 5, category: 'Retaining Walls', img: 'https://i.ibb.co/sdCqPHWh/IMG-20260516-193546-484.jpg', title: 'Tiered Garden', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 6, category: 'Landscaping', img: 'https://i.ibb.co/YTRQcxHn/IMG-20260516-193540-997.jpg', title: 'Natural Path', span: 'col-span-1 row-span-1' },
  { id: 7, category: 'Decking', img: 'https://i.ibb.co/SXR0qs1j/IMG-20260516-193535-494.jpg', title: 'Outdoor Living', span: 'col-span-1 md:col-span-2 row-span-1' }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent uppercase font-bold tracking-[0.3em] text-xs mb-4 block">Portfolio</p>
          <h1 className="text-5xl font-serif italic text-primary mb-6">Our Best Work</h1>
          <p className="text-lg text-charcoal/80 leading-relaxed font-sans">
            A selection of our finest outdoor transformations across Brisbane.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative group rounded-sm overflow-hidden cursor-pointer ${project.span}`}
                onClick={() => setSelectedImage(project.img)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 duration-500" />
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-accent uppercase text-xs tracking-widest font-bold mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-serif italic">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage} 
                alt="Selected project" 
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
