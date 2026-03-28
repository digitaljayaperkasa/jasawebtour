import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                jasaweb<span className="text-cyan-400">tour</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Partner digital terpercaya untuk bisnis tour & travel di Indonesia. Kami membantu Anda membangun kehadiran online yang profesional dan menghasilkan profit.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#solution" className="hover:text-cyan-400 transition-colors">Solusi</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Fitur</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Harga</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>WhatsApp: 087862250460</li>
              <li>Email: hello@jasawebtour.com</li>
              <li>Lokasi: Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 jasawebtour.com. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
