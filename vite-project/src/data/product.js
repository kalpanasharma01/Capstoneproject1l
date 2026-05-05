// src/data/product.js

export const PRODUCTS = [
  // Sarees
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 4599,
    category: "Sarees",
    gender: "Women",
    rating: 4.8,
    reviews: 312,
    tag: "Bestseller",
    desc: "Pure Banarasi silk with gold zari work..."
  },
  {
    id: 2,
    name: "Kanjivaram Saree",
    price: 6999,
    category: "Sarees",
    gender: "Women",
    rating: 4.7,
    reviews: 220,
    tag: "Trending",
    desc: "Handwoven Kanjivaram silk saree..."
  },
  {
    id: 3,
    name: "Chikankari Saree",
    price: 3499,
    category: "Sarees",
    gender: "Women",
    rating: 4.5,
    reviews: 180,
    tag: "New",
    desc: "Elegant Lucknowi chikankari saree..."
  },
  {
    id: 4,
    name: "Georgette Saree",
    price: 2599,
    category: "Sarees",
    gender: "Women",
    rating: 4.2,
    reviews: 95,
    tag: "Sale",
    desc: "Lightweight georgette saree with sequins..."
  },
  {
    id: 5,
    name: "Cotton Saree",
    price: 1999,
    category: "Sarees",
    gender: "Women",
    rating: 4.0,
    reviews: 60,
    tag: "Popular",
    desc: "Comfortable cotton saree for daily wear..."
  },

  // Suits
  {
    id: 6,
    name: "Anarkali Suit",
    price: 5499,
    category: "Suits",
    gender: "Women",
    rating: 4.6,
    reviews: 140,
    tag: "Featured",
    desc: "Designer Anarkali suit with dupatta..."
  },
  {
    id: 7,
    name: "Punjabi Patiala Suit",
    price: 2999,
    category: "Suits",
    gender: "Women",
    rating: 4.3,
    reviews: 110,
    tag: "New",
    desc: "Traditional Patiala suit with embroidery..."
  },
  {
    id: 8,
    name: "Straight Cut Suit",
    price: 2599,
    category: "Suits",
    gender: "Women",
    rating: 4.1,
    reviews: 85,
    tag: "Sale",
    desc: "Cotton straight cut suit for office wear..."
  },
  {
    id: 9,
    name: "Palazzo Suit",
    price: 3299,
    category: "Suits",
    gender: "Women",
    rating: 4.4,
    reviews: 95,
    tag: "Trending",
    desc: "Stylish palazzo suit with printed dupatta..."
  },
  {
    id: 10,
    name: "Sharara Suit",
    price: 4599,
    category: "Suits",
    gender: "Women",
    rating: 4.7,
    reviews: 130,
    tag: "Bestseller",
    desc: "Festive sharara suit with sequins..."
  },

  // Sherwanis
  {
    id: 11,
    name: "Festive Sherwani",
    price: 7999,
    category: "Sherwanis",
    gender: "Men",
    rating: 4.7,
    reviews: 85,
    tag: "Featured",
    desc: "Handcrafted sherwani with intricate embroidery..."
  },
  {
    id: 12,
    name: "Royal Wedding Sherwani",
    price: 9999,
    category: "Sherwanis",
    gender: "Men",
    rating: 4.9,
    reviews: 150,
    tag: "Bestseller",
    desc: "Luxurious sherwani for weddings..."
  },
  {
    id: 13,
    name: "Velvet Sherwani",
    price: 8999,
    category: "Sherwanis",
    gender: "Men",
    rating: 4.6,
    reviews: 95,
    tag: "Trending",
    desc: "Velvet sherwani with zari work..."
  },
  {
    id: 14,
    name: "Simple Sherwani",
    price: 4999,
    category: "Sherwanis",
    gender: "Men",
    rating: 4.2,
    reviews: 70,
    tag: "Sale",
    desc: "Minimalist sherwani for small functions..."
  },
  {
    id: 15,
    name: "Designer Sherwani",
    price: 10999,
    category: "Sherwanis",
    gender: "Men",
    rating: 4.8,
    reviews: 120,
    tag: "New",
    desc: "Designer sherwani with modern cuts..."
  },

  // (Repeat similar blocks for Lehengas, Kurtas, Kurtis, Jackets, Accessories — 5 products each)
];

// Tag colors
export const TAG_COLORS = {
  Bestseller: { bg: "#fff5e0", color: "#e65100" },
  New: { bg: "#e8f5e9", color: "#2e7d32" },
  Featured: { bg: "#e0f7fa", color: "#006064" },
  Trending: { bg: "#f3e5f5", color: "#4a148c" },
  Sale: { bg: "red", color: "white" },
  Popular: { bg: "blue", color: "white" }
};

export const GENDERS = ["All", "Men", "Women", "Kids"];

export const CATEGORIES = [
  "All",
  "Sarees",
  "Suits",
  "Sherwanis",
  "Lehengas",
  "Kurtas",
  "Kurtis",
  "Jackets",
  "Accessories"
];

export const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" }
];

export const PAGE_SIZE = 6;
