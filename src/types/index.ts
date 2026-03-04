// ─── Collection ─────────────────────────────────────────────────────────────
export interface Collection {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    tag: string;
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    review: string;
    purchase: string;
}

// ─── WhyCard ─────────────────────────────────────────────────────────────────
export interface WhyCard {
    id: string;
    title: string;
    description: string;
    icon: string;
}

// ─── NavLink ─────────────────────────────────────────────────────────────────
export interface NavLink {
    label: string;
    href: string;
}

// ─── ContactForm ─────────────────────────────────────────────────────────────
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
