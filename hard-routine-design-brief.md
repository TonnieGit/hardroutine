# HARD ROUTINE — VISUAL DESIGN & UX DIRECTION

**Version 1.0 · 21 September 2026**  
**Purpose:** Replace the current visual/layout direction of the existing Hard Routine website build without changing the underlying information architecture, SEO strategy, page copy, product data, forms, schema requirements or technical requirements from the original `spec.md`.

---

# 1. READ THIS FIRST

This document is a **visual design brief**, not a replacement for the original website build specification.

The original `spec.md` remains the source of truth for:

- site structure and URLs
- page copy
- product names, specifications and claims
- SEO/AEO requirements
- forms and legal requirements
- schema
- accessibility
- performance
- Astro implementation
- technical constraints

This document is the source of truth for the **visual design, layout, typography, imagery, interaction, composition and overall brand experience**.

## The current build is solving the wrong problem visually

The existing site may contain the correct information, but it currently reads too much like a conventional "new outdoor brand / SEO catalogue" website.

That is **not** the desired outcome.

The finished site needs to feel like a **serious, premium Australian adventure equipment brand**.

The design reference territory is:

- **Rivian** — cinematic, enormous typography, editorial composition, premium restraint
- **STEDI** — Australian 4WD culture, aggressive product/lifestyle imagery, energetic banners, vehicle integration
- **Land Rover Defender** — premium automotive presentation, capability + lifestyle
- modern industrial / expedition / technical equipment brands
- premium outdoor editorial design

Do **not** copy any of these brands literally.

The goal is to extract the underlying design principles and create a distinct Hard Routine visual identity.

---

# 2. THE CORE DESIGN IDEA

## HARD ROUTINE SHOULD FEEL LIKE AN ADVENTURE BRAND FIRST AND AN ECOMMERCE SITE SECOND.

The website should feel closer to:

> **a premium automotive campaign / outdoor magazine / equipment launch**

than:

> **a Shopify camping store.**

The user should land on the site and immediately think:

**"This is a serious brand."**

Not:

**"This is another camping gear company."**

---

# 3. THE VISUAL DNA

These are the priorities, in order.

| Attribute | Priority |
|---|---:|
| Monumental typography | 10/10 |
| Cinematic lifestyle photography | 10/10 |
| Premium visual restraint | 9/10 |
| Strong art direction | 9/10 |
| 4WD / Australian adventure culture | 9/10 |
| Product presentation | 9/10 |
| Editorial composition | 8/10 |
| Technical / industrial details | 7/10 |
| Military influence | 4/10 |
| Traditional camping aesthetic | 2/10 |
| Conventional ecommerce UI | 2/10 |
| Rustic / earthy outdoor branding | 1/10 |

The military influence should be **DNA**, not a costume.

Do not turn the website into a tactical/military theme.

---

# 4. WHAT WE ARE NOT BUILDING

Avoid these visual clichés completely:

- generic camping website
- timber textures
- mountains with handwritten script
- beige "van life" aesthetic
- excessive olive green
- camouflage backgrounds everywhere
- distressed military textures
- dog tags
- fake military stencil graphics
- excessive badges
- generic "Adventure Awaits" messaging
- rows of six identical product cards
- hero banners with a product floating on a gradient
- endless rounded cards
- excessive pill buttons
- excessive shadows
- generic SaaS-style layouts
- "Amazon but prettier" ecommerce grids
- huge blocks of body copy above the fold
- stock-photo-looking camping scenes

The design must feel **controlled, intentional and expensive**.

---

# 5. TYPOGRAPHY

Typography is one of the most important elements of the entire site.

It is not supporting the imagery.

**Typography and imagery are equal visual heroes.**

## 5.1 Primary display font

The original spec uses:

**Big Shoulders Display 700 / 800**

Keep this as the primary display direction unless implementation testing proves there is a materially better equivalent.

Use it aggressively.

The display type should be:

- uppercase
- very large
- tight leading
- high visual impact
- often split across multiple lines
- allowed to overlap imagery
- allowed to extend beyond normal content widths
- occasionally cropped by the viewport
- used as a compositional element, not merely a heading

### Target feeling

Not:

> Gear that gets packed away properly

as a conventional 60px heading.

Instead:

# GEAR  
# THAT GETS  
# PACKED  
# **PROPERLY.**

Or:

# BUILT  
# FOR  
# **OUT THERE.**

The typography should sometimes occupy **30–60% of the viewport height**.

---

## 5.2 Body font

Keep:

**IBM Plex Sans**

