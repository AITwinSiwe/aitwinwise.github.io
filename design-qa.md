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
- Assets: dedicated generated hero and server backgrounds preserve the reference palette and subjects. Existing energy image reused. Actual screenshots appear lower down and exclude product names. Logo retains supplied artwork; arrows use the licensed icon library.
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
- [x] Anonymous product screenshot inspection completed.
- [x] Responsive and primary interaction verification completed.
- [x] Final visual comparison reviewed after fixes.
- [x] Licenses and asset provenance included.
