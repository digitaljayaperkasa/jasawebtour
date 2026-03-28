'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Smartphone, Search, MessageSquare } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: <Layout className="text-cyan-400" />,
      title: 'Website Khusus Tour',
      desc: 'Didesain khusus untuk memamerkan paket tour dengan struktur yang rapi dan menarik.',
    },
    {
      icon: <MessageSquare className="text-cyan-400" />,
      title: 'WhatsApp Optimized',
      desc: 'Tombol booking langsung ke WhatsApp untuk memudahkan closing dengan tamu.',
    },
    {
      icon: <Search className="text-cyan-400" />,
      title: 'SEO Ready',
      desc: 'Struktur web yang disukai Google agar paket tour Anda muncul di halaman pertama.',
    },
    {
      icon: <Smartphone className="text-cyan-400" />,
      title: 'Mobile First Design',
      desc: 'Tampilan sempurna di HP, karena 80% calon tamu mencari tour lewat smartphone.',
    },
  ];

  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Kenapa Harus <span className="text-cyan-400">jasawebtour.com?</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Kami tidak hanya membuat website yang &quot;bagus dilihat&quot;, tapi kami membangun mesin penjual otomatis untuk bisnis tour & travel Anda.
            </p>

            <div className="space-y-4">
              {[
                'Struktur siap jualan (Conversion Optimized)',
                'Kecepatan loading di atas rata-rata',
                'Mudah dikelola sendiri (User Friendly)',
                'Support teknis yang responsif',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={20} />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
