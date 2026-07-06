import type { TourPackage, FAQItem, BlogPost, SimilarDestination, DestinationThumb, DestinationFilter } from '../lib/types';

// ─────────────────────────────────────────────
// DESTINATION FILTER TABS
// ─────────────────────────────────────────────
export const baliFilters: DestinationFilter[] = [
  { label: 'Bali', href: '/bali-tour-packages.php', active: true },
  { label: 'Singapore', href: '/singapore-tour-packages.php' },
  { label: 'Dubai', href: '/dubai-holiday-package.php' },
  { label: 'Maldives', href: '/maldives-holiday-package.php' },
  { label: 'Thailand', href: '/thailand-holiday-packages.php' },
  { label: 'Nepal', href: '/nepal-holiday-packages.php' },
  { label: 'Vietnam', href: '/vietnam-tour-packages.php' },
  { label: 'Baku', href: '/baku-holiday-packages.php' },
];

// ─────────────────────────────────────────────
// TOUR PACKAGES
// ─────────────────────────────────────────────
export const baliPackages: TourPackage[] = [
  {
    id: '4n5d-breezy',
    title: 'Breezy Bali Tour Package',
    duration: '4N/5D',
    image: '/images/destination/bali/bali-thumbnail3.jpg',
    href: '/bali-tour-packages/4-nights-5-days-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹31800',
    discountLabel: '30% OFF',
    price: '₹27800',
  },
  {
    id: '5n6d-best-of-bali',
    title: 'Best of Bali Tour',
    duration: '5N/6D',
    image: '/images/destination/bali/bali-thumbnail10.jpg',
    href: '/bali-tour-packages/5-nights-6-days-best-of-bali-tour.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹43999',
    discountLabel: '30% OFF',
    price: '₹39999',
  },
  {
    id: '5n6d-island-escape',
    title: 'Island Escape: Bali Tour Package',
    duration: '5N/6D',
    image: '/images/destination/bali/bali-thumbnail4.jpg',
    href: '/bali-tour-packages/5-nights-6-days-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹44250',
    discountLabel: '30% OFF',
    price: '₹41250',
  },
  {
    id: '5n6d-couples-spa',
    title: 'Bali Tour Package for Couples With Private Spa Treatment',
    duration: '5N/6D',
    image: '/images/destination/bali/bali-thumbnail9.jpg',
    href: '/bali-tour-packages/5-nights-6-day-bali-tour-package-for-couples.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹65712',
    discountLabel: '30% OFF',
    price: '₹45999',
    badge: 'Couple Tour',
  },
  {
    id: '6n7d-incredible',
    title: 'Incredible Bali Tour Package',
    duration: '6N/7D',
    image: '/images/destination/bali/bali-thumbnail5.jpg',
    href: '/bali-tour-packages/6-nights-7-days-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹52750',
    discountLabel: '30% OFF',
    price: '₹48750',
  },
  {
    id: '7n8d-tropical-paradise',
    title: 'Tropical Paradise: Bali Tour Package',
    duration: '7N/8D',
    image: '/images/destination/bali/bali-thumbnail6.jpg',
    href: '/bali-tour-packages/7-nights-8-days-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹55750',
    discountLabel: '30% OFF',
    price: '₹51750',
  },
  {
    id: '6n7d-honeymoon',
    title: 'Exclusive Bali Honeymoon Package with FREE Candle Light Dinner',
    duration: '6N/7D',
    image: '/images/destination/bali/bali-thumbnail7.jpg',
    href: '/bali-tour-packages/6-nights-7-day-bali-honeymoon-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹79998',
    discountLabel: '30% OFF',
    price: '₹55999',
    badge: 'Honeymoon',
    badgeIcon: 'bi bi-heart-fill',
  },
  {
    id: '6n7d-luxurious',
    title: 'Ultra-Luxurious Bali Tour With Bali Swing',
    duration: '6N/7D',
    image: '/images/destination/bali/bali-thumbnail8.jpg',
    href: '/bali-tour-packages/6-nights-7-days-luxurious-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹59999',
    discountLabel: '30% OFF',
    price: '₹55999',
  },
  {
    id: '9n10d-ultimate',
    title: 'Ultimate Refreshing Bali Tour Package',
    duration: '9N/10D',
    image: '/images/destination/bali/bali-thumbnail1.jpg',
    href: '/bali-tour-packages/9-nights-10-days-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹66750',
    discountLabel: '30% OFF',
    price: '₹58750',
  },
  {
    id: '4n5d-with-flights',
    title: 'Amazing Bali Tour Package With Flights',
    duration: '4N/5D',
    image: '/images/destination/bali/bali-thumb9.jpg',
    href: '/bali-tour-packages/4-nights-5-days-bali-tour-package-with-flights.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/flights.svg', label: 'Flights' },
    ],
    originalPrice: '₹81950',
    discountLabel: '30% OFF',
    price: '₹75950',
  },
  {
    id: '3n4d-college',
    title: 'College Bali Tour Packages',
    duration: '3N/4D',
    image: '/images/destination/bali/bali-thumb11.jpg',
    href: '/bali-tour-packages/college-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹26999',
    discountLabel: '30% OFF',
    price: '₹22999',
  },
  {
    id: '3n4d-friends',
    title: 'Friends Bali Tour Packages',
    duration: '3N/4D',
    image: '/images/destination/bali/bali-thumb10.jpg',
    href: '/bali-tour-packages/friends-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹29999',
    discountLabel: '30% OFF',
    price: '₹25999',
  },
  {
    id: '3n4d-corporate',
    title: 'Corporate Bali Tour Packages',
    duration: '3N/4D',
    image: '/images/destination/bali/bali-thumb13.jpg',
    href: '/bali-tour-packages/corporate-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹32999',
    discountLabel: '30% OFF',
    price: '₹28999',
  },
  {
    id: '5n6d-family',
    title: 'Family Bali Tour Packages',
    duration: '5N/6D',
    image: '/images/destination/bali/bali-thumb12.jpg',
    href: '/bali-tour-packages/family-bali-tour-package.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'Flights' },
    ],
    originalPrice: '₹34999',
    discountLabel: '30% OFF',
    price: '₹30999',
  },
  {
    id: '6n7d-group-blissful',
    title: 'Blissful Bali Group Tour With Benoa Beach Fun',
    duration: '6N/7D',
    image: '/images/International/blissfulbaligroup-thumb.jpg',
    href: '/international-group-tours/bali-group-tour.php',
    inclusions: [
      { icon: '/images/icon/hotel2.svg', label: 'Stay' },
      { icon: '/images/icon/meals.svg', label: 'Meals' },
      { icon: '/images/icon/transport.svg', label: 'Transportation', className: 'car' },
      { icon: '/images/icon/more.svg', label: 'More' },
    ],
    originalPrice: '₹48999',
    discountLabel: '',
    price: '₹43999',
    badge: 'Group Tour',
  },
];

