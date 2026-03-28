'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, UserX, Search } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <TrendingDown className="text-red-400" />,
      title: 'Sepi Booking',
      desc: 'Sudah punya website, tapi tidak ada yang booking.',
    },
    {
      icon: <AlertCircle className="text-orange-400" />,
      title: 'Masih Manual',
      desc: 'Masih pakai cara manual (chat satu-satu, ribet).',
    },
    {
      icon: <UserX className="text-yellow-400" />,
      title: 'Kurang Meyakinkan',
      desc: 'Tampilan website kurang meyakinkan calon tamu.',
    },
    {
      icon: <Search className="text-blue-400" />,
      title: 'Kalah Saing',
      desc: 'Kalah saing dengan kompetitor di Google.',
    },
    {
      icon: <AlertCircle className="text-red-400" />,
      title: 'Tergantung OTA',
      desc: 'Terlalu bergantung ke OTA / pihak ketiga.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight"
          >
            Masih Begini?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Banyak bisnis tour stuck di sini:
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{problem.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-6 rounded-2xl bg-red-500/10 border border-red-500/20"
        >
          <p className="text-xl font-bold text-red-400">
            👉 Hasilnya: capek kerja, tapi closing tidak maksimal
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
