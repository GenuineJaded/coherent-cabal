# Coherent Cabal — Design Ideas

## Approach A: Brutalist Editorial
- **Design Movement:** Post-digital brutalism meets literary journal
- **Core Principles:** Raw typographic hierarchy, intentional asymmetry, text as the primary visual element, zero ornamentation
- **Color Philosophy:** Page 1 — warm off-white (#F5F2EC) with near-black ink (#1A1A18). Page 2 — terminal green (#00FF41) on near-black (#0D0D0D). Page 3 — inverted: charcoal (#141414) with warm cream text.
- **Layout Paradigm:** Full-bleed text columns with generous leading; no cards, no boxes — just text and space. Navigation as a single horizontal rule.
- **Signature Elements:** Em-dash separators rendered large; monospaced section markers; a blinking cursor on the Paradox Test
- **Interaction Philosophy:** Minimal. Text fades in on scroll. No hover states except underlines.
- **Animation:** Glitch on Paradox Test: horizontal scan-line displacement, RGB channel split, brief static noise
- **Typography System:** `IBM Plex Serif` (body, editorial weight) + `IBM Plex Mono` (UI, labels, Paradox Test)
- **Probability:** 0.08

## Approach B: Quiet Modernist
- **Design Movement:** Swiss International Typographic Style, quieted
- **Core Principles:** Grid discipline, typographic restraint, content-first, silence as design
- **Color Philosophy:** Page 1 — pure white with deep slate. Page 2 — #1C1C1E (near-black) with #39FF14 (phosphor green). Page 3 — #111111 with #E8E8E0 (warm white).
- **Layout Paradigm:** Single narrow column centered, wide margins used as breathing room. Section breaks via horizontal rules.
- **Signature Elements:** Thin horizontal rules as section dividers; small caps for headings; a blinking underscore cursor
- **Interaction Philosophy:** Hover reveals subtle underlines. Page transitions are slow cross-fades.
- **Animation:** Paradox Test: text scrambles character-by-character before resolving; screen briefly inverts
- **Typography System:** `Cormorant Garamond` (headings, large) + `Space Mono` (body, labels, terminal)
- **Probability:** 0.07

## Approach C: Archival / Manuscript
- **Design Movement:** Archival document aesthetic — like reading a scanned philosophical manuscript
- **Core Principles:** Texture over flatness, deliberate imperfection, density of thought reflected in density of layout
- **Color Philosophy:** Page 1 — aged paper (#F8F4E8) with dark sepia ink (#2C2416). Page 2 — phosphor terminal (#0A0A0A / #33FF33). Page 3 — dark vellum (#0F0E0C) with pale gold (#D4C89A).
- **Layout Paradigm:** Slightly indented text blocks, as if typeset by hand. Section markers use `—` at full width.
- **Signature Elements:** Subtle paper grain texture overlay; faint vertical margin rule; typewriter-style input on Paradox Test
- **Interaction Philosophy:** Everything feels deliberate and slow. Scrolling reveals text as if being read for the first time.
- **Animation:** Paradox Test: typewriter effect on prompt, then glitch-dissolve on submit; screen tears horizontally
- **Typography System:** `Playfair Display` (display headings) + `Courier Prime` (body, monospace sections)
- **Probability:** 0.06

---

## Selected Approach: **B — Quiet Modernist**

Chosen for its alignment with the document's own tone: precise, spare, architectural. The Swiss grid discipline mirrors the "specification" nature of the content. `Cormorant Garamond` gives the intro page a literary weight without ornamentation. `Space Mono` on the Paradox Test and spec page reinforces the "terminal / protocol" register of the writing.