// ─────────────────────────────────────────────
// FAQ ITEMS
// ─────────────────────────────────────────────
export const baliFAQs: FAQItem[] = [
  {
    question: 'What is Bali known for?',
    answer: 'Bali, an island paradise in Indonesia, is located east of Java. Bali is famous for its beautiful beaches, stunning rice terraces, and rich Hinduism.',
    defaultOpen: true,
  },
  {
    question: 'What is the best time to visit Bali?',
    answer: 'April to October is preferred as the best time to visit Bali, as it offers warm sunshine and low humidity, which makes it the perfect climate for all outdoor activities.',
  },
  {
    question: 'What are the top tourist places to visit in Bali?',
    answer: 'Bali has so many amazing tourist places to visit. Have a look:\n• Ubud in Bali\n• Tanha Lot in Bali\n• Mount Batur in Bali\n• Uluwatu Temple in Bali\n• Nusa Dua in Bali\n• Seminyak in Bali',
  },
  {
    question: 'What are the top things to do in Bali?',
    answer: 'Bali is a place full of adventure activities and exciting stuff to explore.\n\nTop things to do in Bali:\n• Hike to Mount Batur\n• Visit Tanha Lot\n• Beach hoping\n• Explore the rice Terraces\n• Experience Bali swing\n• Enjoy Balinese Spa treatment',
  },
  {
    question: 'What to eat in Bali?',
    answer: 'Balinese cuisine is delicious and full of authentic flavours, influenced by Indonesian cooking techniques.\n\nFoods to try in Bali:\n• Nasi Goreng\n• Mie Goreng\n• Nasi Campur\n• Babi Guling\n• Sate Lilit',
  },
  {
    question: 'What is the ideal duration for Bali trip?',
    answer: 'Ideally, 6 to 7 days are enough to explore Bali and the top tourist destinations in Bali.',
  },
  {
    question: 'What documents are needed for a Bali trip?',
    answer: 'A valid passport, return tickets, and a valid ID proof are enough and required during Bali trip.',
  },
  {
    question: 'What is the time difference between Bali and India?',
    answer: 'Bali is 2 hours, 30 minutes ahead of Indian time.',
  },
  {
    question: 'What is the currency of Bali?',
    answer: 'The Indonesian rupiah is the currency used in Bali.',
  },
  {
    question: 'Do Indians need a visa to visit Bali?',
    answer: "No, Indians typically don't need a visa for up to 30 days. However, you can get a visa on arrival if you're planning to stay in Bali for a longer duration.",
  },
  {
    question: 'How to move around in Bali?',
    answer: 'You can choose local or shared transport, but it is advisable to hire a private car for comfortable moving in Bali.',
  },
  {
    question: 'Which language is spoken in Bali?',
    answer: 'Bali is an Indonesian island, so Balinese and Indonesian are the primary languages spoken in Bali.',
  },
  {
    question: 'Is Bali safe to travel?',
    answer: "Bali is one of the safest place to travel in the world. Many solo travelers visit Bali every year; however, it's always a wise move to check details before planning your Bali trip.",
  },
];

