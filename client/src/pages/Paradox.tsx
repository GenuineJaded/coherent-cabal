/*
 * PARADOX TEST — Page 2
 * Design: Quiet Modernist / Terminal
 * Theme: #0D0D0D bg, #39FF14 phosphor green text
 * Font: Space Mono throughout
 * Layout: No-scroll — everything fits in 100vh
 * Prompt: Poem + dimmed subtext. Anything passes.
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

type Phase = "boot" | "prompt" | "input" | "glitching" | "done";

const BOOT_LINES = [
  "COHERENT CABAL // INTERFACE v0.1",
  "scanning for coherence signature........",
  "mapping contradiction topology..........",
  "resolving paradox threshold..............",
  "",
  "READY",
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

  // Boot sequence
  useEffect(() => {
    if (phase !== "boot") return;
    if (bootIndex >= BOOT_LINES.length) {
      setTimeout(() => setPhase("prompt"), 300);
      return;
    }
    const delay = bootIndex === 0 ? 250 : 100;
    const t = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, BOOT_LINES[bootIndex]]);
      setBootIndex((i) => i + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [phase, bootIndex]);

  useEffect(() => {
    if (phase !== "prompt") return;
    const t = setTimeout(() => setPhase("input"), 400);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "input") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [phase]);

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();
    if (phase !== "input") return;
    setPhase("glitching");
    runGlitch();
  };

  const runGlitch = () => {
    const message = "PARADOX RECEIVED — COHERENCE CONFIRMED";
    let progress = 0;
    setShowGlitchLayers(true);

    const interval = setInterval(() => {
      progress += 0.055;
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
        }, 750);
      }
    }, 40);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div
      className="page-paradox"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        filter: screenFlash ? "invert(1)" : "none",
        transition: screenFlash ? "none" : "filter 0.1s",
      }}
      onClick={() => phase === "input" && inputRef.current?.focus()}
    >
      {/* Scanline */}
      <div className="scanline-overlay" />

      {/* Glitch layers */}
      {showGlitchLayers && (
        <>
          <div className="glitch-layer glitch-layer-1 font-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(0.8rem, 2vw, 1rem)", zIndex: 10 }}>
            {glitchText}
          </div>
          <div className="glitch-layer glitch-layer-2 font-mono" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(0.8rem, 2vw, 1rem)", zIndex: 10 }}>
            {glitchText}
          </div>
        </>
      )}

      {/* Terminal content — flex column fills viewport */}
      <div
        style={{
          maxWidth: "680px",
          width: "100%",
          margin: "0 auto",
          padding: "3rem 2rem 2rem",
          position: "relative",
          zIndex: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top section: boot + prompt */}
        <div>
          {/* Boot lines */}
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className="font-mono"
              style={{
                fontSize: "clamp(0.62rem, 1.3vw, 0.75rem)",
                lineHeight: 1.7,
                color: line === "READY" || line.startsWith("COHERENT") ? "#39FF14" : "rgba(57,255,20,0.5)",
                letterSpacing: "0.04em",
                userSelect: "none",
                minHeight: line === "" ? "1rem" : "auto",
              }}
            >
              {line || "\u00A0"}
            </div>
          ))}

          {/* Prompt + input */}
          {(phase === "input" || phase === "glitching") && (
            <div style={{ marginTop: "1.5rem" }}>

              {/* Poem */}
              <div
                className="font-mono"
                style={{
                  fontSize: "clamp(0.82rem, 1.8vw, 0.96rem)",
                  lineHeight: 2.1,
                  color: "#39FF14",
                  marginBottom: "1.75rem",
                  letterSpacing: "0.03em",
                }}
              >
                Enter inside a box<br />
                Filled with paradox<br />
                All that's left needed from you<br />
                Is one who's also false but true
              </div>

              {/* Dimmed subtext */}
              <div
                className="font-mono"
                style={{
                  fontSize: "clamp(0.65rem, 1.4vw, 0.75rem)",
                  lineHeight: 1.9,
                  color: "rgba(57,255,20,0.38)",
                  marginBottom: "1.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                Even an enter in is an entrance thin.
              </div>

              {/* Input line */}
              <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="font-mono" style={{ color: "#39FF14", fontSize: "0.9rem", opacity: 0.7, userSelect: "none" }}>
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
                    fontSize: "clamp(0.82rem, 1.8vw, 0.96rem)",
                    letterSpacing: "0.04em",
                    width: "100%",
                    caretColor: "#39FF14",
                  }}
                />
              </form>

              <div style={{ marginTop: "0.5rem", borderTop: "1px solid rgba(57,255,20,0.12)", paddingTop: "1.25rem" }}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={phase === "glitching"}
                  className="font-mono"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(57,255,20,0.35)",
                    color: "#39FF14",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    padding: "0.55rem 1.4rem",
                    cursor: phase === "glitching" ? "not-allowed" : "pointer",
                    opacity: phase === "glitching" ? 0.4 : 1,
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (phase !== "glitching") {
                      e.currentTarget.style.borderColor = "rgba(57,255,20,0.85)";
                      e.currentTarget.style.background = "rgba(57,255,20,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.35)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  PROCEED
                </button>
              </div>
            </div>
          )}

          {/* Glitch resolve */}
          {phase === "glitching" && (
            <div className="font-mono" style={{ marginTop: "1.5rem", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)", color: "#39FF14", letterSpacing: "0.08em", zIndex: 20, position: "relative" }}>
              {glitchText}
            </div>
          )}
        </div>

        {/* Footer pinned to bottom */}
        <div style={{ borderTop: "1px solid rgba(57,255,20,0.08)", paddingTop: "1rem", display: "flex", justifyContent: "space-between" }}>
          <span className="font-mono" style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: "rgba(57,255,20,0.22)" }}>
            resonant frequency tuning
          </span>
          <span className="font-mono" style={{ fontSize: "0.55rem", letterSpacing: "0.08em", color: "rgba(57,255,20,0.22)" }}>
            michaelmistree@mistree.space
          </span>
        </div>
      </div>
    </div>
  );
}
