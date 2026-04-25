/*
 * PARADOX TEST — Page 2
 * Design: Quiet Modernist / Terminal
 * Theme: #0D0D0D bg, #39FF14 phosphor green text
 * Font: Space Mono throughout
 * Interaction: Any input passes. Glitch on submit → navigate to /specification
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

type Phase =
  | "boot"
  | "prompt"
  | "input"
  | "glitching"
  | "done";

const BOOT_LINES = [
  "COHERENT CABAL INTERFACE v0.1",
  "initializing paradox resolution engine...",
  "loading contradiction matrix............",
  "cross-referencing identity vectors......",
  "calibrating resonance threshold.........",
  "",
  "SYSTEM READY",
  "",
];

const GLITCH_CHARS = "!@#$%^&*<>?/\\|[]{}~`±§";

function scramble(text: string, progress: number): string {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i / text.length < progress) return char;
      return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    })
    .join("");
}

export default function Paradox() {
  const [, navigate] = useLocation();
  const [phase, setPhase] = useState<Phase>("boot");
  const [bootIndex, setBootIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [glitchText, setGlitchText] = useState("");
  const [showGlitchLayers, setShowGlitchLayers] = useState(false);
  const [screenFlash, setScreenFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Boot sequence: reveal lines one by one
  useEffect(() => {
    if (phase !== "boot") return;
    if (bootIndex >= BOOT_LINES.length) {
      setTimeout(() => setPhase("prompt"), 400);
      return;
    }
    const delay = bootIndex === 0 ? 300 : 120;
    const t = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, BOOT_LINES[bootIndex]]);
      setBootIndex((i) => i + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [phase, bootIndex]);

  // Focus input when prompt phase starts
  useEffect(() => {
    if (phase === "input") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [phase]);

  // Prompt phase: show the question after a beat
  useEffect(() => {
    if (phase !== "prompt") return;
    const t = setTimeout(() => setPhase("input"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phase !== "input") return;
    setPhase("glitching");
    runGlitch();
  };

  const runGlitch = () => {
    const message = "PARADOX RESOLVED — ACCESS GRANTED";
    let progress = 0;
    setShowGlitchLayers(true);

    const interval = setInterval(() => {
      progress += 0.06;
      setGlitchText(scramble(message, progress));
      if (progress >= 1) {
        clearInterval(interval);
        setGlitchText(message);
        setShowGlitchLayers(false);
        setScreenFlash(true);
        setTimeout(() => {
          setScreenFlash(false);
          setPhase("done");
          navigate("/specification");
        }, 700);
      }
    }, 40);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div
      ref={containerRef}
      className="page-paradox"
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: phase === "input" ? "text" : "default",
        filter: screenFlash ? "invert(1)" : "none",
        transition: screenFlash ? "none" : "filter 0.1s",
      }}
      onClick={() => phase === "input" && inputRef.current?.focus()}
    >
      {/* Scanline overlay */}
      <div className="scanline-overlay" />

      {/* CRT noise texture */}
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.6,
        }}
      />

      {/* Glitch layers */}
      {showGlitchLayers && (
        <>
          <div
            className="glitch-layer glitch-layer-1 font-mono"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              zIndex: 10,
            }}
          >
            {glitchText}
          </div>
          <div
            className="glitch-layer glitch-layer-2 font-mono"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              zIndex: 10,
            }}
          >
            {glitchText}
          </div>
        </>
      )}

      {/* Terminal content */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "4rem 2rem 6rem",
          position: "relative",
          zIndex: 5,
          minHeight: "100vh",
        }}
      >
        {/* Back link */}
        <div style={{ marginBottom: "3rem" }}>
          <a
            href="/"
            className="font-mono"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              color: "#39FF14",
              opacity: 0.4,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            ← BACK
          </a>
        </div>

        {/* Boot lines */}
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className="font-mono"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              lineHeight: 1.8,
              color: line === "" ? "transparent" : line.startsWith("COHERENT") || line === "SYSTEM READY" ? "#39FF14" : "rgba(57,255,20,0.6)",
              letterSpacing: "0.04em",
              userSelect: "none",
              minHeight: line === "" ? "1.4rem" : "auto",
            }}
          >
            {line || "\u00A0"}
          </div>
        ))}

        {/* Prompt */}
        {(phase === "input" || phase === "glitching") && (
          <div style={{ marginTop: "2rem" }}>
            <div
              className="font-mono"
              style={{
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                lineHeight: 1.7,
                color: "#39FF14",
                marginBottom: "0.5rem",
                letterSpacing: "0.03em",
              }}
            >
              PARADOX TEST
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
                lineHeight: 1.8,
                color: "rgba(57,255,20,0.7)",
                marginBottom: "1.5rem",
                letterSpacing: "0.02em",
              }}
            >
              Enter anything to proceed. A specification. A grocery list. A contradiction.
              <br />
              Anything passes. Press Enter.
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                className="font-mono"
                style={{ color: "#39FF14", fontSize: "0.9rem", opacity: 0.7, userSelect: "none" }}
              >
                &gt;
              </span>
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={phase === "glitching"}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                className="font-mono cursor-blink"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#39FF14",
                  fontSize: "clamp(0.85rem, 2vw, 1rem)",
                  letterSpacing: "0.04em",
                  width: "100%",
                  caretColor: "#39FF14",
                }}
                placeholder=""
              />
            </form>

            <div
              style={{
                marginTop: "0.5rem",
                borderTop: "1px solid rgba(57,255,20,0.15)",
                paddingTop: "0.5rem",
              }}
            />
          </div>
        )}

        {/* Glitch resolve text */}
        {phase === "glitching" && (
          <div
            className="font-mono"
            style={{
              marginTop: "2rem",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              color: "#39FF14",
              letterSpacing: "0.08em",
              position: "relative",
              zIndex: 20,
            }}
          >
            {glitchText}
          </div>
        )}
      </div>
    </div>
  );
}
