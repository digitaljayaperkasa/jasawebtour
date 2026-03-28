'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '1.750.000',
      renewal: '750.000',
      features: [
        '10 Paket Tour',
        'Hosting 5GB SSD',
        'Domain .com (1 Thn)',
        'Mobile Responsive',
        'WhatsApp Integration',
        'Basic SEO Setup',
      ],
      isPopular: false,
    },
    {
      name: 'Profesional',
      price: '3.500.000',
      renewal: '900.000',
      features: [
        '20 Paket Tour',
        'Hosting 10GB SSD',
        'Domain .com (1 Thn)',
        'Premium Design',
        'WhatsApp Integration',
        'Advanced SEO Setup',
        'Google Analytics',
        'Support Prioritas',
      ],
      isPopular: true,
    },
    {
      name: 'Ultimate',
      price: '7.500.000',
      renewal: '1.200.000',
      features: [
        '50 Paket Tour',
        'Hosting 20GB SSD',
        'Domain .com (1 Thn)',
        'Custom UI/UX Design',
        'WhatsApp Integration',
        'Full SEO Optimization',
        'Google My Business',
        'Training Admin',
        'Support Eksklusif',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pilihan Paket <span className="text-cyan-400">Investasi</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis tour Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.isPopular ? 'bg-cyan-500/5 border-cyan-500 shadow-2xl shadow-cyan-500/10' : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-secondary text-xs font-bold py-1 px-4 rounded-full">
                  PALING POPULER
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-slate-400">Rp</span>
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-slate-500">Perpanjangan: Rp {plan.renewal}/tahun</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-cyan-400 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/6287862250460?text=Halo, saya tertarik dengan paket ${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular ? 'bg-cyan-500 text-secondary hover:bg-cyan-400' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <MessageCircle size={20} />
                Pilih Paket Ini
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
