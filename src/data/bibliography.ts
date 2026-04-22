export interface BibliographyEntry {
  id: string;
  citation: string;
  annotation: string;
  url?: string;
}

const bibliography: BibliographyEntry[] = [
  {
    id: "dickie-2008",
    citation: "Dickie, John. <em>Delizia!</em> Simon and Schuster, 2008.",
    annotation:
      "Dickie provides a background history of Italian food from the Middle Ages to the modern era. He explains how food in Italy connects deeply to local identity and shows that Italian food started as many distinct regional traditions. This book helps my research by showing the conditions in Italy before the Great Migration. It details the extreme poverty and simple diets that caused peasants to leave Italy. This sets up the context for the ambitions that later shaped Italian American food. Dickie also analyzes cooking traditions of the poor and the rise of macaroni eaters in Naples. This gives a cultural foundation to understand why immigrants wanted so much food when they finally came to America.",
  },
  {
    id: "feinstein-2020",
    citation:
      "Feinstein, Paul. “Italian American vs. Authentic Italian Cuisine: The Neverending Debate.” <em>La Cucina Italiana</em>, 3 Aug. 2020.",
    annotation:
      "Feinstein examines the cultural conflict between authentic Italian and Italian American food identities. He analyzes how traditional recipes were changed to fit American tastes. This created new dishes like spaghetti and meatballs that do not exist in Italy in the same way. This article helps my research by defining how people view authenticity today. It argues that Italian American food is a separate and real cuisine that should be appreciated on its own, not just called a fake imitation. Feinstein then uses cultural examples to show the historical struggle between keeping immigrant heritage and changing to survive economically. This is important for understanding the tensions in how Italian food mixed into American culture over many decades.",
    url: "https://www.lacucinaitaliana.com/trends/restaurants-and-chefs/italian-american-vs-authentic-italian-cuisine-the-neverending-debate",
  },
  {
    id: "kruse-2019",
    citation:
      "Kruse, Nancy. “Italian: The Quintessential American Cuisine.” <em>Nation’s Restaurant News</em>, 18 Oct. 2019.",
    annotation:
      "Kruse tracks how Italian food changed from a small ethnic curiosity into America’s most popular cuisine. She provides concrete data on the current shift toward regional foods, pointing out the fast growth of specific dishes on restaurant menus today. This source helps my topic by connecting older comfort foods to the modern American interest in authentic regional meals, like Roman pizza and Southern Italian dishes. Kruse offers a unique restaurant industry point of view. She explains how large companies like Olive Garden gave up authenticity to become popular. However, these same companies also made it easier for average Americans to try more parts of the traditional Italian diet without feeling intimidated by completely unfamiliar foods.",
    url: "https://www.nrn.com/food-trends/italian-the-quintessential-american-cuisine",
  },
  {
    id: "kruse-2004",
    citation:
      "———. “Italian Cuisines Crossover to Form ‘That’s American’ Fare.” <em>Nation’s Restaurant News</em>, 3 May 2004.",
    annotation:
      "Kruse explores how Italian food elements have mixed into standard American dining so much that they are no longer seen as foreign. She discusses the wide use of Italian ingredients like mozzarella, pepperoni, and pesto on many non-Italian restaurant menus. This article helps my research by showing the ultimate success of Italian American food integration. It proves the food became so popular that it fundamentally changed the basics of American cuisine. Interestingly, the article offers a helpful industry perspective from the early 2000s. It gives a look at how fast casual dining trends broke down ethnic food barriers. It provides concrete examples of how Italian flavors have been completely absorbed into the normal identity of everyday American meals.",
    url: "https://www.ishojbib.dk/work/work-of:150010-master:13016095?type=artikel",
  },
  {
    id: "levenstein-2002",
    citation:
      "Levenstein, Harvey. “The American Response to Italian Food, 1880–1930.” <em>Food in the USA: A Reader</em>, edited by Carole Counihan, Routledge, 2002, pp. 75–90.",
    annotation:
      "Levenstein provides a framework for understanding how Italian food survived during a time of intense American pressure to fit in. He details how early American reformers viewed the Italian diet poorly and tried to replace traditional dishes with scientific American foods. This source helps my research because it clearly explains the role of the Great Depression. The economic crash helped Italian food become mainstream because pasta and tomato sauce were cheap staples used to stretch meals. Additionally, Levenstein focuses heavily on the native born response instead of just the immigrant experience. He argues that the Americanized version of Italian food became a rare source of community pride. It kept ethnic identity alive while inviting middle class Americans to try ethnic dining safely.",
  },
  {
    id: "macallen-2022",
    citation:
      "Macallen, Ian. <em>Red Sauce: How Italian Food Became American</em>. Rowman & Littlefield, 2022.",
    annotation:
      "Macallen traces the change of Italian cuisine into a distinct American identity. He argues that red sauce was an American invention, created when Southern Italian immigrants mixed traditional cooking with the industrial food supply of the United States. This book helps my research by pointing out specific historical turning points. It covers the invention of the gas pizza oven and the cultural influence of returning World War II soldiers, which put Italian flavors in the national diet. Macallen includes a detailed list of sauces and explains how recipes like Fettuccine Alfredo became popular through celebrity influence. This shows how Italian food went from a rejected ethnic product to a widely celebrated symbol of the American Dream.",
  },
  {
    id: "tucker-2019",
    citation:
      "Tucker, Neely. “Thomas Jefferson: A Man of the Pasta.” <em>Library of Congress Blog</em>, 2 Dec. 2019.",
    annotation:
      "Tucker details Thomas Jefferson’s early interest in Italian food and his role in bringing pasta to the United States. He outlines how Jefferson found macaroni during his European travels and shipped a pasta machine back to Virginia, serving macaroni at an 1802 state dinner. This source helps my research by providing historical context before the main wave of immigration. It shows that elite American interest in Italian food existed almost a century before mass Southern Italian immigration began.",
    url: "https://blogs.loc.gov/loc/2019/12/thomas-jefferson-a-man-of-the-pasta/",
  },
];

export default bibliography;