Use for:

- body copy
- navigation
- buttons
- supporting descriptions
- UI
- captions

Body typography should remain restrained so that the display typography can dominate.

---

## 5.3 Technical font

Keep:

**IBM Plex Mono**

Use for:

- product codes
- SKUs
- dimensions
- specifications
- technical labels
- image annotations
- section numbering
- small metadata
- "FIELD / SYSTEM / COMPONENT" style labels

Example:

```text
HR-ROLL-1200
207 L
1.2 KG
1300 MM
YKK #10 VISLON
```

This should feel like **equipment documentation**, not decoration.

---

# 6. TYPE SCALE

The current type scale should be increased substantially.

Suggested direction:

```css
--display-xl: clamp(72px, 12vw, 180px);
--display-lg: clamp(60px, 9vw, 140px);
--display-md: clamp(48px, 7vw, 100px);
--heading-lg: clamp(36px, 5vw, 72px);
--heading-md: clamp(28px, 3.5vw, 48px);
```

These are starting points, not hard limits.

### Desktop

Hero headlines may comfortably reach:

**120–180px**

depending on viewport width.

### Mobile

Do not simply shrink everything to normal website headings.

The mobile site must retain the oversized typographic personality.

Something like:

```text
BUILT
FOR
THE
OUTBACK.
```

at 52–76px can still be extremely powerful.

---

# 7. TYPOGRAPHIC COMPOSITION

Avoid placing every heading inside a neat max-width content container.

Use three typography modes:

### 1. Editorial

Large type sitting beside or over imagery.

### 2. Monumental

Huge type spanning the viewport.

### 3. Technical

Small mono labels and data.

The contrast between these three modes creates the brand.

---

# 8. COLOUR SYSTEM

The original colour palette is directionally correct.

Keep the dark world, but make the presentation feel more sophisticated and cinematic.

Suggested foundation:

```css
--bitumen: #0A0B0A;
--charcoal: #141614;
--charcoal-2: #1C1F1C;
--stone: #26241F;   /* alternate ground — dark warm gravel */
--stone-2: #322E27; /* raised surface on stone */

--bone: #E8E4DA;
--bone-muted: #BDB9AE;

--lichen: #7E887B;

--brass: #B5894E;

--flare: #E2542A;
```

## Important

Do **not** use every colour everywhere.

The site should visually live mostly in:

**black / stone / bone**

Bitumen (near-black) is the default ground for image-driven and monumental-type
sections. Stone is a second, warmer, still-dark ground used to break up long
runs of black between those moments — see §9 — without lightening the site
toward grey or white. A page should alternate between the two grounds, not
sit on either exclusively.

with occasional:

**brass / muted olive**

and very limited:

**orange/red flare**

The orange should be an action colour.

It should not become the brand colour.

## A note on external references

RealTruck Australia (realtruck.com.au) is a useful reference for *layout
rhythm* — its alternating light/dark section grounds, boxed promo-tile grid
with an angled corner tag, and compact capability/trust strip are patterns
worth borrowing (see §21 SECTION 06B and the `PromoTile`/`PromoGrid`/
`CapabilityStrip` components in §48). Its actual palette (white/light-grey
grounds, saturated yellow as the dominant colour, bright daylight photography)
is **not** the reference — Hard Routine stays dark, using stone rather than
white/grey for the "light" side of the alternation, and keeps brass/flare
rationed per the rule above rather than using an accent colour everywhere.

---

# 9. THE WEBSITE SHOULD HAVE VISUAL RHYTHM

One of the biggest changes from the current design should be the removal of repetitive section layouts.

Do not build:

```text
Heading
Paragraph
3 cards

Heading
Paragraph
3 cards

Heading
Paragraph
3 cards
```

Instead the page should constantly change visual scale.

For example:

```text
FULL SCREEN IMAGE
↓
MONUMENTAL TYPE
↓
BLACK PRODUCT SECTION
↓
TECHNICAL DETAIL
↓
FULL WIDTH LIFESTYLE IMAGE
↓
EDITORIAL TEXT
↓
PRODUCT SYSTEM
↓
FULL SCREEN IMAGE
↓
CTA
```

Every 1–2 viewport heights, the user should encounter a meaningful visual change.

---

# 10. HERO DIRECTION

The homepage hero is the single most important component.

## Do not build a traditional ecommerce hero.

Avoid:

```text
[image]

Hard Routine
Gear that gets packed away properly

paragraph

[button]
```

Instead, the hero should feel like the opening shot of an automotive/adventure campaign.

## Preferred hero

