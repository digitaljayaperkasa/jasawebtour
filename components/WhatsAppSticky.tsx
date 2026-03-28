'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppSticky = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-white text-secondary px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/10"
      >
        Butuh Website Tour? 💬
      </motion.div>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/6287862250460"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-green-400 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppSticky;
