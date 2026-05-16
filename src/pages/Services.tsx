import { motion } from 'motion/react';
import { ArrowRight, Trees, Settings, Layers, Box, TreePine, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Landscaping",
    icon: <Trees className="w-8 h-8 stroke-1" />,
    desc: "Custom outdoor transformations designed to enhance the beauty and functionality of your property."
  },
  {
    title: "Fences",
    icon: <LayoutTemplate className="w-8 h-8 stroke-1" />,
    desc: "Durable and stylish fencing solutions for privacy, security, and curb appeal."
  },
  {
    title: "Gates",
    icon: <Settings className="w-8 h-8 stroke-1" />,
    desc: "Modern and practical gate installations tailored to your outdoor space."
  },
  {
    title: "Retaining Walls",
    icon: <Layers className="w-8 h-8 stroke-1" />,
    desc: "Strong and visually appealing retaining wall solutions built for stability and design."
  },
  {
    title: "Decking",
    icon: <Box className="w-8 h-8 stroke-1" />,
    desc: "Premium decking installations perfect for entertaining and outdoor living."
  },
  {
    title: "Pergolas",
    icon: <TreePine className="w-8 h-8 stroke-1" />,
    desc: "Beautiful pergola structures designed to elevate comfort and outdoor aesthetics."
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-sand min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-left mb-20"
        >
          <p className="text-accent uppercase font-bold tracking-[0.3em] text-xs mb-4 block">What We Do</p>
          <h1 className="text-5xl font-serif italic text-primary mb-6">Expert Services for Your Premium Outdoor Space</h1>
          <p className="text-lg text-charcoal/80 leading-relaxed font-sans">
            We provide a comprehensive range of landscaping and construction services to bring your perfect outdoor sanctuary to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-sm p-10 hover:shadow-2xl transition-all duration-500 group border border-primary/10 hover:border-accent"
            >
              <div className="w-16 h-16 rounded-sm bg-sand flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-serif italic mb-4 text-charcoal">{svc.title}</h3>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                {svc.desc}
              </p>
              <Link to="/contact" className="inline-flex items-center font-bold text-xs tracking-widest uppercase text-accent group-hover:text-primary transition-colors">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
