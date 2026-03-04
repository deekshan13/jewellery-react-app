import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import type { Collection } from '../../types';

const collections: Collection[] = [
  {
    id: 'bridal',
    name: 'Bridal Collection',
    description: 'Opulent sets crafted to make your most precious day unforgettable.',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80&auto=format&fit=crop',
    tag: 'Most Coveted',
  },
  {
    id: 'gold',
    name: 'Gold Jewellery',
    description: '22K & 24K hallmark certified gold in timeless designs.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 'diamonds',
    name: 'Diamond Collection',
    description: 'Brilliant-cut diamonds set in exquisite platinum and gold.',
    imageUrl: 'https://images.unsplash.com/photo-1665653023767-09fb94c7baf5?w=600&q=80&auto=format&fit=crop',
    tag: 'Certified IGI',
  },
  {
    id: 'silver',
    name: 'Silver Jewellery',
    description: '925 sterling silver with artisanal craftsmanship and modern elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80&auto=format&fit=crop',
    tag: 'New Arrivals',
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-charcoal-900 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(198,167,94,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Our Finest</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory-100 mb-4">
            Featured <span className="text-gold-gradient">Collections</span>
          </h2>
          <p className="font-cormorant text-lg text-ivory-200/55 italic max-w-xl mx-auto">
            Each creation is a masterpiece — born from tradition, shaped by artisans,
            destined to become your cherished heirloom.
          </p>
          <div className="divider-gold mt-6" />
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <ScrollReveal key={col.id} delay={i * 0.12} direction="up">
              <div className="collection-card bg-charcoal-800 h-full group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={col.imageUrl}
                    alt={col.name}
                    loading="lazy"
                    className="card-img w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[0.6rem] tracking-widest uppercase font-inter font-semibold bg-gold-400/90 text-charcoal-900">
                      {col.tag}
                    </span>
                  </div>

                  {/* Gold glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(198,167,94,0.15) 0%, transparent 70%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-bold text-ivory-100 mb-2 group-hover:text-gold-300 transition-colors duration-300">
                    {col.name}
                  </h3>
                  <p className="text-ivory-200/45 text-sm font-inter leading-relaxed mb-4">
                    {col.description}
                  </p>
                  <button className="text-gold-400 text-xs font-inter font-semibold tracking-widest uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                    Explore
                    <span className="text-base leading-none">→</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-12">
          <button className="btn-gold-outline">View All Collections</button>
        </ScrollReveal>
      </div>
    </section>
  );
}
