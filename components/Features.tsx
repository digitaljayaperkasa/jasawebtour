'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Package, Calendar, Zap, Shield, BarChart3, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Package size={24} />,
      title: 'Manajemen Paket Tour',
      desc: 'Input paket tour, itinerary, dan harga dengan sangat mudah.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Sistem Inquiry',
      desc: 'Formulir pemesanan yang langsung terhubung ke email & WhatsApp.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Ultra Fast Loading',
      desc: 'Optimasi performa agar tamu tidak kabur karena web lambat.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security & SSL',
      desc: 'Keamanan data terjamin dengan sertifikat SSL gratis.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics Ready',
      desc: 'Pantau trafik dan perilaku pengunjung dengan Google Analytics.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Custom Domain',
      desc: 'Gunakan domain .com atau .id untuk branding yang kuat.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Fitur Canggih untuk <span className="text-cyan-400">Skala Bisnis</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sistem yang kami bangun dirancang untuk memudahkan operasional dan meningkatkan kepercayaan tamu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