Use a full viewport:

**100svh minimum**

with either:

- cinematic video
- cinematic full-bleed image
- image sequence / subtle motion

### Image direction

A black or dark 4WD in an Australian environment.

Examples:

- dusty track
- red earth
- remote campsite
- dusk
- sunrise
- headlights
- dust cloud
- vehicle partially obscured
- camp setup
- product visibly integrated into the scene

The product does not necessarily need to be the centre of the image.

The **world** is the hero.

---

## Hero typography

The typography should sit directly over the image or transition between image and dark space.

Example:

# GEAR  
# FOR THE  
# **HARD ROUTINE.**

Or:

# BUILT  
# FOR  
# **OUT THERE.**

Supporting copy should be tiny by comparison.

Example:

```text
BLACKOUT STORAGE
FOR 4WD TOURING + CAMPING
```

Then a simple CTA:

`EXPLORE THE RANGE →`

Do not clutter the hero with multiple buttons.

---

# 11. HERO IMAGE TREATMENT

Images should not look like stock ecommerce photography.

Use:

- cinematic crops
- strong contrast
- natural light
- dust
- hard sunlight
- deep shadows
- dusk/night
- headlights
- warm campfire light
- Australian landscapes
- real human use
- vehicles

Images should feel **photographed**, not generated for a product catalogue.

---

# 12. LIFESTYLE PHOTOGRAPHY IS A CORE BRAND ASSET

Lifestyle imagery should appear throughout the site.

Not just on the homepage.

Every major category should have lifestyle photography.

Every major product family should have lifestyle photography.

The photography needs to show:

**PRODUCT + VEHICLE + PERSON + ENVIRONMENT**

where appropriate.

The product should appear naturally in the world.

---

# 13. PHOTOGRAPHY ART DIRECTION

## Australian, not generic American adventure

Prioritise:

- Australian red dirt
- eucalyptus
- dry grass
- Queensland / Northern Australia
- rocky tracks
- beaches where appropriate
- remote camps
- bush camps
- 4WD tracks
- corrugations
- dust
- heat
- rain
- wet gear
- dusk

Avoid overly polished US national-park imagery.

The brand should feel **Australian without relying on Australian clichés**.

---

# 14. IMAGE LOCATIONS

Images should be used as structural elements.

## Homepage

Minimum:

1. Full-screen hero
2. Lifestyle image after hero
3. Product/system image
4. Full-width lifestyle image
5. Product detail image sequence
6. Final large lifestyle image before CTA

## Category pages

Minimum:

1. Hero lifestyle image
2. Product family image
3. Technical product image
4. Lifestyle image between content sections
5. Final category lifestyle banner

## Product pages

Minimum:

1. Hero product image
2. Full product gallery
3. Product-in-use lifestyle image
4. Detail/macro images
5. Product + vehicle image
6. Final lifestyle image

If only one image is available, **do not fill the page with repeated crops of the same image**.

Use strong colour blocks / typography / technical sections instead.

---

# 15. IMAGE ASPECT RATIOS

Use different image formats deliberately.

### 16:9

Hero and cinematic landscape imagery.

### 3:2 / 4:3

Lifestyle/editorial photography.

### 1:1

Product presentation and ecommerce gallery.

### Portrait

Occasional editorial/lifestyle composition.

The site should not feel like every image was forced into the same card ratio.

---

# 16. FULL-BLEED IMAGES

Images should frequently break outside the normal content grid.

Use:

```text
┌─────────────────────────────────────┐
│                                     │
│          FULL BLEED IMAGE           │
│                                     │
└─────────────────────────────────────┘
```

rather than:

```text
┌──────────────────────────┐
│                          │
│        IMAGE CARD        │
│                          │
└──────────────────────────┘
```

The former feels editorial.

The latter feels ecommerce.

---

# 17. OVERLAY TYPOGRAPHY

Large typography may sit directly over imagery.

Example:

```text
┌─────────────────────────────────────┐
│                                     │
│  THE                                │
│  HARD                               │
│  ROUTINE.                           │
│                                     │
│                 [4WD]               │
│                                     │
└─────────────────────────────────────┘
```

Use image gradients only when necessary for readability.

Do not put a heavy black gradient over every image.

---

# 18. STEDI INFLUENCE

STEDI is an important visual reference.

Take inspiration from:

- aggressive 4WD photography
- product + vehicle integration
- dramatic banner imagery
- night photography
- technical product details
- bold promotional compositions
- strong contrast
- energetic visual storytelling

Do **not** copy:

