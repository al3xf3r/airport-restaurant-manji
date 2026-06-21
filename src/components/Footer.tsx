"use client";
import { useState } from "react";
import { Lang } from "@/data/menu";

const DAYS_IT = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const HOURS = [
  { day: 0, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
  { day: 1, closed: true },
  { day: 2, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
  { day: 3, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
  { day: 4, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
  { day: 5, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
  { day: 6, slots: ["12:00 - 15:00", "18:30 - 22:30"] },
];

export default function Footer({ lang }: { lang: Lang }) {
  const [hoursOpen, setHoursOpen] = useState(false);
  const today = new Date().getDay();
  const DAYS = lang === "it" ? DAYS_IT : DAYS_EN;

  const CLOSED       = lang === "it" ? "Chiuso"              : "Closed";
  const TODAY_LBL    = lang === "it" ? "oggi"                : "today";
  const HOURS_LABEL  = lang === "it" ? "Orari di apertura"   : "Opening hours";
  const CALL         = lang === "it" ? "Chiama"              : "Call";
  const DIRECTIONS   = lang === "it" ? "Indicazioni"         : "Directions";
  const MENU_SUB     = lang === "it" ? "Vuoi un menu digitale per il tuo locale?" : "Want a digital menu for your venue?";
  const MENU_CTA     = lang === "it" ? "Crea il tuo menu digitale" : "Create your digital menu";
  const DEV          = lang === "it" ? "Sviluppato da"        : "Developed by";

  return (
    <footer style={{ background: "#1B3A6B", color: "#FFFFFF", padding: "44px 20px 36px" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        {/* Nome */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 700, color: "#F5F5F5", lineHeight: 1.1 }}>
            Airport Restaurant
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(46,126,219,0.8)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 7 }}>
            Dal 1982
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", margin: "20px 0" }} />

        {/* Indirizzo */}
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
            Via XXV Luglio 81/A<br />Grottaglie (TA)
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
          {[
            {
              href: "tel:+390995622505", label: CALL,
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            },
            {
              href: "https://maps.app.goo.gl/55GQoF4ZYpP38Gev9?g_st=ac", label: DIRECTIONS,
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            },
          ].map((btn) => (
            <a key={btn.href} href={btn.href} target={btn.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#2E7EDB", color: "#FFFFFF", borderRadius: 10, padding: "11px 22px", fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", fontWeight: 600, textDecoration: "none" }}>
              {btn.icon}{btn.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
          <a href="https://www.instagram.com/ristoranteairport?igsh=MXhibTZzZGpraHplMw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.6)", display: "flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/18nUwVAkPe/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "rgba(255,255,255,0.6)", display: "flex" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
        </div>

        {/* Orari */}
        <div style={{ marginBottom: 24 }}>
          <button onClick={() => setHoursOpen(!hoursOpen)} style={{
            width: "100%", background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(46,126,219,0.2)", borderRadius: 10,
            padding: "13px 16px", display: "flex", alignItems: "center",
            justifyContent: "space-between", cursor: "pointer",
            color: "#F5F5F5", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 500,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(46,126,219,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {HOURS_LABEL}
            </span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: hoursOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {hoursOpen && (
            <div style={{ marginTop: 6, background: "rgba(255,255,255,0.03)", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(46,126,219,0.1)" }}>
              {HOURS.map((h) => {
                const isToday = h.day === today;
                return (
                  <div key={h.day} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 16px",
                    background: isToday ? "rgba(46,126,219,0.1)" : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", color: isToday ? "#F5F5F5" : "rgba(255,255,255,0.65)", fontWeight: isToday ? 700 : 400 }}>
                      {DAYS[h.day]}
                      {isToday && <span style={{ marginLeft: 7, fontSize: "0.67rem", background: "rgba(46,126,219,0.3)", borderRadius: 4, padding: "1px 6px", verticalAlign: "middle" }}>{TODAY_LBL}</span>}
                    </span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", color: h.closed ? "rgba(255,255,255,0.3)" : (isToday ? "#2E7EDB" : "rgba(255,255,255,0.65)"), fontWeight: isToday ? 700 : 400 }}>
                      {h.closed ? CLOSED : h.slots?.join(" · ")}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA manji */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", marginBottom: 9 }}>{MENU_SUB}</p>
          <a href="https://manji.hash42.xyz" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "rgba(46,126,219,0.1)", border: "1px solid rgba(46,126,219,0.3)", color: "#2E7EDB", borderRadius: 10, padding: "10px 22px", fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 500, textDecoration: "none" }}>
            {MENU_CTA}
          </a>
        </div>

        {/* Credit */}
        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
            {DEV}{" "}
            <a href="https://hash42.xyz" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontWeight: 500 }}>Hash42</a>
          </p>
        </div>
      </div>
    </footer>
  );
}