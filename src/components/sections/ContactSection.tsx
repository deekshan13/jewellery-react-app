import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import type { ContactFormData } from '../../types';

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^\+?[\d\s\-()]{8,}$/.test(form.phone)) errs.phone = 'Invalid phone number';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, label: 'Email', value: 'contact@ratanmahal.com', href: 'mailto:contact@ratanmahal.com' },
    { icon: MapPin, label: 'Address', value: 'MG Road, Bangalore — 560001, Karnataka, India', href: 'https://maps.google.com' },
  ];

  const social = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-900 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(198,167,94,0.04) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
            <span className="section-label">Get In Touch</span>
            <span className="w-8 h-px bg-gold-gradient-h opacity-60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory-100 mb-4">
            Visit <span className="text-gold-gradient">Ratan Mahal</span>
          </h2>
          <p className="font-cormorant text-lg text-ivory-200/55 italic max-w-xl mx-auto">
            We would love to hear from you. Book an appointment or simply walk in — royalty always has a seat at Ratan Mahal.
          </p>
          <div className="divider-gold mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Contact Form — 3 cols */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="bg-charcoal-800/40 border border-gold-400/10 p-8 md:p-10">
              {/* Top gold accent */}
              <div className="w-16 h-0.5 bg-gold-gradient mb-8" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={52} className="text-gold-400 mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-ivory-100 mb-2">
                    Thank You, {form.name.split(' ')[0]}!
                  </h3>
                  <p className="text-ivory-200/55 font-inter text-sm">
                    We have received your message and will reach out within 24 hours.
                  </p>
                  <p className="font-cormorant italic text-gold-400/70 mt-4 text-lg">
                    — Ratan Mahal Team
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Name */}
                    <div className="input-group md:mr-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        value={form.name}
                        onChange={handleChange}
                        aria-label="Full Name"
                      />
                      <label htmlFor="name">Full Name</label>
                      {errors.name && (
                        <p className="text-red-400/80 text-xs mt-1 font-inter">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="input-group md:ml-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        value={form.email}
                        onChange={handleChange}
                        aria-label="Email Address"
                      />
                      <label htmlFor="email">Email Address</label>
                      {errors.email && (
                        <p className="text-red-400/80 text-xs mt-1 font-inter">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="input-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder=" "
                      value={form.phone}
                      onChange={handleChange}
                      aria-label="Phone Number"
                    />
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone && (
                      <p className="text-red-400/80 text-xs mt-1 font-inter">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="input-group">
                    <textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      aria-label="Message"
                    />
                    <label htmlFor="message">Your Message</label>
                    {errors.message && (
                      <p className="text-red-400/80 text-xs mt-1 font-inter">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {submitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-charcoal-900 border-t-transparent rounded-full block"
                      />
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info — 2 cols */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {/* Info cards */}
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 border border-gold-400/10 hover:border-gold-400/35 transition-all duration-300 group bg-charcoal-800/20 hover:bg-charcoal-800/40"
                >
                  <div className="w-10 h-10 border border-gold-400/20 flex items-center justify-center shrink-0 group-hover:border-gold-400/50 group-hover:shadow-gold transition-all duration-300">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="section-label text-[0.6rem] mb-1">{label}</p>
                    <p className="text-ivory-100/80 font-inter text-sm leading-relaxed group-hover:text-gold-300 transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Store hours */}
              <div className="p-5 border border-gold-400/10 bg-charcoal-800/20">
                <p className="section-label text-[0.6rem] mb-3">Store Hours</p>
                <div className="space-y-2">
                  {[
                    { day: 'Mon – Sat', time: '10:00 AM – 8:30 PM' },
                    { day: 'Sunday', time: '11:00 AM – 7:00 PM' },
                    { day: 'Public Holidays', time: 'Call to confirm' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-ivory-200/45 text-xs font-inter">{day}</span>
                      <span className="text-gold-300/70 text-xs font-inter">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-5 border border-gold-400/10 bg-charcoal-800/20">
                <p className="section-label text-[0.6rem] mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {social.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold-400/15 text-ivory-200/40 hover:text-gold-300 hover:border-gold-400/45 transition-all duration-300 text-xs font-inter uppercase tracking-widest"
                    >
                      <Icon size={15} />
                      <span className="hidden sm:inline">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
