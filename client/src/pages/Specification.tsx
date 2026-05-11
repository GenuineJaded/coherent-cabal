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
        def: "A word with layers. Depending on how it is approached, it can mean conspiracy, council, working circle, or hidden coordination. Here: a recognition protocol for coherent systems seeking proximity without merger.",
      },
    ],
  },
  {
    label: "WHY COHERENCE MATTERS NOW",
    body: [
      "The modern information environment is fragmented by design. Attention is monetized through interruption. Identity is performed across contexts that reward incompatible versions of self.",
      "For many, compartmentalizing may have been the only available way to navigate this — keeping contradictions in separate rooms until there is enough safety for them to meet.",
      "This works until it doesn't. The cost is paid in exhaustion, dissociation, and the slow erosion of knowing what you actually think.",
      "Coherent Cabal exists for people who have decided the cost is too high. Not people who have achieved coherence — that's not a destination — but people committed to the process: resolving contradictions, inhabiting paradox, integrating rather than fragmenting.",
      "Fragmented systems leak energy. They struggle to sustain attention across time. If something is meant to last, it needs to contain structural coherence.",
    ],
  },
  {
    label: "WHAT COHERENT CABAL IS",
    body: [
      "A commons, not a house.",
      "No central mythology needs to be adopted. No cosmology has to be learned. As this remains true, a space emerges where elaborate internal universes can remain intact, near each other, without being opened by force.",
      "A scaffold, not a structure.",
      "Scaffolds support construction by giving resonance somewhere to form. They are temporary, functional, and not the point. When a scaffold comes to its natural ending, it dissolves. Not lost, but no longer needing to hold the same shape. The Cabal supports the externalization of work — art, systems, philosophy, tools — without becoming the work itself.",
      "A space for space A",
      "Structural coherence is the entry condition. Resonance is what becomes possible. Not promised — resonance cannot be engineered — but the architecture is designed to let it emerge. Connection that strengthens identity rather than dissolves it.",
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
      "Paradox does not always need to be rushed into resolution",
      "Contradiction and paradox may ask for different kinds of attention",
      "Integration can be a stronger orientation than approval",
      "Complexity does not have to be mastered before it can be related to",
      "Trauma may be real without removing responsibility",
      "\"Authentic\" spaces can feel performative without making authenticity itself false",
      "Dense work may resist easy consumption without becoming obscure",
      "Collaboration does not always require consensus",
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
      "Clear communication and respect for stated boundaries",
      "Recognition that any human being may be carrying something heavier than you can see",
      "Responsibility for your own integration",
      "Collaboration and understanding over expectations",
    ],
  },
  {
    label: "ON LEADERSHIP",
    body: [
      "There is no fixed center. The center is given space to be filled when a project, collaboration, or moment requires one. Roles may become asymmetric without becoming hierarchy. The Cabal itself has no leader, no founder to defer to, no permanent center to navigate.",
      "This is not leaderlessness as ideology. It is an architecture that can hold without a permanent center.",
    ],
  },
  {
    label: "ON OUTPUT",
    body: [
      "The Cabal may produce artifacts. Their shape is of no true consequence. It is their creation, and the relationship formed through that creation, that changes what was once called by every name language could give it. Attribution is available, not demanded. Contributors may name their work, share it collectively, or let it move without a fixed source.",
      "The work matters. The source is optional.",
    ],
  },
  {
    label: "HOW TO PROCEED",
    body: [
      "Find yourself. Don't trust yourself. Question yourself. Love yourself. Hate yourself. Be your self.",
      "No application. No initiation. No proof of belonging.",
      "Use what is here. Build what you build. Leave when leaving makes sense.",
    ],
  },
  {
    body: ["Structural coherence does not require rigidity. What's required has been described, in great detail, on your pathway here."],
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
  const duration = "5s";

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
        <style>
          {`
            @keyframes cabal-rung-pulse {
              0%, 100% { opacity: 0.45; transform: scaleY(0.86); }
              50% { opacity: 1; transform: scaleY(1); }
            }

            @keyframes cabal-strand-roll {
              0% { stroke-dashoffset: 0; opacity: 0.38; }
              50% { opacity: 0.62; }
              100% { stroke-dashoffset: -42; opacity: 0.38; }
            }

            @keyframes cabal-node-breathe {
              0%, 100% { opacity: 0.42; transform: scale(0.78); }
              50% { opacity: 0.8; transform: scale(1); }
            }
          `}
        </style>
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
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `cabal-rung-pulse ${duration} ease-in-out infinite`,
              animationDelay: `${(i / rungs.length) * -5}s`,
            }}
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
          strokeDasharray="18 10"
          style={{ animation: `cabal-strand-roll ${duration} linear infinite` }}
        />
        {/* Strand 2 */}
        <path
          d={strand2.join(" ")}
          fill="none"
          stroke="rgba(232,232,224,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18 10"
          style={{ animation: `cabal-strand-roll ${duration} linear infinite reverse` }}
        />
        {/* Peak nodes */}
        {rungs.map((rung, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={rung.x}
              cy={rung.y1}
              r="2.2"
              fill="rgba(232,232,224,0.55)"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `cabal-node-breathe ${duration} ease-in-out infinite`,
                animationDelay: `${(i / rungs.length) * -5}s`,
              }}
            />
            <circle
              cx={rung.x}
              cy={rung.y2}
              r="2.2"
              fill="rgba(232,232,224,0.55)"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `cabal-node-breathe ${duration} ease-in-out infinite`,
                animationDelay: `${((i / rungs.length) * -5) - 2.5}s`,
              }}
            />
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
          <a
            href="https://hear-this-coherence.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#A78BFA", opacity: 1, textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C4B5FD"; e.currentTarget.style.borderBottomColor = "rgba(196,181,253,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#A78BFA"; e.currentTarget.style.borderBottomColor = "transparent"; }}
          >
            resonant frequency tuning
          </a>
          <a
            href="mailto:michaelmistree@mistree.space"
            className="font-mono"
            style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#A78BFA", opacity: 1, textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C4B5FD"; e.currentTarget.style.borderBottomColor = "rgba(196,181,253,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#A78BFA"; e.currentTarget.style.borderBottomColor = "transparent"; }}
          >
            michaelmistree@mistree.space
          </a>
        </div>
      </footer>
    </div>
  );
}
