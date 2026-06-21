"use client";
import { MENU_CATEGORIES, Lang, Allergen, ALLERGEN_LABELS } from "@/data/menu";

interface CategoryViewProps { slug: string; lang: Lang; }

function fmtPrice(p: number) { return p.toFixed(2).replace(".", ",") + " €"; }

function AllergenBadge({ allergen, lang }: { allergen: Allergen; lang: Lang }) {
  const label = ALLERGEN_LABELS[allergen];
  if (!label) return null;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      background: "rgba(27,58,107,0.08)", border: "1px solid rgba(27,58,107,0.2)",
      borderRadius: 5, padding: "2px 7px",
      fontSize: "0.75rem", fontFamily: "'Jost', sans-serif",
      fontWeight: 500, color: "#1B3A6B", whiteSpace: "nowrap",
    }}>
      {label[lang]}
    </span>
  );
}

export default function CategoryView({ slug, lang }: CategoryViewProps) {
  const cat = MENU_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return null;
  const catName = lang === "it" ? cat.nameIT : cat.nameEN;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px 100px", background: "#FAF6F0", minHeight: "100%" }}>
      {/* Hero */}
      <div style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 160, marginBottom: 24 }}>
        <img src={cat.image} alt={catName} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,58,107,0.82) 0%, rgba(27,58,107,0.25) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 14, left: 16, right: 16 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem", fontWeight: 700,
            color: "#FFFFFF", textShadow: "0 2px 10px rgba(0,0,0,0.5)", lineHeight: 1.15,
          }}>
            {catName}
          </h2>
        </div>
      </div>

      {/* Gruppi */}
      {cat.groups.map((group, gi) => {
        const groupName = lang === "it" ? group.name : (group.nameEN || group.name);
        return (
          <div key={gi} style={{ marginBottom: 8 }}>
            {cat.groups.length > 1 && (
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.45rem", fontWeight: 700,
                color: "#1B3A6B", marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1.5px solid rgba(27,58,107,0.15)",
              }}>
                {groupName}
              </h3>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {group.items.map((item, ii) => {
                const name = lang === "it" ? item.name : (item.nameEN || item.name);
                const desc = lang === "it" ? item.description : item.descriptionEN;
                const allergens = item.allergens ?? [];
                const unavailable = item.available === false;
                return (
                  <div key={ii} style={{ padding: "14px 0", borderBottom: "1px solid rgba(27,58,107,0.08)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.3rem", fontWeight: 600,
                          color: unavailable ? "#AAAAAA" : "#1A1A1A",
                          lineHeight: 1.25, marginBottom: desc ? 4 : 0,
                        }}>
                          {name}
                          {unavailable && (
                            <span style={{ marginLeft: 8, fontSize: "0.72rem", fontFamily: "'Jost', sans-serif", color: "#AAAAAA", fontWeight: 400 }}>
                              {lang === "it" ? "non disponibile" : "unavailable"}
                            </span>
                          )}
                        </p>
                        {desc && (
                          <p style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.9rem", color: "#6A6A6A",
                            lineHeight: 1.45, fontWeight: 300,
                            marginBottom: (allergens.length > 0 || item.frozen) ? 8 : 0,
                          }}>
                            {desc}
                          </p>
                        )}
                        {item.frozen && (
                          <span style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            background: "rgba(27,58,107,0.06)",
                            border: "1px solid rgba(27,58,107,0.18)",
                            borderRadius: 5, padding: "2px 7px", marginBottom: allergens.length > 0 ? 6 : 0,
                            fontSize: "0.72rem", fontFamily: "'Jost', sans-serif",
                            fontWeight: 500, color: "#1B3A6B",
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
                            </svg>
                            {lang === "it" ? "Surgelato" : "Frozen"}
                          </span>
                        )}
                        {allergens.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: (desc || item.frozen) ? 0 : 4 }}>
                            {allergens.map((a) => <AllergenBadge key={a} allergen={a} lang={lang} />)}
                          </div>
                        )}
                      </div>
                      {item.price != null && (
                        <span style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "1.15rem", fontWeight: 700,
                          color: unavailable ? "#AAAAAA" : "#B8860B",
                          whiteSpace: "nowrap", paddingTop: 1,
                        }}>
                          {fmtPrice(item.price)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Note legali */}
      <div style={{ marginTop: 32 }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.5, fontWeight: 300, marginBottom: 6 }}>
          {lang === "it"
            ? "Gli allergeni indicati sono basati sugli ingredienti dichiarati. Per allergie gravi o intolleranze, si prega di informare il personale prima di ordinare."
            : "Allergens listed are based on declared ingredients. For severe allergies or intolerances, please inform staff before ordering."}
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#999", lineHeight: 1.5, fontWeight: 300 }}>
          {lang === "it"
            ? "I prodotti contrassegnati con ❄ sono ottenuti da prodotti congelati o surgelati."
            : "Products marked with ❄ are obtained from frozen products."}
        </p>
      </div>
    </div>
  );
}