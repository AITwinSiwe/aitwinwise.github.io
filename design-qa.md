# Design QA

final result: passed

## Comparison target and evidence

- Source visual truth: `../company-site-design/selected-reference.png` (user-selected original dark scientific design, 1435 × 1096 pixels).
- Implementation: `../company-site-design/implementation-desktop.png`, 1435 × 1096 pixels.
- CSS viewport: 1435 × 1096; deviceScaleFactor: 1. Same top-of-homepage state. No density scaling.
- Full-view side-by-side comparison: `../company-site-design/design-comparison.png` (2870 × 1096, source left, implementation right).
- Focused/secondary evidence: `implementation-showcase.png`, `implementation-industry.png`, `implementation-research-dialog.png`, `implementation-inquiry.png`, `implementation-mobile.png`, `implementation-mobile-products.png`, `implementation-mobile-dialog.png`, `implementation-mobile-menu.png`, all in the same local evidence directory. Full-resolution desktop screenshot was inspected for typography and feature details after the combined comparison.

## Findings and iteration history

Initial comparison found three P2 issues: small featured headings/body copy, rough system-font rendering, and horizontally cropped mobile research screenshot. Increased desktop feature headings/body text, included a licensed Noto Sans SC font subset, and preserved screenshot aspect ratios using contain. After these changes, captured the implementation again at the same viewports and inspected the updated comparison and mobile product views. No actionable P0/P1/P2 findings remain.

Font preparation briefly lacked its build-time dependency; resolved locally and verified the final font loads without HTTP or console errors. The site has no build-time dependency on Python font tooling.

## Required fidelity surfaces

- Typography: two-line hero title matches the selected wording and hierarchy. Bundled Noto Sans SC provides regular and bold text with Chinese fallbacks. Product and section text stays readable at tested responsive widths.
- Spacing/layout: 70 px header, approximately 566 px hero at reference width, 28 px feature offset, asymmetrical feature columns. White sections lower down provide product and service detail. Mobile stacks features and product cards without clipping page controls.
- Colors: near-black navy, cyan actions, pale surfaces and restrained teal labels match the selected direction. Focus indicators and hover states are visible. No decorative CSS gradients or handmade image replacements.
- Assets: dedicated generated hero and server backgrounds preserve the reference palette and subjects. Existing energy image reused. Lower product cards and dialogs use dark navy 3D function maps with friendly robot Agents, dimensional icons, white text and cyan connectors. No product-specific brand names or anatomical brain imagery are shown. Logo retains supplied artwork; arrows use the licensed icon library.
- Copy: original hero wording restored. Research/education generic names appear only in the lower product section. Local model service remains prominent. Renewable energy explicitly marked as cooperation expansion. Low-altitude route planning, meteorological alerts and urban/building CFD included without fabricated outcome metrics or partner endorsements.

## Behavior checked

- 320, 390, 768, 1024, 1435 and 1920 px viewport widths: no horizontal overflow.
- All internal navigation targets exist; mobile menu opens/closes, navigation selection closes it.
- Product details open; Escape and close button dismiss; focus returns to trigger. Product CTA selects the relevant inquiry topic.
- Inquiry summary generated locally. User text remains literal, not HTML. Clipboard content matches with Windows line-ending normalization; return-to-edit works. GitHub draft URL uses the correct repository and encoded content. No message submitted.
- Images loaded; no browser console errors or failed requests. Evidence: `../company-site-design/browser-verification.json`.

## Accepted differences and practical limits

- Decorative search icon replaced with a functional cooperation link because the site has no search capability.
- Hero landscape is a separately generated illustration of the same direction, not pixel-identical terrain.
- Additional sections follow the selected first screen and the user's later content requirements.
- GitHub is the currently available public inquiry channel. Business email and a production product-login entry were not provided.
- Browser validation used Chromium on Windows; Safari and Firefox were not tested. This is not a comprehensive accessibility certification.

## Implementation checklist

- [x] Selected design and latest content constraints implemented.
- [x] Final robot Agent and industry concept imagery inspected.
- [x] Responsive and primary interaction verification completed.
- [x] Final visual comparison reviewed after fixes.
- [x] Licenses and asset provenance included.

## Lower-section imagery update — 2026-09-15

Implemented the final user preference: clear conceptual function maps rather than screenshots or decorative robot scenes, genuinely 3D icons and center robot Agents, dark navy backgrounds, silver materials, white text and cyan connectors. The teaching diagram retains the supplied login flow and administrator/teacher/assistant/student functions without the supplied proprietary name. The research diagram shows project/team, literature/knowledge, tools/workflows, and outputs/reports. Both product cards and dialogs use the dark theme. Complete images use contain without cropping; users can open originals in a new tab. Native HTML repeats the four function groups for readability and accessibility.

Added dedicated images to low-altitude services, urban CFD, environmental health, world models, and the scientific-computing section; reused the existing energy and server illustrations in their related lower sections. Existing business text and maturity labels remain. All imagery is labelled conceptual rather than actual interfaces or measured results.

Fresh verification: `../.investment-build/verify-company-concepts.cjs` passed after the final dark-theme CSS correction; `../.investment-build/verify-company.cjs` passed for the new function-map implementation. The first viewport (1435 × 1096) is pixel-identical to the pre-change local page. All updated sections render without horizontal overflow at 320, 390, 768, 1024, 1435, and 1920 px. Both modal images and captions match their products, four HTML function groups are present, original-image links open the correct assets, and Escape restores focus. All images load, with no console errors or failed requests. Existing navigation and inquiry interactions passed their regression checks.

Local preview initially served top-level WebP navigation as application/octet-stream due to the Windows MIME registry, causing a download instead of an image tab. The local preview handler now explicitly serves image/webp, and the original-image link test passes. No production backend or hosting configuration was changed.

Inspected the new desktop and mobile product, industry, and application sections, plus the generated full-size assets. Supplemental screenshots and verification JSON are in `../company-site-design/concept-update/`. No new actionable layout or content findings remain. This update is saved to the existing draft PR; no live deployment is implied.
