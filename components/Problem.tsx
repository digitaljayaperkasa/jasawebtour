'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, UserX, Search } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <TrendingDown className="text-red-400" />,
      title: 'Sepi Booking',
      desc: 'Website lama tidak menghasilkan leads atau booking sama sekali.',
    },
    {
      icon: <UserX className="text-orange-400" />,
      title: 'Tidak Profesional',
      desc: 'Tampilan web jadul membuat calon tamu ragu untuk transfer.',
    },
    {
      icon: <Search className="text-yellow-400" />,
      title: 'Kalah Saing',
      desc: 'Sulit ditemukan di Google karena tidak dioptimasi SEO.',
    },
    {
      icon: <AlertCircle className="text-blue-400" />,
      title: 'Ketergantungan OTA',
      desc: 'Terlalu bergantung pada agent atau OTA dengan komisi tinggi.',
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
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Masalah yang Sering Dihadapi <span className="text-red-400">Bisnis Tour</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Jangan biarkan bisnis tour Anda stagnan karena infrastruktur digital yang buruk.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
      </div>
    </section>
  );
};

export default Problem;