- exact layouts
- branding
- graphic treatments
- slogans
- product UI
- colour usage

The desired result should feel more premium and editorial than STEDI.

---

# 19. RIVIAN INFLUENCE

Take inspiration from:

- enormous typography
- cinematic full-screen photography
- minimal interface
- editorial scrolling
- product + lifestyle storytelling
- premium restraint
- large areas of negative space
- typography acting as part of the image composition

The result should feel more rugged and Australian than Rivian.

---

# 20. LAND ROVER / DEFENDER INFLUENCE

Take inspiration from:

- capability + lifestyle positioning
- vehicle as a central part of the brand world
- premium photography
- restrained UI
- technical information presented elegantly
- accessories treated as part of the lifestyle ecosystem

---

# 21. HOMEPAGE STRUCTURE

The homepage should be redesigned around **storytelling**, not information density.

Suggested sequence:

---

## SECTION 01 — HERO

Full viewport.

Cinematic 4WD / camping image or video.

Massive headline.

```text
BUILT
FOR
THE
HARD
ROUTINE.
```

Small supporting line.

Primary CTA:

`EXPLORE THE RANGE →`

---

## SECTION 01B — CAPABILITY STRIP

Stone background — the first ground alternation off the hero.

A compact `CapabilityStrip`: four short, numbered technical claims already
established elsewhere in the copy (vented not sealed, coated nylon not
canvas, etc.), not new marketing claims. Functions as the trust band a
RealTruck-style icon strip would occupy, in the equipment-documentation
voice instead of icon badges.

---

## SECTION 02 — BRAND STATEMENT

Black background.

Huge typography.

```text
THE GEAR
THAT COMES
WITH YOUR
GEAR
SHOULDN'T
BE THE
WEAK LINK.
```

Small supporting paragraph.

No cards.

---

## SECTION 03 — LIFESTYLE INTERRUPTION

Full-bleed lifestyle image.

No UI clutter.

Possibly a tiny mono label:

```text
FIELD / 01
AUSTRALIA
```

Then huge type partially over the image:

# PACK  
# **PROPERLY.**

---

## SECTION 04 — THE RANGE

Introduce the three product systems.

Do not use a conventional three-card grid.

Instead create three visually distinct horizontal / stacked compositions.

### ROLL

Large product image.

Large typography:

# ROLL

Small mono descriptor:

`SWAG TRANSIT / 900 · 1200 · 1400 MM`

Then:

`EXPLORE ROLL →`

### HAUL

Different composition.

### DUMP

Different composition.

The three should feel like **equipment systems**, not category tiles.

---

## SECTION 05 — PRODUCT / TECHNICAL

Dark section.

Large product image.

Small technical labels.

Example:

```text
500D PU-COATED NYLON
YKK #10 VISLON
38 MM UV-STABILISED WEBBING
BONE INTERIOR
```

Large headline:

# DESIGNED  
# AROUND  
# **FAILURE.**

Supporting copy from the original spec.

---

## SECTION 06 — FULL WIDTH LIFESTYLE

Huge image.

4WD / camp / people.

Typography:

# TAKE  
# LESS.

Then:

# GO  
# **FURTHER.**

Use one or the other, not both simultaneously.

---

## SECTION 07 — THE FABRIC

Introduce the 500D PU-coated nylon.

This should look more like a **material study** than a blog section.

Use:

- macro fabric photography
- stitching
- topographic print
- zip
- webbing
- lining

Large text:

# ONE  
# FABRIC.

Then technical information.

CTA:

`SEE THE FABRIC →`

---

## SECTION 06B — EXPLORE MORE

Black background — the second ground alternation, after the stone fabric
detail section.

A `PromoGrid` of `PromoTile`s (material, a field note, register interest) —
boxed images with an angled brass corner tag and overlaid heading/link,
adapted from RealTruck's promo-tile pattern (see §8). This is secondary
wayfinding, not the primary product range, which stays full-bleed.

---

## SECTION 08 — FIELD NOTES

Do not use six identical cards.

Feature one article massively.

Then smaller supporting articles.

Example:

```text
FIELD NOTES / 01

WHY RED DUST
KILLS ZIPS.

[large image]

READ FIELD NOTE →
```

---

## SECTION 09 — FINAL LIFESTYLE / CTA

Full viewport or near-full viewport.

Beautiful end-of-day campsite.

Minimal text:

# SEE YOU  
# **OUT THERE.**

Then:

`REGISTER YOUR INTEREST →`

---

# 22. CATEGORY PAGE DESIGN

