export type Lang = "it" | "en";

export type Allergen =
  | "glutine" | "latte" | "uova" | "pesce" | "molluschi"
  | "frutta_a_guscio" | "crostacei" | "sedano" | "soia"
  | "senape" | "sesamo" | "lupini" | "arachidi" | "solfiti";

export const ALLERGEN_LABELS: Record<Allergen, Record<Lang, string>> = {
  glutine:          { it: "Glutine",          en: "Gluten" },
  latte:            { it: "Latte",             en: "Milk" },
  uova:             { it: "Uova",              en: "Eggs" },
  pesce:            { it: "Pesce",             en: "Fish" },
  molluschi:        { it: "Molluschi",         en: "Molluscs" },
  frutta_a_guscio:  { it: "Frutta a guscio",  en: "Tree nuts" },
  crostacei:        { it: "Crostacei",         en: "Crustaceans" },
  sedano:           { it: "Sedano",            en: "Celery" },
  soia:             { it: "Soia",              en: "Soy" },
  senape:           { it: "Senape",            en: "Mustard" },
  sesamo:           { it: "Sesamo",            en: "Sesame" },
  lupini:           { it: "Lupini",            en: "Lupin" },
  arachidi:         { it: "Arachidi",          en: "Peanuts" },
  solfiti:          { it: "Solfiti",           en: "Sulphites" },
};

export interface MenuItem {
  name: string;
  nameEN?: string;
  description?: string;
  descriptionEN?: string;
  price?: number | null;
  available?: boolean;
  frozen?: boolean;
  allergens?: Allergen[];
}

