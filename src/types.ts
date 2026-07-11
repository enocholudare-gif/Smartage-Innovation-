export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'interior-solutions'
  | 'projects'
  | 'compliance'
  | 'sustainability'
  | 'downloads'
  | 'contact'
  | 'machines'
  | 'wood-accessories'
  | 'news'
  | 'careers'
  | 'gallery';

export type ProductCategory =
  | 'Furniture'
  | 'Wood Boards & Panels'
  | 'Doors'
  | 'Stationery'
  | 'Hardware'
  | 'PPE'
  | 'Power Tools';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string; // e.g. "Office Furniture", "School Furniture", "Home Furniture"
  shortDesc: string;
  fullDesc: string;
  image: string;
  detailImages?: string[];
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  isFeatured?: boolean;
}

export interface QuoteItem {
  id: string;
  type: 'product';
  title: string;
  category: string;
  image: string;
  quantity: number;
  customNotes?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  productsUsed: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Products' | 'Quality' | 'Sourcing';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}
