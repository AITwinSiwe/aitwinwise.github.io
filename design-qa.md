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
- Assets: dedicated generated hero and server backgrounds preserve the reference palette and subjects. Existing energy image reused. Lower product cards and dialogs use panoramic photorealistic function maps with adult-proportioned engineered robots, research/teaching workspaces, white text and restrained cyan connectors. No product-specific brand names or anatomical brain imagery are shown. Logo retains supplied artwork; arrows use the licensed icon library.
- Copy: original hero wording restored. Research/education generic names appear only in the lower product section. Local model service remains prominent. Renewable energy explicitly marked as cooperation expansion. Low-altitude route planning, meteorological alerts and urban/building CFD included without fabricated outcome metrics or partner endorsements.

## Behavior checked

- 320, 390, 768, 1024, 1435 and 1920 px viewport widths: no horizontal overflow.
- All internal navigation targets exist; mobile menu opens/closes, navigation selection closes it.
- Product details open; Escape and close button dismiss; focus returns to trigger. Product CTA selects the relevant inquiry topic.
- Inquiry summary generated locally. User text remains literal, not HTML. Clipboard content matches with Windows line-ending normalization; return-to-edit works. Mail draft uses the business email and encoded subject/body. No message sent.
- Images loaded; no browser console errors or failed requests. Evidence: `../company-site-design/browser-verification.json`.

## Accepted differences and practical limits

- Decorative search icon replaced with a functional cooperation link because the site has no search capability.
- Hero landscape is a separately generated illustration of the same direction, not pixel-identical terrain.
- Additional sections follow the selected first screen and the user's later content requirements.
- Contact uses blueingel@hotmail.com and the owner-supplied QR code; no product-login entry is exposed.
- Browser validation used Chromium on Windows; Safari and Firefox were not tested. This is not a comprehensive accessibility certification.

## Implementation checklist

- [x] Selected design and latest content constraints implemented.
- [x] Final robot Agent and industry concept imagery inspected.
- [x] Responsive and primary interaction verification completed.
- [x] Final visual comparison reviewed after fixes.
- [x] Licenses and asset provenance included.

## Lower-section imagery update — 2026-09-15

Final robot differentiation: research uses brushed gunmetal with broader, angular masculine-coded hardware; teaching uses a slender ceramic-white feminine-coded service-robot design. Both remain photorealistic and retain the same function text and surrounding scenes. Final assets were inspected and the image/card/dialog checks rerun after this material and silhouette edit.

Implemented the latest user preference: wide, shallow (1983 × 793, approximately 2.5:1) realistic technology function maps. Adult-proportioned metal robots and photographic research/teaching workspaces replace toy-like mascots and cartoon figures. The entire top headline/arrow workflow is removed from both illustrations. The teaching diagram retains administrator/teacher/assistant/student functions without login steps or proprietary names. The research diagram shows project/team, literature/knowledge, tools/workflows, and outputs/reports. Both product cards and dialogs use the dark theme. Complete images use contain without cropping; users can open originals in a new tab. Native HTML repeats the four function groups for readability and accessibility.

Added dedicated images to low-altitude services, urban CFD, environmental health, world models, and the scientific-computing section; reused the existing energy and server illustrations in their related lower sections. Existing business text and maturity labels remain. All imagery is labelled conceptual rather than actual interfaces or measured results.

Fresh verification: `../.investment-build/verify-company-concepts.cjs` passed after the final panoramic asset and aspect-ratio replacement; `../.investment-build/verify-company.cjs` passed for the final realistic function-map implementation. The first viewport (1435 × 1096) is pixel-identical to the pre-change local page. All updated sections render without horizontal overflow at 320, 390, 768, 1024, 1435, and 1920 px. Both modal images and captions match their products, four HTML function groups are present, original-image links open the correct assets, and Escape restores focus. All images load, with no console errors or failed requests. Existing navigation and inquiry interactions passed their regression checks.

Local preview initially served top-level WebP navigation as application/octet-stream due to the Windows MIME registry, causing a download instead of an image tab. The local preview handler now explicitly serves image/webp, and the original-image link test passes. No production backend or hosting configuration was changed.

Inspected the new desktop and mobile product, industry, and application sections, plus the generated full-size assets. Supplemental screenshots and verification JSON are in `../company-site-design/concept-update/`. No new actionable layout or content findings remain. This update is saved to the existing draft PR; no live deployment is implied.

## Contact update — 2026-09-18
Visitor-facing repository links and instructions removed. Email drafts use blueingel@hotmail.com with encoded subject and summary. Original owner-supplied QR PNG is linked for full-size viewing. Contact checks passed at 320, 390, 768 and 1435 px, and existing interaction regression passed. No email was sent.
