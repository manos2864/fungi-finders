export const SEASON_CONSTANTS = {
  ALL: "all",
  SUMMER: "summer",
  SPRING: "spring",
  FALL: "fall",
  WINTER: "winter",
} as const;

export const TYPE_CONSTANTS = {
  ALL: "all",
  EDIBLE: "edible",
  TOXIC: "toxic",
} as const;

export type SEASONS_ENUMS =
  (typeof SEASON_CONSTANTS)[keyof typeof SEASON_CONSTANTS];

export type TYPE_ENUMS = (typeof TYPE_CONSTANTS)[keyof typeof TYPE_CONSTANTS];

export type Mushroom = (typeof mushrooms)[number];

export const mushrooms = [
  {
    title: "Chanterelle",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.SUMMER },
    content: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Morel",
    tags: { type: TYPE_CONSTANTS.TOXIC, season: SEASON_CONSTANTS.SPRING },
    content: "Distinctive honeycomb-like cap structure",
    notes: "Must be cooked before eating",
  },
  {
    title: "Chicken of the Woods",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.SUMMER },
    content: "Bright orange bracket fungus with yellow edges",
    notes: "Avoid if growing on certain tree species",
  },
  {
    title: "Death Cap",
    tags: { type: TYPE_CONSTANTS.TOXIC, season: SEASON_CONSTANTS.SUMMER },
    content: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
  },
  {
    title: "Oyster Mushroom",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.FALL },
    content: "Fan-shaped caps growing in clusters",
    notes: "Great beginner mushroom, few look-alikes",
  },
  {
    title: "Lion’s Mane",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.FALL },
    content: "White, shaggy appearance like a lion's mane",
    notes: "No toxic look-alikes",
  },
  {
    title: "Destroying Angel",
    tags: { type: TYPE_CONSTANTS.TOXIC, season: SEASON_CONSTANTS.SUMMER },
    content: "Pure white mushroom with a sack-like base",
    notes: "Deadly toxic - study for safety awareness",
  },
  {
    title: "King Bolete",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.SUMMER },
    content: "Large brown cap with thick stem",
    notes: "Learn to distinguish from similar species",
  },
  {
    title: "Shaggy Mane",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.FALL },
    content: "Tall white mushroom with shaggy scales",
    notes: "Must be harvested and eaten quickly",
  },
  {
    title: "Maitake",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.FALL },
    content: "Large, feathery clusters with overlapping gray-brown caps",
    notes: "Also known as Hen of the Woods - no toxic look-alikes",
  },
  {
    title: "False Morel",
    tags: { type: TYPE_CONSTANTS.TOXIC, season: SEASON_CONSTANTS.SPRING },
    content: "Brain-like, reddish-brown cap with irregular shape",
    notes: "Highly toxic - often confused with true morels",
  },
  {
    title: "Matsutake",
    tags: { type: TYPE_CONSTANTS.EDIBLE, season: SEASON_CONSTANTS.FALL },
    content: "White to brown cap with thick stem and distinct spicy aroma",
    notes: "Verify identification - has toxic look-alikes",
  },
];
