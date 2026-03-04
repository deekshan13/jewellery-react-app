import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const footerLinks = {
  Collections: ['Bridal Jewellery', 'Gold Jewellery', 'Diamond Jewellery', 'Silver Jewellery'],
  Services: ['Custom Designs', 'Lifetime Exchange', 'Jewellery Repair', 'Gift Packaging'],
  Company: ['About Us', 'Our Story', 'Certifications', 'Contact Us'],
};

export default function Footer() {
  // const handleScroll = (id: string) => {
  //   const el = document.getElementById(id);
  //   if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  return (
    <footer className="bg-charcoal-900 border-t border-gold-400/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-gold-shimmer mb-2 tracking-widest">
              SWARNA JEWELLERY
            </h3>
            <p className="section-label mb-4">Est. 1998 · Bangalore, India</p>
            <p className="text-ivory-200/50 text-sm leading-relaxed font-inter mb-6 max-w-xs">
              Where heritage meets craftsmanship. Each piece at SWARNA JEWELLERY is a testament
              to royal artistry, certified purity, and timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400' },
                { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-400' },
                { icon: MessageCircle, label: 'WhatsApp', color: 'hover:text-green-400' },
              ].map(({ icon: Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`w-10 h-10 border border-gold-400/20 flex items-center justify-center text-ivory-200/40 ${color} transition-all duration-300 hover:border-gold-400/50 hover:scale-110`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-inter font-semibold text-ivory-100/80 mb-5 text-sm tracking-widest uppercase">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-ivory-200/40 hover:text-gold-300 text-sm font-inter transition-colors duration-300 flex items-center gap-1.5 group"
                    >
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-400" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="border-t border-gold-400/10 pt-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
            { icon: Mail, text: 'contact@ratanmahal.com', href: 'mailto:contact@ratanmahal.com' },
            { icon: MapPin, text: 'Bangalore, Karnataka, India', href: '#contact' },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center gap-3 text-ivory-200/40 hover:text-gold-300 transition-colors duration-300 group"
            >
              <span className="w-8 h-8 border border-gold-400/15 flex items-center justify-center group-hover:border-gold-400/40 transition-colors duration-300">
                <Icon size={14} className="text-gold-400" />
              </span>
              <span className="text-sm font-inter">{text}</span>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-400/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory-200/25 text-xs font-inter tracking-wide">
            © 2026 SWARNA JEWELLERY. All rights reserved. | Crafted with ♥ in Bangalore
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-ivory-200/25 hover:text-gold-400/70 text-xs font-inter transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to top */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gold-400/40 hover:text-gold-300 text-xs font-inter tracking-widest uppercase transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <span>Back to Top</span>
            <span className="text-base">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
