export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  category: 'swag-bags' | 'duffle-bags' | 'rear-wheel-bags';
  categoryLabel: string;
  categoryPath: string;
  line: 'ROLL' | 'HAUL' | 'DUMP';
  size: string;
  name: string;
  sku: string;
  title: string;
  meta: string;
  h1: string;
  intro: string;
  whatFor: string;
  whatsDifferent: string[];
  specs: Spec[];
  weightKg: number;
  material: string;
  color: string;
};

const fabric = '500D PU-coated nylon oxford';
const colorDesc = 'Blackout topographic';

const rollWhatsDifferent = [
  'Oversized by design, not by accident',
  'Mesh vents under storm hoods at both ends',
  "YKK #10 VISLON with a full storm flap so the zip can't eat the canvas",
];

export const products: Product[] = [
  {
    slug: 'roll-900',
    category: 'swag-bags',
    categoryLabel: 'Swag Bags',
    categoryPath: '/gear/swag-bags/',
    line: 'ROLL',
    size: '900',
    name: 'ROLL 900 Swag Transit Bag',
    sku: 'HR-ROLL-900',
    title: 'ROLL 900 Swag Transit Bag — Single Swags | Hard Routine',
    meta: 'Oversized vented transit bag for single swags up to 900 mm. YKK #10 zip, mesh vents, 113 L. Not yet available — register interest.',
    h1: 'ROLL 900 — Swag transit bag for single swags',
    intro: 'A vented transit bag for single swags up to 900 mm rolled. Cut oversized so a wet swag goes in fast, with mesh vents at both ends so it dries on the drive home instead of stewing.',
    whatFor: "Single swags — Darche Lone Wolf, Oztrail Mitchell, Kings Escape and equivalents. Also suits a rolled awning, a small tent, or bedding. The 380 mm internal diameter takes a swag with a 70 mm mattress rolled loosely, which is what happens when you're packing in the rain.",
    whatsDifferent: rollWhatsDifferent,
    weightKg: 0.9,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Internal diameter', value: '380 mm' },
      { label: 'Internal length', value: '1,000 mm' },
      { label: 'Capacity', value: '113 L' },
      { label: 'Empty weight', value: '0.9 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way' },
      { label: 'Vent panels', value: '2' },
      { label: 'Webbing', value: '38 mm UV-stabilised polyester' },
    ],
  },
  {
    slug: 'roll-1200',
    category: 'swag-bags',
    categoryLabel: 'Swag Bags',
    categoryPath: '/gear/swag-bags/',
    line: 'ROLL',
    size: '1200',
    name: 'ROLL 1200 Swag Transit Bag',
    sku: 'HR-ROLL-1200',
    title: 'ROLL 1200 Swag Transit Bag — Double Swags | Hard Routine',
    meta: 'Oversized vented transit bag for double swags up to 1200 mm. YKK #10 zip, mesh vents, 207 L. Not yet available — register interest.',
    h1: 'ROLL 1200 — Swag transit bag for double swags',
    intro: 'A vented transit bag for double swags up to 1200 mm rolled. The size most people need, cut with enough room to roll a wet swag badly and still get it closed.',
    whatFor: 'Double swags — Darche Dusk to Dawn, Kings Big Daddy, Oztrail Mitchell Double and equivalents. At 450 mm internal diameter it also swallows a 270-degree awning, a folded annexe wall, or two single swags.',
    whatsDifferent: rollWhatsDifferent,
    weightKg: 1.2,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Internal diameter', value: '450 mm' },
      { label: 'Internal length', value: '1,300 mm' },
      { label: 'Capacity', value: '207 L' },
      { label: 'Empty weight', value: '1.2 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way' },
      { label: 'Vent panels', value: '2' },
      { label: 'Webbing', value: '38 mm UV-stabilised polyester' },
    ],
  },
  {
    slug: 'roll-1400',
    category: 'swag-bags',
    categoryLabel: 'Swag Bags',
    categoryPath: '/gear/swag-bags/',
    line: 'ROLL',
    size: '1400',
    name: 'ROLL 1400 Swag Transit Bag',
    sku: 'HR-ROLL-1400',
    title: 'ROLL 1400 Swag Transit Bag — King Double Swags | Hard Routine',
    meta: 'Oversized vented transit bag for king double swags up to 1400 mm. YKK #10 zip, mesh vents, 295 L. Not yet available — register interest.',
    h1: 'ROLL 1400 — Swag transit bag for king double swags',
    intro: 'The largest in the range. A vented transit bag for king double swags up to 1400 mm rolled, with 500 mm of internal diameter for thick mattresses and cold-weather bedding.',
    whatFor: 'King doubles and any swag with a 100 mm or thicker mattress. Also the right size for a rolled 270-degree awning with walls attached, or a rooftop tent cover and annexe together.',
    whatsDifferent: rollWhatsDifferent,
    weightKg: 1.4,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Internal diameter', value: '500 mm' },
      { label: 'Internal length', value: '1,500 mm' },
      { label: 'Capacity', value: '295 L' },
      { label: 'Empty weight', value: '1.4 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way' },
      { label: 'Vent panels', value: '2' },
      { label: 'Webbing', value: '38 mm UV-stabilised polyester' },
    ],
  },
  {
    slug: 'haul-40',
    category: 'duffle-bags',
    categoryLabel: 'Duffle Bags',
    categoryPath: '/gear/duffle-bags/',
    line: 'HAUL',
    size: '40',
    name: 'HAUL 40 Duffle Bag',
    sku: 'HR-HAUL-40',
    title: 'HAUL 40 Duffle Bag — 40L Water-Resistant Touring Duffle | Hard Routine',
    meta: '40 litre coated nylon duffle. Lighter than canvas, won’t mildew, bone-lined interior. 0.8 kg empty. Not yet available — register interest.',
    h1: 'HAUL 40 — 40 litre touring duffle',
    intro: "A 40 litre duffle in coated technical nylon. Enough for one person for a long weekend, light enough to carry properly, and it won't hold water or mildew if you pack it damp.",
    whatFor: 'Weekend trips, a change of clothes in the back of the ute, or as a cabin bag. At 500 × 300 × 270 mm it fits most airline carry-on limits, though check your carrier.',
    whatsDifferent: [
      '0.8 kg empty against roughly 1.5 kg for canvas equivalent',
      'Bone lining so you can find things in low light',
      'Welded double-layer base, the panel that fails first on every duffle',
    ],
    weightKg: 0.8,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Capacity', value: '40 L' },
      { label: 'Dimensions', value: '500 × 300 × 270 mm' },
      { label: 'Empty weight', value: '0.8 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Base', value: 'Double-layer, welded' },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way, storm-flapped' },
      { label: 'Carry', value: 'Grab handles + removable shoulder strap' },
      { label: 'Interior', value: 'Bone lining — you can see what’s in it' },
    ],
  },
  {
    slug: 'haul-70',
    category: 'duffle-bags',
    categoryLabel: 'Duffle Bags',
    categoryPath: '/gear/duffle-bags/',
    line: 'HAUL',
    size: '70',
    name: 'HAUL 70 Duffle Bag',
    sku: 'HR-HAUL-70',
    title: 'HAUL 70 Duffle Bag — 70L Heavy Duty Touring Duffle | Hard Routine',
    meta: '70 litre coated nylon duffle, the size most people need. Water resistant, mildew-proof, 1.1 kg empty. Not yet available — register interest.',
    h1: 'HAUL 70 — 70 litre touring duffle',
    intro: "Seventy litres is the size most people actually want. A week of clothing for one, a weekend for two, and still light enough to lift onto a roof rack with one hand.",
    whatFor: "The default. A week's touring for one person, or a weekend for a couple. Fits across most drawer systems and sits neatly in a canopy without wasting height.",
    whatsDifferent: [
      '1.1 kg empty against roughly 2 kg for canvas equivalent',
      'Bone lining so you can find things in low light',
      'Welded double-layer base, the panel that fails first on every duffle',
    ],
    weightKg: 1.1,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Capacity', value: '70 L' },
      { label: 'Dimensions', value: '650 × 350 × 310 mm' },
      { label: 'Empty weight', value: '1.1 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Base', value: 'Double-layer, welded' },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way, storm-flapped' },
      { label: 'Carry', value: 'Grab handles + removable shoulder strap' },
      { label: 'Interior', value: 'Bone lining — you can see what’s in it' },
    ],
  },
  {
    slug: 'haul-100',
    category: 'duffle-bags',
    categoryLabel: 'Duffle Bags',
    categoryPath: '/gear/duffle-bags/',
    line: 'HAUL',
    size: '100',
    name: 'HAUL 100 Duffle Bag',
    sku: 'HR-HAUL-100',
    title: 'HAUL 100 Duffle Bag — 100L Large Touring Duffle | Hard Routine',
    meta: '100 litre coated nylon duffle for extended touring. Water resistant, mildew-proof, 1.4 kg empty. Not yet available — register interest.',
    h1: 'HAUL 100 — 100 litre touring duffle',
    intro: "A hundred litres for extended trips and shared gear. Bedding, jackets and a fortnight of clothing in one bag, in a fabric that won't gain three kilos when it rains.",
    whatFor: 'Extended touring, family trips, and bulky low-density gear — sleeping bags, puffer jackets, bedding. The size where canvas becomes genuinely unpleasant to lift.',
    whatsDifferent: [
      '1.4 kg empty against well over 2.5 kg for canvas equivalent',
      'Bone lining so you can find things in low light',
      'Welded double-layer base, the panel that fails first on every duffle',
    ],
    weightKg: 1.4,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Capacity', value: '100 L' },
      { label: 'Dimensions', value: '750 × 400 × 335 mm' },
      { label: 'Empty weight', value: '1.4 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Base', value: 'Double-layer, welded' },
      { label: 'Zip', value: 'YKK #10 VISLON, two-way, storm-flapped' },
      { label: 'Carry', value: 'Grab handles + removable shoulder strap' },
      { label: 'Interior', value: 'Bone lining — you can see what’s in it' },
    ],
  },
  {
    slug: 'dump-60',
    category: 'rear-wheel-bags',
    categoryLabel: 'Rear Wheel Bags',
    categoryPath: '/gear/rear-wheel-bags/',
    line: 'DUMP',
    size: '60',
    name: 'DUMP 60 Rear Wheel Bag',
    sku: 'HR-DUMP-60',
    title: 'DUMP 60 Rear Wheel Bag — 60L Spare Tyre Dirty Gear Bag | Hard Routine',
    meta: '60 litre spare wheel bag with welded liner and real drainage. 50 mm webbing, four anchor points, YKK #10 zip. Not yet available — register interest.',
    h1: 'DUMP 60 — 60 litre rear wheel bag',
    intro: "A sixty litre bag that mounts on your rear spare and holds everything you don't want inside the vehicle. Welded liner, four mesh-backed drains, and webbing that won't let go on corrugations.",
    whatFor: "Weekend and week-long touring in a wagon or dual cab. Takes a weekend's rubbish, wet towels and muddy boots with room left. Fits spare wheels from 16 to 18 inch with tyres up to 285 section width.",
    whatsDifferent: [
      '50 mm webbing across four anchor points — attachment is the number one reported failure in this category',
      'Removable welded TPU liner you can hose out',
      'Mesh-backed drain eyelets that let water out without letting flies in',
    ],
    weightKg: 1.3,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Capacity', value: '60 L' },
      { label: 'Dimensions', value: '550 × 600 × 180 mm' },
      { label: 'Empty weight', value: '1.3 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Liner', value: 'Welded TPU, removable, hoses out' },
      { label: 'Drainage', value: '4 mesh-backed eyelets' },
      { label: 'Zip', value: 'YKK #10 VISLON, storm-flapped' },
      { label: 'Mounting', value: '50 mm webbing, 4 points, steel cam buckles' },
      { label: 'Fits', value: '16–18″ wheels, tyres to 285 section' },
    ],
  },
  {
    slug: 'dump-90',
    category: 'rear-wheel-bags',
    categoryLabel: 'Rear Wheel Bags',
    categoryPath: '/gear/rear-wheel-bags/',
    line: 'DUMP',
    size: '90',
    name: 'DUMP 90 Rear Wheel Bag',
    sku: 'HR-DUMP-90',
    title: 'DUMP 90 Rear Wheel Bag — 90L Spare Tyre Dirty Gear Bag | Hard Routine',
    meta: '90 litre spare wheel bag for extended touring. Welded liner, six drains, 50 mm webbing on four anchor points. Not yet available — register interest.',
    h1: 'DUMP 90 — 90 litre rear wheel bag',
    intro: 'Ninety litres for extended touring and families. Big enough for recovery tracks, firewood and a week of rubbish, with six drains and a liner that hoses clean.',
    whatFor: "Long trips, remote touring and anyone carrying recovery boards. At 620 × 700 mm it takes a pair of recovery tracks flat, which is the load most bags in this category can't handle.",
    whatsDifferent: [
      '50 mm webbing across four anchor points — attachment is the number one reported failure in this category',
      'Removable welded TPU liner you can hose out',
      'Six mesh-backed drain eyelets that let water out without letting flies in',
    ],
    weightKg: 1.6,
    material: fabric,
    color: colorDesc,
    specs: [
      { label: 'Capacity', value: '90 L' },
      { label: 'Dimensions', value: '620 × 700 × 210 mm' },
      { label: 'Empty weight', value: '1.6 kg' },
      { label: 'Fabric', value: fabric },
      { label: 'Liner', value: 'Welded TPU, removable, hoses out' },
      { label: 'Drainage', value: '6 mesh-backed eyelets' },
      { label: 'Zip', value: 'YKK #10 VISLON, storm-flapped' },
      { label: 'Mounting', value: '50 mm webbing, 4 points, steel cam buckles' },
      { label: 'Fits', value: '16–18″ wheels, tyres to 285 section' },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export const relatedReadingByCategory: Record<Product['category'], { href: string; label: string }[]> = {
  'swag-bags': [
    { href: '/field-notes/why-swag-bags-fail/', label: 'Why swag bags fail, and what to look for in a replacement' },
    { href: '/field-notes/packing-up-wet/', label: 'How to pack up a wet swag without ruining it' },
    { href: '/field-notes/mould-on-canvas/', label: 'Getting mould out of canvas — and stopping it coming back' },
  ],
  'duffle-bags': [
    { href: '/field-notes/canvas-vs-nylon/', label: 'Canvas or nylon: which is actually better for touring gear?' },
    { href: '/field-notes/bone-lining/', label: 'Why we line every bag in bone, not black' },
  ],
  'rear-wheel-bags': [
    { href: '/field-notes/dirty-recovery-gear/', label: "How to store recovery gear after you've actually used it" },
    { href: '/field-notes/dust-and-zips/', label: 'Why dust kills zips, and what to specify instead' },
  ],
};

export const categoryLabels: Record<Product['category'], string> = {
  'swag-bags': 'Swag Bags',
  'duffle-bags': 'Duffle Bags',
  'rear-wheel-bags': 'Rear Wheel Bags',
};
