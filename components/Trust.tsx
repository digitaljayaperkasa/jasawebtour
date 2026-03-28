'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Check } from 'lucide-react';

const Trust = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Owner Bali Tour Guide',
      text: 'Sejak pakai jasawebtour, bookingan naik drastis. Tamu luar negeri lebih percaya karena webnya profesional banget.',
      rating: 5,
    },
    {
      name: 'Sari Wijaya',
      role: 'Marketing Manager Lombok Trip',
      text: 'SEO-nya mantap! Paket tour kami sekarang muncul di halaman 1 Google. Sangat membantu bisnis kami.',
      rating: 5,
    },
    {
      name: 'Andi Pratama',
      role: 'Founder Java Adventure',
      text: 'Fitur WhatsApp bookingnya praktis. Closing jadi lebih cepat karena tamu langsung chat ke CS kami.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Kenapa Banyak <span className="text-cyan-400">Bisnis Tour Pilih Kami?</span>
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              'Spesialis website tour & travel',
              'Paham alur booking & perilaku customer',
              'Fokus hasil (bukan sekadar desain)',
              'Bisa custom sesuai kebutuhan bisnis',
              'Support & maintenance jelas',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <Check className="text-cyan-400" size={20} />
                <span className="text-slate-300 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-xl font-bold text-cyan-400"
          >
            👉 Kami tidak jual website, kami bantu naikkan potensi closing Anda
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group"
            >
              <Quote className="absolute top-6 right-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-6 relative z-10">&quot;{item.text}&quot;</p>
              
              <div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-xs text-cyan-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud Placeholder */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-2xl font-black text-slate-400 tracking-tighter">
              LOGO_AGENCY_{i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
