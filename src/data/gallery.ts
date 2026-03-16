export type AquascapeStyle = "Nature" | "Iwagumi" | "Forest";
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type TankSizeLabel = "60cm" | "90cm" | "120cm";

export interface GalleryTank {
  id: number;
  slug: string;
  title: string;
  image: string;
  alt: string;
  style: AquascapeStyle;
  tankSize: TankSizeLabel;
  difficulty: Difficulty;
  plants: string[];
  hardscape: string[];
  fish: string[];
  description: string;
  tip: string;
}

export const GALLERY_TANKS: GalleryTank[] = [
  {
    id: 1,
    slug: "enchanted-canopy",
    title: "Enchanted Canopy",
    image: "/images/tanks/1.JPEG",
    alt: "Forest-style aquascape with dramatic driftwood arches covered in lush moss and ferns creating a canopy over a sandy path",
    style: "Forest",
    tankSize: "120cm",
    difficulty: "Advanced",
    plants: ["Java Fern", "Weeping Moss", "Anubias", "Bolbitis"],
    hardscape: ["Spider Driftwood", "River Stones"],
    fish: [],
    description:
      "A dramatic forest canopy created entirely underwater. Towering driftwood arches draped in weeping moss and ferns frame a winding sand path that draws the eye deep into the scene.",
    tip: "Let moss attach naturally to driftwood with cotton thread — remove the thread after 4–6 weeks once the roots grip.",
  },
  {
    id: 2,
    slug: "sunlit-valley",
    title: "Sunlit Valley",
    image: "/images/tanks/2.JPEG",
    alt: "Iwagumi-inspired aquascape with dramatic Seiryu stones, lush green carpet plants, and a school of orange fish",
    style: "Iwagumi",
    tankSize: "60cm",
    difficulty: "Beginner",
    plants: ["Monte Carlo", "Dwarf Hairgrass", "Eleocharis"],
    hardscape: ["Seiryu Stone"],
    fish: ["Ember Tetra"],
    description:
      "Clean Iwagumi fundamentals meet vibrant life. Bold Seiryu stones anchor the composition while a lush green carpet leads toward a bright focal point. A school of ember tetras adds warm contrast.",
    tip: "In Iwagumi layouts, use odd numbers of stones and always make one stone clearly dominant.",
  },
  {
    id: 3,
    slug: "mountain-passage",
    title: "Mountain Passage",
    image: "/images/tanks/3.JPEG",
    alt: "Nature-style aquascape with towering rock formations, dense green plants, and a school of Boesemani rainbowfish swimming through a central corridor",
    style: "Nature",
    tankSize: "120cm",
    difficulty: "Advanced",
    plants: ["Java Moss", "Rotala", "Microsorum", "Anubias Nana"],
    hardscape: ["Seiryu Stone", "Mountain Stone"],
    fish: ["Boesemani Rainbowfish"],
    description:
      "Towering rock walls frame a central passage that draws the eye toward the light. Lush mosses and ferns cling to every surface, while a shimmering school of Boesemani rainbowfish navigates the canyon.",
    tip: "Stack stones carefully with aquarium-safe epoxy for tall formations — gravity and water flow can topple unsecured rocks.",
  },
  {
    id: 4,
    slug: "twilight-crossing",
    title: "Twilight Crossing",
    image: "/images/tanks/4.JPEG",
    alt: "Nature aquascape with large driftwood branches crossing over rocks and Monte Carlo carpet, a school of neon tetras below",
    style: "Nature",
    tankSize: "90cm",
    difficulty: "Intermediate",
    plants: ["Monte Carlo", "Java Fern", "Bucephalandra", "Riccia"],
    hardscape: ["Branching Driftwood", "Dragon Stone"],
    fish: ["Neon Tetra"],
    description:
      "Massive driftwood branches arc across the midground, casting dappled shadows over a Monte Carlo carpet and scattered rocks. A school of neon tetras glows in the filtered light.",
    tip: "Soak large driftwood for 1–2 weeks before use to release tannins and prevent it from floating.",
  },
  {
    id: 5,
    slug: "valley-of-color",
    title: "Valley of Color",
    image: "/images/tanks/5.JPEG",
    alt: "Nature concave aquascape with driftwood, dragon stones, red and green stem plants, and a large school of neon tetras",
    style: "Nature",
    tankSize: "120cm",
    difficulty: "Advanced",
    plants: ["Rotala Rotundifolia", "Ludwigia", "Java Moss", "Monte Carlo"],
    hardscape: ["Dragon Stone", "Branching Driftwood"],
    fish: ["Neon Tetra"],
    description:
      "A vibrant concave layout where red Rotala and Ludwigia contrast against deep green mosses. Driftwood frames the scene on both sides, and a large school of neon tetras gathers in the open valley.",
    tip: "Achieve red color in stem plants with strong lighting, lean CO₂ injection, and limiting nitrates slightly.",
  },
  {
    id: 6,
    slug: "crimson-gorge",
    title: "Crimson Gorge",
    image: "/images/tanks/6.JPEG",
    alt: "Nature concave aquascape with large rocky formations, vibrant red and green plants, and a school of rainbowfish over sand",
    style: "Nature",
    tankSize: "120cm",
    difficulty: "Advanced",
    plants: ["Rotala H'Ra", "Ludwigia Super Red", "Monte Carlo", "Java Moss"],
    hardscape: ["Seiryu Stone"],
    fish: ["Dwarf Neon Rainbowfish"],
    description:
      "Symmetrical rocky cliffs draped in fiery red Rotala and Ludwigia frame a central sand valley. The intense color palette is balanced by green mosses at the base and a lively school of dwarf neon rainbowfish.",
    tip: "Trim stem plants weekly to keep the concave silhouette clean — let the center stay open for depth.",
  },
  {
    id: 7,
    slug: "zen-summit",
    title: "Zen Summit",
    image: "/images/tanks/7.JPEG",
    alt: "Iwagumi-style aquascape with a massive central Seiryu stone covered in Monte Carlo, small golden fish, and clean composition",
    style: "Iwagumi",
    tankSize: "60cm",
    difficulty: "Beginner",
    plants: ["Monte Carlo", "Hemianthus", "Eleocharis Mini"],
    hardscape: ["Seiryu Stone"],
    fish: ["Gold Tetra"],
    description:
      "Pure Iwagumi philosophy — a single commanding stone rises from a pristine Monte Carlo carpet. Minimal plant variety keeps focus on the stone's natural textures and the gentle movement of gold tetras.",
    tip: "Iwagumi tanks rely on strong lighting and CO₂ for a healthy carpet. Start with Monte Carlo — it's the most forgiving carpet plant.",
  },
  {
    id: 8,
    slug: "ancient-riverbed",
    title: "Ancient Riverbed",
    image: "/images/tanks/8.JPEG",
    alt: "Moody nature aquascape with dark lava stone, mosses, red accent plants, and a school of blue tetras over sand",
    style: "Nature",
    tankSize: "90cm",
    difficulty: "Intermediate",
    plants: ["Java Moss", "Bucephalandra", "Rotala", "Cryptocoryne"],
    hardscape: ["Lava Stone"],
    fish: ["Green Neon Tetra"],
    description:
      "Dark, textured lava stones create an ancient, weathered landscape. Mosses and Bucephalandra cling to every crevice, while red accent plants add warmth. A school of green neon tetras shimmers in the moody light.",
    tip: "Lava stone is lightweight and porous — beneficial bacteria colonize it quickly, improving water quality.",
  },
  {
    id: 9,
    slug: "mossy-bridge",
    title: "Mossy Bridge",
    image: "/images/tanks/9.JPEG",
    alt: "Forest-style aquascape with a moss-covered driftwood bridge, lush green carpet, and small blue fish underneath",
    style: "Forest",
    tankSize: "90cm",
    difficulty: "Advanced",
    plants: ["Christmas Moss", "Riccia", "Monte Carlo", "Rotala"],
    hardscape: ["Spider Driftwood"],
    fish: ["Blue Tetra"],
    description:
      "A moss-encrusted driftwood bridge arches gracefully over a deep green carpet. The dense, organic growth gives the feeling of an old-growth forest floor — impossibly lush and alive.",
    tip: "Christmas Moss has a natural branching pattern that mimics tiny fir trees — perfect for forest-style scapes.",
  },
  {
    id: 10,
    slug: "cardinal-forest",
    title: "Cardinal Forest",
    image: "/images/tanks/10.JPEG",
    alt: "Forest-style aquascape with multiple driftwood branches covered in dense moss, cardinal tetras, and a sandy riverbed",
    style: "Forest",
    tankSize: "120cm",
    difficulty: "Advanced",
    plants: ["Weeping Moss", "Java Fern", "Anubias Nana Petite", "Rotala"],
    hardscape: ["Branching Driftwood"],
    fish: ["Cardinal Tetra"],
    description:
      "Dense driftwood branches sweep across the tank like fallen trees in a primeval forest. Moss blankets every surface, and a vivid school of cardinal tetras weaves through the branches over a sandy riverbed.",
    tip: "Layer driftwood at different depths to create parallax — viewers should feel they can walk into the scene.",
  },
];

export const ALL_STYLES: AquascapeStyle[] = ["Nature", "Iwagumi", "Forest"];
export const ALL_SIZES: TankSizeLabel[] = ["60cm", "90cm", "120cm"];
export const ALL_DIFFICULTIES: Difficulty[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];
