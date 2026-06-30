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
  unavailable?: boolean;
  groups: MenuGroup[];
}

// MENU_CATEGORIES rimosso: i dati ora arrivano da Supabase via page.tsx