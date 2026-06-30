import { createClient } from "@supabase/supabase-js";
import MenuApp from "@/components/MenuApp";
import { MenuCategory } from "@/data/menu";

export const revalidate = 60;

const CLIENT_ID = "21378b2e-1a6a-47b7-a96f-ab59dd9021a2";

const STATIC_IMAGES: Record<string, string> = {
  "pizze": "/airport-pizze.webp",
  "pizze-speciali": "/airport-pizzenew.webp",
  "antipasti": "/airport-antipasti.webp",
  "primi": "/airport-primi.webp",
  "secondi-carne": "/airport-secondicarne.webp",
  "secondi-pesce": "/airport-secondipesce.webp",
  "bevande": "/airport-bevande.webp",
  "dolci": "/airport-dolci.webp",
};

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23D4C4B0'/%3E%3Ctext x='200' y='190' font-family='Arial' font-size='28' font-weight='bold' fill='%231B3A6B' text-anchor='middle'%3ENEW%3C/text%3E%3Ctext x='200' y='225' font-family='Arial' font-size='14' fill='%235A5A5A' text-anchor='middle'%3EImmagine in arrivo%3C/text%3E%3C/svg%3E";

async function getMenu(): Promise<MenuCategory[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("manji_menus")
    .select("menu_data")
    .eq("client_id", CLIENT_ID)
    .single();

  if (error || !data?.menu_data?.categories) return [];

  const categories = data.menu_data.categories as any[];

  return categories
    .filter((cat: any) => !cat.hidden)
    .map((cat: any) => {
      const slug = cat.id ?? cat.slug;
      const staticImg = STATIC_IMAGES[slug];
      const dbImg = cat.image;
      const isPlaceholderPath = dbImg && dbImg.startsWith("/menu/");
      const image = staticImg ?? (isPlaceholderPath ? PLACEHOLDER_IMAGE : dbImg) ?? PLACEHOLDER_IMAGE;

      return {
        slug,
        nameIT: cat.name?.it ?? cat.nameIT ?? cat.name ?? "",
        nameEN: cat.name?.en ?? cat.nameEN ?? "",
        image,
        unavailable: cat.unavailable === true,
        groups: (cat.groups ?? [{ name: cat.name?.it ?? "", items: cat.items ?? [] }]).map((g: any) => ({
          name: g.name?.it ?? g.name ?? "",
          nameEN: g.name?.en ?? g.nameEN ?? "",
          items: (g.items ?? []).map((item: any) => ({
            name: item.name?.it ?? item.name ?? "",
            nameEN: item.name?.en ?? item.nameEN ?? "",
            description: item.desc?.it ?? item.description ?? "",
            descriptionEN: item.desc?.en ?? item.descriptionEN ?? "",
            price: item.price != null ? parseFloat(item.price) : null,
            available: item.available !== false,
            frozen: item.frozen ?? false,
            allergens: item.allergens ?? [],
          })),
        })),
      };
    });
}

export default async function Home() {
  const categories = await getMenu();
  return <MenuApp initialCategories={categories} />;
}