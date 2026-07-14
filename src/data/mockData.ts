import {
  Product,
  Project,
  Testimonial,
  FAQ,
  TeamMember,
} from '../types';

import sawnTimberImage from '../assets/images/sawn_timber_stack_1783664468112.jpg';
import filmFacedPlywoodImage from '../assets/images/film_faced_plywood_1783664484765.jpg';
import premiumPlywoodImage from '../assets/images/premium_plywood_1783664497900.jpg';
import woodenStationeryImage from '../assets/images/wooden_stationery_1783668516807.jpg';
import securityLocksImage from '../assets/images/security_locks_1783668533225.jpg';
import safetyPpeImage from '../assets/images/safety_ppe_1783668545473.jpg';

export const companyStats = [
  { value: '750+', label: 'Delivered Supply Contracts', description: 'Supplied premium office furniture, educational desks, stationary, and materials to public & private entities.' },
  { value: '1,200+', label: 'Active Clients Served', description: 'Partnering with commercial contractors, schools, real estate developers, and private institutions.' },
  { value: '10+', label: 'Years of Experience', description: 'Delivering robust timber boards, custom furniture fabrication, and high-quality bulk procurement services.' },
  { value: '100% ', label: 'Reliability Record', description: 'Strict SLA compliance on bulk supply schedules, timber specifications, and construction materials.' },
];

export const SAIL_SERVICES = [
  {
    id: 'srv-01',
    title: 'Custom Furniture Fabrication',
    category: 'Manufacturing',
    description: 'We construct beautiful, durable office desks, student double-desks, board tables, and home cabinetry out of premium moisture-resistant melamine and solid timbers.',
    images: [
      'https://cdn.phototourl.com/free/2026-07-10-11c51cc2-5782-4ac1-bc92-c18615024df0.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-e840d849-b960-4214-bb83-f99ea1315007.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-a33a72e3-9234-4e0e-b6ab-b9c9ef4c131b.jpg'
    ],
    features: ['Precision-cut board sizes', 'Heavy-duty hydraulic fittings', 'Made-to-order designs'],
  },
  {
    id: 'srv-02',
    title: 'Board Sizing & Edge Bending',
    category: 'Wood Processing',
    description: 'Using high-speed professional circular saws and edgebanders, we cut wood sheets to exact shapes and apply thick water-proof edge strips to seal out moisture and humidity.',
    images: [
      'https://cdn.phototourl.com/free/2026-07-10-2de0c28c-22a9-453e-a66a-08b00ee7be48.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-859ef86c-e850-4ba6-8cf6-a79471957db1.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-cd9e0ef2-13b4-4718-955d-6b29a7973e1a.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-88993c22-49eb-4453-a0d9-8e21849fe037.jpg'
    ],
    features: ['Waterproof hot-melt gluing', 'Zero-chipping cutting lines', '0.4mm to 3.0mm edge strips'],
  },
  {
    id: 'srv-03',
    title: 'Interior Turnkey Fit-Outs',
    category: 'Interiors',
    description: 'Our team executes full installation of kitchens, walk-in closets, boardrooms, and office partitions directly at your corporate premises or residential units.',
    images: [
      'https://cdn.phototourl.com/free/2026-07-10-27e6a370-eacf-4f65-b58d-b0645f61b031.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-f072d31e-0672-4237-909c-092f44affd27.jpg'
    ],
    features: ['Professional carpentry teams', 'Perfect horizontal leveling', 'Staging & fast assembly'],
  },
  {
    id: 'srv-04',
    title: 'Bulk Institutional Supplies',
    category: 'Sourcing & Supply',
    description: 'We import and distribute bulk wood-manufactured stationery, security locks, PPE safety apparel, and building hardware directly to corporate and government institutions.',
    images: [
      'https://cdn.phototourl.com/free/2026-07-10-0c070bcf-dbf2-476d-88ee-13153618c3d0.jpg'
    ],
    features: ['Direct factory relationships', 'Consistent stock availability', 'Compliance with Zambian standards'],
    bulkItems: [
      {
        name: 'Wood Stationery & Reams',
        description: 'Premium beechwood rulers, wooden pencils, desktop organizers, and fine paper.',
        image: woodenStationeryImage
      },
      {
        name: 'Bulk Security Locks',
        description: 'Heavy-duty brass padlocks, solid deadbolts, and door handles.',
        image: securityLocksImage
      },
      {
        name: 'Heavy PPE & Uniforms',
        description: 'Yellow hard hats, reflective safety vests, and industrial work gloves.',
        image: safetyPpeImage
      }
    ]
  }
];

