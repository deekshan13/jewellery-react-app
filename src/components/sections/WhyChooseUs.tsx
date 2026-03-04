import { Shield, Palette, RefreshCw, Gem, type LucideIcon } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import type { WhyCard } from '../../types';

const cards: WhyCard[] = [
  {
    id: 'purity',
    title: 'Certified Purity',
    description:
      'Every piece is BIS hallmarked and IGI certified. We guarantee 100% authentic gold, diamond, and silver quality — no compromise, ever.',
    icon: 'Shield',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description:
      'Dream it, we craft it. Our master artisans bring your vision to life — bespoke jewellery designed exclusively for you.',
    icon: 'Palette',
  },
  {
    id: 'exchange',
    title: 'Lifetime Exchange',
    description:
      'Your trust is our commitment. Exchange any Ratan Mahal jewel at full value, for life — because great relationships last forever.',
    icon: 'RefreshCw',
  },
  {
    id: 'craft',
    title: 'Royal Craftsmanship',
    description:
      'With over 25 years of heritage, our artisans follow time-honoured techniques passed down through generations of master jewellers.',
    icon: 'Gem',
  },
];

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Palette,
  RefreshCw,
  Gem,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-charcoal-900 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(198,167,94,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Why Ratan Mahal</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory-100 mb-4">
            The <span className="text-gold-gradient">Ratan Mahal</span> Promise
          </h2>
          <p className="font-cormorant text-lg text-ivory-200/55 italic max-w-xl mx-auto">
            More than jewellery — a relationship built on trust, artistry, and timeless quality.
          </p>
          <div className="divider-gold mt-6" />
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <ScrollReveal key={card.id} delay={i * 0.12} direction="up">
                <div className="why-card bg-charcoal-800/60 p-8 h-full flex flex-col group">
                  {/* Icon */}
                  <div className="w-14 h-14 border border-gold-400/20 flex items-center justify-center mb-6 group-hover:border-gold-400/50 transition-all duration-400 group-hover:shadow-gold">
                    <Icon size={24} className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-ivory-100 mb-3 group-hover:text-gold-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-px bg-gold-400/30 mb-4 group-hover:w-12 group-hover:bg-gold-400 transition-all duration-400" />

                  {/* Description */}
                  <p className="text-ivory-200/45 text-sm font-inter leading-relaxed flex-1">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <ScrollReveal direction="up" delay={0.5} className="mt-16">
          <div className="border border-gold-400/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-playfair text-2xl font-bold text-ivory-100">
                Ready to find your{' '}
                <span className="text-gold-gradient italic">perfect piece?</span>
              </p>
              <p className="text-ivory-200/45 text-sm font-inter mt-1">
                Visit us in Bangalore or book a private consultation.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold shrink-0"
            >
              Book Consultation
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
