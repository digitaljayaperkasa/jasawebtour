import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Trust from '@/components/Trust';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppSticky from '@/components/WhatsAppSticky';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SchemaMarkup />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Pricing />
      <Trust />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppSticky />
    </main>
  );
}
