import { Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #100A06 100%)' }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A75E' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601121141418-7fd0ea785c4b?w=700&q=80&auto=format&fit=crop"
                  alt="Ratan Mahal — Master Jewellers at Work"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/5] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
              </div>

              {/* Since badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-charcoal-900 border border-gold-400/30 p-6 shadow-gold">
                <Award className="text-gold-400 mb-2" size={28} />
                <p className="font-playfair text-2xl font-bold text-gold-gradient leading-none">1998</p>
                <p className="section-label text-[0.6rem] mt-1 text-ivory-200/50">Est. Bangalore</p>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400/20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
                <span className="section-label">Our Story</span>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory-100 mb-6 leading-tight">
                A Legacy Forged in{' '}
                <span className="text-gold-gradient italic">Gold & Trust</span>
              </h2>

              <div className="divider-gold mb-8" style={{ margin: '0 0 2rem 0', width: '60px' }} />

              <p className="font-cormorant text-xl text-ivory-200/65 italic leading-relaxed mb-5">
                "Every jewel tells a story. At Ratan Mahal, we have been weaving those
                stories into gold and precious stones for over two decades."
              </p>

              <p className="text-ivory-200/50 font-inter text-sm leading-relaxed mb-5">
                Founded in 1998 in the heart of Bangalore, Ratan Mahal was born from a
                passion for royal Indian jewellery-making traditions. Our master craftsmen,
                many carrying forward family legacies spanning generations, create each
                piece with meticulous attention to detail and an unwavering commitment
                to certified purity.
              </p>

              <p className="text-ivory-200/50 font-inter text-sm leading-relaxed mb-10">
                From resplendent bridal sets to everyday elegance — we believe jewellery
                is not just an ornament, but a heritage you carry forward. Every Ratan Mahal
                piece comes with a lifetime exchange guarantee and BIS hallmark certification.
              </p>

              {/* Signature badges */}
              <div className="flex flex-wrap gap-4 mb-10">
                {['BIS Hallmarked', 'IGI Certified', 'Lifetime Exchange', '25+ Years'].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 border border-gold-400/25 text-gold-300/80 text-xs font-inter tracking-widest uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div>
                <button className="btn-gold">
                  Discover Our Story
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
