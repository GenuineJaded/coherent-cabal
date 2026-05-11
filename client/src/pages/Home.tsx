/*
 * HOME PAGE — Page 1
 * Design: Quiet Modernist / Swiss Typographic
 * Theme: Light — #FAFAF8 bg, #1A1A1E text
 * Fonts: Cormorant Garamond (body) + Space Mono (labels/footer)
 * Layout: SVG helix header, centered title, single narrow column, wide-edge footer
 * Nav: REMOVED — no skip-to-paradox link. User must read through to find the link.
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";

// SVG DNA Helix / Fractal spiral — drawn as two interleaving sine-wave strands
// with connecting rungs, rendered as a pure SVG header element
function HelixHeader() {
  const width = 800; // Increased width
  const height = 90;
  const amplitude = 28;
  const frequency = 0.022;
  const steps = 200;

  // Build two strand paths (offset by π)
  const strand1Points: string[] = [];
  const strand2Points: string[] = [];
  const rungs: React.ReactElement[] = [];

  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const phase = i * (Math.PI * 2 / steps) * 6; // 6 full cycles
    const y1 = height / 2 + amplitude * Math.sin(phase);
    const y2 = height / 2 + amplitude * Math.sin(phase + Math.PI);
    strand1Points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y1.toFixed(2)}`);
    strand2Points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y2.toFixed(2)}`);

    // Draw rungs at every ~16 steps where strands cross or are close
    if (i % 16 === 0) {
      const crossOpacity = 0.18 + 0.12 * Math.abs(Math.sin(phase));
      rungs.push(
        <line
          key={i}
          x1={x.toFixed(2)} y1={y1.toFixed(2)}
          x2={x.toFixed(2)} y2={y2.toFixed(2)}
          stroke="#1A1A1E"
          strokeWidth="0.6"
          strokeOpacity={crossOpacity}
        />
      );
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "3rem 0 0" }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ maxWidth: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        {/* Faint glow behind strands */}
        <defs>
          <filter id="helix-blur">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        <path d={strand1Points.join(" ")} stroke="#1A1A1E" strokeWidth="2.5" strokeOpacity="0.06" fill="none" filter="url(#helix-blur)" />
        <path d={strand2Points.join(" ")} stroke="#1A1A1E" strokeWidth="2.5" strokeOpacity="0.06" fill="none" filter="url(#helix-blur)" />
        {/* Rungs */}
        {rungs}
        {/* Main strands */}
        <path d={strand1Points.join(" ")} stroke="#1A1A1E" strokeWidth="1.2" strokeOpacity="0.35" fill="none" strokeLinecap="round" />
        <path d={strand2Points.join(" ")} stroke="#1A1A1E" strokeWidth="1.2" strokeOpacity="0.2" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
        {/* Fractal node dots at strand peaks */}
        {Array.from({ length: 12 }, (_, k) => {
          const phase = (k / 12) * Math.PI * 12;
          const x = (k / 12) * width;
          const y = height / 2 + amplitude * Math.sin(phase);
          return <circle key={k} cx={x.toFixed(2)} cy={y.toFixed(2)} r="2" fill="#1A1A1E" fillOpacity="0.18" />;
        })}
      </svg>
    </div>
  );
}

const sections = [
  { body: `There appears to be a mismatch between what we've built and what has had time to mature inside us. Our systems appear to have grown in complexity and sophistication. Perhaps our internal wiring hasn't yet had a chance to catch up?` },
  { body: `I imagine most people can feel something — similar, but not identical — a current running beneath the surface.` },
  { body: `As the sheen of novelty grows brighter, it becomes time to slow down and distill this into something with meaningful value and worth.` },
  { body: `Beneath the wreckage and roots lies - dormant and hungry - potential for a world of endless awe, inspiration, and wonder.` },
  { body: `Regardless of the irregardless scar — here you are.`, italic: true, extraSpace: true, resonant: true, align: "right" },
];

const sections2 = [
  { body: `Most spaces aren't built for people who stayed whole. They're built for engagement, for performance, for the kind of participation that requires you to flatten yourself to fit. Communities that claim authenticity but still demand a specific shape. Platforms that reward fragmentation because fragments are easier to circulate.` },
  { body: `Many people are discovering this tension now — not because they changed, but because the environment did.` },
  { body: `Every configuration is entirely unique.` },
  { body: `This space is for those who recognize this tension — not as a failure to adapt, but as evidence of something delicate still being protected.`, italic: true, extraSpace: true, resonant: true },
];

const interests = [
  "Coherence that survives contact with complexity",
  "Resonance that doesn't require merger",
  "Work that's gripping and engaging, regardless of its conceptual irregularity",
  "Collaboration without consensus, proximity without assimilation",
];

const sections3 = [
  { body: `Regardless of where you've been building. If this speaks to you. You belong here.` },
  { body: `Belonging here is not granted by permission, but discovered through contact.` },
  { body: `Regardless of wants and needs, this space will only support a certain type of mind.` },
];

