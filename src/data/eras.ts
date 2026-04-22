export interface ContentBlock {
  type: "paragraph" | "quote";
  text: string;
  attribution?: string;
}

export interface Era {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  preview: string;
  description: string;
  content?: ContentBlock[];
}

export const eras: Era[] = [
  {
    id: "the-old-country",
    year: "Pre-1880s",
    title: "Roots in the Motherland",
    subtitle: "Cucina Povera and Regional Scarcity",
    preview:
      "Before mass migration, Italian peasants survived on cucina povera — a cuisine of legumes, olive oil, and ingenuity born from regional isolation and extreme poverty.",
    description:
      "The story of Italian-American food begins not in America, but in the poverty-stricken villages of Southern Italy, where cucina povera shaped the tastes and ambitions of a generation that would soon cross the Atlantic.",
    content: [
      {
        type: "paragraph",
        text: 'Before the mass migration of the late 19th century, the Italian peninsula was defined by regionalism and systemic poverty, particularly in the south or Mezzogiorno (Dickie). The main culinary philosophy of the time was cucina povera (poor kitchen), a style of cooking born out of the hardship that Italian peasants faced. “Poor cuisine” relied on homegrown or bartered foods like legumes, kale, and zucchini. Store-brought products were rare luxuries, and meat was a scarcity reserved for cucina ricci (rich kitchen) tables or annual celebrations. A number of famines in the 18th century resulted in the necessary adoption of new-world foods, like the tomato (Macallen). Additionally, the invention of the mechanical screw press in the early 1600s allowed for the mass production of dried pasta, transforming the Italian population into mangiamacaroni (macaroni-eaters) (Dickie).',
      },
      {
        type: "paragraph",
        text: 'Regional culinary traditions were localized, and can be divided by what is known as the "veal line." Northern regions relied on butter, cream, and risotto (rice), reflecting the more optimal environment for raising livestock. The south favored a more Mediterranean diet, including olive oil, tomatoes, and fresh vegetables (Feinstein). Even then, the regions can be divided further. Bologna was known as la Grassa (the fat) for its prosperity and meat-heavy specialties like mortadella, whereas Sicilian cuisine was influenced by centuries of Arab rule (Dickie).',
      },
      {
        type: "paragraph",
        text: "Italian presence in the United States at this time was miniscule. The 1860 Census reveals around 11,000 Italian immigrants between 1820 and 1860. These were primarily artisans or merchants who established trade hubs in American port cities. An outsized proponent of Italian cuisine was Thomas Jefferson, who brought back designs for a pasta machine after his diplomatic trips to France. Italian foods were generally viewed through this French lens, with early establishments like Delmonico’s (est. 1827) serving Spaghetti l’Italienne, which was slow cooked to appeal to the more conservative Anglo-American palate (Macallen).",
      },
      {
        type: "quote",
        text: "The best pasta in Italy is made with a particular sort of flour, called Semola, in Naples.",
        attribution: "Thomas Jefferson, 1787 (Tucker)",
      },
      {
        type: "paragraph",
        text: "Political unification was a primary driver for the mass migration of the late 19th century. A unified Italy exacerbated wealth disparities, leading to the oppression of Southern farmers under the Padrone system. Wealthy landowners earned huge sums of money through forced labor and keeping wages low. Additionally, as the new Italian state imposed income taxes, often nearing ten percent of a peasant family's income, people began to seek the abbodanza (abundance) of America (Macallen).",
      },
    ],
  },
  {
    id: "arrival",
    year: "1880s–1900",
    title: "The Arrival",
    subtitle: "Bringing the Old World to the New",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the arrival era.",
  },
  {
    id: "tenement-kitchens",
    year: "1900–1910",
    title: "Tenement Kitchens",
    subtitle: "Cooking in Crowded Quarters",
    preview: "Preview text.",
    description: "Placeholder for detailed content about tenement kitchen cooking.",
  },
  {
    id: "little-italy",
    year: "1910s–1920s",
    title: "Little Italy Takes Root",
    subtitle: "Community Kitchens & Street Vendors",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the Little Italy era.",
  },
  {
    id: "prohibition",
    year: "1920s–1933",
    title: "Prohibition Era",
    subtitle: "Speakeasies & Italian Hospitality",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the Prohibition era.",
  },
  {
    id: "depression-era",
    year: "1930s–1940",
    title: "Depression & Adaptation",
    subtitle: "Making Do with Less",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the Depression era.",
  },
  {
    id: "wwii",
    year: "1940–1950",
    title: "World War II",
    subtitle: "GIs Discover Italian Cuisine",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the WWII era.",
  },
  {
    id: "postwar-boom",
    year: "1950s",
    title: "Post-War Boom",
    subtitle: "Spaghetti Goes Suburban",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the post-war boom.",
  },
  {
    id: "pizza-boom",
    year: "1960s–1970s",
    title: "The Pizza Boom",
    subtitle: "From Ethnic Food to Everyday American",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the pizza boom era.",
  },
  {
    id: "northern-italian",
    year: "1970s–1980s",
    title: "The Northern Turn",
    subtitle: "Discovering Regional Differences",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the Northern Italian turn.",
  },
  {
    id: "gourmet-revival",
    year: "1980s–1990s",
    title: "The Gourmet Revival",
    subtitle: "Celebrity Chefs & Fine Dining",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the gourmet revival era.",
  },
  {
    id: "slow-food",
    year: "2000s–2010s",
    title: "Slow Food Movement",
    subtitle: "Back to the Source",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the slow food era.",
  },
  {
    id: "modern-fusion",
    year: "2010s–Present",
    title: "Modern Fusion",
    subtitle: "Italian-American in a Global Kitchen",
    preview: "Preview text.",
    description: "Placeholder for detailed content about the modern era.",
  },
];
