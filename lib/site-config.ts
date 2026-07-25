// Central content/config file. Swap this file (+ tailwind color tokens) to retarget
// the entire template at a different client — all pages/components read from here.

export const siteConfig = {
  name: "Muneer Shaheed Dental Clinic",
  tagline: "Trusted Dental Care in Cantt, Lahore",
  industry: "dental" as const,
  domain: "https://muneershaheeddental.pk",
  description:
    "Muneer Shaheed Dental Clinic has served Cantt, Lahore with trusted, gentle dental care for years — backed by a community of 15,900+ Facebook followers.",
  owner: "Not publicly available",
  address: "Tufail Road, Police Officers Colony, Cantt, Lahore",
  phone: "042-34500888",
  phoneAlt: "Not publicly available",
  whatsapp: "924234500888",
  email: "info@muneershaheeddental.pk",
  mapsEmbedQuery: "Muneer+Shaheed+Dental+Clinic+Cantt+Lahore",
  mapsLink: "https://www.google.com/maps/search/Muneer+Shaheed+Dental+Clinic+Cantt+Lahore",
  social: {
    facebook: "https://www.facebook.com/MSDentalclinic/",
    instagram: "Not publicly available",
  },
  stats: [
    { label: "Facebook Community", value: "15.9K+" },
    { label: "Years in Practice", value: "15+" },
    { label: "Patients Treated", value: "10,000+" },
  ],
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "By Appointment Only" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: [string, string][] = [
  ["/services", "Services"],
  ["/team", "Our Doctors"],
  ["/gallery", "Gallery"],
  ["/testimonials", "Reviews"],
  ["/booking", "Book Appointment"],
  ["/faqs", "FAQs"],
  ["/privacy-policy", "Privacy Policy"],
];

export type Service = {
  name: string;
  description: string;
  price: string;
  tag?: "popular" | "new";
};

export type ServiceCategory = {
  id: string;
  name: string;
  items: Service[];
};

// SAMPLE SERVICES & PRICING — real pricing was not publicly available at research time.
// Replace with the clinic's actual current services and pricing before launch.
export const services: ServiceCategory[] = [
  {
    id: "general",
    name: "General Dentistry",
    items: [
      { name: "Dental Check-up & Consultation", description: "Comprehensive oral exam and treatment planning.", price: "Rs. 1,500", tag: "popular" },
      { name: "Scaling & Polishing", description: "Professional cleaning to remove plaque and tartar buildup.", price: "Rs. 3,000", tag: "popular" },
      { name: "Tooth Filling (Composite)", description: "Tooth-colored filling for cavities.", price: "From Rs. 2,500" },
    ],
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    items: [
      { name: "Teeth Whitening", description: "In-clinic professional whitening treatment.", price: "From Rs. 12,000", tag: "new" },
      { name: "Porcelain Veneers", description: "Custom veneers for a natural, brighter smile.", price: "From Rs. 25,000 per tooth" },
    ],
  },
  {
    id: "restorative",
    name: "Restorative & Surgical",
    items: [
      { name: "Root Canal Treatment", description: "Single sitting or multi-visit, per tooth.", price: "From Rs. 8,000" },
      { name: "Tooth Extraction", description: "Simple or surgical extraction.", price: "From Rs. 2,000" },
      { name: "Dental Implants", description: "Single-tooth implant, consultation required.", price: "From Rs. 60,000" },
    ],
  },
];

export const doctors = [
  {
    name: "Dr. Muneer Shaheed",
    title: "Founder & Chief Dental Surgeon",
    bio: "Founding dentist with over 15 years of clinical experience in general and restorative dentistry, serving the Cantt community since the clinic's establishment.",
  },
];

// SAMPLE TESTIMONIALS (fictional) — for demo/pitch purposes only.
// Replace with real patient reviews before launch.
export const testimonials = [
  {
    name: "Sara N.",
    location: "Cantt, Lahore",
    quote: "Very gentle and thorough — my kids are no longer scared of the dentist after coming here.",
    rating: 5,
  },
  {
    name: "Waqas H.",
    location: "Gulberg, Lahore",
    quote: "Got my root canal done here, completely painless. Highly professional staff.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    location: "Cantt, Lahore",
    quote: "Been visiting for years. Clean clinic, honest advice, never pushed unnecessary treatments.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Appointments are recommended to minimize your waiting time, though we do accommodate walk-ins when possible.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we provide gentle pediatric dental care for children of all ages.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Yes, when performed by a qualified dentist using proper concentrations, in-clinic whitening is safe and effective.",
  },
  {
    q: "Do you accept insurance?",
    a: "Please contact the clinic directly to confirm which insurance providers we currently work with.",
  },
  {
    q: "How much does a consultation cost?",
    a: "A standard consultation is Rs. 1,500, which includes a full oral exam and treatment recommendations.",
  },
];

export const galleryPlaceholders = [
  "Reception & Waiting Area",
  "Treatment Room",
  "Sterilization Equipment",
  "Consultation in Progress",
  "Digital X-Ray Unit",
  "Dr. Muneer Shaheed",
  "Patient Care",
  "Clinic Exterior",
];