export const STRATEGY_INFOGRAPHICS = [
  {
    id: 'strat-01',
    title: 'Direct Sourcing Advantage',
    subtitle: 'Direct imports bypassing intermediaries.',
    description: 'We source wood panels, hardware, stationery, and raw materials directly from global manufacturers. This lets us guarantee quality and provide unmatched wholesale pricing.',
    icon: 'Layers',
    color: 'from-amber-700 to-amber-900',
  },
  {
    id: 'strat-02',
    title: 'Professional Board Processing',
    subtitle: 'State-of-the-art machinery and processing yard.',
    description: 'We cut panels with strict tolerances and edge-bend them with hot PUR glue. This blocks humidity entirely, preventing warping or swelling over years of heavy use.',
    icon: 'Wrench',
    color: 'from-amber-600 to-orange-700',
  },
  {
    id: 'strat-03',
    title: 'Rigid Quality Control',
    subtitle: '100% certified and fully compliant sourcing.',
    description: 'From PACRA and Zambia Revenue Authority (ZRA) clearance to NAPSA compliance and ZPPA registrations, we ensure every corporate supply contract is legally flawless and highly certified.',
    icon: 'ShieldCheck',
    color: 'from-stone-700 to-amber-850',
  },
];

export const productsData: Product[] = [
  {
    id: 'prod-16',
    name: 'Melamine board',
    category: 'Wood Boards & Panels',
    subCategory: 'Melamine board',
    shortDesc: 'Double-sided Melamine laminated board with a moisture-resistant particle core, perfect for modern cabinetry.',
    fullDesc: 'Our premium Melamine boards feature a high-density wood particle or MDF core, covered on both sides with hard-wearing resin-infused decorative paper. It provides a highly durable, hygienic, and easy-to-clean surface ideal for kitchens, wardrobes, and modular shelving.',
    image: 'https://cdn.phototourl.com/free/2026-07-10-93996190-4b12-446e-8919-37a949ed68b0.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-10-d03c50c7-e2cf-48cd-8c97-dd3ccedbb845.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-929b5358-a268-489e-94eb-650c4857d1a0.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-504e7c68-e70c-4c94-aebe-a3617c5c52b2.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-b8035572-335a-4593-a52d-272db7040a05.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-0d99b3db-9421-4400-9269-0b6eace28fa8.jpg'
    ],
    features: [
      'Pre-finished, scratch-resistant decorative face',
      'Dual-sided uniform laminate finish',
      'Extremely high resistance to staining and moisture',
      'Perfect for clean, contemporary modular designs'
    ],
    specifications: [
      {
        label: 'Standard Size',
        value: '2750 x 1830 mm'
      },
      {
        label: 'Thickness Option',
        value: '16 mm / 18 mm'
      },
      {
        label: 'Core Material',
        value: 'High-Density Particleboard or MDF'
      },
      {
        label: 'Finish Variety',
        value: 'Matte, Gloss, Textured Wood-Grain'
      }
    ],
    applications: [
      'Kitchen cabinets and shelves',
      'Fitted bedroom wardrobes',
      'Office workstation partitions',
      'Modern sideboards and vanities'
    ],
    isFeatured: true
  },
  {
    id: 'prod-02',
    name: 'Laminated MDF Boards',
    category: 'Wood Boards & Panels',
    subCategory: 'Laminated MDF Boards',
    shortDesc: 'Premium double-sided melamine laminated MDF boards presenting spectacular wood-grain and solid color textures.',
    fullDesc: 'Double-sided laminated MDF boards engineered using a raw MDF substrate fused with decorative, resin-impregnated papers under thermal pressure. Designed to deliver an exceptionally durable, scratch-resistant face that stands up to heavy everyday wear in kitchens and corporate fit-outs.',
    image: 'https://cdn.phototourl.com/free/2026-07-14-aa157a95-659c-4bf4-a804-41efd0abda8b.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-14-aa157a95-659c-4bf4-a804-41efd0abda8b.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-3b040c3a-225b-43ed-ad19-1c5445fd5ed5.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-d7ccf44e-0854-44e8-9237-74d641be341f.jpg'
    ],
    features: [
      'Fused double-sided melamine laminate overlay',
      'Scratch, heat, stain, and moisture-resistant surface',
      'Wide choice of premium wood-grains and solid gloss colors',
      'Easy to wipe clean and maintain'
    ],
    specifications: [
      {
        label: 'Standard Dimensions',
        value: '2750 x 1830 mm'
      },
      {
        label: 'Thickness',
        value: '16 mm / 18 mm'
      },
      {
        label: 'Base Substrate',
        value: 'MDF Core (E1 Standard)'
      },
      {
        label: 'Finish Texture',
        value: 'Super-Gloss, Textured Wood-Grain, Matte'
      }
    ],
    applications: [
      'Kitchen cabinetry faces',
      'Fitted bedroom closets',
      'Office workspace partitions',
      'Modern reception counters'
    ],
  },
  {
    id: 'prod-18',
    name: 'Quartz',
    category: 'Wood Boards & Panels',
    subCategory: 'Quartz Countertops',
    shortDesc: 'Premium engineered quartz stone slabs with flawless hardness, perfect for kitchen and vanity countertops.',
    fullDesc: 'Our high-grade engineered Quartz surfaces are made by combining 93% natural crushed quartz stone crystals with 7% polymer resins. This process yields a completely non-porous, highly scratch-resistant, and stain-proof slab that offers unparalleled luxury and service life for interior surfaces.',
    image: 'https://cdn.phototourl.com/free/2026-07-10-fe00349c-6e33-4650-be62-8a241ac9233b.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-10-1e752e8d-2354-4380-bfec-5df19e593f03.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-94d4f1a5-efb6-41b4-9d93-fc0f89bb2a83.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-d937267f-b040-46dc-b4ba-0b19bfa77a09.jpg'
    ],
    features: [
      'Extremely hard surface (Mohs hardness scale 7)',
      'Completely non-porous: naturally resists bacteria and stains',
      'Requires zero sealing or annual maintenance polishing',
      'Excellent resistance to kitchen heat and impacts'
    ],
    specifications: [
      {
        label: 'Slab Sizing',
        value: '3200 x 1600 mm (Jumbo Slab)'
      },
      {
        label: 'Thicknesses Available',
        value: '20 mm / 30 mm'
      },
      {
        label: 'Quartz Content',
        value: '93% Pure Natural Quartz Crystal'
      },
      {
        label: 'Density Rating',
        value: '2.4 g/cm³'
      }
    ],
    applications: [
      'Kitchen worktops and island countertops',
      'Bathroom vanity units',
      'Bar counters and tabletop fittings',
      'Luxury floor and stair tread tiles'
    ],
    isFeatured: true
  },
  {
    id: 'prod-01',
    name: 'MDF Boards',
    category: 'Wood Boards & Panels',
    subCategory: 'MDF Boards',
    shortDesc: 'Premium raw medium-density fiberboards with perfectly smooth faces, ideal for high-precision carpentry.',
    fullDesc: 'Our Medium Density Fiberboard (MDF) is manufactured by compressing fine timber fibers mixed with high-strength resins under high heat and pressure. It has a uniform density profile, presenting zero grain or knots. Perfect for automated CNC routing, furniture backs, and high-gloss spray paint finishes.',
    image: 'https://cdn.phototourl.com/free/2026-07-10-c65859ec-51f6-43c0-817c-178c85d5873b.png',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-10-4af2fa4f-d6d5-43b0-82a1-1f3afed2dfd2.jpg'
    ],
    features: [
      'Smooth and uniform surface',
      'Excellent machinability and screw-holding strength',
      'Easy to paint, laminate, or veneer',
      'Stable and durable'
    ],
    specifications: [
      {
        label: 'Available Sizes',
        value: '2750 x 1830 MM (Custom sizes available on request)'
      },
      {
        label: 'Available Thicknesses',
        value: '08 mm, 09mm, 12mm, 16mm, 18mm, 22mm'
      }
    ],
    applications: [
      'Furniture manufacturing',
      'Cabinetry and shelving',
      'Wall panelling and partitions',
      'Interior design elements'
    ],
    isFeatured: true
  },
  {
    id: 'prod-03',
    name: 'PlyWood',
    category: 'Wood Boards & Panels',
    subCategory: 'PlyWood',
    shortDesc: 'Calibrated multi-ply hardwood plywood sheets bonded with durable structural grade adhesive.',
    fullDesc: 'Our structural-grade plywood consists of cross-laminated wood veneers bonded with high-grade, durable adhesives. This perpendicular alignment creates incredible load-bearing strength and high resistance to screw-pullout, making it the definitive choice for structural joinery.',
    image: 'https://cdn.phototourl.com/free/2026-07-10-32e9b491-9d84-4e46-ba67-0b8edeb519eb.png',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-10-335f8fb3-1ab7-4001-9788-42bbbcc321de.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-2bd6139e-2112-44b8-9b71-d94b35e8254d.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-12a232c0-054d-4587-b71f-e837b79bc99d.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-96fdfe5c-a080-474e-94fb-72f9722c4cc1.jpg'
    ],
    features: [
      'Multi-layer cross-laminated construction for strength',
      'Calibrated for perfectly uniform thickness',
      'Excellent fastener and screw-holding power',
      'Resistant to shrinkage, warping, and dimensional swelling'
    ],
    specifications: [
      {
        label: 'Dimensions',
        value: '2440 x 1220 mm'
      },
      {
        label: 'Thickness Range',
        value: '4mm, 6mm, 9mm, 12mm, 15mm, 18mm, 21mm'
      },
      {
        label: 'Veneer Material',
        value: 'Tropical Mixed Hardwood'
      },
      {
        label: 'Glue Grade',
        value: 'MR / Melamine Moisture-Resistant'
      }
    ],
    applications: [
      'Furniture cabinet backing',
      'Underlayment flooring',
      'Durable shelving frameworks',
      'Packaging crates and boxes'
    ],
    isFeatured: true
  },
  {
    id: 'prod-09',
    name: 'Furniture and interior',
    category: 'Furniture',
    subCategory: 'Furniture and interior',
    shortDesc: 'Heavy-duty corporate office desks, institutional double-student tables, fitted wardrobes, and custom board desks.',
    fullDesc: 'Designed to survive decades of continuous use in schools, colleges, corporate offices, and institutions. Built using high-density melamine boards combined with heavy-duty tubular steel legs and solid, robust fittings.',
    image: 'https://cdn.phototourl.com/free/2026-07-11-9479dce2-45d0-4bd8-88b8-71daa6412050.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-11-9479dce2-45d0-4bd8-88b8-71daa6412050.jpg',
      'https://cdn.phototourl.com/free/2026-07-10-880480cb-302d-4880-93c0-9d45ade83c28.jpg',
      'https://placehold.co/600x400/eeeeee/999999?text=Kitchen+Cabinets',
      'https://placehold.co/600x400/eeeeee/999999?text=Office+Desks'
    ],
    features: [
      'Assembled using 25mm thick moisture-proof melamine panels',
      'Solid steel frames with industrial rust-proof paint overlays',
      'Child-safe rounded desk corners for institutional safety',
      'Assembled by our expert carpentry teams at your premises'
    ],
    specifications: [
      {
        label: 'Range',
        value: 'Executive Desks, Boardroom Desks, Double School Desks'
      },
      {
        label: 'Joint Fittings',
        value: 'Heavy Ball-bearing Fasteners & Soft-Close Hydraulics'
      },
      {
        label: 'Customization',
        value: 'Made-to-order sizing lists'
      },
      {
        label: 'Load Limit',
        value: 'Over 150 kg structural weight capacity'
      }
    ],
    applications: [
      'School classroom fit-outs',
      'Corporate boardrooms & workstations',
      'Master bedroom closet fittings'
    ],
    isFeatured: true
  },
  {
    id: 'prod-10',
    name: 'Doors',
    category: 'Doors',
    subCategory: 'Doors',
    shortDesc: 'Solid core engineered timber entry doors designed to prevent moisture warping.',
    fullDesc: 'Durable architectural solid core doors faced with beautiful real wood-grain veneer sheets. Features an internal blockboard block core that blocks ambient noise completely and offers dependable, high-security structural integrity.',
    image: 'https://cdn.phototourl.com/free/2026-07-14-4b8adf60-a060-450f-9766-b2af980511d3.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-14-93b353b3-b6c8-46b6-ade3-d37aed95015a.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-afdafdd3-f8a3-470b-b288-5040e3d7b30b.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-d1afd040-9659-45c6-8e97-5c6cc96c120e.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-0402ee58-b20f-40ed-bd68-06085b1b8d3d.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-2af2f329-3377-44b0-ae76-c99d83bcb343.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-3737f3aa-6b7b-4627-b9df-1ec5fac20f67.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-aec0bec3-5d7b-4577-82db-1c1c2a742c2e.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-dd4bf6e8-0651-451f-967a-cabbeb3f4e9c.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-4b8adf60-a060-450f-9766-b2af980511d3.jpg'
    ],
    features: [
      'Engineered wood blocks build a heavy solid core',
      'Pre-finished water-resistant veneer outer layers',
      'Exceptional acoustic noise dampening properties',
      'Zero core voids prevents door sagging'
    ],
    specifications: [
      {
        label: 'Standard Sizes',
        value: '2032 x 813 x 40 mm / 2032 x 1000 x 44 mm'
      },
      {
        label: 'Weight',
        value: '35 - 45 kg (Solid Core)'
      },
      {
        label: 'Core Wood',
        value: 'Kiln-Dried Pine Blockboard Core'
      },
      {
        label: 'Skin Facing',
        value: 'American Walnut, Red Oak, Pine Veneers'
      }
    ],
    applications: [
      'Main office entry doors',
      'Classrooms & study halls',
      'Hotel room security doors',
      'Residential exterior entrances'
    ],
    isFeatured: true
  },
  {
    id: 'prod-13',
    name: 'School Furniture',
    category: 'Furniture',
    subCategory: 'School Furniture',
    shortDesc: 'Durable school desks and institutional furniture designed to survive decades of continuous use.',
    fullDesc: 'A premium range of school furniture featuring solid cores constructed of edge-bonded kiln-dried pine blocks, faced on both sides with high-grade hardwood veneers. Combines light weight with high structural stiffness and outstanding resistance to sagging.',
    image: 'https://cdn.phototourl.com/free/2026-07-09-58459c6a-c8f3-4717-ab4d-d23d7edea158.jpg',
    detailImages: [
      'https://cdn.phototourl.com/free/2026-07-14-8e600d99-2a83-4c7b-b9cc-ec7d63c1e567.jpg',
      'https://cdn.phototourl.com/free/2026-07-14-965d8078-01c1-4933-8088-4fd067c5ec5d.jpg'
    ],
    features: [
      'Extremely high load strength with low weight profile',
      'Resists sagging over wide open spans',
      'Child-safe rounded desk corners for institutional safety',
      'Easy to laminate or veneer face'
    ],
    specifications: [
      {
        label: 'Dimensions',
        value: 'Custom configurations'
      },
      {
        label: 'Thickness',
        value: '18 mm / 21 mm'
      },
      {
        label: 'Core Assembly',
        value: 'Seasoned Pine Timber Strips'
      },
      {
        label: 'Face Veneers',
        value: 'Sanded Poplar / Hardwood skins'
      }
    ],
    applications: [
      'School classroom fit-outs',
      'University study halls',
      'Heavy-duty workstation counters',
      'Interior office partitioning'
    ],
    isFeatured: false
  },
  {
    id: 'prod-19',
    name: 'Fibre boards',
    category: 'Wood Boards & Panels',
    subCategory: 'Fibre boards',
    shortDesc: 'High-density fibreboard (HDF) and softboards for acoustic insulation, pinning boards, and backing sheets.',
    fullDesc: 'Our engineered Fibre Boards range includes High-Density Fibreboard (HDF) for high-impact backing panels and soft acoustic panels. They are produced by combining wood fibres under heat and intense pressure, delivering uniform structural integrity and sound insulation.',
    image: 'https://cdn.phototourl.com/free/2026-07-14-f1040c01-de4a-4fbe-8303-7736b0fff814.jpg',
    features: [
      'High density and stability to prevent warping or bowing',
      'Excellent acoustic absorption and thermal resistance properties',
      'Perfectly smooth flat surface suitable for veneers or laminate overlays',
      'Eco-friendly panels compressed from premium recycled wood fibres'
    ],
    specifications: [
      {
        label: 'Standard Dimensions',
        value: '2440 x 1220 mm'
      },
      {
        label: 'Thickness Range',
        value: '3.0 mm (HDF Backing) to 12.0 mm (Softboard)'
      },
      {
        label: 'Density',
        value: '800 - 900 kg/m³ (HDF)'
      },
      {
        label: 'Formaldehyde Emission',
        value: 'E1 Safety Certified'
      }
    ],
    applications: [
      'Acoustic wall and ceiling insulation panels',
      'Wardrobe and bookcase backings',
      'Educational pin boards and noticeboards',
      'Under-floor sound-dampening insulation'
    ],
    isFeatured: true
  }
];

