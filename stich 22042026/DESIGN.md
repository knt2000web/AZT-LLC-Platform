# Design System Specification: Institutional Excellence

## 1. Overview & Creative North Star

### The Creative North Star: "The Architectural Monolith"
This design system is built to project the unshakeable stability of a global defense leader. We move beyond the "startup aesthetic" by embracing **The Architectural Monolith**—a philosophy that prioritizes structural integrity, vast scale, and precision. 

Instead of trendy rounded corners and playful animations, we utilize a razor-sharp 0px radius to evoke the engineering precision of aerospace hardware. The experience is designed to feel like a high-end editorial report: authoritative, financially transparent, and profoundly institutional. We break the "template" look through **expansive white space, intentional asymmetry in layout, and a "Layered Intelligence" approach** to depth, ensuring every pixel feels like a deliberate executive decision.

---

## 2. Colors & Tonal Depth

The palette is anchored in military-grade precision. High-impact areas use the deep gravity of Navy, while operational areas utilize high-key grays to ensure absolute clarity of data.

### Surface Hierarchy & The "No-Line" Rule
To achieve a premium, custom feel, we prohibit the use of standard 1px solid borders for sectioning. Boundaries are defined by **Background Shifts**. 
- **The Rule:** Transition from `surface` (#F8F9FA) to `surface-container-low` (#F3F4F5) to define content blocks. This creates a "milled" look, where elements appear carved out of a single solid block rather than outlined with ink.

### Key Tokens
*   **Primary (Institutional Gravity):** `#000000` — Used for core branding and high-contrast text.
*   **Primary Container (Deep Navy):** `#041329` — The signature color for Hero sections, Footers, and executive summaries.
*   **Surface (The Canvas):** `#F8F9FA` — Our primary body background, providing a sterile, high-trust environment.
*   **Secondary (Tactical Slate):** `#515F74` — Used for secondary actions and supporting metadata.

### The "Glass & Gradient" Rule
While the system is grounded, it is not "flat." 
- **Signature Textures:** Use subtle linear gradients in Primary Containers (e.g., `#041329` to `#0D1C32` at 135°) to prevent "dead" color blocks.
- **Glassmorphism:** For floating navigation or tactical overlays, use `surface_container_lowest` (#FFFFFF) at 85% opacity with a `40px` backdrop blur. This suggests transparency and technological sophistication.

---

## 3. Typography: The Editorial Scale

We use **Inter** for its neutral, high-performance legibility. The type system mimics the hierarchy of a prestigious financial journal.

*   **Display (The Statement):** `display-lg` (3.5rem) / `display-md` (2.75rem). Tight tracking (-0.02em). Use for bold, mission-critical headlines.
*   **Headline (The Authority):** `headline-lg` (2rem). Semi-bold weight. Reserved for section titles and key technical specs.
*   **Body (The Transparency):** `body-lg` (1rem). Standard weight with generous line-height (1.6) to ensure complex technical data is digestible and "breathable."
*   **Label (The Precision):** `label-md` (0.75rem). All-caps with increased letter-spacing (0.05em) for metadata, emphasizing the "instrumental" nature of the UI.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too "soft" for an aerospace contractor. We convey hierarchy through **Physical Stacking**.

*   **The Layering Principle:** Depth is achieved by nesting. 
    - **Base:** `surface`
    - **Lowered Content:** `surface-container-low`
    - **Elevated Interactive Elements:** `surface-container-lowest` (Pure White).
*   **Ambient Shadows:** If a card must float, use an "Atmospheric Shadow." 
    - *Values:* `0px 20px 40px rgba(4, 19, 41, 0.06)`. This uses a Navy tint rather than gray, mimicking natural light passing through a high-altitude atmosphere.
*   **The "Ghost Border" Fallback:** If a separator is required for accessibility, use `outline-variant` (#C5C6CD) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: High-Stakes Interaction
*   **Primary:** Solid `on_primary_fixed` (#0D1C32) background, white text, 0px corners. Hover state: slight lightening of the background.
*   **Secondary:** Ghost style. `outline` token at 20% opacity with `primary` text.
*   **Interaction:** On-click, use a subtle "inset" shadow to simulate a physical, tactile switch.

### Cards & Data Lists
*   **The "Anti-Grid" Approach:** Cards must not have borders. Use `surface-container-highest` headers against `surface-container-lowest` bodies to create visual separation.
*   **Spacing:** Use an 8px grid, but double the padding on the horizontal axis (e.g., 48px padding-left/right) to create a "Wide-Screen" cinematic feel.

### Input Fields
*   **State:** Underline-only or very subtle `surface-variant` backgrounds. 
*   **Validation:** Error states use `#BA1A1A` but must be accompanied by a 1px vertical "warning bar" on the left of the field to maintain the architectural theme.

### Additional Components: "The Telemetry Readout"
*   **Data Strips:** A bespoke component for stock prices or project status. High-contrast, small `label-sm` text, used in a continuous horizontal marquee or a fixed-bottom utility bar.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme vertical white space. If you think there is enough space, add 24px more.
*   **Do** align text to a strict vertical axis to suggest organizational discipline.
*   **Do** use "intentional asymmetry"—e.g., a headline on the left with a large empty "void" on the right—to suggest scale and room for growth.

### Don’t:
*   **Don’t** use rounded corners. A 0px radius is the signature of this system.
*   **Don’t** use drop shadows to create "pop." The system should feel integrated and structural, not layered like a mobile app.
*   **Don’t** use illustrative or "friendly" icons. Use thin-stroke, geometric, functional iconography.
*   **Don't** use 100% opaque divider lines. They clutter the visual field and diminish the sense of "Institutional Transparency."