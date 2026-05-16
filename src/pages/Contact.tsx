import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent uppercase font-bold tracking-[0.3em] text-xs mb-4 block">Get In Touch</p>
            <h1 className="text-5xl font-serif italic text-primary mb-6 leading-tight">
              Let's Build Your Ideal <br/>Outdoor Space.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-12 font-sans">
              Looking to transform your property? Get in touch to discuss your project, request a quote, and bring your outdoor vision to life.
            </p>

            <div className="space-y-8">
              <a href="tel:0490894087" className="flex items-start group">
                <div className="w-12 h-12 rounded-sm bg-sand flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-1">Phone</h4>
                  <p className="text-charcoal/80 group-hover:text-accent transition-colors">0490 894 087</p>
                </div>
              </a>

              <a href="mailto:info@brisbaneoutdoor.com.au" className="flex items-start group">
                <div className="w-12 h-12 rounded-sm bg-sand flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-1">Email</h4>
                  <p className="text-charcoal/80 group-hover:text-accent transition-colors">info@brisbaneoutdoor.com.au</p>
                </div>
              </a>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-sm bg-sand flex items-center justify-center mr-6">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-1">Location</h4>
                  <p className="text-charcoal/80">Serving Brisbane &<br/>Surrounding Areas</p>
                </div>
              </div>

              <a 
                href="https://www.instagram.com/brisbane_outdoor_pty_ltd_?igsh=MWh5b2dxOWZ5NXpwdg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <div className="w-12 h-12 rounded-sm bg-sand flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-1">Instagram</h4>
                  <p className="text-charcoal/80 group-hover:text-accent transition-colors">@brisbane_outdoor_pty_ltd_</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-sm shadow-xl border border-primary/10 relative overflow-hidden"
          >
            {submitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white p-12 text-center z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6"
                >
                  <Send className="w-8 h-8" />
                </motion.div>
                <h3 className="text-3xl font-serif mb-4">Request Sent</h3>
                <p className="text-white/80">Thank you for getting in touch. We will review your project details and respond shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 uppercase tracking-widest text-xs font-bold border border-white/20 rounded-full hover:bg-white hover:text-primary transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-sand border-none rounded-sm px-6 py-4 text-charcoal focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-sand border-none rounded-sm px-6 py-4 text-charcoal focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-sand border-none rounded-sm px-6 py-4 text-charcoal focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Interested Service</label>
                  <select
                    id="service"
                    className="w-full bg-sand border-none rounded-sm px-6 py-4 text-charcoal opacity-80 focus:ring-2 focus:ring-accent focus:outline-none transition-shadow"
                  >
                    <option>Landscaping</option>
                    <option>Decking</option>
                    <option>Pergolas</option>
                    <option>Retaining Walls</option>
                    <option>Fencing & Gates</option>
                    <option>Multiple / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-sand border-none rounded-sm px-6 py-4 text-charcoal focus:ring-2 focus:ring-accent focus:outline-none transition-shadow resize-none"
                    placeholder="Tell us about your outdoor vision..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white uppercase tracking-widest text-xs font-bold py-5 rounded-sm hover:bg-primary-light transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
