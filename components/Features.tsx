'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Package, Zap, Globe, Smartphone, MessageSquare, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Package size={24} />,
      title: 'Struktur Paket Tour',
      desc: 'Rapi & mudah dipilih oleh calon tamu Anda.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Friendly',
      desc: '90% traffic dari HP, tampilan web kami sempurna di smartphone.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Loading Cepat',
      desc: 'Optimasi performa agar tidak bikin orang kabur karena web lambat.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Integrasi WhatsApp',
      desc: 'Tombol booking langsung terhubung ke WhatsApp Anda.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Navigasi Jelas',
      desc: 'Mudah dipahami oleh pengunjung segala usia.',
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Basic',
      desc: 'Biar website Anda mulai muncul di pencarian Google.',
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
            Sistem Website yang <span className="text-cyan-400">Siap Dipakai Jualan</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-4">
            Semua website sudah dilengkapi:
          </p>
          <p className="text-cyan-400 font-bold">
            👉 Dibuat khusus untuk industri tour & travel, bukan template umum
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
