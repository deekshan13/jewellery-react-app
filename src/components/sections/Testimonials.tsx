import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Krishnamurthy',
    location: 'Bangalore, Karnataka',
    rating: 5,
    review:
      'My bridal set from Ratan Mahal was absolutely breathtaking. Every guest at my wedding was in awe. The craftsmanship is unparalleled — each piece felt like it was made for a queen. Worth every rupee and more.',
    purchase: 'Bridal Gold & Diamond Set',
  },
  {
    id: '2',
    name: 'Ananya Sharma',
    location: 'Mysuru, Karnataka',
    rating: 5,
    review:
      'I commissioned a custom mangalsutra design and the team at Ratan Mahal executed it flawlessly. They understood my vision perfectly and delivered something beyond my imagination. The quality and purity certifications gave me complete peace of mind.',
    purchase: 'Custom Mangalsutra',
  },
  {
    id: '3',
    name: 'Deepa Nair',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    review:
      'I\'ve been a loyal customer for 12 years. The lifetime exchange policy is genuine — I recently exchanged my old gold jewellery and the process was seamless. Ratan Mahal is where trust meets elegance.',
    purchase: 'Gold Necklace Set',
  },
  {
    id: '4',
    name: 'Radhika Venkatesh',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review:
      'The diamond ring I purchased for my anniversary was certified IGI and the sparkle is absolutely divine. The gift packaging was also incredibly luxurious. My husband was speechless. Ratan Mahal truly understands royalty.',
    purchase: 'Solitaire Diamond Ring',
  },
  {
    id: '5',
    name: 'Meera Pillai',
    location: 'Kochi, Kerala',
    rating: 5,
    review:
      'From the moment I walked in to when I walked out with my purchase, the experience at Ratan Mahal was world-class. The staff is knowledgeable, patient, and passionate about jewellery. My Kerala gold set is heirloom-worthy.',
    purchase: 'Kerala Traditional Gold Set',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold-400 fill-gold-400' : 'text-ivory-200/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navigate = (dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    startAutoplay();
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #100A06 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(198,167,94,0.05) 0%, transparent 65%)',
        }}
      />

      {/* Large decorative quote */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-gold-400/05 font-playfair text-[180px] md:text-[240px] font-bold leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Voices of Trust</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory-100 mb-4">
            Stories of <span className="text-gold-gradient">Delight</span>
          </h2>
          <div className="divider-gold mt-6" />
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden min-h-[320px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full"
              >
                <div className="bg-charcoal-800/50 border border-gold-400/10 p-10 md:p-14 text-center relative"
                  style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(198,167,94,0.08)' }}
                >
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold-gradient" />

                  <StarRating rating={t.rating} />

                  <blockquote className="font-cormorant text-xl md:text-2xl text-ivory-200/75 italic leading-relaxed my-8">
                    "{t.review}"
                  </blockquote>

                  <div className="divider-gold mb-6" />

                  <div>
                    <p className="font-playfair font-bold text-ivory-100 text-lg">{t.name}</p>
                    <p className="section-label text-[0.6rem] mt-1 text-ivory-200/40">{t.location}</p>
                    <p className="text-gold-400/60 text-xs font-inter mt-2 italic">{t.purchase}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-6 w-10 h-10 border border-gold-400/20 flex items-center justify-center text-gold-400/60 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-6 w-10 h-10 border border-gold-400/20 flex items-center justify-center text-gold-400/60 hover:text-gold-300 hover:border-gold-400/50 transition-all duration-300 focus:outline-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-400 focus:outline-none ${
                i === current ? 'w-6 bg-gold-400' : 'w-1.5 bg-gold-400/25'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Summary stat */}
        <ScrollReveal direction="up" delay={0.2} className="text-center mt-12">
          <p className="font-cormorant text-lg italic text-ivory-200/40">
            Trusted by over <span className="text-gold-400">10,000+ happy customers</span> across South India
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