Category pages should feel like **editorial landing pages**, not PLPs.

Example:

`/gear/swag-bags/`

## Hero

Large lifestyle image.

Huge:

# ROLL

Then:

```text
SWAG TRANSIT SYSTEM
900 / 1200 / 1400 MM
```

Short answer-first copy from the original spec.

---

## Problem section

Large typography.

# THE  
# WET  
# **PACK-UP.**

Then the existing content.

Break long copy into visually digestible sections.

---

## Product range

Do not make three identical product cards.

Use large product modules.

Each module can alternate image/text positioning:

```text
IMAGE        TEXT
TEXT         IMAGE
IMAGE        TEXT
```

This creates movement down the page.

---

## Technical section

Use tables where the original spec requires them.

But style tables as **technical equipment data**, not default HTML tables.

Use IBM Plex Mono.

Thin rules.

No rounded cards.

---

# 23. PRODUCT PAGE DESIGN

Product pages need to feel like **equipment manuals crossed with luxury product launches**.

## Above the fold

Desktop:

Left:

Large product image/gallery.

Right:

```text
ROLL / 1200

ROLL 1200
SWAG TRANSIT BAG

207 L
1.2 KG
1300 MM
HR-ROLL-1200

[REGISTER YOUR INTEREST]
```

But the typography should be huge.

The product name should be visually dominant.

---

## Product image gallery

Use a large editorial gallery.

Possible layout:

```text
┌──────────────────────┬──────────────┐
│                      │              │
│                      │   DETAIL     │
│      HERO IMAGE      │              │
│                      ├──────────────┤
│                      │   DETAIL     │
│                      │              │
└──────────────────────┴──────────────┘
```

Avoid tiny thumbnail strips if possible.

---

## Nomenclature plate

Keep the original spec's nomenclature device.

However, make it visually integrated into the page rather than a random bordered box.

Example:

```text
FIELD EQUIPMENT / HR-ROLL-1200

ROLL 1200
207 L
1.2 KG
1300 MM
```

Use mono.

Brass accent.

---

## Lifestyle interruption

After the technical/product information, introduce a large lifestyle image.

Example:

A rolled swag / bag being loaded into a black 4WD at dawn.

Overlay:

# BUILT  
# FOR THE  
# **REAL PACK-UP.**

---

## Specification

Specifications should feel like technical documentation.

Use:

- mono labels
- large numbers
- thin rules
- strong spacing
- minimal decoration

Avoid generic icon grids.

---

# 24. PRODUCT CARDS

Product cards are necessary for navigation, but they should **not dominate the design language**.

Avoid:

```text
[image]
ROLL 900
$xxx
[button]
```

Instead:

```text
ROLL 900

[large image]

HR-ROLL-900
113 L · 0.9 KG

EXPLORE →
```

Price is currently not applicable because the products are pre-launch.

Cards should feel like **equipment records**.

---

# 25. TECHNICAL GRAPHICS

Use technical details sparingly.

Potential visual devices:

```text
01 / ZIP
YKK #10 VISLON

02 / SHELL
500D PU-COATED NYLON

03 / LINING
BONE

04 / WEBBING
38 MM UV-STABILISED
```

These should reinforce credibility.

Do not turn every page into a technical manual.

---

# 26. SECTION LABELS

Use small mono labels extensively.

Examples:

```text
FIELD / 01
SYSTEM / 02
MATERIAL / 03
PRODUCT / 04
DETAIL / 05
```

or:

```text
01 — THE PROBLEM
02 — THE SYSTEM
03 — THE MATERIAL
04 — THE FIELD
```

These create the industrial/editorial character.

---

# 27. NAVIGATION

Navigation should be extremely clean.

Desktop:

```text
HARD ROUTINE

GEAR
THE FABRIC
FIELD NOTES
ABOUT

                    REGISTER INTEREST
```

Do not overload the header.

The header can become transparent over hero imagery and transition to solid dark background on scroll.

---

# 28. MOBILE NAVIGATION

Mobile should feel premium, not like a shrunken desktop site.

Large type.

Large touch targets.

Minimal menu.

Suggested menu:

```text
GEAR
THE FABRIC
FIELD NOTES
ABOUT

REGISTER INTEREST
```

The logo/brand should remain prominent.

---

# 29. BUTTONS

Avoid excessive rounded pill buttons.

Preferred:

```text
EXPLORE THE RANGE →
```

or

```text
REGISTER INTEREST →
```

Buttons can be rectangular or nearly rectangular.

Sharp / restrained.

Use uppercase.

