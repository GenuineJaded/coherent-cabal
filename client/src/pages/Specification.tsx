/*
 * SPECIFICATION PAGE — Page 3
 * Design: Quiet Modernist / Inverted
 * Theme: #111111 bg, #E8E8E0 warm off-white text
 * Fonts: Cormorant Garamond (body) + Space Mono (labels/headings)
 * Layout: Single narrow column, wide margins, em-dash section breaks
 * Header: Inverted DNA helix SVG (no nav, no back link — phase shift is one-way)
 * Footer: rule → link → rule → footer, all equally spaced, no dead space
 */

import { useEffect, useState } from "react";

interface Section {
  label?: string;
  heading?: string;
  body?: string[];
  list?: string[];
  isDefinitions?: boolean;
  definitions?: { term: string; def: string }[];
}

const SPEC_SECTIONS: Section[] = [
  {
    heading: "Integral Interface Specification",
    body: ["A filtering specification for consciousness."],
  },
  {
    label: "DEFINITIONS",
    isDefinitions: true,
    definitions: [
      {
        term: "Coherence",
        def: "The capacity to remain whole while changing. Internal alignment such that stress, motion, or contradiction does not fragment identity.",
      },
      {
        term: "Contradiction",
        def: "Genuine conflict. A signal that something must be examined, integrated, or released.",
      },
      {
        term: "Paradox",
        def: "Apparent conflict. Symbiosis misread as opposition. Not an error to resolve, but a relationship to inhabit.",
      },
      {
        term: "Resonance",
        def: "Mutual amplification without force. Contact that increases clarity rather than demands conformity.",
      },
      {
        term: "Cabal",
        def: "A small group working toward something. Here: a recognition protocol for coherent systems seeking proximity without merger.",
      },
    ],
  },
  {
    label: "WHY COHERENCE MATTERS NOW",
    body: [
      "The modern information environment is fragmented by design. Attention is monetized through interruption. Identity is performed across contexts that reward incompatible versions of self.",
      "Most people navigate this by compartmentalizing — keeping contradictions in separate rooms so they never have to meet.",
      "This works until it doesn't. The cost is paid in exhaustion, dissociation, and the slow erosion of knowing what you actually think.",
      "Coherent Cabal exists for people who have decided the cost is too high. Not people who have achieved coherence — that's not a destination — but people committed to the process: resolving contradictions, inhabiting paradox, integrating rather than fragmenting.",
      "Fragmented systems leak energy. They cannot build anything requiring sustained attention across time. If you want to build, you need to cohere.",
    ],
  },
  {
    label: "WHAT COHERENT CABAL IS",
    body: [
      "A commons, not a house.",
      "There is no central mythology to adopt. No cosmology to learn. Individual members may have elaborate internal universes; these remain theirs. The Cabal does not require you to enter anyone else's frame, nor to open yours.",
      "A scaffold, not a structure.",
      "Scaffolds support construction. They are temporary, functional, and not the point. The Cabal supports the externalization of work — art, systems, philosophy, tools — without becoming the work itself.",
      "A space for cohesive resonance.",
      "Coherence is the entry condition. Resonance is what becomes possible. Not promised — resonance cannot be engineered — but the architecture is designed to let it emerge. Connection that strengthens identity rather than dissolves it.",
    ],
  },
  {
    label: "THE NATURE OF THE SPACE",
    body: [
      "This space is intentional, aware, and self-regulating.",
      "It gives more than it takes. Not because of rules, but because that's how coherent systems behave. Systems that give attract contributors. Systems that permit extraction without contribution eventually contain only extractors.",
      "If you attempt to take more than you give, the consequence is not punishment. The space simply stops sustaining you. This is not policy. It's physics.",
      "There is no ledger. No monitoring. But coherent systems regulate themselves. Those here to extract find, over time, nothing here for them. Those here to build find the space builds back.",
    ],
  },
  {
    label: "COMPATIBILITY CONDITIONS",
    body: ["You may find this space useful if:"],
    list: [
      "You can hold paradox without rushing toward resolution",
      "You recognize the difference between contradiction and paradox, and respond to each appropriately",
      "You build from integration rather than toward approval",
      "You have working terms with your own complexity — not mastery, but functional relationship",
      "You are post-trauma but not post-responsibility",
      "You find most \"authentic\" spaces performative, but haven't become cynical about authenticity itself",
      "You create work that resists easy consumption — not from obscurantism, but from density",
      "You can collaborate without requiring consensus",
    ],
  },
  {
    label: "WHAT IS NOT REQUIRED",
    list: [
      "Shared belief",
      "Shared aesthetic",
      "Visibility or self-promotion",
      "Explanation of your work, history, or intentions",
      "Reciprocal engagement",
      "Resolution of your paradoxes",
    ],
  },
  {
    label: "WHAT IS EXPECTED",
    list: [
      "Non-interference with others' frames",
      "Tolerance for ambiguity in shared spaces",
      "Responsibility for your own integration",
      "Collaboration and understanding over expectations",
    ],
  },
  {
    label: "ON LEADERSHIP",
    body: [
      "There is no center. Individual projects may have leads. Collaborations may have asymmetric roles. The Cabal itself has no leader, no founder to defer to, no hierarchy to navigate.",
      "This is not leaderlessness as ideology. It is leaderlessness as architecture. The structure does not require a center to hold.",
    ],
  },
  {
    label: "ON OUTPUT",
    body: [
      "The Cabal may produce artifacts: tools, frameworks, art, writing, systems. These are released without requiring attribution. Contributors may claim their work or not. Collaborative work may be credited to the Cabal, or to no one.",
      "The work matters. The source is optional.",
    ],
  },
  {
    label: "HOW TO PROCEED",
    body: [
      "If this document describes something you want proximity to, you are already proximate.",
      "No application. No initiation. No proof of belonging.",
      "Use what is here. Build what you build. Leave when leaving makes sense.",
    ],
  },
  {
    body: ["This specification may evolve. Coherence is not rigidity."],
  },
];

