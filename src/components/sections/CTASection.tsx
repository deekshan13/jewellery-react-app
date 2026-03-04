import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function CTASection() {
  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="py-28 md:py-40 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #1A0A05 0%, #2D1810 40%, #4A0E1A 100%)',
            'linear-gradient(135deg, #4A0E1A 0%, #2D1810 40%, #1A0A05 100%)',
            'linear-gradient(135deg, #1A0A05 0%, #2D1810 40%, #4A0E1A 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(198,167,94,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 50%, rgba(198,167,94,0.08) 0%, transparent 55%)',
        }}
      />

      {/* Ornamental rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-400/05 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-gold-400/08 rounded-full pointer-events-none"
      />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold-400/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold-400/20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <div className="flex justify-center mb-6">
            <Crown size={36} className="text-gold-400 animate-floatY" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Exclusively Yours</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-ivory-100 mb-4 leading-tight">
            Adorn Yourself in{' '}
            <span className="text-gold-shimmer italic">Royalty</span>
          </h2>

          <div className="divider-gold mt-4 mb-6" />

          <p className="font-cormorant text-xl md:text-2xl text-ivory-200/65 italic leading-relaxed mb-10 max-w-2xl mx-auto">
            Walk into SWARNA JEWELLERY and walk out wearing a story. 
            Whether it's your bridal trousseau or a precious gift, 
            we have the perfect piece waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleContact} className="btn-gold text-sm px-8 py-4">
              Book a Private Appointment
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline text-sm px-8 py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