IBM Plex Sans 600.

Small letter spacing.

---

# 30. BORDERS / CARDS / RADIUS

The design should use:

- thin borders
- strong alignment
- hard edges
- generous whitespace
- very limited radius

Suggested:

```css
border-radius: 0;
```

or very small values only where required.

Avoid the modern SaaS aesthetic of:

```text
rounded card
rounded card
rounded card
rounded card
```

---

# 31. GRID SYSTEM

Use a strong editorial grid.

Suggested:

- 12-column desktop grid
- 4-column tablet
- 2–4-column mobile depending on component
- generous gutters
- occasional full-bleed breakout

The grid should be visible in the **composition**, but not visually drawn unless a technical section requires it.

---

# 32. ASYMMETRY

Do not centre everything.

Use:

- left-aligned massive type
- offset imagery
- text crossing grid boundaries
- full-bleed images
- asymmetric product compositions
- unexpected whitespace

The site should feel **art-directed**, not assembled from a component library.

---

# 33. MOTION

Motion should be cinematic and restrained.

Good:

- image scale from 1.03 → 1.0
- subtle parallax
- typography reveal
- fade/slide section transitions
- image clipping/reveals
- navigation transition
- sticky product information
- horizontal image movement

Avoid:

- bouncing
- excessive spring animations
- flashy 3D
- unnecessary hover animations
- animation on every element
- long loading animations

Respect:

```css
prefers-reduced-motion
```

---

# 34. SCROLL EXPERIENCE

The user should feel like they are moving through a story.

Think:

**SCENE → STATEMENT → PRODUCT → DETAIL → SCENE → STATEMENT → PRODUCT**

rather than:

**HEADER → HERO → GRID → GRID → GRID → FOOTER**

This is probably the single most important layout change.

---

# 35. COPY + DESIGN RELATIONSHIP

The existing copy is good and should remain.

Do not rewrite the content just because the design changes.

Instead, **change how it is presented**.

A paragraph of 100 words should not necessarily appear as a 100-word block.

Break it into:

- short lead
- oversized statement
- supporting paragraph
- technical data
- quote / evidence
- image

The original content should become **editorial content**, not a wall of SEO copy.

---

# 36. SEO CONTENT MUST STILL BE VISIBLE

Do not hide important content in:

- accordions by default
- tabs
- carousels
- hover states
- JS-only components

The content needs to remain crawlable and accessible.

The visual design can make it feel beautiful without hiding it.

---

# 37. THE "PREMIUM" RULE

Premium does **not** mean:

- gold everywhere
- gradients
- glassmorphism
- rounded cards
- expensive-looking serif fonts
- excessive animation

Premium here means:

**restraint + photography + typography + spacing + consistency + detail.**

---

# 38. THE "MILITARY" RULE

Military influence should appear through:

- nomenclature
- technical labels
- equipment language
- structured information
- modularity
- restrained colours
- precision
- functional typography

It should NOT appear through:

- camouflage everywhere
- fake military badges
- military ranks
- weapons
- flags
- dog tags
- aggressive stencil fonts
- fake tactical claims

Hard Routine should feel like **equipment designed with military discipline**, not a military surplus store.

---

# 39. THE BLACKOUT TOPOGRAPHIC PATTERN

The existing blackout topographic pattern is a valuable brand asset.

Use it subtly.

Potential applications:

- product photography
- section backgrounds
- micro texture
- packaging
- footer
- nomenclature plates
- subtle full-screen background

Do not use it as a repeating website background.

The pattern should be something users **discover**, not something screaming at them on every page.

---

# 40. PRODUCT IMAGE ART DIRECTION

Studio images:

- black or very dark background
- directional lighting
- strong edge highlights
- visible material texture
- crisp hardware
- controlled shadows
- no cheap drop shadows
- no generic white-background ecommerce look for hero images

Lifestyle images:

- natural
- cinematic
- dusty
- tactile
- imperfect
- believable
- Australian
- people actually using the products

Detail images:

- stitching
- webbing
- zip teeth
- hardware
- lining
- fabric
- handles
- attachment points

Think **automotive launch photography**, not camping catalogue photography.

---

# 41. IMAGE PLACEHOLDERS DURING BUILD

If final photography is not yet available, create the layout using clearly defined image slots.

Use descriptive filenames / comments such as:

```text
HERO-4WD-DUST-DUSK
LIFESTYLE-KITCHEN-CAMP
PRODUCT-ROLL-1200-STUDIO
DETAIL-YKK-ZIP
DETAIL-BONE-LINING
LIFESTYLE-SWAG-PACKUP
4WD-REAR-WHEEL-DUMP
```