export const projectShowcase: Project[] = [
  {
    id: 'proj-01',
    title: 'Modern Kitchen Cabinet Fitting',
    category: 'Kitchen Installations',
    location: 'Lusaka, Zambia',
    year: '2025',
    image: 'https://cdn.phototourl.com/member/2026-07-10-01660fcd-da12-4cdd-a904-7a2c0622639f.jpg',
    description: 'A beautiful kitchen we designed and put together using our waterproof melamine boards.',
    productsUsed: ['Super-Gloss Melamine Board', 'Soft-Close Cabinet Hinges'],
  },
  {
    id: 'proj-02',
    title: 'Clean Built-In Wardrobes',
    category: 'Wardrobes & Closets',
    location: 'Ndola, Zambia',
    year: '2025',
    image: 'https://img.sanishtech.com/u/b5d133a539c232f265cb6c9bde004dc0.jpg',
    description: 'Large cupboards set up in 16 new homes using our strong, long-lasting wood sheets.',
    productsUsed: ['Super-Gloss Melamine Board', 'Soft-Close Cabinet Hinges'],
  },
  {
    id: 'proj-03',
    title: 'Beautiful Office Furniture',
    category: 'Offices & Custom Joinery',
    location: 'Kitwe, Zambia',
    year: '2024',
    image: 'https://cdn.phototourl.com/free/2026-07-09-4f4529c5-50bb-4cb5-b303-d1f503a221a2.jpg',
    description: 'Wooden tables, wall designs, and doors we made for a modern office building.',
    productsUsed: ['High-Density MDF Raw Board', 'Vanguard Engineered Solid Timber Door'],
  },
  {
    id: 'proj-04',
    title: 'Custom Pine Wood Dining Sets',
    category: 'Offices & Custom Joinery',
    location: 'Livingstone, Zambia',
    year: '2025',
    image: 'https://cdn.phototourl.com/free/2026-07-09-58459c6a-c8f3-4717-ab4d-d23d7edea158.jpg',
    description: 'Handmade dining tables and chairs we built using our clean pine wood boards.',
    productsUsed: ['Natural Wood Veneer MDF Board'],
  },
  {
    id: 'proj-05',
    title: 'Modern Wall Panel Fitting',
    category: 'Offices & Custom Joinery',
    location: 'Lusaka, Zambia',
    year: '2025',
    image: 'https://cdn.phototourl.com/free/2026-07-09-633032c5-39f8-4614-a219-ecc76208e4d9.jpg',
    description: 'Beautiful wood walls and counters we set up for a luxury hotel reception.',
    productsUsed: ['Natural Wood Veneer MDF Board'],
  },
  {
    id: 'proj-06',
    title: 'Luxury Home Closet Setup',
    category: 'Wardrobes & Closets',
    location: 'Kitwe, Zambia',
    year: '2025',
    image: 'https://cdn.phototourl.com/free/2026-07-09-e37e1b7d-b947-41e5-a9c4-5b7ecf7af8c6.jpg',
    description: 'Elegant master walk-in closets with smooth drawers and bright lights.',
    productsUsed: ['Super-Gloss Melamine Board'],
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    clientName: 'Mwamba Mulenga',
    role: 'Principal Architect',
    company: 'Mulenga & Partners Design',
    country: 'Zambia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'Smart Age has been our absolute first choice for melamine boards and custom wood panels. Their edge bending is extremely clean, completely sealing out humidity, which is vital for kitchen installations in our climate.',
    rating: 5,
  },
  {
    id: 'test-02',
    clientName: 'Nesta Chibesa',
    role: 'Procurement Director',
    company: 'SADC Builders Consortium',
    country: 'Zambia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'We rely on SAIL for double school desks, boardroom tables, and protective gear. Their compliance credentials are flawless—making public tenders and audits incredibly smooth to navigate.',
    rating: 5,
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-01',
    question: 'Where are your distribution depots located?',
    answer: 'Our main warehouses, wood processing yard, and consultation showrooms are located in Lusaka and Kitwe, Zambia, allowing efficient logistics and distribution across the SADC region.',
    category: 'General'
  },
  {
    id: 'faq-02',
    question: 'Do you offer custom sizing cutting and edge-banding services?',
    answer: 'Yes! You can send us your cabinetry dimensions, blueprint layouts, or cutting lists. We will process, cut, and edge-bend your boards with extreme millimeter-level accuracy and seal them perfectly against moisture.',
    category: 'Products'
  },
  {
    id: 'faq-03',
    question: 'Are your timber boards compliant with quality standards?',
    answer: 'Absolutely. We source strictly from certified, eco-friendly forest plantations that supply low-emission E1-grade cores. All imported shuttering ply, MDF, and marine board hold certified density ratings.',
    category: 'Quality'
  },
  {
    id: 'faq-04',
    question: 'How do you handle bulk institutional and public tenders?',
    answer: 'We hold fully verified PACRA registration, Tax Clearance certificates from the Zambia Revenue Authority (ZRA), NAPSA compliance certification, and ZPPA registration. This enables us to submit fully compliant commercial bids instantly.',
    category: 'Sourcing'
  }
];