// ─────────────────────────────────────────────
// BLOG POSTS
// ─────────────────────────────────────────────
export const baliBlogs: BlogPost[] = [
  {
    title: 'Bali in December - A Perfect Tropical Paradise to Explore',
    href: '/blogs/bali/bali-in-december.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'Bali in December offers a unique and magical experience, blending the island\'s tropical charm with festive vibes.',
  },
  {
    title: 'Bali in November - Enjoy Bliss before Rain',
    href: '/blogs/bali/bali-in-november.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'As the island steps into rainy season, Bali turns to a diva during November.',
  },
  {
    title: 'Experience Pre-Monsoon Vibe of Bali in October',
    href: '/blogs/bali/bali-in-october.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'Hop over beaches and cute cafes as the tropical paradise, Bali in October offers a lovely climate to explore.',
  },
  {
    title: 'Nightlife in Bali After Sun Goes Down - Bali Nightlife Highlights',
    href: '/blogs/bali/bali-nightlife-highlights-nightlife-in-bali.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'When the sun sets over Bali\'s golden beaches, the island comes alive with a different kind of magic.',
  },
  {
    title: '10 Unique Experiences in Bali Beyond Usual Ones!',
    href: '/blogs/bali/unique-experiences-in-bali.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'The island of Gods, Bali, is a place where beauty and culture come alive at every step.',
  },
  {
    title: '10+ Best Instagrammable Places in Bali',
    href: '/blogs/bali/best-instagrammable-places-in-bali.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'Bali is a land of magic, where every corner seems to be a pretty postcard come to life.',
  },
  {
    title: '7 Must-Do Activities in Bali',
    href: '/blogs/bali/7-must-do-activities-in-bali.php',
    image: '/images/blog/bali/4/thumb.jpg',
    excerpt: 'Bali, an exotic Indonesian island, is a tropical paradise known for its breathtaking views, colorful culture, and kind hospitality.',
  },
  {
    title: 'Best places to visit in Bali',
    href: '/blogs/bali/best-place-to-visit-in-bali-for-the-first-timers.php',
    image: '/images/blog/bali/thumb-3.jpg',
    excerpt: 'Bali is a popular tourist destination that combines natural beauty, a rich cultural legacy, and a relaxed way of life.',
  },
  {
    title: 'Best Time To Visit Bali',
    href: '/blogs/bali/best-time-to-visit-bali.php',
    image: '/images/blog/bali/thumb-1.jpg',
    excerpt: 'Bali, a magical place full of natural beauty, from the jungle that surrounds Ubud to the beaches that line its southern shore.',
  },
  {
    title: 'Top 10 Things To Do In Bali',
    href: '/blogs/bali/top-10-things-to-do-in-bali.php',
    image: '/images/blog/bali/thumb-2.jpg',
    excerpt: 'A popular hub for party lovers and true adventure enthusiasts, Bali is a place that creates a perfect balance with nature and adventure.',
  },
  {
    title: '10 Must-Try Foods in Bali You Will Love!',
    href: '/blogs/bali/must-try-foods-in-bali.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'Probably one of many reasons for travelers to explore destinations just to try out their local cuisines and innovative dishes.',
  },
  {
    title: 'Where to Stay in Bali ? Luxury Resorts & Villas in Bali',
    href: '/blogs/bali/where-to-stay-in-bali-villas-in-bali.php',
    image: '/images/blog/bali/thumb1.jpg',
    excerpt: 'Hip nightlife, heartbeat raising adventure, and soul-soothing relaxation; Bali organises everything on a platter.',
  },
  {
    title: 'The Ultimate Bali Travel Guide For First Timers',
    href: '/blogs/bali/bali-travel-guide-for-first-timers.php',
    image: '/images/blog/bali/thumb-2.jpg',
    excerpt: 'The most sought-after travel destination, the island of gods, Bali, has been booming its popularity across the world.',
  },
  {
    title: 'Best Places to Visit in Bali for Honeymooners',
    href: '/blogs/bali/best-places-to-visit-in-bali-for-honeymonners.php',
    image: '/images/blog/bali/4/thumb.jpg',
    excerpt: 'Island of the Gods, Bali is a perfect haven to celebrate your love in the lap of nature.',
  },
];