Do not compensate for missing photography by filling the page with gradients or generic placeholder graphics.

The composition must be designed around the eventual photography.

---

# 42. IMAGE PRIORITY

When selecting an image, prioritise in this order:

1. Real Hard Routine product
2. Real Hard Routine product in real Australian environment
3. Real 4WD / camping lifestyle photography matching the brand
4. High-quality commissioned imagery
5. Carefully selected stock only if necessary

Avoid obvious generic stock photography.

---

# 43. HOMEPAGE VISUAL WIREFRAME

The homepage should approximately feel like this:

```text
┌─────────────────────────────────────────────┐
│                                             │
│                 HERO IMAGE                  │
│                                             │
│  BUILT                                      │
│  FOR                                         │
│  THE                                         │
│  HARD ROUTINE.                              │
│                                             │
│                           EXPLORE →          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│ THE GEAR THAT COMES                         │
│ WITH YOUR GEAR                              │
│ SHOULDN'T BE THE WEAK LINK.                 │
│                                             │
│ short supporting copy                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│          FULL-BLEED LIFESTYLE               │
│                                             │
│                  PACK                       │
│                  PROPERLY.                  │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ ROLL                                        │
│                                             │
│        LARGE PRODUCT IMAGE                  │
│                                             │
│  SWAG TRANSIT SYSTEM                        │
│  900 / 1200 / 1400                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              TECHNICAL                      │
│                                             │
│ 500D             YKK #10                    │
│ PU-COATED        VISLON                     │
│ NYLON                                        │
│                                             │
│              DESIGNED                       │
│              AROUND                         │
│              FAILURE.                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│           MASSIVE LIFESTYLE                 │
│                                             │
│             TAKE LESS.                      │
│             GO FURTHER.                     │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│ ONE                                         │
│ FABRIC.                                     │
│                                             │
│ macro fabric / construction imagery         │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ FIELD NOTES                                 │
│                                             │
│ WHY RED DUST                                │
│ KILLS ZIPS.                                 │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│                                             │
│          FINAL LIFESTYLE IMAGE              │
│                                             │
│             SEE YOU                         │
│             OUT THERE.                      │
│                                             │
│       REGISTER YOUR INTEREST →              │
└─────────────────────────────────────────────┘
```

This is a **visual rhythm reference**, not a rigid pixel-perfect wireframe.

---

# 44. DESKTOP VS MOBILE

Do not allow mobile to become an afterthought.

Desktop can be cinematic and wide.

Mobile should become:

- taller
- more typographic
- more vertically editorial
- image-led
- extremely clean

Do not shrink a desktop layout until it fits.

Recompose it.

---

# 45. PERFORMANCE

The visual ambition must not destroy performance.

Keep all existing performance requirements from the original spec.

For hero video:

- lazy-load non-critical video
- provide poster image
- respect reduced motion
- don't block LCP
- use compressed modern formats
- do not autoplay huge 4K video unnecessarily

If video compromises performance, use a still image.

A great still image is better than a bad slow video.

---

# 46. ACCESSIBILITY

The original WCAG requirements remain unchanged.

Important:

- giant text must still have sensible semantic headings
- decorative imagery uses empty alt
- content imagery has descriptive alt
- contrast must pass
- keyboard navigation must work
- motion must respect reduced-motion
- no text should be baked into essential images
- overlays must remain readable

Visual drama must not compromise accessibility.

---

# 47. IMPLEMENTATION PRINCIPLES FOR CLAUDE CODE

Before modifying components:

1. Read the existing codebase.
2. Read the original `spec.md`.
3. Preserve the existing information architecture.
4. Preserve all existing copy unless there is a genuine implementation issue.
5. Preserve SEO/schema/legal requirements.
6. Identify reusable components.
7. Rebuild the **visual system**, not individual pages independently.
8. Establish typography, spacing, grid, image and section primitives first.
9. Rebuild homepage first.
10. Use the homepage to establish the visual language.
11. Propagate the visual system to category and product pages.
12. Only then polish secondary pages.

Do not patch the existing layout with random CSS until it "looks better".

The current visual direction needs a **deliberate redesign**.

---

# 48. COMPONENT SYSTEM

Build reusable primitives for:

