"use client";
import { MenuCategory, Lang } from "@/data/menu";

interface HomeViewProps {
  lang: Lang;
  categories: MenuCategory[];
  onSelectCategory: (slug: string) => void;
}

const TITLE: Record<Lang, string> = { it: "Il nostro Menu", en: "Our Menu" };
const SUB: Record<Lang, string>   = { it: "Ristorante · Pizzeria · Dal 1982", en: "Restaurant · Pizzeria · Since 1982" };

export default function HomeView({ lang, categories, onSelectCategory }: HomeViewProps) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px 16px 100px", background: "#FAF6F0", minHeight: "100%" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.4rem", fontWeight: 700,
          color: "#1A1A1A", lineHeight: 1.15, marginBottom: 7,
        }}>
          {TITLE[lang]}
        </h1>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: "0.82rem",
          color: "#5A5A5A", letterSpacing: "0.1em",
          textTransform: "uppercase", fontWeight: 400,
        }}>
          {SUB[lang]}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {categories.map((cat) => {
          const name = lang === "it" ? cat.nameIT : cat.nameEN;
          return (
            <button
              key={cat.slug}
              onClick={() => { if (!cat.unavailable) onSelectCategory(cat.slug); }}
              disabled={cat.unavailable}
              style={{
                position: "relative", borderRadius: 16,
                overflow: "hidden", aspectRatio: "1 / 1",
                border: "none",
                cursor: cat.unavailable ? "default" : "pointer",
                background: "#D4C4B0", padding: 0,
                opacity: cat.unavailable ? 0.55 : 1,
              }}
            >
              <img
                src={cat.image} alt={name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(27,58,107,0.85) 0%, rgba(27,58,107,0.3) 55%, transparent 100%)",
                pointerEvents: "none",
              }} />
              {cat.unavailable && (
                <div style={{
                  position: "absolute", top: 8, right: 8,
                  background: "rgba(27,58,107,0.85)", borderRadius: 6,
                  padding: "3px 8px",
                }}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.62rem",
                    fontWeight: 600, color: "#FFFFFF",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                  }}>
                    {lang === "it" ? "Non disponibile" : "Unavailable"}
                  </span>
                </div>
              )}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 12px" }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem", fontWeight: 700,
                  color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.7)",
                  textAlign: "center", lineHeight: 1.2, display: "block",
                }}>
                  {name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}