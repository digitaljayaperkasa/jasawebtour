'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Berapa lama pembuatan website?',
      answer: 'Rata-rata 3–7 hari kerja, tergantung paket dan revisi.',
    },
    {
      question: 'Apakah bisa request design sendiri?',
      answer: 'Bisa, semua paket bisa disesuaikan dengan branding Anda.',
    },
    {
      question: 'Apakah sudah termasuk domain & hosting?',
      answer: 'Ya, semua paket sudah termasuk domain .com & hosting.',
    },
    {
      question: 'Apakah website bisa muncul di Google?',
      answer: 'Sudah SEO basic, dan bisa dikembangkan lebih lanjut.',
    },
    {
      question: 'Apakah bisa tambah paket tour nanti?',
      answer: 'Bisa, sangat fleksibel untuk dikembangkan.',
    },
    {
      question: 'Apakah ada support setelah jadi?',
      answer: 'Ada, termasuk maintenance sesuai paket perpanjangan.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pertanyaan <span className="text-cyan-400">Sering Diajukan</span>
          </motion.h2>
          <p className="text-slate-400">Cari tahu jawaban dari pertanyaan yang paling sering ditanyakan klien kami.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white">{question}</span>
        {isOpen ? <Minus className="text-cyan-400" size={20} /> : <Plus className="text-cyan-400" size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