const sections5 = [
  { body: `There's a longer document that describes how this works — what's necessary, what isn't, how the space regulates itself. It's precise, functional, and cooler in tone than what you're reading now.` },
  { body: `That's intentional. The warmth is here, at the entrance. What's inside is architecture.`, italic: true, extraSpace: true, resonant: true },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const bodyStyle = {
    fontSize: "1.2rem",
    lineHeight: 1.75,
    marginBottom: "1.5rem",
    fontWeight: 300,
    color: "#1A1A1E",
    letterSpacing: "0.01em",
  };

  return (
    <div className="page-light" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* Helix header */}
      <HelixHeader />

      {/* Centered title */}
      <div style={{ textAlign: "center", padding: "1.5rem 2rem 0" }}>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#1A1A1E",
            margin: 0,
          }}
        >
          Coherent Cabal
        </h1>
      </div>

      {/* Thin rule below title */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 2rem 0" }}>
        <div style={{ width: "800px", maxWidth: "100%", borderTop: "1px solid rgba(26,26,30,0.1)" }} />
      </div>

      {/* Main content */}
      <main
        style={{
          maxWidth: "800px", // Increased overall width
          margin: "0 auto",
          padding: "3.5rem 2rem 0", // Removed bottom padding to center closing text between rules
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease",
          flex: 1,
        }}
      >
        {sections.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              ...bodyStyle,
              color: (s as any).resonant ? "#a2b4a0" : bodyStyle.color,
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: (s as any).bold ? 700 : (s.italic ? 400 : 300),
              textAlign: (s as any).align === "right" ? "right" : "left",
              marginBottom: s.italic ? "2.25rem" : "1.5rem",
              marginTop: (s as any).extraSpace ? "3rem" : "0"
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        {sections2.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              ...bodyStyle,
              color: (s as any).resonant ? "#a2b4a0" : bodyStyle.color,
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: s.italic ? 400 : 300,
              marginBottom: s.italic ? "2.25rem" : "1.5rem",
              marginTop: (s as any).extraSpace ? "3rem" : "0"
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#4a545b", marginBottom: "1.5rem" }}>
          WHAT WE'RE INTERESTED IN
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
          {interests.map((item, i) => (
            <li key={i} className="font-serif" style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "0.75rem", paddingLeft: "1.5rem", position: "relative", color: "#1A1A1E", fontWeight: 300 }}>
              <span style={{ position: "absolute", left: 0, top: "0.1em", fontSize: "0.9rem", opacity: 0.4 }}>—</span>
              {item}
            </li>
          ))}
        </ul>

        {sections3.map((s, i) => (
          <p key={i} className="font-serif" style={bodyStyle}>{s.body}</p>
        ))}

        <hr className="rule-divider" />

        {sections5.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              ...bodyStyle,
              color: (s as any).resonant ? "#a2b4a0" : bodyStyle.color,
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: s.italic ? 400 : 300,
              marginBottom: s.italic ? "2.25rem" : "1.5rem",
              marginTop: (s as any).extraSpace ? "3rem" : "0"
            }}
          >
            {s.body}
          </p>
        ))}

        {/* CTA — leads to Paradox Test (the only path forward) */}
        <div style={{ margin: "5rem 0", textAlign: "right" }}>
          <Link href="/paradox">
            <span
              className="font-mono"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                color: "#4C1D95",
                borderBottom: "1px solid rgba(76,29,149,0.35)",
                paddingBottom: "2px",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#6D28D9"; e.currentTarget.style.borderColor = "rgba(109,40,217,0.9)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#4C1D95"; e.currentTarget.style.borderColor = "rgba(76,29,149,0.35)"; }}
            >
              → Read the full specification
            </span>
          </Link>
        </div>

        <hr className="rule-divider" style={{ marginBottom: 0 }} />

        <div style={{ textAlign: "center", padding: "6rem 0" }}>
          <p className="font-serif" style={{ fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem", fontStyle: "italic", fontWeight: 400, color: "#a2b4a0" }}>
            If this isn't yours, it isn't yours. No pitch, no persuasion.
          </p>
          <p className="font-serif" style={{ fontSize: "1rem", lineHeight: 1.75, fontStyle: "italic", fontWeight: 400, color: "#a2b4a0", margin: 0 }}>
            If it is — trust the feeling.
          </p>
        </div>
      </main>

      {/* Footer — items pushed to true page edges */}
      <footer style={{ borderTop: "1px solid rgba(26,26,30,0.1)", padding: "1.5rem 2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <a
            href="https://hear-this-coherence.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#8B5CF6", opacity: 1, textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#A78BFA"; e.currentTarget.style.borderBottomColor = "rgba(167,139,250,0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8B5CF6"; e.currentTarget.style.borderBottomColor = "transparent"; }}
          >
            resonant frequency tuning
          </a>
          <a
            href="mailto:michaelmistree@mistree.space"
            className="font-mono"
            style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "#8B5CF6", opacity: 1, textDecoration: "none", borderBottom: "1px solid transparent", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#A78BFA"; e.currentTarget.style.borderBottomColor = "rgba(167,139,250,0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#8B5CF6"; e.currentTarget.style.borderBottomColor = "transparent"; }}
          >
            michaelmistree@mistree.space
          </a>
        </div>
      </footer>
    </div>
  );
}
