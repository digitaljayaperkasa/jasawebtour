'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} />
              Website Khusus Tour & Travel
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Jasa Pembuatan <span className="text-gradient">Website Tour</span> yang Fokus Datangkan Booking
            </h1>
            
            <p className="text-lg text-slate-400 mb-4 max-w-xl leading-relaxed">
              Website bukan cuma tampilan. Kami bantu bisnis tour & travel Anda terlihat profesional, dipercaya, dan lebih mudah closing setiap hari.
            </p>
            
            <p className="text-cyan-400 font-bold mb-8">
              👉 Cocok untuk driver, tour organizer, hingga agency yang ingin scale
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6287862250460"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-secondary font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-cyan-500/20"
              >
                <MessageCircle size={20} />
                Konsultasi Gratis via WhatsApp
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5 }}
                href="#portfolio"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold py-4 px-8 group"
              >
                Lihat Portfolio
                <ArrowRight size={20} className="group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <Globe size={18} />
                <span className="text-sm">SEO Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                <span className="text-sm">Trusted by 50+ Agency</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
              <Image
                src="https://picsum.photos/seed/travel-web/800/600"
                alt="Website Tour Mockup"
                width={800}
                height={600}
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Conversion Rate</div>
                  <div className="text-sm font-bold text-white">+45% Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">New Booking</div>
                  <div className="text-sm font-bold text-white">Just Received!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