export const companyTimeline = [
  {
    year: '2016',
    title: 'Inception & PACRA Approval',
    description: 'Incorporated as Smart Age Innovations Limited, specializing in importing raw timber panels and distributing building materials to local carpentry shops.',
    achievement: 'Official PACRA registration completed'
  },
  {
    year: '2019',
    title: 'Zambian Yard Expansion',
    description: 'Established our first high-speed wood cutting and edge-bending facility, catering directly to residential contractors and office developers.',
    achievement: 'Procured professional panel saws and PUR edgebanders'
  },
  {
    year: '2022',
    title: 'Institutional Sourcing Hub',
    description: 'Diversified operations into manufacturing school desks, bulk office workstations, supplying high-quality stationery, hardware tools, and safety overalls (PPE).',
    achievement: 'Approved as a key supplier for public and municipal tenders'
  },
  {
    year: '2025',
    title: 'Eco-Sourced Initiative',
    description: 'Implemented 100% certified supply-chain auditing, ensuring all raw timber, MDF, and Melamine panels are sourced from sustainable forest plantations.',
    achievement: 'Certified low-emission E1 timber partner'
  }
];

export const complianceCertificates = [
  {
    id: 'cert-01',
    title: 'Certificate of Incorporation',
    authority: 'PACRA (Patents and Companies Registration Agency)',
    docNumber: 'No. 120160004928',
    status: 'Active & Fully Verified',
    description: 'Confirms Smart Age Innovations Limited as a legally registered corporate entity in the Republic of Zambia.',
    validUntil: 'Lifetime Registration'
  },
  {
    id: 'cert-02',
    title: 'Tax Clearance Certificate',
    authority: 'Zambia Revenue Authority (ZRA)',
    docNumber: 'TPIN: 1003789420',
    status: 'Compliant',
    description: 'Verifies our perfect status with local corporate taxes, customs clearances, and regional import duties.',
    validUntil: 'Annual Renewal Active'
  },
  {
    id: 'cert-03',
    title: 'NAPSA Compliance Certificate',
    authority: 'National Pension Scheme Authority',
    docNumber: 'NPC-2026-9874',
    status: 'Active',
    description: 'Certifies that all employees, carpentry staff, and site installers are fully pension-insured under national regulations.',
    validUntil: 'Current Year Active'
  },
  {
    id: 'cert-04',
    title: 'ZPPA Supplier Registration',
    authority: 'Zambia Public Procurement Authority',
    docNumber: 'ZPPA-REG-2026-441',
    status: 'Registered',
    description: 'Enables our direct participation in bulk public tenders, municipal furnishings, and educational school supply contracts.',
    validUntil: 'Current Year Active'
  }
];

