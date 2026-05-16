import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { title: "Landscaping", desc: "Custom outdoor transformations", img: "https://i.ibb.co/HRdZDQV/58f51061d0f616a56570970c88dcd9b8.jpg" },
  { title: "Decking", desc: "Premium decking installations", img: "https://i.ibb.co/0j0vhpNz/b1702834539c7ba7260af97d0c66e304.jpg" },
  { title: "Pergolas", desc: "Beautiful outdoor structures", img: "https://i.ibb.co/przF2fMN/921732d90e3a7b7f6e6c9ca88c3f3e33.jpg" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/gFfMSnsW/2ea927c7462e21058d2cc735148a08e4.jpg" 
            alt="Luxury landscaping" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Luxury Landscaping & Design</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] mb-6 italic">
              Crafting Outdoor Spaces That <span className="text-accent">Feel Like Home.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-sans max-w-xl mb-10 leading-relaxed">
              Premium landscaping and outdoor solutions designed to elevate your property with style, functionality, and lasting quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary-light transition-all shadow-lg flex items-center justify-center w-fit"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs border border-white/30 hover:bg-white inset hover:text-primary transition-colors flex items-center justify-center w-fit rounded-sm"
              >
                View Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-y border-white/10 py-12">
            {[
              "Reliable & Professional",
              "High-Quality Workmanship",
              "Custom Outdoor Solutions",
              "Attention to Detail",
              "Built to Last"
            ].map((text, i) => (
              <motion.div 
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-3 text-sm tracking-wider uppercase font-medium text-sand/80"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design / Approach Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent uppercase font-bold tracking-[0.3em] text-xs mb-6">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-[1.1] italic">
                An extension of your home, crafted for everyday living.
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Brisbane Outdoor is dedicated to creating outdoor spaces that combine beauty, functionality, and long-lasting craftsmanship. From modern landscaping to custom outdoor structures, we take pride in delivering professional results tailored to each client's vision.
              </p>
              <Link to="/about" className="text-sm font-semibold tracking-widest uppercase pb-1 border-b-2 border-accent text-charcoal hover:text-accent transition-colors inline-flex mt-4">
                More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] object-cover"
            >
              <img src="https://i.ibb.co/r2s7j1wV/660689355-17875213134566503-8752374088982983043-n.jpg" alt="Premium deck design" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-sand">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
            <div>
              <p className="text-accent uppercase font-bold tracking-[0.3em] text-xs mb-4">Our Expertise</p>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal max-w-xl leading-[1.1] italic">
                Transforming spaces with precision.
              </h2>
            </div>
            <Link to="/services" className="px-6 py-3 border border-primary/20 rounded-sm font-bold tracking-widest text-xs uppercase hover:bg-primary hover:text-white transition-colors text-primary">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-all z-10 duration-500"/>
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal tracking-wide mb-2">{svc.title}</h3>
                <p className="text-charcoal-light font-medium">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* End Call to Action */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Abstract pattern logic could go here */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}/>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8"
          >
            Ready to enhance the beauty and value of your home?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/contact" className="px-10 py-5 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-accent hover:text-white transition-all shadow-xl hover:shadow-2xl inline-block mt-4">
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
