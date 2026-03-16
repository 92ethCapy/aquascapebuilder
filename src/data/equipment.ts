export interface RockType {
  id: string;
  name: string;
  image: string;
  alt: string;
  color: string;
  texture: string;
  bestStyles: string[];
  tip: string;
}

export interface LightProduct {
  id: string;
  brand: string;
  model: string;
  image: string;
  alt: string;
  gallery: string[];
  features: string[];
  bestFor: string;
}

export const ROCKS: RockType[] = [
  {
    id: "da-soi-cuoi",
    name: "Đá Sỏi Cuội",
    image: "/images/rocks/Dasoicuoi.JPEG",
    alt: "Pile of smooth, rounded river pebble stones in natural brown and gray tones",
    color: "Neutral brown & gray",
    texture: "Smooth, rounded",
    bestStyles: ["Nature", "Riverbed"],
    tip: "Layer different sizes along pathways to create a natural riverbed effect. Pairs beautifully with sand substrates.",
  },
  {
    id: "da-nham-xanh-sieu-van",
    name: "Đá Nham Xanh Siêu Vân",
    image: "/images/rocks/Danhamxanhsieuvan.JPEG",
    alt: "Angular dark lava stones with dramatic white mineral veins",
    color: "Dark green-black with white veins",
    texture: "Angular, heavily veined",
    bestStyles: ["Iwagumi", "Nature"],
    tip: "The bold white veining creates instant visual drama. Orient veins in the same direction across all stones for a cohesive geological look.",
  },
  {
    id: "da-den-gia-lai",
    name: "Đá Đen Gia Lai",
    image: "/images/rocks/Dadengialai.JPEG",
    alt: "Hand holding a porous black volcanic stone from Gia Lai with dramatic surface texture",
    color: "Deep black",
    texture: "Porous, volcanic",
    bestStyles: ["Nature", "Forest"],
    tip: "The porous surface is ideal for moss attachment — no thread needed. Beneficial bacteria also colonize the cavities quickly.",
  },
  {
    id: "da-da-voi",
    name: "Đá Đá Vôi",
    image: "/images/rocks/Dadavoi.JPEG",
    alt: "Cream-colored limestone rocks with natural cracks arranged on sandy ground near water",
    color: "Cream & warm beige",
    texture: "Smooth with natural fractures",
    bestStyles: ["Iwagumi", "Nature"],
    tip: "Limestone may raise KH and pH over time. Ideal for fish that prefer harder water — test regularly in soft-water setups.",
  },
  {
    id: "da-kep-kem",
    name: "Đá Kẽm",
    image: "/images/rocks/Dakepkem.JPEG",
    alt: "Dark glossy layered stones with smooth striated surfaces stacked on a metal surface",
    color: "Dark charcoal with metallic sheen",
    texture: "Layered, striated",
    bestStyles: ["Iwagumi", "Nature"],
    tip: "Stack layers to create dramatic cliff faces. The flat planes make it easy to build stable, tall formations without epoxy.",
  },
  {
    id: "da-nham-xanh",
    name: "Đá Nham Xanh",
    image: "/images/rocks/Danhamxanh.JPEG",
    alt: "Pile of rough gray-green lava stones with angular shapes on a forest path",
    color: "Gray-green",
    texture: "Rough, angular",
    bestStyles: ["Nature", "Forest"],
    tip: "A versatile all-rounder that blends into almost any layout. The rough texture holds moss and epiphytes naturally.",
  },
];

export const LIGHTS: LightProduct[] = [
  {
    id: "week-tank-z400",
    brand: "WeeK",
    model: "Tank Z400",
    image: "/images/lights/WeeK tank/Z400.JPEG",
    alt: "WeeK Tank Z400 clamp-on LED aquarium light with aluminum heatsink mounted over a planted tank",
    gallery: [
      "/images/lights/WeeK tank/Z400.JPEG",
      "/images/lights/WeeK tank/Z.jpg",
      "/images/lights/WeeK tank/Z400'.JPEG",
      "/images/lights/WeeK tank/Z400''.JPEG",
    ],
    features: [
      "130W RGB full-spectrum LED",
      "120 × 5054 RGB chips",
      "9,000–12,000K color temperature",
      "App-controlled via Bluetooth",
      "Clamp mount for rimless tanks",
    ],
    bestFor: "High-tech planted tanks up to 90cm. Ideal for vibrant red and green stem plants.",
  },
  {
    id: "week-light-pro-arka-430",
    brand: "WeeK",
    model: "Light Pro ARKA 430",
    image: "/images/lights/WeeK light/WeeKProARKA430.JPEG",
    alt: "WeeK Light Pro ARKA 430 slim suspended LED aquarium light with silver aluminum body",
    gallery: [
      "/images/lights/WeeK light/WeeKProARKA430.JPEG",
      "/images/lights/WeeK light/AppWeeK.JPEG",
    ],
    features: [
      "RGB-UV full-spectrum LED",
      "Slim suspended design",
      "App control (Android & iOS)",
      "UV spectrum for enhanced color",
      "Even light spread for large tanks",
    ],
    bestFor: "Large tanks 90–120cm. Perfect for competition-grade aquascapes with demanding plants.",
  },
];