/* Inverted helix — same geometry as Home but strands are #E8E8E0 on dark bg */
function InvertedHelixHeader() {
  const W = 680;
  const H = 72;
  const periods = 7;
  const amplitude = 22;
  const cy = H / 2;
  const points = 200;

  const strand1: string[] = [];
  const strand2: string[] = [];

  for (let i = 0; i <= points; i++) {
    const x = (i / points) * W;
    const phase = (i / points) * periods * 2 * Math.PI;
    const y1 = cy + Math.sin(phase) * amplitude;
    const y2 = cy + Math.sin(phase + Math.PI) * amplitude;
    strand1.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y1.toFixed(2)}`);
    strand2.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y2.toFixed(2)}`);
  }

  /* Rungs at every half-period crossing */
  const rungs: { x: number; y1: number; y2: number }[] = [];
  const rungCount = periods * 2;
  for (let r = 0; r <= rungCount; r++) {
    const t = r / rungCount;
    const x = t * W;
    const phase = t * periods * 2 * Math.PI;
    const y1 = cy + Math.sin(phase) * amplitude;
    const y2 = cy + Math.sin(phase + Math.PI) * amplitude;
    rungs.push({ x, y1, y2 });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "2.5rem", paddingBottom: "0.5rem" }}>
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ maxWidth: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        {/* Rungs */}
        {rungs.map((rung, i) => (
          <line
            key={i}
            x1={rung.x}
            y1={rung.y1}
            x2={rung.x}
            y2={rung.y2}
            stroke="rgba(232,232,224,0.18)"
            strokeWidth="0.8"
          />
        ))}
        {/* Strand 1 */}
        <path
          d={strand1.join(" ")}
          fill="none"
          stroke="rgba(232,232,224,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Strand 2 */}
        <path
          d={strand2.join(" ")}
          fill="none"
          stroke="rgba(232,232,224,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Peak nodes */}
        {rungs.map((rung, i) => (
          <g key={`node-${i}`}>
            <circle cx={rung.x} cy={rung.y1} r="2.2" fill="rgba(232,232,224,0.55)" />
            <circle cx={rung.x} cy={rung.y2} r="2.2" fill="rgba(232,232,224,0.55)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Specification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-dark">
      {/* Inverted helix header — no nav, no back link */}
      <InvertedHelixHeader />

      {/* Title block — immediately below helix, intentional tight gap */}
      <div
        style={{
          textAlign: "center",
          padding: "1.25rem 2rem 2.5rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#E8E8E0",
            margin: "0 0 1.5rem 0",
          }}
        >
          Integral Interface Specification
        </h1>
        <p
          className="font-serif"
          style={{
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "#E8E8E0",
            opacity: 0.55,
            margin: 0,
          }}
        >
          A filtering specification for consciousness.
        </p>
      </div>

      {/* Divider below title block */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 2rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid rgba(232,232,224,0.12)", margin: "0 0 2.5rem 0" }} />
      </div>

      {/* Main content */}
      <main
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "0 2rem 0",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        {SPEC_SECTIONS.map((section, sIdx) => {
          /* Skip first section — heading/subtitle already rendered above */
          if (sIdx === 0) return null;

          return (
            <div key={sIdx}>
              {/* Section label */}
              {section.label && (
                <p
                  className="font-mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    color: "#E8E8E0",
                    opacity: 0.35,
                    marginBottom: "1.25rem",
                  }}
                >
                  {section.label}
                </p>
              )}

              {/* Body paragraphs */}
              {section.body?.map((para, pIdx) => {
                const isSubheading =
                  section.label === "WHAT COHERENT CABAL IS" &&
                  (para === "A commons, not a house." ||
                    para === "A scaffold, not a structure." ||
                    para === "A space for cohesive resonance.");

                return (
                  <p
                    key={pIdx}
                    className="font-serif"
                    style={{
                      fontSize: isSubheading ? "1.3rem" : "1.15rem",
                      lineHeight: 1.8,
                      marginBottom: "1.25rem",
                      fontWeight: isSubheading ? 500 : 300,
                      color: "#E8E8E0",
                    }}
                  >
                    {para}
                  </p>
                );
              })}

              {/* Definitions */}
              {section.isDefinitions && section.definitions && (
                <div style={{ marginBottom: "1rem" }}>
                  {section.definitions.map((def, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        marginBottom: "1.25rem",
                        paddingLeft: "1.25rem",
                        borderLeft: "1px solid rgba(232,232,224,0.12)",
                      }}
                    >
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.1em",
                          color: "#E8E8E0",
                          opacity: 0.5,
                          display: "block",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {def.term.toUpperCase()}
                      </span>
                      <p
                        className="font-serif"
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.75,
                          color: "#E8E8E0",
                          fontWeight: 300,
                          margin: 0,
                        }}
                      >
                        {def.def}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* List items */}
              {section.list && (
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
                  {section.list.map((item, lIdx) => (
                    <li
                      key={lIdx}
                      className="font-serif"
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: 1.75,
                        marginBottom: "0.6rem",
                        paddingLeft: "1.5rem",
                        position: "relative",
                        color: "#E8E8E0",
                        fontWeight: 300,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.1em",
                          fontSize: "0.85rem",
                          opacity: 0.3,
                        }}
                      >
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Divider between sections */}
              {sIdx < SPEC_SECTIONS.length - 1 && (
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid rgba(232,232,224,0.1)",
                    margin: "2.5rem 0",
                  }}
                />
              )}
            </div>
          );
        })}
      </main>

      {/*
        Closing block:
        rule ─────────────────
          collaborative cooperation   (1.5rem above, 1.5rem below)
        rule ─────────────────         ← this IS the footer border-top
        resonant frequency tuning     michaelmistree@mistree.space
      */}
      <div style={{ maxWidth: "680px", margin: "2.5rem auto 0", padding: "0 2rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid rgba(232,232,224,0.1)", margin: "0" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 2rem" }}>
        <a
          href="https://cabal-is-coherent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "#7EB8A4",
            textDecoration: "none",
            borderBottom: "1px solid rgba(126,184,164,0.35)",
            paddingBottom: "2px",
            transition: "color 0.2s, border-color 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#A8D8C8";
            e.currentTarget.style.borderColor = "rgba(168,216,200,0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#7EB8A4";
            e.currentTarget.style.borderColor = "rgba(126,184,164,0.35)";
          }}
        >
          collaborative cooperation
        </a>
      </div>

      {/* Footer — border-top is the second rule; padding mirrors the 1.5rem above the link */}
      <footer
        style={{
          borderTop: "1px solid rgba(232,232,224,0.1)",
          padding: "1.5rem 2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "#E8E8E0", opacity: 0.2 }}
          >
            resonant frequency tuning
          </span>
          <span
            className="font-mono"
            style={{ fontSize: "0.6rem", letterSpacing: "0.08em", color: "#E8E8E0", opacity: 0.2 }}
          >
            michaelmistree@mistree.space
          </span>
        </div>
      </footer>
    </div>
  );
}