// ─────────────────────────────────────────────
// DESTINATION THUMBNAILS (international)
// ─────────────────────────────────────────────
export const internationalThumbs: DestinationThumb[] = [
  { name: 'Dubai', href: '/dubai-holiday-package.php', image: '/images/International/dubai-1.jpg' },
  { name: 'Singapore', href: '/singapore-tour-packages.php', image: '/images/International/singapore-1.jpg' },
  { name: 'Bali', href: '/bali-tour-packages.php', image: '/images/International/bali-1.jpg' },
  { name: 'Maldives', href: '/maldives-holiday-package.php', image: '/images/International/maldives-1.jpg' },
  { name: 'Thailand', href: '/thailand-holiday-packages.php', image: '/images/International/thailand-1.jpg' },
  { name: 'Nepal', href: '/nepal-holiday-packages.php', image: '/images/International/nepal-1.jpg' },
  { name: 'Vietnam', href: '/vietnam-tour-packages.php', image: '/images/International/vietnam-1.jpg' },
  { name: 'Baku', href: '/baku-holiday-packages.php', image: '/images/International/baku.jpg' },
];

// ─────────────────────────────────────────────
// SIMILAR DESTINATIONS
// ─────────────────────────────────────────────
export const similarDestinations: SimilarDestination[] = [
  {
    title: 'Kasol Kheerganga',
    duration: '2N/3D',
    href: '/kasol-kheerganga-packages/group-tour.php',
    image: '/images/similer_destinations/kasol.jpg',
    description: 'Snow, New Friends, Activities…',
    originalPrice: '₹10499',
    price: '₹7499',
  },
  {
    title: 'Spiti Valley',
    duration: '6N/7D',
    href: '/group-tours/spiti-valley-summer-group-tour.php',
    image: '/images/similer_destinations/spiti-valley.jpg',
    description: 'Road Trip, Cold Desert, Advent…',
    originalPrice: '₹25999',
    price: '₹17999',
  },
  {
    title: 'Kashmir',
    duration: '5N/6D',
    href: '/kashmir-holiday-packages/enthraling-kashmir.php',
    image: '/images/packages/kashmir.jpg',
    description: 'Activities, Lakes, Heaven On Ea…',
    originalPrice: '₹25999',
    price: '₹22999',
  },
  {
    title: 'Shimla',
    duration: '2D/3N',
    href: '#',
    image: '/images/similer_destinations/shimla.jpg',
    description: 'The city in mountains',
    originalPrice: '₹10999',
    price: '₹7499',
  },
  {
    title: 'Dharamshala',
    duration: '3D/2N',
    href: '#',
    image: '/images/similer_destinations/dharamshala.jpg',
    description: 'snow covered mountains',
    originalPrice: '₹9999',
    price: '₹7499',
  },
];

export const exploreMore: SimilarDestination[] = [
  {
    title: 'Goa',
    duration: '4N/5D',
    href: '/goa-holiday-packages/exclusive-goa.php',
    image: '/images/similer_destinations/goa.jpg',
    description: 'Party, Relex and Chill',
    originalPrice: '₹17499',
    price: '₹14499',
  },
  {
    title: 'Manali',
    duration: '3N/4D',
    href: '/manali-tour-packages/manali-3-nights-4-days.php',
    image: '/images/similer_destinations/manali.jpg',
    description: 'Snow, New Friends, Activities…',
    originalPrice: '₹10999',
    price: '₹7499',
  },
  {
    title: 'Kerala',
    duration: '4N/5D',
    href: '/kerala-tour-packages/4-nights-5-days-kerala-tour-package.php',
    image: '/images/beaches/kerela.jpg',
    description: 'Backwaters & Beaches',
    originalPrice: '₹22999',
    price: '₹20999',
  },
  {
    title: 'Andaman',
    duration: '4N/5D',
    href: '/andaman-holiday-packages/exotic-andaman-with-havelock-island.php',
    image: '/images/similer_destinations/andaman.jpg',
    description: 'Islands, Beaches, Diving',
    originalPrice: '₹24999',
    price: '₹19999',
  },
  {
    title: 'Rishikesh',
    duration: '3D/2N',
    href: '#',
    image: '/images/similer_destinations/rishikesh.jpg',
    description: 'Yoga, Adventure, Rafting',
    originalPrice: '₹12999',
    price: '₹7499',
  },
];
