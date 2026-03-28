'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Zap, Check } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Zap size={120} className="text-cyan-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Mulai Website Tour Anda <span className="text-gradient">Sekarang</span>
          </h2>
          
          <div className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto space-y-4">
            <p>Jangan tunggu sampai kompetitor ambil market Anda duluan.</p>
            <p className="font-bold text-cyan-400">Website yang tepat bisa bantu Anda:</p>
            <ul className="flex flex-col items-center gap-2">
              <li className="flex items-center gap-2"><Check size={18} className="text-cyan-400" /> Lebih dipercaya</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-cyan-400" /> Lebih mudah closing</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-cyan-400" /> Lebih banyak booking</li>
            </ul>
          </div>

          <p className="text-cyan-400 font-bold mb-8">
            👉 Konsultasi gratis sekarang, kami bantu arahkan yang paling cocok untuk bisnis Anda
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6287862250460?text=Halo, saya ingin konsultasi pembuatan website tour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-secondary font-black text-xl py-5 px-12 rounded-full transition-all shadow-2xl shadow-cyan-500/40"
          >
            <MessageCircle size={24} />
            Chat WhatsApp Sekarang
          </motion.a>
          
          <div className="mt-8 text-sm text-slate-400 font-medium">
            Tersedia promo khusus bulan ini! 🚀
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
