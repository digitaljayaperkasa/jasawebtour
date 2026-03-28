'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Bali Paradise Tour',
      category: 'Luxury Tour',
      image: 'https://picsum.photos/seed/bali/600/400',
    },
    {
      title: 'Lombok Adventure',
      category: 'Adventure Trip',
      image: 'https://picsum.photos/seed/lombok/600/400',
    },
    {
      title: 'Java Heritage',
      category: 'Cultural Tour',
      image: 'https://picsum.photos/seed/java/600/400',
    },
    {
      title: 'Raja Ampat Cruise',
      category: 'Premium Cruise',
      image: 'https://picsum.photos/seed/rajaampat/600/400',
    },
    {
      title: 'Bromo Sunrise',
      category: 'Nature Tour',
      image: 'https://picsum.photos/seed/bromo/600/400',
    },
    {
      title: 'Labuan Bajo Trip',
      category: 'Island Hopping',
      image: 'https://picsum.photos/seed/bajo/600/400',
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Portfolio <span className="text-cyan-400">Terbaru</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl">
              Beberapa contoh website tour & travel yang telah kami bangun untuk klien kami.
            </p>
          </div>
          <motion.a
            whileHover={{ x: 5 }}
            href="https://wa.me/6287862250460"
            className="text-cyan-400 font-bold flex items-center gap-2 group"
          >
            Lihat Semua Portfolio
            <ExternalLink size={18} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6 md:hidden">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