export const downloadResources = [
  {
    id: 'dl-profile',
    title: 'SAIL Company Profile',
    size: '4.2 MB',
    format: 'PDF',
    description: 'A comprehensive overview of our capabilities, board sizing services, and organizational supply structures.'
  },
  {
    id: 'dl-furn-cat',
    title: 'Furniture & Interiors Catalog',
    size: '8.7 MB',
    format: 'PDF',
    description: 'Browse our full collection of executive office workspaces, double school desks, closets, and modern custom kitchens.'
  },
  {
    id: 'dl-panels-cat',
    title: 'Wood Boards & Panels Catalog',
    size: '5.1 MB',
    format: 'PDF',
    description: 'Detailing sheet specifications for gloss Melamine, natural Wood Veneers, raw MDF, and marine Plywood.'
  },
  {
    id: 'dl-stat-cat',
    title: 'Stationery & Institutional Catalog',
    size: '3.3 MB',
    format: 'PDF',
    description: 'View corporate copier paper, school writing supplies, and daily office consumable packs.'
  },
  {
    id: 'dl-hard-cat',
    title: 'Hardware & PPE Catalog',
    size: '6.4 MB',
    format: 'PDF',
    description: 'Includes structural hinges, hand tools, power circular saws, and industrial reflective overalls.'
  },
  {
    id: 'dl-compliance-docs',
    title: 'PACRA, ZRA & NAPSA Verification Suite',
    size: '2.8 MB',
    format: 'PDF',
    description: 'Compliant portfolio containing scanned legal registration papers for audit and tender evaluation teams.'
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Lusaka',
    country: 'Zambia',
    address: 'plot 3169, Mukwa Road, Light industrial Area, Buseko, Lusaka',
    phone: '+260 978708354 | +260 950311205',
    email: 'enquiries@sailltd.com',
    workingHours: 'Mon - Fri: 08:00 - 17:00, Sat: 08:00 - 13:00'
  }
];

import { OfficeLocation } from '../types';
export const faqList = faqs;
