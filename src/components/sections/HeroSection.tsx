import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroSection() {
  const handleScrollToCollections = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
      style={{
        background:
          'radial-gradient(ellipse at 20% 60%, rgba(198,167,94,0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(45,6,16,0.5) 0%, transparent 50%), linear-gradient(160deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
      }}
    >
      {/* Decorative gold rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-400/30 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.7 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-400/20 pointer-events-none"
      />

      {/* Corner ornaments */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-gold-400/20 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b border-l border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r border-gold-400/20 pointer-events-none" />

      {/* Floating sparkles */}
      {[
        { top: '20%', left: '15%', delay: 1 },
        { top: '70%', left: '80%', delay: 1.5 },
        { top: '40%', left: '88%', delay: 2 },
        { top: '75%', left: '12%', delay: 2.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, delay: pos.delay, repeat: Infinity, repeatDelay: 2 }}
          className="absolute pointer-events-none text-gold-400"
          style={{ top: pos.top, left: pos.left }}
        >
          <Sparkles size={14} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-heading label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Since 1998 · Royal Heritage</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-ivory-100">Where Gold Meets</span>
            <br />
            <span className="text-gold-shimmer italic">Royalty</span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={itemVariants} className="divider-gold mb-8" />

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-cormorant text-xl md:text-2xl text-ivory-200/65 leading-relaxed max-w-2xl mx-auto mb-10 italic"
          >
            Discover our treasured collections — each piece a story of heritage,
            craftsmanship, and eternal beauty. Handcrafted exclusively for you
            at Ratan Mahal, Bangalore.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={handleScrollToCollections} className="btn-gold">
              Explore Collections
            </button>
            <button onClick={handleScrollToContact} className="btn-gold-outline">
              Book Appointment
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-10 md:gap-16 mt-16 pb-2"
          >
            {[
              { value: '25+', label: 'Years of Heritage' },
              { value: '10K+', label: 'Jewels Crafted' },
              { value: '100%', label: 'Certified Purity' },
              { value: '5★', label: 'Customer Rating' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-playfair text-2xl md:text-3xl font-bold text-gold-gradient">
                  {value}
                </p>
                <p className="section-label text-[0.6rem] mt-1 text-ivory-200/40">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={handleScrollToCollections}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-400/50 hover:text-gold-300 transition-colors duration-300 group focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="section-label text-[0.55rem] tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