- `Hero`
- `MegaHeading`
- `SectionLabel`
- `LifestyleImage`
- `FullBleedImage`
- `ProductFeature`
- `ProductSystem`
- `TechnicalSpec`
- `NomenclaturePlate`
- `TechnicalCallout`
- `FieldNoteFeature`
- `EditorialText`
- `ImageTextSplit`
- `RegisterCTA`
- `ProductGallery`
- `StickyProductInfo`
- `RangeFeature` — full-bleed product/range feature (image + overlaid type),
  replaces boxed image/text split layouts
- `PromoTile` / `PromoGrid` — boxed secondary-navigation tile with an angled
  brass corner tag, for "explore next" links (material, field notes,
  register) — not for the primary product range, which stays full-bleed
- `CapabilityStrip` — compact numbered trust/capability band, the
  equipment-documentation equivalent of a generic icon-reassurance strip

The components should accept layout variants rather than forcing every section into the same structure.

For example:

```text
ImageTextSplit
variant="image-left"
variant="image-right"
variant="overlap"
variant="full-bleed"
```

---

# 49. AVOID COMPONENT-DRIVEN VISUAL REPETITION

A reusable component is good.

A site where every section looks like the same component is bad.

Use variants and composition.

The design should look **art-directed**, even though it is technically componentised.

---

# 50. HOMEPAGE SUCCESS TEST

When the homepage is first rendered, ask:

### Does it look like a camping ecommerce website?

If yes:

**FAIL.**

### Does it look like a premium automotive/adventure brand that happens to sell camping equipment?

If yes:

**PASS.**

### Does the first viewport immediately communicate:

- rugged
- Australian
- premium
- modern
- adventurous
- technically credible
- visually confident

If yes:

**PASS.**

---

# 51. FINAL DESIGN NORTH STAR

If the design team needs a single sentence to guide every decision:

> **Build Hard Routine like a premium Australian adventure-equipment brand, using Rivian-level cinematic storytelling and monumental typography, combined with STEDI-level 4WD energy and product credibility.**

Or even shorter:

# **CINEMATIC.  
# INDUSTRIAL.  
# AUSTRALIAN.  
# BOLD.**

The site should make people want to **own the equipment before they even know what it costs.**

---

# 52. DESIGN QA CHECKLIST

Before considering the redesign complete:

## Overall

- [ ] Site no longer resembles a generic camping ecommerce site
- [ ] Homepage immediately feels premium
- [ ] Visual hierarchy is obvious
- [ ] Typography is genuinely large
- [ ] Photography is a major design element
- [ ] Layout changes rhythmically
- [ ] No repetitive card-grid sections dominate
- [ ] Military influence is subtle
- [ ] 4WD culture is obvious
- [ ] Australian identity is present
- [ ] Blackout/topographic identity is visible but restrained

## Typography

- [ ] Big Shoulders Display used aggressively for display
- [ ] IBM Plex Sans for body/UI
- [ ] IBM Plex Mono for technical information
- [ ] Hero typography is genuinely monumental
- [ ] Headings are not constrained to tiny content widths
- [ ] Mobile retains strong typography

## Photography

- [ ] Hero is cinematic
- [ ] Multiple full-bleed images
- [ ] Lifestyle photography appears throughout
- [ ] Product + vehicle + environment are connected
- [ ] Product details are shown
- [ ] Image aspect ratios vary intentionally
- [ ] No obvious generic camping stock aesthetic

## Layout

- [ ] Strong editorial grid
- [ ] Asymmetric compositions
- [ ] Full-bleed sections
- [ ] Large negative space
- [ ] Product pages feel like premium equipment presentations
- [ ] Category pages feel like editorial landing pages
- [ ] Ecommerce UI remains secondary

## Interaction

- [ ] Motion is subtle
- [ ] No unnecessary animation
- [ ] Reduced motion supported
- [ ] Header transitions elegantly
- [ ] Images load efficiently

## Final gut check

Ask someone who has never seen the project:

> "What kind of company do you think this is?"

The desired answer should be somewhere around:

> **"A premium Australian 4WD / adventure equipment brand."**

Not:

> "A camping blog."

Not:

> "A Shopify store."

Not:

> "A military surplus company."

---

# 53. IMPORTANT — DO NOT CHANGE THE ORIGINAL SPEC

Unless explicitly instructed otherwise, this visual brief does **not** authorise changes to:

- product specifications
- product claims
- SEO keyword strategy
- URLs
- schema strategy
- legal copy
- form requirements
- availability language
- technical stack
- accessibility requirements
- performance requirements
- launch timing

The original `spec.md` remains authoritative for those areas.

This document exists because the **content and technical strategy are already strong; the visual execution needs to be brought up to the intended brand level.**
