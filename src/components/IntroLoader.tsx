"use client";
import { useEffect, useState } from "react";

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"pre" | "enter" | "hold" | "exit">("pre");

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("enter"), 80);
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2600);
    const t3 = setTimeout(() => onDone(), 3350);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  const isExit = phase === "exit";
  const isActive = phase === "enter" || phase === "hold";

  return (
    <>
      <style>{`
        @keyframes air-arrive {
          0%   { transform: scale(0) rotate(-180deg); opacity: 0; filter: blur(10px); }
          60%  { transform: scale(1.15) rotate(6deg); opacity: 1; filter: blur(0); }
          80%  { transform: scale(0.96) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes air-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes air-exit {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        @keyframes air-text {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes air-line {
          0%   { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes air-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes air-ring {
          0%   { transform: scale(0.6); opacity: 0.5; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
      <div style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: "#FAF6F0",
        opacity: isExit ? 0 : 1,
        transition: isExit ? "opacity 0.75s ease" : "none",
        pointerEvents: isExit ? "none" : "all",
        overflow: "hidden",
      }}>
        {/* Anelli glow blu */}
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            position: "absolute",
            width: i * 180, height: i * 180,
            borderRadius: "50%",
            border: `1px solid rgba(46,126,219,${0.15 - i * 0.03})`,
            animation: isActive ? `air-ring ${2.5 + i * 0.4}s ease-out ${i * 0.3}s infinite` : "none",
            opacity: 0,
          }} />
        ))}

        {/* Glow radiale */}
        <div style={{
          position: "absolute",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,58,107,0.08) 0%, transparent 70%)",
          animation: isActive ? "air-glow 2.5s ease-in-out infinite" : "none",
        }} />

        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Airport Restaurant"
          style={{
            width: 140, height: 140, objectFit: "contain", position: "relative", zIndex: 2,
            animation: isActive
              ? "air-arrive 0.9s cubic-bezier(0.34,1.4,0.64,1) forwards, air-float 3s ease-in-out 1.2s infinite"
              : isExit ? "air-exit 0.6s ease forwards" : "none",
            opacity: phase === "pre" ? 0 : undefined,
          }}
        />

        {/* Testo */}
        <div style={{
          marginTop: 28, textAlign: "center",
          animation: isActive ? "air-text 0.6s ease 0.8s both" : "none",
          opacity: phase === "pre" || phase === "enter" ? 0 : undefined,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 10 }}>
            <div style={{ height: 1, width: 44, background: "linear-gradient(to right, transparent, rgba(27,58,107,0.45))", transformOrigin: "right", animation: isActive ? "air-line 0.5s ease 1s both" : "none" }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B3A6B", boxShadow: "0 0 8px rgba(27,58,107,0.3)" }} />
            <div style={{ height: 1, width: 44, background: "linear-gradient(to left, transparent, rgba(27,58,107,0.45))", transformOrigin: "left", animation: isActive ? "air-line 0.5s ease 1s both" : "none" }} />
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem", fontWeight: 700,
            color: "#1A1A1A", letterSpacing: "0.04em", lineHeight: 1.1,
          }}>
            Airport Restaurant
          </h1>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem", color: "#1B3A6B",
            letterSpacing: "0.25em", textTransform: "uppercase",
            marginTop: 7, fontWeight: 400,
          }}>
            Dal 1982
          </p>
        </div>
      </div>
    </>
  );
}