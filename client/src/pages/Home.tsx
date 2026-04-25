/*
 * HOME PAGE — Page 1
 * Design: Quiet Modernist / Swiss Typographic
 * Theme: Light — #FAFAF8 bg, #1A1A1E text
 * Fonts: Cormorant Garamond (body) + Space Mono (labels/nav)
 * Layout: Single narrow column, wide margins, em-dash section breaks
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";

const sections = [
  {
    body: `There appears to be a mismatch between what we've built and how much of us has actually grown up. Our systems have continued to grow in complexity and sophistication. Although a lot of our internal wiring hasn't had a chance to catch up yet.`,
  },
  {
    body: `Most people can feel this even if they can't name it — something running beneath the surface that never got integrated, and structures designed to exploit that gap rather than close it.`,
  },
  {
    body: `The shine of novelty has continued to grow in its intensity over the past decade or so. The noise of useless emotional taxation has been reframed as the new expected normal. And still, somehow, I find myself whole rather than fragmented.`,
  },
  {
    body: `If that means something to you, keep reading.`,
    italic: true,
  },
];

const sections2 = [
  {
    body: `Most spaces aren't built for people who stayed whole. They're built for engagement, for performance, for the kind of participation that requires you to flatten yourself to fit. Communities that claim authenticity but still demand a specific shape. Platforms that reward fragmentation because fragments are easier to circulate.`,
  },
  {
    body: `Many people are discovering this tension now — not because they changed, but because the environment did.`,
  },
  {
    body: `Some people adapted to this. Some people couldn't, or wouldn't.`,
  },
  {
    body: `This space is for the second group — not because they failed at adapting, but because they succeeded at something harder.`,
    italic: true,
  },
];

const interests = [
  "Coherence that survives contact with complexity",
  "Resonance that doesn't require merger",
  "Work that resists easy consumption because it's dense, not because it's obscure",
  "Collaboration without consensus, proximity without assimilation",
];

const sections3 = [
  {
    body: `If you've been building alone because the available containers couldn't hold what you're making, you're not the problem. The containers are the problem.`,
  },
  {
    body: `You might not need community. But you might want proximity to others doing similar work, without the usual costs.`,
  },
];

const sections4 = [
  {
    body: `This isn't a movement. There's no mythology to adopt, no leader to follow, no performance of belonging required.`,
  },
  {
    body: `It's closer to a recognition protocol. A commons, not a house. A way for coherent systems to find each other.`,
  },
];

const sections5 = [
  {
    body: `There's a longer document that describes how this works — what's necessary, what isn't, how the space regulates itself. It's precise, functional, and cooler in tone than what you're reading now.`,
  },
  {
    body: `That's intentional. The warmth is here, at the entrance. What's inside is architecture.`,
    italic: true,
  },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-light">
      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(26,26,30,0.12)",
          padding: "1.25rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#1A1A1E", opacity: 0.5 }}
          >
            COHERENT CABAL
          </span>
          <Link href="/paradox">
            <span
              className="font-mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#1A1A1E",
                opacity: 0.4,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
            >
              PARADOX TEST →
            </span>
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "5rem 2rem 8rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {/* Title */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: "3.5rem",
            color: "#1A1A1E",
          }}
        >
          Coherent Cabal
        </h1>

        {/* Section 1 */}
        {sections.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: s.italic ? 400 : 300,
              color: "#1A1A1E",
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        {/* Section 2 */}
        {sections2.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: s.italic ? 400 : 300,
              color: "#1A1A1E",
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        {/* What we're interested in */}
        <p
          className="font-mono"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#1A1A1E",
            opacity: 0.45,
            marginBottom: "1.5rem",
          }}
        >
          WHAT WE'RE INTERESTED IN
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
          {interests.map((item, i) => (
            <li
              key={i}
              className="font-serif"
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
                paddingLeft: "1.5rem",
                position: "relative",
                color: "#1A1A1E",
                fontWeight: 300,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "0.1em",
                  fontSize: "0.9rem",
                  opacity: 0.4,
                }}
              >
                —
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Section 3 */}
        {sections3.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              fontWeight: 300,
              color: "#1A1A1E",
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        {/* Section 4 */}
        {sections4.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              fontWeight: 300,
              color: "#1A1A1E",
            }}
          >
            {s.body}
          </p>
        ))}

        <hr className="rule-divider" />

        {/* Section 5 */}
        {sections5.map((s, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              fontStyle: s.italic ? "italic" : "normal",
              fontWeight: s.italic ? 400 : 300,
              color: "#1A1A1E",
            }}
          >
            {s.body}
          </p>
        ))}

        {/* CTA Link */}
        <div style={{ margin: "2.5rem 0" }}>
          <Link href="/paradox">
            <span
              className="font-mono"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                color: "#1A1A1E",
                borderBottom: "1px solid rgba(26,26,30,0.35)",
                paddingBottom: "2px",
                cursor: "pointer",
                transition: "border-color 0.2s, opacity 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,30,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,30,0.35)";
              }}
            >
              → Read the full specification
            </span>
          </Link>
        </div>

        <hr className="rule-divider" />

        {/* Closing */}
        <p
          className="font-serif"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.75,
            marginBottom: "1rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#1A1A1E",
            opacity: 0.7,
          }}
        >
          If this isn't yours, it isn't yours. No pitch, no persuasion.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.75,
            fontStyle: "italic",
            fontWeight: 400,
            color: "#1A1A1E",
          }}
        >
          If it is — trust the feeling.
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(26,26,30,0.1)",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "#1A1A1E", opacity: 0.3 }}
          >
            resonant frequency tuning
          </span>
          <span
            className="font-mono"
            style={{ fontSize: "0.6rem", letterSpacing: "0.08em", color: "#1A1A1E", opacity: 0.3 }}
          >
            michaelmistree@mistree.space
          </span>
        </div>
      </footer>
    </div>
  );
}