export interface MenuGroup {
  name: string;
  nameEN?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  slug: string;
  nameIT: string;
  nameEN: string;
  image: string;
  groups: MenuGroup[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "pizze",
    nameIT: "Pizze",
    nameEN: "Pizzas",
    image: "/airport-pizze.webp",
    groups: [
      {
        name: "Pizze",
        nameEN: "Pizzas",
        items: [
          { name: "Margherita", nameEN: "Margherita", description: "Pomodoro e mozzarella", descriptionEN: "Tomato sauce and mozzarella", price: 5.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Marinara", nameEN: "Marinara", description: "Pomodoro, aglio e prezzemolo", descriptionEN: "Tomato sauce, garlic and parsley", price: 4.5, available: true, allergens: ["glutine"] },
          { name: "Diavola", nameEN: "Diavola", description: "Pomodoro, mozzarella e salame piccante", descriptionEN: "Tomato sauce, mozzarella and spicy salami", price: 6.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Romana", nameEN: "Roman Pizza", description: "Pomodoro, mozzarella e prosciutto cotto", descriptionEN: "Tomato sauce, mozzarella and cooked ham", price: 6, available: true, allergens: ["glutine", "latte"] },
          { name: "Würstel", nameEN: "Wurstel", description: "Pomodoro, mozzarella e würstel", descriptionEN: "Tomato sauce, mozzarella and wurstel sausage", price: 6, available: true, allergens: ["glutine", "latte"] },
          { name: "Funghi Freschi", nameEN: "Fresh Mushrooms", description: "Pomodoro, mozzarella e funghi freschi", descriptionEN: "Tomato sauce, mozzarella and fresh mushrooms", price: 6, available: true, allergens: ["glutine", "latte"] },
          { name: "Würstel e Patatine", nameEN: "Wurstel and Fries", description: "Pomodoro, mozzarella, würstel e patatine fritte", descriptionEN: "Tomato sauce, mozzarella, wurstel and french fries", price: 6.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Margherita Light", nameEN: "Margherita Light", description: "Mozzarella e pomodorini freschi", descriptionEN: "Mozzarella and fresh cherry tomatoes", price: 6.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Caprese", nameEN: "Caprese Pizza", description: "Pomodoro a fette, mozzarella a fette e origano", descriptionEN: "Fresh tomato slices, mozzarella and oregano", price: 6.5, available: true, allergens: ["glutine", "latte"] },
          { name: "4 Stagioni", nameEN: "Four Seasons", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olive e carciofi", descriptionEN: "Tomato sauce, mozzarella, cooked ham, mushrooms, olives and artichokes", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Capricciosa", nameEN: "Capricciosa", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, olive e salsiccia", descriptionEN: "Tomato sauce, mozzarella, cooked ham, mushrooms, olives and sausage", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Tonno e Cipolla", nameEN: "Tuna and Onion", description: "Pomodoro, mozzarella, tonno e cipolla", descriptionEN: "Tomato sauce, mozzarella, tuna and onion", price: 6.5, available: true, allergens: ["glutine", "latte", "pesce"] },
          { name: "Al Crudo", nameEN: "Prosciutto Crudo", description: "Pomodoro, mozzarella e prosciutto crudo", descriptionEN: "Tomato sauce, mozzarella and Parma ham", price: 8, available: true, allergens: ["glutine", "latte"] },
          { name: "4 Formaggi", nameEN: "Four Cheese", description: "Mozzarella, provolone, emmental, scamorza e gorgonzola", descriptionEN: "Mozzarella, provolone, emmental, scamorza and gorgonzola", price: 8.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Erny", nameEN: "Erny", description: "Mozzarella, uovo sodo, grana e melanzane", descriptionEN: "Mozzarella, boiled egg, parmesan and eggplant", price: 9, available: true, allergens: ["glutine", "latte", "uova"] },
          { name: "Gaetano", nameEN: "Gaetano", description: "Pomodoro, mozzarella, tonno, cipolla, funghi ed emmental", descriptionEN: "Tomato sauce, mozzarella, tuna, onion, mushrooms and emmental", price: 8.5, available: true, allergens: ["glutine", "latte", "pesce"] },
          { name: "Rugantina", nameEN: "Rugantina", description: "Schiacciata, pomodorini, grana, rucola e prosciutto crudo", descriptionEN: "Flat pizza, cherry tomatoes, parmesan, rocket salad and Parma ham", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Primavera", nameEN: "Spring Pizza", description: "Pomodoro, mozzarella, pomodorini, grana, rucola e prosciutto crudo", descriptionEN: "Tomato sauce, mozzarella, cherry tomatoes, parmesan, rocket and Parma ham", price: 8.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Boscaiola", nameEN: "Boscaiola", description: "Pomodoro, mozzarella, funghi, panna e bacon", descriptionEN: "Tomato sauce, mozzarella, mushrooms, cream and bacon", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Funghi Porcini", nameEN: "Porcini Mushrooms", frozen: true, description: "Pomodoro, mozzarella e funghi porcini", descriptionEN: "Tomato sauce, mozzarella and porcini mushrooms", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Carmen", nameEN: "Carmen", description: "Mozzarella, melanzane arrosto, funghi e grana", descriptionEN: "Mozzarella, roasted eggplant, mushrooms and parmesan", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Frutti di Mare", nameEN: "Seafood Pizza", description: "Pomodoro, cozze, vongole, gamberi e calamari", descriptionEN: "Tomato sauce, mussels, clams, shrimp and squid", price: 10, available: true, allergens: ["glutine", "molluschi", "crostacei"] },
          { name: "Oro Pizza", nameEN: "Oro Pizza", description: "Mozzarella, mais, funghi, grana, pancetta e pomodorini", descriptionEN: "Mozzarella, corn, mushrooms, parmesan, pancetta and cherry tomatoes", price: 8, available: true, allergens: ["glutine", "latte"] },
          { name: "Airport", nameEN: "Airport", description: "Pomodoro, mozzarella, bresaola, gamberetti, grana e rucola", descriptionEN: "Tomato sauce, mozzarella, bresaola, shrimp, parmesan and rocket salad", price: 10, available: true, allergens: ["glutine", "latte", "crostacei"] },
          { name: "Napoli", nameEN: "Napoli", description: "Pomodoro, mozzarella, origano, capperi e acciughe", descriptionEN: "Tomato sauce, mozzarella, oregano, capers and anchovies", price: 6, available: true, allergens: ["glutine", "latte", "pesce"] },
          { name: "Giampy", nameEN: "Giampy", description: "Mozzarella, salame piccante, funghi champignon, pomodori freschi e rucola", descriptionEN: "Mozzarella, spicy salami, champignon mushrooms, fresh tomatoes and rocket salad", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Tricolore", nameEN: "Tricolore", description: "Pomodoro, mozzarella, rucola, grana e pomodorini freschi", descriptionEN: "Tomato sauce, mozzarella, rocket salad, parmesan and fresh cherry tomatoes", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Miki", nameEN: "Miki", description: "Pomodoro, mozzarella, tonno, patatine e salame piccante", descriptionEN: "Tomato sauce, mozzarella, tuna, fries and spicy salami", price: 7, available: true, allergens: ["glutine", "latte", "pesce"] },
          { name: "Genovese", nameEN: "Genovese", description: "Pomodoro, mozzarella, pesto e gamberi", descriptionEN: "Tomato sauce, mozzarella, pesto and shrimp", price: 7, available: true, allergens: ["glutine", "latte", "crostacei", "frutta_a_guscio"] },
          { name: "Vesuviana", nameEN: "Vesuviana", description: "Mozzarella, prosciutto cotto, mais e panna", descriptionEN: "Mozzarella, cooked ham, corn and cream", price: 8, available: true, allergens: ["glutine", "latte"] },
          { name: "Fumè", nameEN: "Smoked Pizza", description: "Pomodoro, mozzarella, bacon e scamorza affumicata", descriptionEN: "Tomato sauce, mozzarella, bacon and smoked scamorza cheese", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Ortolana", nameEN: "Vegetable Pizza", description: "Pomodoro, mozzarella, melanzane, peperoni e zucchine", descriptionEN: "Tomato sauce, mozzarella, eggplant, peppers and zucchini", price: 7, available: true, allergens: ["glutine", "latte"] },
          { name: "Bufala", nameEN: "Buffalo Mozzarella", description: "Pomodoro e mozzarella di bufala", descriptionEN: "Tomato sauce and buffalo mozzarella", price: 8, available: true, allergens: ["glutine", "latte"] },
          { name: "Bomba", nameEN: "Bomba", description: "Pomodoro, mozzarella, peperoni, capperi, tonno e salame dolce", descriptionEN: "Tomato sauce, mozzarella, peppers, capers, tuna and mild salami", price: 7.5, available: true, allergens: ["glutine", "latte", "pesce"] },
          { name: "Calabrisella", nameEN: "Calabrisella", description: "Pomodoro, mozzarella, salame piccante, provolone e olive", descriptionEN: "Tomato sauce, mozzarella, spicy salami, provolone and olives", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Pugliese", nameEN: "Pugliese", description: "Pomodoro, mozzarella, cipolla, origano e capperi", descriptionEN: "Tomato sauce, mozzarella, onion, oregano and capers", price: 6, available: true, allergens: ["glutine", "latte"] },
          { name: "Agricola", nameEN: "Agricola", description: "Pomodoro, mozzarella, funghi freschi, mortadella, olive e provolone", descriptionEN: "Tomato sauce, mozzarella, fresh mushrooms, mortadella, olives and provolone", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Funghi Misti", nameEN: "Mixed Mushrooms", description: "Pomodoro, mozzarella e funghi misti", descriptionEN: "Tomato sauce, mozzarella and mixed mushrooms", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Norcina", nameEN: "Norcina", description: "Pomodoro, mozzarella, porcini e salsiccia fresca", descriptionEN: "Tomato sauce, mozzarella, porcini mushrooms and fresh sausage", price: 7.5, available: true, allergens: ["glutine", "latte"] },
        ],
      },
    ],
  },
  {
    slug: "pizze-speciali",
    nameIT: "Pizze Speciali",
    nameEN: "Special Pizzas",
    image: "/airport-pizzenew.webp",
    groups: [
      {
        name: "Pizze Speciali",
        nameEN: "Special Pizzas",
        items: [
          { name: "Ettore", nameEN: "Ettore", description: "Mozzarella, melanzane grigliate, pane grattato fritto e cacio ricotta", descriptionEN: "Mozzarella, grilled eggplant, fried breadcrumbs and ricotta salata cheese", price: 8, available: true, allergens: ["glutine", "latte"] },
          { name: "Giampy 2", nameEN: "Giampy 2", description: "Pomodoro, mozzarella, noci, gorgonzola e prosciutto cotto", descriptionEN: "Tomato sauce, mozzarella, walnuts, gorgonzola and cooked ham", price: 7.5, available: true, allergens: ["glutine", "latte", "frutta_a_guscio"] },
          { name: "Lucietta", nameEN: "Lucietta", description: "Mozzarella, melanzane grigliate, prosciutto crudo e stracciatella", descriptionEN: "Mozzarella, grilled eggplant, Parma ham and stracciatella cheese", price: 8.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Valbadia", nameEN: "Valbadia", description: "Mozzarella, pomodorini freschi, radicchio, speck e noci", descriptionEN: "Mozzarella, fresh cherry tomatoes, radicchio, speck and walnuts", price: 8.5, available: true, allergens: ["glutine", "latte", "frutta_a_guscio"] },
          { name: "Gustosa", nameEN: "Gustosa", description: "Pomodoro, mozzarella, pistacchio, mortadella e grana", descriptionEN: "Tomato sauce, mozzarella, pistachio, mortadella and parmesan", price: 8.5, available: true, allergens: ["glutine", "latte", "frutta_a_guscio"] },
          { name: "Made in Sud", nameEN: "Made in Sud", description: "Mozzarella, cime di rape stufate, provolone e pomodorini freschi", descriptionEN: "Mozzarella, sautéed turnip greens, provolone cheese and fresh cherry tomatoes", price: 8.5, available: true, allergens: ["glutine", "latte"] },
        ],
      },
      {
        name: "Calzoni, Panzerotti e Sombrero",
        nameEN: "Calzoni, Panzerotti and Sombrero",
        items: [
          { name: "Calzone Semplice", nameEN: "Simple Calzone", description: "Pomodoro e mozzarella", descriptionEN: "Tomato sauce and mozzarella", price: 5.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Calzone Farcito", nameEN: "Stuffed Calzone", description: "Pomodoro, mozzarella, carciofi, salame piccante, funghi freschi e prosciutto cotto", descriptionEN: "Tomato sauce, mozzarella, artichokes, spicy salami, fresh mushrooms and cooked ham", price: 7.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Strazza Mutande Light", nameEN: "Strazza Mutande Light", description: "Pomodoro fresco, mozzarella, grana e prosciutto cotto", descriptionEN: "Fresh tomato, mozzarella, parmesan and cooked ham", price: 6.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Panzerotto Semplice", nameEN: "Simple Panzerotto", description: "Pomodoro e mozzarella", descriptionEN: "Tomato sauce and mozzarella", price: 3, available: true, allergens: ["glutine", "latte"] },
          { name: "Panzerotto Farcito", nameEN: "Stuffed Panzerotto", description: "Pomodoro, mozzarella, carciofi, salame piccante, funghi freschi e prosciutto cotto", descriptionEN: "Tomato sauce, mozzarella, artichokes, spicy salami, fresh mushrooms and cooked ham", price: 4.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Puccia o Strazza Mutande Vuoto", nameEN: "Plain Puccia or Strazza Mutande", description: "Impasto vuoto", descriptionEN: "Plain dough", price: 2, available: true, allergens: ["glutine"] },
          { name: "Sombrero Farcito", nameEN: "Stuffed Sombrero", description: "", descriptionEN: "", price: 16, available: true, allergens: ["glutine"] },
          { name: "Sombrero Semplice", nameEN: "Simple Sombrero", description: "", descriptionEN: "", price: 11, available: true, allergens: ["glutine"] },
        ],
      },
    ],
  },
  {
    slug: "antipasti",
    nameIT: "Antipasti e Stuzzichini",
    nameEN: "Appetizers and Sides",
    image: "/airport-antipasti.webp",
    groups: [
      {
        name: "Antipasti",
        nameEN: "Appetizers",
        items: [
          { name: "Antipasto della Casa", nameEN: "House Appetizer", description: "Portate varie di terra e mare", descriptionEN: "A selection of land and seafood appetizers", price: 16, available: true, allergens: ["latte", "pesce", "molluschi", "crostacei"] },
          { name: "Antipasto di Mare", nameEN: "Seafood Appetizer", frozen: true, description: "Portate varie di mare", descriptionEN: "A selection of seafood appetizers", price: 20, available: true, allergens: ["pesce", "molluschi", "crostacei"] },
          { name: "Caprese", nameEN: "Caprese", description: "Pomodori e mozzarella a fette, origano, olio e sale", descriptionEN: "Sliced tomatoes and mozzarella with oregano, olive oil and salt", price: 8, available: true, allergens: ["latte"] },
          { name: "Carpaccio di Bresaola con Rucola e Grana", nameEN: "Bresaola Carpaccio with Rocket and Parmesan", description: "Bresaola, rucola e grana", descriptionEN: "Bresaola, rocket salad and parmesan", price: 13, available: true, allergens: ["latte"] },
          { name: "Insalata di Mare", nameEN: "Seafood Salad", frozen: true, description: "Insalata di mare", descriptionEN: "Seafood salad", price: 13, available: true, allergens: ["pesce", "molluschi", "crostacei"] },
          { name: "Prosciutto e Melone", nameEN: "Ham and Melon", description: "Prosciutto e melone", descriptionEN: "Ham and melon", price: 8, available: true, allergens: [] },
          { name: "Crudo e Mozzarella", nameEN: "Parma Ham and Mozzarella", description: "Prosciutto crudo e mozzarella", descriptionEN: "Parma ham and mozzarella", price: 8.5, available: true, allergens: ["latte"] },
          { name: "Cotto e Mozzarella", nameEN: "Cooked Ham and Mozzarella", description: "Prosciutto cotto e mozzarella", descriptionEN: "Cooked ham and mozzarella", price: 7, available: true, allergens: ["latte"] },
          { name: "Patate e Cozze", nameEN: "Potatoes and Mussels", description: "Patate e cozze", descriptionEN: "Potatoes and mussels", price: 8, available: true, allergens: ["molluschi"] },
          { name: "Uccelletti Bacon e Mozzarella", nameEN: "Bacon and Mozzarella Bites", description: "Bacon e mozzarella", descriptionEN: "Bacon and mozzarella", price: 7, available: true, allergens: ["latte"] },
          { name: "Formaggi Misti", nameEN: "Mixed Cheeses", description: "Provolone, svizzero, bocconcini e scamorza", descriptionEN: "Provolone, Swiss cheese, mozzarella bites and scamorza", price: 10, available: true, allergens: ["latte"] },
        ],
      },
      {
        name: "Bruschette e Fritti",
        nameEN: "Bruschette and Fried",
        items: [
          { name: "Bruschetta con Pomodorini (Piccola)", nameEN: "Bruschetta with Cherry Tomatoes (Small)", description: "Piccola", descriptionEN: "Small portion", price: 2.5, available: true, allergens: ["glutine"] },
          { name: "Bruschetta con Pomodorini (Grande)", nameEN: "Bruschetta with Cherry Tomatoes (Large)", description: "Grande", descriptionEN: "Large portion", price: 5, available: true, allergens: ["glutine"] },
          { name: "Crocchette di Patate (Piccola)", nameEN: "Potato Croquettes (Small)", description: "Piccola, 6 pezzi", descriptionEN: "Small portion, 6 pieces", price: 4.5, available: true, allergens: ["glutine"] },
          { name: "Crocchette di Patate (Grande)", nameEN: "Potato Croquettes (Large)", description: "Grande, 12 pezzi", descriptionEN: "Large portion, 12 pieces", price: 8, available: true, allergens: ["glutine"] },
          { name: "Panzerottini (Piccoli)", nameEN: "Mini Panzerotti (Small)", description: "Piccola, 6 pezzi", descriptionEN: "Small portion, 6 pieces", price: 4.5, available: true, allergens: ["glutine", "latte"] },
          { name: "Panzerottini (Grandi)", nameEN: "Mini Panzerotti (Large)", description: "Grande, 12 pezzi", descriptionEN: "Large portion, 12 pieces", price: 8, available: true, allergens: ["glutine", "latte"] },
        ],
      },
      {
        name: "Insalate e Contorni",
        nameEN: "Salads and Sides",
        items: [
          { name: "Insalata Verde (Piccola)", nameEN: "Green Salad (Small)", description: "Piccola", descriptionEN: "Small portion", price: 3, available: true, allergens: [] },
          { name: "Insalata Verde (Grande)", nameEN: "Green Salad (Large)", description: "Grande", descriptionEN: "Large portion", price: 4, available: true, allergens: [] },
          { name: "Insalata di Pomodori (Piccola)", nameEN: "Tomato Salad (Small)", description: "Piccola", descriptionEN: "Small portion", price: 2.5, available: true, allergens: [] },
          { name: "Insalata di Pomodori (Grande)", nameEN: "Tomato Salad (Large)", description: "Grande", descriptionEN: "Large portion", price: 5, available: true, allergens: [] },
          { name: "Insalatona 1", nameEN: "Large Salad 1", description: "Lattuga, pomodorini, mais, rucola, mozzarella e champignon", descriptionEN: "Lettuce, cherry tomatoes, corn, rocket, mozzarella and champignon", price: 6, available: true, allergens: ["latte"] },
          { name: "Insalatona 2", nameEN: "Large Salad 2", description: "Lattuga, pomodorini, rucola, mozzarella, olive, melanzane e petto di pollo", descriptionEN: "Lettuce, cherry tomatoes, rocket, mozzarella, olives, eggplant and chicken breast", price: 9, available: true, allergens: ["latte"] },
          { name: "Insalatona 3", nameEN: "Large Salad 3", description: "Lattuga, tonno, peperoni, cipolla, rucola e champignon", descriptionEN: "Lettuce, tuna, peppers, onion, rocket and champignon", price: 6, available: true, allergens: ["pesce"] },
          { name: "Patate al Forno (Piccole)", nameEN: "Roasted Potatoes (Small)", description: "Piccola", descriptionEN: "Small portion", price: 4, available: true, allergens: [] },
          { name: "Patate al Forno (Grandi)", nameEN: "Roasted Potatoes (Large)", description: "Grande", descriptionEN: "Large portion", price: 8, available: true, allergens: [] },
          { name: "Patatine Fritte (Piccole)", nameEN: "French Fries (Small)", description: "Piccola", descriptionEN: "Small portion", price: 3.5, available: true, allergens: [] },
          { name: "Patatine Fritte (Grandi)", nameEN: "French Fries (Large)", description: "Grande", descriptionEN: "Large portion", price: 8, available: true, allergens: [] },
          { name: "Verdure Grigliate", nameEN: "Grilled Vegetables", description: "Melanzane e zucchine", descriptionEN: "Eggplant and zucchini", price: 5, available: true, allergens: [] },
          { name: "Verdure Lessate", nameEN: "Boiled Vegetables", description: "In base alla disponibilità", descriptionEN: "Depending on availability", price: 3, available: true, allergens: [] },
        ],
      },
    ],
  },
  {
    slug: "primi",
    nameIT: "Primi Piatti",
    nameEN: "First Courses",
    image: "/airport-primi.webp",
    groups: [
      {
        name: "Pasta",
        nameEN: "Pasta",
        items: [
          { name: "Spaghetti alle Vongole", nameEN: "Spaghetti with Clams", description: "Spaghetti con vongole fresche", descriptionEN: "Spaghetti with fresh clams", price: 11, available: true, allergens: ["glutine", "molluschi"] },
          { name: "Spaghetti ai Frutti di Mare", nameEN: "Seafood Spaghetti", description: "Spaghetti con frutti di mare misti", descriptionEN: "Spaghetti with mixed seafood", price: 14, available: true, allergens: ["glutine", "molluschi", "crostacei"] },
          { name: "Spaghetti alle Cozze", nameEN: "Spaghetti with Mussels", description: "Spaghetti con cozze", descriptionEN: "Spaghetti with mussels", price: 8, available: true, allergens: ["glutine", "molluschi"] },
          { name: "Spaghetti alla Carbonara", nameEN: "Carbonara Spaghetti", description: "Uova, pancetta e formaggio", descriptionEN: "Eggs, bacon and cheese", price: 8, available: true, allergens: ["glutine", "uova", "latte"] },
          { name: "Spaghetti all'Usu Nuescru", nameEN: "Traditional Local Spaghetti", description: "Aglio, olio, peperoncino, olive, pomodorini, acciughe e capperi", descriptionEN: "Garlic, olive oil, chili pepper, olives, cherry tomatoes, anchovies and capers", price: 7.5, available: true, allergens: ["glutine", "pesce"] },
          { name: "Spaghetti Aglio, Olio e Peperoncino", nameEN: "Garlic, Oil and Chili Spaghetti", description: "Ricetta tradizionale", descriptionEN: "Traditional recipe", price: 6, available: true, allergens: ["glutine"] },
          { name: "Tagliatelle Mare e Monti", nameEN: "Sea and Mountain Tagliatelle", description: "Tagliatelle con ingredienti di mare e terra", descriptionEN: "Tagliatelle with seafood and land ingredients", price: 12, available: true, allergens: ["glutine", "crostacei"] },
          { name: "Tortellini Panna, Prosciutto e Funghi", nameEN: "Tortellini with Cream, Ham and Mushrooms", description: "Panna, prosciutto cotto e funghi", descriptionEN: "Cream, cooked ham and mushrooms", price: 10, available: true, allergens: ["glutine", "latte"] },
          { name: "Trofie alla Norcia", nameEN: "Norcia Style Trofie", description: "Salsiccia fresca e funghi porcini", descriptionEN: "Fresh sausage and porcini mushrooms", price: 10, available: true, allergens: ["glutine"] },
          { name: "Trofie Gamberi e Pesto", nameEN: "Trofie with Shrimp and Pesto", description: "Gamberi e pesto", descriptionEN: "Shrimp and pesto sauce", price: 9.5, available: true, allergens: ["glutine", "crostacei", "frutta_a_guscio"] },
          { name: "Trofie Speck, Zucchine e Funghi", nameEN: "Trofie with Speck, Zucchini and Mushrooms", description: "Speck, zucchine e funghi", descriptionEN: "Speck, zucchini and mushrooms", price: 9.5, available: true, allergens: ["glutine"] },
        ],
      },
      {
        name: "Risotti e Zuppe",
        nameEN: "Risottos and Soups",
        items: [
          { name: "Risotto ai Frutti di Mare", nameEN: "Seafood Risotto", description: "Risotto con frutti di mare", descriptionEN: "Risotto with mixed seafood", price: 14, available: true, allergens: ["molluschi", "crostacei"] },
          { name: "Risotto ai 4 Formaggi", nameEN: "Four Cheese Risotto", description: "Risotto cremoso ai quattro formaggi", descriptionEN: "Creamy risotto with four cheeses", price: 9, available: true, allergens: ["latte"] },
          { name: "Risotto ai Funghi", nameEN: "Mushroom Risotto", description: "Risotto ai funghi", descriptionEN: "Mushroom risotto", price: 8, available: true, allergens: [] },
          { name: "Zuppa di Legumi Vari", nameEN: "Mixed Legume Soup", description: "Ceci, fagioli e lenticchie (non sempre disponibile)", descriptionEN: "Chickpeas, beans and lentils (not always available)", price: 6, available: true, allergens: [] },
        ],
      },
    ],
  },
  {
    slug: "secondi-carne",
    nameIT: "Secondi di Carne",
    nameEN: "Meat Main Courses",
    image: "/airport-secondicarne.webp",
    groups: [
      {
        name: "Secondi di Carne",
        nameEN: "Meat Main Courses",
        items: [
          { name: "Bistecca di Vitello alla Griglia", nameEN: "Grilled Veal Steak", description: "Bistecca di vitello cotta alla griglia", descriptionEN: "Grilled veal steak", price: 8, available: true, allergens: [] },
          { name: "Bistecca di Vitello alla Pizzaiola", nameEN: "Veal Steak Pizzaiola Style", description: "Bistecca di vitello con pomodoro, origano e aromi", descriptionEN: "Veal steak with tomato sauce, oregano and herbs", price: 9, available: true, allergens: [] },
          { name: "Costata di Maiale alla Griglia", nameEN: "Grilled Pork Chop", description: "Costata di maiale cotta alla griglia", descriptionEN: "Grilled pork chop", price: 7.5, available: true, allergens: [] },
          { name: "Cotoletta alla Milanese", nameEN: "Milanese Cutlet", description: "Cotoletta di maiale o pollo impanata", descriptionEN: "Breaded pork or chicken cutlet", price: 9, available: true, allergens: ["glutine"] },
          { name: "Grigliata Mista di Carne", nameEN: "Mixed Grilled Meat", description: "Costata di maiale, salsiccia, bombette e agnello", descriptionEN: "Pork chop, sausage, meat rolls and lamb", price: 11, available: true, allergens: [] },
          { name: "Petto di Pollo alla Griglia", nameEN: "Grilled Chicken Breast", description: "Petto di pollo cotto alla griglia", descriptionEN: "Grilled chicken breast", price: 8, available: true, allergens: [] },
          { name: "Saltimbocca alla Romana", nameEN: "Roman Style Saltimbocca", description: "Carne di maiale con prosciutto cotto e formaggio", descriptionEN: "Pork with cooked ham and cheese", price: 9, available: true, allergens: ["latte"] },
          { name: "Scaloppina ai Funghi", nameEN: "Mushroom Escalope", description: "Scaloppina di maiale con funghi", descriptionEN: "Pork escalope with mushrooms", price: 8, available: true, allergens: [] },
          { name: "Scaloppina al Vino", nameEN: "Wine Escalope", description: "Scaloppina di maiale sfumata al vino", descriptionEN: "Pork escalope cooked with wine", price: 8, available: true, allergens: ["solfiti"] },
          { name: "Scaloppina al Limone", nameEN: "Lemon Escalope", description: "Scaloppina di maiale al limone", descriptionEN: "Pork escalope with lemon", price: 8.5, available: true, allergens: [] },
          { name: "Straccetti di Pollo", nameEN: "Chicken Strips", description: "Con rucola e grana", descriptionEN: "With rocket salad and parmesan", price: 8.5, available: true, allergens: ["latte"] },
          { name: "Straccetti di Vitello", nameEN: "Veal Strips", description: "Con rucola e grana", descriptionEN: "With rocket salad and parmesan", price: 11, available: true, allergens: ["latte"] },
          { name: "Tagliata di Manzo Primavera", nameEN: "Spring Beef Tagliata", description: "Con rucola, grana e pomodorini", descriptionEN: "With rocket salad, parmesan and cherry tomatoes", price: 18, available: true, allergens: ["latte"] },
          { name: "Tagliata di Manzo ai Funghi Porcini", nameEN: "Beef Tagliata with Porcini Mushrooms", description: "Tagliata di manzo con funghi porcini", descriptionEN: "Sliced beef steak with porcini mushrooms", price: 18, available: true, allergens: [] },
        ],
      },
    ],
  },
  {
    slug: "secondi-pesce",
    nameIT: "Secondi di Pesce",
    nameEN: "Fish Main Courses",
    image: "/airport-secondipesce.webp",
    groups: [
      {
        name: "Secondi di Pesce",
        nameEN: "Fish Main Courses",
        items: [
          { name: "Calamari alla Griglia", nameEN: "Grilled Squid", description: "Calamari freschi cotti alla griglia", descriptionEN: "Fresh squid grilled to perfection", price: 13, available: true, allergens: ["molluschi"] },
          { name: "Fritto Misto", nameEN: "Mixed Fried Seafood", description: "Calamari e gamberi fritti", descriptionEN: "Fried squid and shrimp", price: 12, available: true, allergens: ["glutine", "molluschi", "crostacei"] },
          { name: "Fritto di Paranza", nameEN: "Mixed Small Fish Fry", description: "Pesce misto fritto (non sempre disponibile)", descriptionEN: "Mixed fried local fish (not always available)", price: 14, available: false, allergens: ["pesce", "glutine"] },
          { name: "Gamberoni Arrosto", nameEN: "Grilled King Prawns", frozen: true, description: "Gamberoni cotti alla brace", descriptionEN: "King prawns grilled over charcoal", price: 15, available: true, allergens: ["crostacei"] },
          { name: "Grigliata Mista di Pesce", nameEN: "Mixed Fish Grill", description: "Pesce spada, gamberi e seppie", descriptionEN: "Swordfish, prawns and cuttlefish", price: 16.5, available: true, allergens: ["pesce", "crostacei", "molluschi"] },
          { name: "Seppie alla Griglia", nameEN: "Grilled Cuttlefish", frozen: true, description: "Seppie fresche alla griglia", descriptionEN: "Fresh grilled cuttlefish", price: 11.5, available: true, allergens: ["molluschi"] },
          { name: "Spigola o Orata al Forno con Olive", nameEN: "Sea Bass or Sea Bream Baked with Olives", description: "Pesce al forno con olive", descriptionEN: "Oven baked fish with olives", price: 12, available: true, allergens: ["pesce"] },
          { name: "Spigola o Orata al Sale", nameEN: "Sea Bass or Sea Bream in Salt Crust", description: "Pesce cotto in crosta di sale", descriptionEN: "Fish baked in a salt crust", price: 13, available: true, allergens: ["pesce"] },
          { name: "Spigola o Orata Arrosto", nameEN: "Grilled Sea Bass or Sea Bream", description: "Pesce cotto alla brace", descriptionEN: "Fish grilled over charcoal", price: 13, available: true, allergens: ["pesce"] },
          { name: "Spigola o Orata al Cartoccio", nameEN: "Sea Bass or Sea Bream in Foil", description: "Pesce cotto al cartoccio", descriptionEN: "Fish baked in foil", price: 14, available: true, allergens: ["pesce"] },
        ],
      },
    ],
  },
  {
    slug: "bevande",
    nameIT: "Bevande",
    nameEN: "Drinks",
    image: "/airport-bevande.webp",
    groups: [
      {
        name: "Analcoliche",
        nameEN: "Non-Alcoholic",
        items: [
          { name: "Acqua Naturale o Frizzante", nameEN: "Still or Sparkling Water", description: "Bottiglia", descriptionEN: "Bottle", price: 2, available: true, allergens: [] },
          { name: "Aranciata 1L", nameEN: "Orange Soda 1L", price: 3, available: true, allergens: [] },
          { name: "Coca-Cola 1L", nameEN: "Coca-Cola 1L", price: 4, available: true, allergens: [] },
        ],
      },
      {
        name: "Birre",
        nameEN: "Beers",
        items: [
          { name: "Birra Raffo 33cl", nameEN: "Raffo Beer 33cl", price: 2, available: true, allergens: ["glutine"] },
          { name: "Birra Raffo 66cl", nameEN: "Raffo Beer 66cl", price: 3, available: true, allergens: ["glutine"] },
          { name: "Birra Dreher 66cl", nameEN: "Dreher Beer 66cl", description: "Birra chiara", descriptionEN: "Lager beer", price: 3, available: true, allergens: ["glutine"] },
          { name: "Birra Moretti Baffo d'Oro", nameEN: "Moretti Baffo d'Oro Beer", description: "Birra chiara", descriptionEN: "Blonde beer", price: 4, available: true, allergens: ["glutine"] },
          { name: "Birra Heineken 66cl", nameEN: "Heineken Beer 66cl", description: "Birra lager", descriptionEN: "Lager beer", price: 4.5, available: true, allergens: ["glutine"] },
        ],
      },
      {
        name: "Vini",
        nameEN: "Wines",
        items: [
          { name: "Vino Bianco della Casa 0,25L", nameEN: "House White Wine 0.25L", price: 2.5, available: true, allergens: ["solfiti"] },
          { name: "Vino Bianco della Casa 0,50L", nameEN: "House White Wine 0.50L", price: 4, available: true, allergens: ["solfiti"] },
          { name: "Vino Bianco della Casa 1L", nameEN: "House White Wine 1L", price: 7, available: true, allergens: ["solfiti"] },
          { name: "Vino Rosso della Casa 0,25L", nameEN: "House Red Wine 0.25L", price: 3, available: true, allergens: ["solfiti"] },
          { name: "Vino Rosso della Casa 0,50L", nameEN: "House Red Wine 0.50L", price: 4.5, available: true, allergens: ["solfiti"] },
          { name: "Vino Rosso della Casa 1L", nameEN: "House Red Wine 1L", price: 8.5, available: true, allergens: ["solfiti"] },
        ],
      },
    ],
  },
  {
    slug: "dolci",
    nameIT: "Dolci e Gelati",
    nameEN: "Desserts and Ice Cream",
    image: "/airport-dolci.webp",
    groups: [
      {
        name: "Dolci e Gelati",
        nameEN: "Desserts and Ice Cream",
        items: [
          { name: "Crostata al Trancio", nameEN: "Slice of Tart", description: "Dolce artigianale del giorno", descriptionEN: "Homemade tart of the day", price: 3, available: true, allergens: ["glutine", "latte", "uova"] },
          { name: "Dolce della Casa", nameEN: "House Dessert", description: "Preparazione artigianale secondo disponibilità", descriptionEN: "Homemade dessert depending on availability", price: 4.5, available: true, allergens: ["glutine", "latte", "uova"] },
          { name: "Coppa Gelato", nameEN: "Ice Cream Cup", description: "Gelato assortito servito in coppa", descriptionEN: "Assorted ice cream served in a cup", price: 5, available: true, allergens: ["latte"] },
          { name: "Tartufo Gelato", nameEN: "Ice Cream Truffle", description: "Dessert gelato", descriptionEN: "Ice cream dessert", price: 4, available: true, allergens: ["latte"] },
          { name: "Tiramisù Gelato", nameEN: "Tiramisu Ice Cream", description: "Dessert gelato al gusto tiramisù", descriptionEN: "Tiramisu flavored ice cream dessert", price: 4, available: true, allergens: ["latte", "uova"] },
        ],
      },
    ],
  },
];