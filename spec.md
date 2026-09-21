# HARD ROUTINE — WEBSITE BUILD SPEC

**Version 1.0 · 21 September 2026**
**Target: pre-launch catalogue site with register-interest capture. No checkout.**

---

## 0. HOW TO USE THIS DOCUMENT

This spec contains the **finished copy** for every page. Write it to the page as given. Do not add lorem ipsum, do not add "TODO", do not add editorial notes to the rendered site.

### Placeholder values

These are the **only** invented values in this document. Every one appears exactly as written below so it can be found and replaced with a single search. Nothing else on the site is a placeholder.

| Token | Value used throughout | Replace with |
|---|---|---|
| Phone | `(07) 5555 5555` | Real business number |
| Phone (schema) | `+61 7 5555 5555` | Same number, E.164 |
| Email | `hello@hardroutine.com.au` | Real address |
| ABN | `00 000 000 000` | Real ABN once registered |
| Postal address | `PO Box 000, Brisbane QLD 4000` | Real address |
| Instagram | `https://www.instagram.com/hardroutine` | Real handle |
| YouTube | `https://www.youtube.com/@hardroutine` | Real channel |
| Facebook | `https://www.facebook.com/hardroutine` | Real page |
| Launch window | `early 2027` | Firm date once known |
| Interest counter | Rendered from real form data only | — |

**Never fabricate:** review counts, star ratings, testimonials, stock levels, countdown timers, "X people viewing now", or a registered-interest number that isn't the real count from the database. This is both an Australian Consumer Law issue and a Google trust issue.

---

## 1. WHAT THIS SITE IS FOR

Hard Routine is a new Australian brand making blackout technical-nylon storage for 4WD touring and camping. Nothing is for sale yet. The site exists to do four things, in priority order:

1. **Rank on informational and commercial-investigation intent** in the three product categories, so that when checkout turns on there is already an audience arriving.
2. **Capture qualified email addresses** through register-interest forms with lawful consent.
3. **Establish the brand as an entity** that search engines and AI answer engines can identify, describe and cite.
4. **Look like a brand worth waiting for.**

### The strategic constraint that shapes everything

Product pages cannot rank on transactional intent — there is no price, no reviews, no checkout. So the ranking work is done by **buying guides, fitment data and problem-solving content**, which link into product pages. That content is the engine. The product pages are the destination.

Every indexed page must contain something factually specific that exists nowhere else on the web. That single rule defends against thin content, scaled-content penalties, and Google's stated failure mode of content that "could easily be produced by a generative AI model."

---

## 2. TECH STACK

**Build with Astro (latest stable).** Rationale: static HTML output, zero JS by default, content collections for the journal, first-class image optimisation, trivially good Core Web Vitals. If a different framework is mandated, the requirements below still apply.

```
Framework      Astro, static output (output: 'static')
Styling        Plain CSS with custom properties. No Tailwind, no CSS framework.
JS             Only where interaction requires it. No client-side framework.
Images         Astro <Image> / <Picture>, AVIF with WebP fallback
Fonts          Self-hosted WOFF2, preloaded, font-display: swap
Forms          Formspree, Web3Forms or Netlify Forms — must return real POST,
               must not require client-side JS to submit
Hosting        Netlify, Cloudflare Pages or Vercel. Static. CDN. HTTP/2 or 3.
Analytics      Plausible or Fathom (cookieless, no consent banner needed).
               If GA4 is required instead, a consent banner becomes mandatory.
Domain         hardroutine.com.au (primary), hardroutine.au → 301 redirect
```

### Non-negotiables

- Every page must render fully readable with JavaScript disabled.
- No client-side rendering of primary content.
- No layout shift from fonts, images or embeds.
- Build must produce a valid `sitemap.xml` and `robots.txt`.

---

## 3. BRAND SYSTEM

### 3.1 Colour tokens

```css
:root {
  /* Ground */
  --bitumen:    #101311;  /* page background — green-biased black */
  --char:       #1A1F1C;  /* raised surface */
  --char-2:     #232924;  /* second surface */
  --line:       #2F3630;  /* borders, rules */

  /* Ink */
  --bone:       #E8E4DA;  /* primary text — warm stencil white */
  --lichen:     #7E8B7A;  /* secondary text — eucalypt-biased grey */
  --lichen-dim: #5D6A5A;  /* tertiary text, captions */

  /* Accent */
  --brass:      #B5894E;  /* primary accent — hardware, links, emphasis */
  --brass-dim:  #8A6837;  /* accent borders */
  --flare:      #E2542A;  /* under 2% of any screen. CTAs only. */

  /* Semantic — functional UI only, never decorative */
  --ok:         #6E9D5E;
  --warn:       #D19B2E;
  --stop:       #C4472C;
}
```

The site is **single-theme dark**. This is a deliberate commitment, not an omission. Paint every colour explicitly; never rely on a browser default. Set an explicit `background` on `body`.

**Contrast requirement:** `--bone` on `--bitumen` gives roughly 14:1. `--lichen` on `--bitumen` gives roughly 6:1. Both pass WCAG AA. Never put `--lichen-dim` on `--bitumen` at under 16px.

### 3.2 Typography

```
Display   Big Shoulders Display  700 / 800   — headings, product names. ALWAYS UPPERCASE.
Body      IBM Plex Sans          400 / 500 / 600
Data      IBM Plex Mono          400 / 500 / 600 — specs, SKUs, labels, tables
```

Self-host all three as WOFF2. Subset to Latin. Preload the display 800 and body 400 weights only.

```
Type scale (clamp, min → max)
h1   clamp(40px, 9vw, 76px)    line-height 0.94
h2   clamp(28px, 5.5vw, 46px)  line-height 0.96
h3   clamp(20px, 3.4vw, 27px)  line-height 1.05
body 17px                       line-height 1.62
small 14px                      line-height 1.55
mono-label 11px  letter-spacing 0.14em  uppercase
```

Running text max-width **68 characters**. Never wider.

### 3.3 Voice

Direct. Technical. Specific. Never salesy.

**Do:** state numbers with units. Name the failure you're fixing. Write short sentences. Use Australian English — *tyre, colour, organise, metre, licence* (noun), *aluminium*.

**Don't:** use "revolutionary", "game-changing", "ultimate", "premium", exclamation marks, or any claim you can't substantiate. Never write "military grade" or "mil-spec" — it's an ACCC substantiation risk and the brand doesn't need it.

**Positioning line, used sparingly:** *No lights. No noise. No trace.*

### 3.4 Product nomenclature

Every product is a line name plus a real measurement. Never S/M/L.

| Line | What | Sized by | SKU pattern |
|---|---|---|---|
| **ROLL** | Swag transit bags | Swag width, mm | `HR-ROLL-1200` |
| **HAUL** | Duffle bags | Litres | `HR-HAUL-70` |
| **DUMP** | Rear wheel bags | Litres | `HR-DUMP-90` |

*(DUMP is authentic military vernacular — a dump pouch is where spent magazines go. If the reading feels wrong at retail, the fallback name is TAIL. Decide before build; do not ship both.)*

### 3.5 The label device

Every product page carries a nomenclature plate: a brass-headed block containing the product name, SKU, and specs in mono. This is the brand mark, more than the wordmark is. Build it as a reusable component.

---

## 4. SITE MAP

```
/                               Home
/gear/                          Range hub
/gear/swag-bags/                Category + buying guide
/gear/swag-bags/roll-900/       Product
/gear/swag-bags/roll-1200/      Product
/gear/swag-bags/roll-1400/      Product
/gear/duffle-bags/              Category + buying guide
/gear/duffle-bags/haul-40/      Product
/gear/duffle-bags/haul-70/      Product
/gear/duffle-bags/haul-100/     Product
/gear/rear-wheel-bags/          Category + buying guide
/gear/rear-wheel-bags/dump-60/  Product
/gear/rear-wheel-bags/dump-90/  Product
/the-fabric/                    Material and construction
/about/                         Brand story, who we are
/field-notes/                   Content hub
/field-notes/[slug]/            Articles (6 at launch)
/register/                      Register interest
/register/thanks/               Confirmation — NOINDEX
/contact/
/privacy/
/terms/
```

### Indexing rules

| Page type | Index |
|---|---|
| Home, About, The Fabric, Contact, Privacy, Terms | Index |
| Category pages | Index |
| Product pages | Index |
| Field Notes hub and articles | Index |
| `/register/` | Index |
| `/register/thanks/` | **noindex, nofollow** |
| Any future filtered or parameter URL | **noindex** or canonical to parent |

Do not noindex the site pre-launch. Domain and URL history accrue from day one.

### Navigation

Header: `GEAR` · `THE FABRIC` · `FIELD NOTES` · `ABOUT` — then a `REGISTER INTEREST` button in `--flare`.

Footer: three columns — Gear (all three categories), Brand (About, The Fabric, Field Notes, Contact), Legal (Privacy, Terms) — plus social icons, ABN, and the copyright line.

Breadcrumbs on every page except home, visible and marked up.

---

## 5. KEYWORD MAP

All volumes are Australian monthly searches, Semrush, September 2026. CPC in AUD.

### Swag bags — `/gear/swag-bags/`

| Keyword | Vol | CPC | Role |
|---|---|---|---|
| swag bag | 1,600 | $0.80 | Primary — see note |
| tent bag | 320 | $0.41 | Secondary |
| swag cover | 110 | — | Secondary |
| canvas swag bag | 90 | $0.73 | Secondary |
| oztent bag | 90 | — | Long tail |
| mouldy tent | 90 | — | Field Notes |
| mould on canvas | 70 | — | Field Notes |
| replacement tent bag | 40 | $0.48 | Long tail, high qualification |
| swag storage bag | 20 | — | Long tail |
| packing up a wet tent | 20 | — | Field Notes |

**Note on "swag bag":** the 1,600 figure is contaminated by "swag bag" meaning conference gift bag, and the trend line shows a single event-driven spike. Treat the clean terms — tent bag, canvas swag bag, swag cover, replacement tent bag — as the real floor. Do not build the whole page around the inflated number.

### Duffle bags — `/gear/duffle-bags/`

| Keyword | Vol | CPC | Role |
|---|---|---|---|
| duffle bag | 22,200 | $0.49 | Head term — will not rank early |
| duffel bag | 4,400 | $0.49 | Variant spelling, cover in copy |
| travel duffle bag | 720 | $0.45 | Secondary |
| canvas duffle bag | 590 | $0.69 | **Primary realistic target** |
| duffle bag australia | 390 | $0.62 | **Primary realistic target** |
| gear bag | 390 | $0.82 | Secondary |
| waterproof duffle bag | 210 | $0.40 | Secondary |
| camping duffle bag | 110 | $0.42 | Long tail |
| heavy duty duffle bag | 70 | $0.57 | Long tail |
| canvas gear bag | 40 | $1.08 | Long tail, high CPC |

**Strategy:** do not chase "duffle bag" at 22,200 — it's dominated by fashion and luggage retail. Own the qualified modifiers. The page targets *canvas duffle bag*, *duffle bag australia*, *waterproof duffle bag*, *heavy duty duffle bag*.

### Rear wheel bags — `/gear/rear-wheel-bags/`

| Keyword | Vol | CPC | Role |
|---|---|---|---|
| spare wheel bag | 1,000 | $1.02 | **Primary** |
| rear wheel bag | 320 | $1.08 | **Primary** |
| dirty gear bag | 320 | $0.78 | Secondary |
| spare tyre bag | 260 | $0.82 | Secondary |
| 4wd storage | 170 | $1.00 | Broad |
| wheel bin bag | 110 | $1.19 | Long tail, highest CPC in set |

This is the highest commercial-intent cluster on the site — roughly 2,000 searches a month at around $1.00 CPC. Advertisers only bid that when it converts.

---

## 6. FULL PAGE COPY

### 6.1 HOME — `/`

**Title tag:** `Hard Routine | Blackout 4WD Storage & Camping Gear Bags`
**Meta description:** `Australian-designed blackout storage for 4WD touring — swag transit bags, duffles and rear wheel bags in topographic technical nylon. Launching early 2027. Register interest.`
**H1:** `Gear that gets packed away properly`

---

**HERO**

> ## Gear that gets packed away properly
>
> Blackout storage for 4WD touring and camping. Built around the problems that ruin good gear — wet canvas, red dust, and the bag that tore the first time you used it.
>
> Launching early 2027.
>
> **[Register your interest]** *(primary, --flare)*
> **[See the range]** *(secondary, ghost button)*

---

**THE PROBLEM SECTION**

> ## The bag that came with it is the part that fails first
>
> Ask anyone who's owned a swag or an awning for more than two seasons. The canvas outlasts the bag it came in. The bag is cut too tight to get the swag back into wet, it tears at the corners, the zip jams with dust, and when it leaks the thing inside goes mouldy.
>
> We went and read fifteen years of Australian forum threads and several hundred product reviews before we drew a single pattern. Three failures came up over and over:
>
> **Cut too small.** The supplied bag fits a factory-rolled swag in a warehouse. It does not fit a wet, sandy, badly-rolled swag at 6am in the rain.
>
> **The zip eats the fabric.** Fine-gauge zips jam with grit and catch the canvas they're meant to protect. People report torn tents and broken pulls from the same action.
>
> **Waterproof means it can't breathe.** A damp swag sealed into a PVC bag is a mould incubator. Gear arrives home furry. The industry's answer is a blog post about how to scrub it off.
>
> We designed around all three.

---

**THE RANGE SECTION**

> ## Three things, done properly
>
> ### ROLL — Swag transit bags
> Oversized on purpose. Sized for a wet swag rolled badly, not a dry one rolled well. Vented under storm hoods at both ends so damp gear can dry instead of stewing. 900, 1200 and 1400 mm.
> **[Swag bags →]**
>
> ### HAUL — Duffle bags
> A touring duffle in coated technical nylon, not cotton canvas. Doesn't hold water, doesn't mildew, doesn't weigh four kilos before you put anything in it. 40, 70 and 100 litres.
> **[Duffle bags →]**
>
> ### DUMP — Rear wheel bags
> For everything you don't want inside the vehicle. Wet towels, muddy recovery gear, firewood, rubbish. Welded liner, drains properly, webbing that won't let go on the Birdsville Track. 60 and 90 litres.
> **[Rear wheel bags →]**

---

**THE FABRIC TEASER**

> ## One fabric across the range
>
> 500D PU-coated nylon oxford in a topographic contour print. Not cotton canvas — it's lighter, it doesn't absorb water, it won't mildew if you pack it damp, and it doesn't shrink.
>
> Blackout, because nothing in the Australian bush is black and we're not going to pretend it's camouflage. It's low-glare, it doesn't show red dust, and it looks right against a blacked-out build.
>
> **[How we chose it →]**

---

**REGISTER BLOCK**

> ## Launching early 2027
>
> Register your interest and you'll hear first. We'll tell you when the range is live, what it costs, and when the first run sells out. No spam, no daily emails.
>
> *[Form — see §8]*

---

### 6.2 CATEGORY — `/gear/swag-bags/`

**Title tag:** `Replacement Swag Bags & Tent Bags | Hard Routine Australia`
**Meta description:** `Oversized replacement swag bags and tent bags built for wet pack-ups. Vented so damp canvas dries instead of going mouldy. Australian designed. Launching early 2027.`
**H1:** `Replacement swag bags, built for the wet pack-up`

---

> # Replacement swag bags, built for the wet pack-up
>
> A swag transit bag is the sleeve your swag lives in between trips. Ours are cut oversized and vented, so a wet swag can go in fast and dry out instead of going mouldy.
>
> **ROLL 900 · ROLL 1200 · ROLL 1400** — launching early 2027.
>
> ---
>
> ## Why does the bag my swag came with keep failing?
>
> Because it was designed to hold a factory-rolled swag, not a used one. Three failures account for almost every complaint we found across Australian product reviews:
>
> **It's cut to the minimum.** A swag that's been slept in, rained on and rolled in a hurry is larger than the one that left the factory. Reviewers describe spending 45 minutes rolling, tearing holes trying to force it in, and corners ripping on the first use.
>
> **The zip is too fine.** Fine-gauge zips fill with grit and stop running. Worse, they catch the canvas — the reported outcome is a torn tent or a snapped pull, which writes off the whole product.
>
> **It's waterproof but sealed.** A damp swag zipped into an unvented PVC sleeve cannot dry. That's the mould mechanism, and it's why people find their gear ruined weeks later.
>
> ---
>
> ## What size swag bag do I need?
>
> Measure your swag's width when rolled, then add nothing — our sizing already includes the allowance for a wet, loose roll.
>
> | Your swag | Hard Routine size | Bag internal Ø | Bag length |
> |---|---|---|---|
> | Single, up to 900 mm | ROLL 900 | 380 mm | 1,000 mm |
> | Double, up to 1200 mm | ROLL 1200 | 450 mm | 1,300 mm |
> | King double, up to 1400 mm | ROLL 1400 | 500 mm | 1,500 mm |
>
> If your swag is between sizes, go up. There is no downside to a bag that's slightly too big and a significant one to a bag that's slightly too small.
>
> ---
>
> ## How do you stop a swag going mouldy in the bag?
>
> Mould needs moisture and still air. A sealed bag traps both. Our bags carry mesh vent panels at each end, set beneath a storm hood so driven rain can't track in while water vapour can get out.
>
> This reduces the risk. It does not eliminate it. **Nothing replaces drying your swag properly within a day or two of packing it wet** — if you pack a soaked swag and leave it for a fortnight, it will mould in any bag on the market, including ours. What a vented bag buys you is the drive home and a few days' grace instead of a few hours.
>
> ---
>
> ## Specification
>
> | | ROLL 900 | ROLL 1200 | ROLL 1400 |
> |---|---|---|---|
> | Internal diameter | 380 mm | 450 mm | 500 mm |
> | Internal length | 1,000 mm | 1,300 mm | 1,500 mm |
> | Capacity | 113 L | 207 L | 295 L |
> | Empty weight | 0.9 kg | 1.2 kg | 1.4 kg |
> | Fabric | 500D PU-coated nylon oxford | ← | ← |
> | Zip | YKK #10 VISLON, two-way | ← | ← |
> | Vent panels | 2 | 2 | 2 |
> | Webbing | 38 mm UV-stabilised polyester | ← | ← |
>
> ---
>
> *[Product cards: ROLL 900, ROLL 1200, ROLL 1400]*
>
> *[Register interest form]*
>
> ---
>
> ## Related reading
> - [Why swag bags fail, and what to look for in a replacement](/field-notes/why-swag-bags-fail/)
> - [How to pack up a wet swag without ruining it](/field-notes/packing-up-wet/)
> - [Getting mould out of canvas — and stopping it coming back](/field-notes/mould-on-canvas/)

---

### 6.3 CATEGORY — `/gear/duffle-bags/`

**Title tag:** `Canvas-Alternative Duffle Bags for 4WD Touring | Hard Routine`
**Meta description:** `Heavy duty waterproof duffle bags in coated technical nylon — lighter than canvas, won't mildew, won't absorb water. 40L, 70L and 100L. Australian designed. Launching early 2027.`
**H1:** `Duffle bags that don't soak up half the campsite`

---

> # Duffle bags that don't soak up half the campsite
>
> A touring duffle in 500D PU-coated nylon oxford. Waterproof, lighter than canvas, and it won't mildew if you throw it in the ute damp.
>
> **HAUL 40 · HAUL 70 · HAUL 100** — launching early 2027.
>
> ---
>
> ## Why not canvas?
>
> Cotton canvas is the Australian default and it has real strengths — it's tough, it breathes, and it ages well. But for a bag that lives in a vehicle it has three problems:
>
> **It absorbs water.** A wet canvas duffle can gain several kilos and takes days to dry. Coated nylon sheds water and dries in minutes.
>
> **It mildews.** Cotton is organic, so mould eats it. Nylon is not, so mould has nothing to feed on. If you pack damp gear — and everyone does — this matters.
>
> **It's heavy before you start.** A 70-litre canvas duffle can weigh over 2 kg empty. Ours is 1.1 kg.
>
> Canvas is the better choice for a swag you sleep in, where breathability against your body actually matters. For a bag you throw in a tub, coated nylon wins on every axis that counts.
>
> ---
>
> ## What size duffle bag do I need?
>
> | Capacity | Suits | Typical use |
> |---|---|---|
> | HAUL 40 | 1 person, 2–3 nights | Weekend away, carry-on sized |
> | HAUL 70 | 1 person, a week · 2 people, a weekend | The one most people want |
> | HAUL 100 | 2 people, a week · bulky bedding | Extended touring, shared gear |
>
> If you're buying one, buy the 70. It's the size that fits a week's clothing and still goes in the overhead locker of a light aircraft charter.
>
> ---
>
> ## Is a waterproof duffle bag actually waterproof?
>
> Ours is **water resistant, not submersible**, and we'd rather say so than let you find out. The fabric is PU-coated and sheds rain indefinitely. The seams are stitched, not welded, so water will eventually find them under sustained pressure.
>
> In practice: rain on a roof rack, spray on a tray, a creek crossing splash — fine. Sitting in a puddle for an hour, or actual submersion — not fine. If you need genuinely dry storage for electronics, use a dry bag inside the duffle.
>
> ---
>
> ## Specification
>
> | | HAUL 40 | HAUL 70 | HAUL 100 |
> |---|---|---|---|
> | Capacity | 40 L | 70 L | 100 L |
> | Dimensions | 500 × 300 × 270 mm | 650 × 350 × 310 mm | 750 × 400 × 335 mm |
> | Empty weight | 0.8 kg | 1.1 kg | 1.4 kg |
> | Fabric | 500D PU-coated nylon oxford | ← | ← |
> | Base | Double-layer, welded | ← | ← |
> | Zip | YKK #10 VISLON, two-way, storm-flapped | ← | ← |
> | Carry | Grab handles + removable shoulder strap | ← | ← |
> | Interior | Bone lining — you can see what's in it | ← | ← |
>
> ---
>
> *[Product cards: HAUL 40, HAUL 70, HAUL 100]*
>
> *[Register interest form]*
>
> ---
>
> ## Related reading
> - [Canvas or nylon: which is actually better for touring gear?](/field-notes/canvas-vs-nylon/)
> - [Why we line every bag in bone, not black](/field-notes/bone-lining/)

---

### 6.4 CATEGORY — `/gear/rear-wheel-bags/`

**Title tag:** `Rear Wheel Bags & Spare Tyre Dirty Gear Bags | Hard Routine`
**Meta description:** `Spare wheel bags for wet, muddy and filthy gear. Welded liner, real drainage, webbing that holds on corrugations. 60L and 90L. Australian designed. Launching early 2027.`
**H1:** `Rear wheel bags for everything you don't want inside`

---

> # Rear wheel bags for everything you don't want inside
>
> A spare wheel bag mounts on your rear-mounted spare and holds the gear you don't want in the cabin — wet towels, muddy recovery gear, firewood, rubbish.
>
> **DUMP 60 · DUMP 90** — launching early 2027.
>
> ---
>
> ## What goes in a rear wheel bag?
>
> Anything wet, dirty, sharp or smelly. In practice that's:
>
> - Wet towels, swimmers and washing
> - Muddy recovery tracks, snatch straps and shackles after a recovery
> - Firewood, which drops bark and scratches interior trim
> - Rubbish, on tracks where you have to pack it out
> - Boots, thongs and anything else covered in sand
>
> The point is separation. Keeping filth out of the same space as bedding, food and clothing is the whole job.
>
> ---
>
> ## Why do rear wheel bags fail?
>
> We read every Australian review and forum thread we could find. The complaints cluster on three things, and none of them is the fabric.
>
> **The straps.** Attachment is the number one failure. Owners report bags detaching at the top, inverting, and dragging down the Birdsville Track. Others describe straps as "piddley" and difficult to secure. We use 50 mm webbing with steel cam buckles and four anchor points, not two.
>
> **The zip fills with dust.** A fine-gauge zip on the back of a vehicle on a dirt road will stop working. We use YKK #10 VISLON — a coarse moulded chain that sheds grit, under a full-length storm flap.
>
> **It doesn't drain, or it drains flies in.** Drainage holes let water out and blowflies in. One owner described covering his own drain holes with fly mesh after a maggot problem. Ours drain through mesh-backed eyelets.
>
> ---
>
> ## What size do I need?
>
> | Capacity | Suits | Typical load |
> |---|---|---|
> | DUMP 60 | Most wagons and dual cabs | Rubbish and wet gear for a weekend |
> | DUMP 90 | Extended touring, families | Recovery tracks, firewood, a week's rubbish |
>
> Both fit spare wheels from 16 to 18 inch with tyres up to 285 section width. Measure your tyre's overall diameter if you're unsure — it's printed on the sidewall.
>
> ---
>
> ## Specification
>
> | | DUMP 60 | DUMP 90 |
> |---|---|---|
> | Capacity | 60 L | 90 L |
> | Dimensions | 550 × 600 × 180 mm | 620 × 700 × 210 mm |
> | Empty weight | 1.3 kg | 1.6 kg |
> | Fabric | 500D PU-coated nylon oxford | ← |
> | Liner | Welded TPU, removable, hoses out | ← |
> | Drainage | 4 mesh-backed eyelets | 6 mesh-backed eyelets |
> | Zip | YKK #10 VISLON, storm-flapped | ← |
> | Mounting | 50 mm webbing, 4 points, steel cam buckles | ← |
> | Fits | 16–18″ wheels, tyres to 285 section | ← |
>
> ---
>
> *[Product cards: DUMP 60, DUMP 90]*
>
> *[Register interest form]*
>
> ---
>
> ## Related reading
> - [How to store recovery gear after you've actually used it](/field-notes/dirty-recovery-gear/)
> - [Why dust kills zips, and what to specify instead](/field-notes/dust-and-zips/)

---

### 6.5 PRODUCT PAGES

Every product page uses the same structure. Nine pages total. The copy below gives the unique content for each; the shared sections (fabric, construction, register form) are components pulled in on every page.

**Shared structure:**

1. Breadcrumb
2. H1 — product name and descriptor
3. Availability notice (see below — mandatory, honest)
4. Short intro, 40–60 words, answer-first
5. Nomenclature plate component (name, SKU, key specs in mono)
6. "What it's for" — 2–3 paragraphs
7. Full specification table
8. "What's different about it" — 3 bullet points tied to real failures
9. Register interest form
10. Related products and related reading

**Availability notice — exact copy, on every product page:**

> **Not yet available.** This product is in development and is not for sale. We expect the first run in early 2027. Register your interest below and we'll email you when it's ready — you'll hear before it's public.

Style it as a bordered block in `--brass`, above the fold, unmissable. **This is an Australian Consumer Law requirement as much as a UX one** — you must not imply something is purchasable when it isn't.

---

**`/gear/swag-bags/roll-900/`**

- **Title:** `ROLL 900 Swag Transit Bag — Single Swags | Hard Routine`
- **Meta:** `Oversized vented transit bag for single swags up to 900 mm. YKK #10 zip, mesh vents, 113 L. Not yet available — register interest.`
- **H1:** `ROLL 900 — Swag transit bag for single swags`
- **Intro:** `A vented transit bag for single swags up to 900 mm rolled. Cut oversized so a wet swag goes in fast, with mesh vents at both ends so it dries on the drive home instead of stewing.`
- **What it's for:** Single swags — Darche Lone Wolf, Oztrail Mitchell, Kings Escape and equivalents. Also suits a rolled awning, a small tent, or bedding. The 380 mm internal diameter takes a swag with a 70 mm mattress rolled loosely, which is what happens when you're packing in the rain.
- **What's different:** Oversized by design, not by accident · Mesh vents under storm hoods at both ends · YKK #10 VISLON with a full storm flap so the zip can't eat the canvas

**`/gear/swag-bags/roll-1200/`**

- **Title:** `ROLL 1200 Swag Transit Bag — Double Swags | Hard Routine`
- **Meta:** `Oversized vented transit bag for double swags up to 1200 mm. YKK #10 zip, mesh vents, 207 L. Not yet available — register interest.`
- **H1:** `ROLL 1200 — Swag transit bag for double swags`
- **Intro:** `A vented transit bag for double swags up to 1200 mm rolled. The size most people need, cut with enough room to roll a wet swag badly and still get it closed.`
- **What it's for:** Double swags — Darche Dusk to Dawn, Kings Big Daddy, Oztrail Mitchell Double and equivalents. At 450 mm internal diameter it also swallows a 270-degree awning, a folded annexe wall, or two single swags.
- **What's different:** as above.

**`/gear/swag-bags/roll-1400/`**

- **Title:** `ROLL 1400 Swag Transit Bag — King Double Swags | Hard Routine`
- **Meta:** `Oversized vented transit bag for king double swags up to 1400 mm. YKK #10 zip, mesh vents, 295 L. Not yet available — register interest.`
- **H1:** `ROLL 1400 — Swag transit bag for king double swags`
- **Intro:** `The largest in the range. A vented transit bag for king double swags up to 1400 mm rolled, with 500 mm of internal diameter for thick mattresses and cold-weather bedding.`
- **What it's for:** King doubles and any swag with a 100 mm or thicker mattress. Also the right size for a rolled 270-degree awning with walls attached, or a rooftop tent cover and annexe together.
- **What's different:** as above.

---

**`/gear/duffle-bags/haul-40/`**

- **Title:** `HAUL 40 Duffle Bag — 40L Waterproof Touring Duffle | Hard Routine`
- **Meta:** `40 litre coated nylon duffle. Lighter than canvas, won't mildew, bone-lined interior. 0.8 kg empty. Not yet available — register interest.`
- **H1:** `HAUL 40 — 40 litre touring duffle`
- **Intro:** `A 40 litre duffle in coated technical nylon. Enough for one person for a long weekend, light enough to carry properly, and it won't hold water or mildew if you pack it damp.`
- **What it's for:** Weekend trips, a change of clothes in the back of the ute, or as a cabin bag. At 500 × 300 × 270 mm it fits most airline carry-on limits, though check your carrier.
- **What's different:** 0.8 kg empty against roughly 1.5 kg for canvas equivalent · Bone lining so you can find things in low light · Welded double-layer base, the panel that fails first on every duffle

**`/gear/duffle-bags/haul-70/`**

- **Title:** `HAUL 70 Duffle Bag — 70L Heavy Duty Touring Duffle | Hard Routine`
- **Meta:** `70 litre coated nylon duffle, the size most people need. Waterproof, mildew-proof, 1.1 kg empty. Not yet available — register interest.`
- **H1:** `HAUL 70 — 70 litre touring duffle`
- **Intro:** `Seventy litres is the size most people actually want. A week of clothing for one, a weekend for two, and still light enough to lift onto a roof rack with one hand.`
- **What it's for:** The default. A week's touring for one person, or a weekend for a couple. Fits across most drawer systems and sits neatly in a canopy without wasting height.
- **What's different:** as above.

**`/gear/duffle-bags/haul-100/`**

- **Title:** `HAUL 100 Duffle Bag — 100L Large Touring Duffle | Hard Routine`
- **Meta:** `100 litre coated nylon duffle for extended touring. Waterproof, mildew-proof, 1.4 kg empty. Not yet available — register interest.`
- **H1:** `HAUL 100 — 100 litre touring duffle`
- **Intro:** `A hundred litres for extended trips and shared gear. Bedding, jackets and a fortnight of clothing in one bag, in a fabric that won't gain three kilos when it rains.`
- **What it's for:** Extended touring, family trips, and bulky low-density gear — sleeping bags, puffer jackets, bedding. The size where canvas becomes genuinely unpleasant to lift.
- **What's different:** as above.

---

**`/gear/rear-wheel-bags/dump-60/`**

- **Title:** `DUMP 60 Rear Wheel Bag — 60L Spare Tyre Dirty Gear Bag | Hard Routine`
- **Meta:** `60 litre spare wheel bag with welded liner and real drainage. 50 mm webbing, four anchor points, YKK #10 zip. Not yet available — register interest.`
- **H1:** `DUMP 60 — 60 litre rear wheel bag`
- **Intro:** `A sixty litre bag that mounts on your rear spare and holds everything you don't want inside the vehicle. Welded liner, four mesh-backed drains, and webbing that won't let go on corrugations.`
- **What it's for:** Weekend and week-long touring in a wagon or dual cab. Takes a weekend's rubbish, wet towels and muddy boots with room left. Fits spare wheels from 16 to 18 inch with tyres up to 285 section width.
- **What's different:** 50 mm webbing across four anchor points — attachment is the number one reported failure in this category · Removable welded TPU liner you can hose out · Mesh-backed drain eyelets that let water out without letting flies in

**`/gear/rear-wheel-bags/dump-90/`**

- **Title:** `DUMP 90 Rear Wheel Bag — 90L Spare Tyre Dirty Gear Bag | Hard Routine`
- **Meta:** `90 litre spare wheel bag for extended touring. Welded liner, six drains, 50 mm webbing on four anchor points. Not yet available — register interest.`
- **H1:** `DUMP 90 — 90 litre rear wheel bag`
- **Intro:** `Ninety litres for extended touring and families. Big enough for recovery tracks, firewood and a week of rubbish, with six drains and a liner that hoses clean.`
- **What it's for:** Long trips, remote touring and anyone carrying recovery boards. At 620 × 700 mm it takes a pair of recovery tracks flat, which is the load most bags in this category can't handle.
- **What's different:** as above.

---

### 6.6 THE FABRIC — `/the-fabric/`

**Title tag:** `The Fabric — 500D Coated Nylon, and Why Not Canvas | Hard Routine`
**Meta description:** `Why Hard Routine uses 500D PU-coated nylon oxford instead of cotton canvas, and why every bag is lined in bone. Materials, construction and the trade-offs.`
**H1:** `One fabric, chosen for a reason`

---

> # One fabric, chosen for a reason
>
> Every Hard Routine product is made from the same material: **500D PU-coated nylon oxford**, printed with a topographic contour pattern, in blackout. Here's how we got there and what we gave up.
>
> ---
>
> ## Why not cotton canvas?
>
> Canvas is the Australian default for good reasons. It's tough, it breathes, it ages well, and it can be repaired. For a swag you sleep in, it's the right answer — breathability against your body genuinely matters.
>
> For a bag that lives in a vehicle, it isn't. Cotton absorbs water, so a wet canvas bag gains kilos and takes days to dry. Cotton is organic, so mould feeds on it. And canvas is heavy — a 70 litre canvas duffle can weigh over 2 kg before you put anything in it.
>
> Coated nylon sheds water, gives mould nothing to eat, and weighs about half as much. The trade-off is that it doesn't breathe, which is why our swag bags carry dedicated vent panels rather than relying on the fabric.
>
> ---
>
> ## What does 500D mean?
>
> **Denier is a measure of yarn thickness, not fabric strength.** 500D nylon uses a yarn weighing 500 grams per 9,000 metres. Higher denier generally means a heavier, more abrasion-resistant cloth, but weave, coating and finish matter as much.
>
> For context: a typical backpack is 210–420D, a heavy-duty military pack is 1000D, and 500D sits in the range used for gear that gets thrown around without needing to survive being dragged behind a vehicle.
>
> We're not going to call it Cordura, because it isn't. CORDURA® is a registered Invista trademark applied to licensed fabrics, and ours isn't one. It's 500D PU-coated nylon oxford, which is what it says on the roll.
>
> ---
>
> ## Why blackout, and why it isn't camouflage
>
> The pattern is topographic — contour lines, the kind on a topo map. We chose it because it reads as navigation and terrain rather than costume, and because no Australian camping brand is using it.
>
> **We don't call it camouflage and we won't.** Nothing in the Australian landscape is black. A blackout bag does not conceal you in the bush and any brand telling you otherwise is selling you a story. What blackout actually gives you is low glare, dirt that doesn't show, and gear that looks right against a blacked-out build.
>
> One honest caveat: **black absorbs heat.** A black bag left in full sun in the Kimberley will be hot to touch. That's a real trade-off of the colour and we'd rather you knew.
>
> ---
>
> ## Why every bag is lined in bone
>
> Black-on-black interiors are miserable. You cannot find a head torch in a black bag at 9pm, which is exactly when you need one.
>
> Every Hard Routine bag is lined in bone — a warm off-white that reflects what light there is. It's the single most useful feature in the range and it costs almost nothing to include, which is why we can't explain why it isn't standard everywhere.
>
> ---
>
> ## Hardware
>
> | Component | Specification | Why |
> |---|---|---|
> | Zip chain | YKK #10 VISLON | Coarse moulded acetal. Sheds grit instead of jamming — fine-gauge zips are the most-reported failure in Australian 4WD gear |
> | Zip slider | Auto-lock | Stops the zip creeping open on corrugations |
> | Storm flap | Full length, over the chain | Keeps fabric out of the zip path. A zip that catches the bag's own fabric writes off the product |
> | Webbing | 38–50 mm UV-stabilised polyester | Nylon webbing degrades faster under Australian UV |
> | Thread | UV-stabilised bonded polyester | On exposed gear the stitching usually fails before the fabric does |
> | Seams | Stitched and bar-tacked | No heat-sensitive seam tape — reviewers report tape lifting above 25 °C |
>
> ---
>
> ## What we haven't solved
>
> **Our bags are water resistant, not waterproof.** The seams are stitched, not welded. Sustained submersion will get water in.
>
> **A vented bag reduces mould risk, it doesn't eliminate it.** Dry your gear properly. Nothing on the market changes that.
>
> **PU coatings have a finite life.** Heat and humidity break them down eventually. We'd rather tell you that than claim a lifetime warranty we can't honour.

---

### 6.7 ABOUT — `/about/`

**Title tag:** `About Hard Routine — Australian Blackout 4WD Storage`
**Meta description:** `Hard Routine is an Australian brand making blackout storage for 4WD touring. Founded in Brisbane in 2026. Here's who we are and why we started.`
**H1:** `About Hard Routine`

---

> # About Hard Routine
>
> **Hard Routine is an Australian brand making blackout storage and gear bags for 4WD touring and camping.** We're based in Brisbane, Queensland, and we started in 2026. Our first range — swag transit bags, duffles and rear wheel bags — launches in early 2027.
>
> ---
>
> ## What "hard routine" means
>
> Hard routine is a term from the Australian and British Army. It means operating with no lights, no cooking, no noise and no trace — everything squared away, nothing left behind, nothing given away.
>
> We took the name because it describes how we think gear should work. Pack properly, leave nothing, don't advertise yourself. It's also a fair description of what we build: storage for people who'd rather their kit was sorted than showy.
>
> ---
>
> ## Why we started
>
> Because the bag that comes with your gear is almost always the worst part of it.
>
> Before we drew a single pattern we read fifteen years of Australian forum threads and several hundred product reviews. The same failures came up relentlessly — bags cut too small to repack a wet swag, fine zips jamming with red dust, waterproof sleeves that turned damp canvas mouldy, and straps that let go on corrugated roads.
>
> None of that is hard to fix. It just hasn't been, because a carry bag is an afterthought bundled with a more expensive product. We decided to make the afterthought the product.
>
> ---
>
> ## How we design
>
> We start from the complaint, not the category. Every design decision in the first range traces to a specific documented failure:
>
> - Bags are **cut oversized** because "doesn't fit unless you spend 45 minutes rolling" is the most common complaint in Australian swag reviews.
> - We use **YKK #10 VISLON** because owners report fine-gauge zips filling with dust and catching the fabric they're protecting.
> - Swag bags are **vented** because a sealed waterproof sleeve is a mould incubator.
> - Rear wheel bags use **50 mm webbing across four anchor points** because attachment is the number one reported failure in that category.
>
> ---
>
> ## What we won't do
>
> We won't call our fabric Cordura, because it isn't licensed Cordura. We won't call blackout "camouflage", because nothing in the Australian bush is black. We won't say "military grade", because it means nothing and we'd have to substantiate it. And we won't claim our bags are waterproof when they're water resistant.
>
> If a claim can't survive a specification sheet, we don't make it.
>
> ---
>
> ## Contact
>
> **Hard Routine**
> ABN 00 000 000 000
> PO Box 000, Brisbane QLD 4000
> hello@hardroutine.com.au
> (07) 5555 5555

---

### 6.8 FIELD NOTES HUB — `/field-notes/`

**Title tag:** `Field Notes — 4WD Storage & Camping Gear Guides | Hard Routine`
**Meta description:** `Practical guides on camping gear storage — stopping mould in canvas, choosing a swag bag, storing dirty recovery gear, and why zips fail in Australian dust.`
**H1:** `Field Notes`

> # Field Notes
>
> Practical writing on gear storage, based on what actually fails. No listicles, no affiliate roundups.

Then a chronological card grid. Each card: title, 20-word standfirst, reading time, date.

### Launch articles — six, written in full before launch

These are the ranking engine. Each must contain something factually specific that exists nowhere else.

| Slug | Title | Primary target | Why it earns citations |
|---|---|---|---|
| `why-swag-bags-fail` | Why swag bags fail, and what to look for in a replacement | replacement tent bag, swag bag | Original synthesis of real Australian review data, with a failure-mode table |
| `packing-up-wet` | How to pack up a wet swag without ruining it | packing up a wet tent | Step-by-step with actual drying timeframes |
| `mould-on-canvas` | Getting mould out of canvas — and stopping it coming back | mould on canvas, mouldy tent | Method table by severity, plus the prevention most guides skip |
| `canvas-vs-nylon` | Canvas or nylon: which is actually better for touring gear? | canvas duffle bag | Head-to-head spec table: weight, water absorption, dry time, UV life |
| `dust-and-zips` | Why red dust kills zips, and what to specify instead | — (supports all product pages) | Zip gauge and chain-type comparison table — genuinely original for this market |
| `dirty-recovery-gear` | How to store recovery gear after you've actually used it | dirty gear bag, spare wheel bag | Covers the drying guidance most owners don't follow, with the reasoning |

**Article structure — mandatory for all six:**

1. **H1** matching the search intent
2. **Answer-first standfirst** — 40–100 words that fully answer the title question before any context. This is the passage AI engines extract.
3. Question-shaped H2s using real query phrasing
4. Each section self-contained — no "as mentioned above", no pronouns referring across headings. Repeat the noun.
5. At least one **comparison table** with real numbers and units
6. At least one **attributed quote** from a named source with a link
7. A **definition sentence** in the form "X is a Y that Z" for the main term
8. Contextual internal links to the relevant product category
9. Author byline and a visible last-updated date

---

### 6.9 REGISTER INTEREST — `/register/`

**Title tag:** `Register Your Interest | Hard Routine`
**Meta description:** `Be first to know when Hard Routine launches. Blackout 4WD storage — swag bags, duffles and rear wheel bags. Launching early 2027.`
**H1:** `Be first when we launch`

> # Be first when we launch
>
> The first range lands in early 2027. Register below and you'll hear before anyone else — what's in it, what it costs, and when it's available.
>
> We'll email you at launch and occasionally with product news. Not daily, not weekly. Unsubscribe any time, one click.
>
> *[Form — see §8]*
>
> ---
>
> ## What you're registering for
>
> **ROLL** — oversized vented swag transit bags in three sizes
> **HAUL** — 40, 70 and 100 litre coated-nylon touring duffles
> **DUMP** — 60 and 90 litre rear wheel bags with welded liners
>
> All in 500D PU-coated nylon oxford, blackout topographic print, YKK #10 hardware and bone linings.

### `/register/thanks/` — noindex

> # You're on the list
>
> Thanks. We've got your email and you'll hear from us when the range is ready.
>
> Nothing else to do for now. If you want to see what we're building in the meantime, the [Field Notes](/field-notes/) are worth a read.

---

### 6.10 CONTACT — `/contact/`

**Title tag:** `Contact Hard Routine`
**Meta description:** `Get in touch with Hard Routine — Australian blackout 4WD storage and camping gear. Email, phone and postal details.`
**H1:** `Contact`

> # Contact
>
> **Email** — hello@hardroutine.com.au
> We answer within two business days.
>
> **Phone** — (07) 5555 5555
> Monday to Friday, 9am–5pm AEST.
>
> **Post** — PO Box 000, Brisbane QLD 4000
>
> **ABN** — 00 000 000 000
>
> ---
>
> ## Trade and stockist enquiries
>
> We're talking to retailers ahead of launch. If you run a 4WD or camping store and want to see the range, email hello@hardroutine.com.au with your business name and ABN.
>
> ---
>
> ## Media
>
> For product samples, imagery or interviews, email hello@hardroutine.com.au.

---

### 6.11 PRIVACY — `/privacy/`

Write in full. Must cover, in plain English:

- What is collected: email address, optional name, IP address, timestamp, page URL, analytics identifiers
- Why: to notify about launch, send occasional product news, and understand site usage
- Legal basis: express consent given at the form
- Who it's disclosed to: name the email platform, the form handler, the analytics provider and the host
- Overseas disclosure: state which countries data is stored in
- How to access, correct or delete: email address, response within 30 days
- How to unsubscribe: one-click link in every email, honoured within 5 working days
- Complaints: how to complain to Hard Routine, then to the OAIC
- Contact details and ABN
- Last-updated date

**Note for the build:** the Privacy Act small business exemption ($3m turnover) is still in force as of September 2026, so a privacy policy is not strictly mandatory under that Act. Publish one anyway. The statutory tort of serious invasion of privacy commenced 10 June 2025 and applies regardless of turnover, Google's quality raters treat a missing privacy policy as a trust deficit on commerce sites, and every email platform requires one contractually.

### 6.12 TERMS — `/terms/`

Standard website terms. Must state explicitly that **no products are currently offered for sale**, that registering interest creates no contract and no obligation on either party, and that all specifications shown are indicative and subject to change before release.

---

## 7. SCHEMA — EXACT IMPLEMENTATION

### 7.1 Organization — homepage only, not sitewide

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.hardroutine.com.au/#organization",
  "name": "Hard Routine",
  "url": "https://www.hardroutine.com.au/",
  "logo": "https://www.hardroutine.com.au/img/logo-1200.png",
  "description": "Australian brand making blackout storage and gear bags for 4WD touring and camping.",
  "email": "hello@hardroutine.com.au",
  "telephone": "+61 7 5555 5555",
  "foundingDate": "2026",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brisbane",
    "addressRegion": "QLD",
    "postalCode": "4000",
    "addressCountry": "AU"
  },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ABN",
    "value": "00 000 000 000"
  },
  "sameAs": [
    "https://www.instagram.com/hardroutine",
    "https://www.youtube.com/@hardroutine",
    "https://www.facebook.com/hardroutine"
  ]
}
```

Add the LinkedIn company page and ABN Lookup URL to `sameAs` as soon as they exist. **Entity disambiguation is the highest-leverage AI-visibility work a new brand can do** — AI systems must be able to identify you before they can cite you.

### 7.2 Product — no `offers`

**Critical: do not add `offers`, and do not use `availability: PreOrder`.**

`Offer` requires a `price` greater than zero, so an offer without a price throws a validation error. And `PreOrder` means orders can be placed — they can't. Marking it up anyway risks Google's content-accuracy guidelines, which is manual-action territory.

`Product` without `offers` is valid schema.org. It will show "no rich results detected" in the Rich Results Test. **That is correct and carries no penalty** — there is nothing to sell. The value is entity comprehension, and at launch you add `offers` with no rework.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.hardroutine.com.au/gear/swag-bags/roll-1200/#product",
  "name": "ROLL 1200 Swag Transit Bag",
  "description": "Oversized vented transit bag for double swags up to 1200 mm rolled. Mesh vent panels at both ends, YKK #10 VISLON zip, 207 litre capacity.",
  "image": [
    "https://www.hardroutine.com.au/img/roll-1200-1x1.jpg",
    "https://www.hardroutine.com.au/img/roll-1200-4x3.jpg",
    "https://www.hardroutine.com.au/img/roll-1200-16x9.jpg"
  ],
  "sku": "HR-ROLL-1200",
  "brand": { "@type": "Brand", "name": "Hard Routine" },
  "manufacturer": { "@id": "https://www.hardroutine.com.au/#organization" },
  "material": "500D PU-coated nylon oxford",
  "color": "Blackout topographic",
  "weight": { "@type": "QuantitativeValue", "value": 1.2, "unitCode": "KGM" },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Internal diameter", "value": "450 mm" },
    { "@type": "PropertyValue", "name": "Internal length", "value": "1300 mm" },
    { "@type": "PropertyValue", "name": "Capacity", "value": "207 L" },
    { "@type": "PropertyValue", "name": "Zip", "value": "YKK #10 VISLON two-way" },
    { "@type": "PropertyValue", "name": "Vent panels", "value": "2" }
  ]
}
```

### 7.3 BreadcrumbList — every non-home page

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hardroutine.com.au/" },
    { "@type": "ListItem", "position": 2, "name": "Gear", "item": "https://www.hardroutine.com.au/gear/" },
    { "@type": "ListItem", "position": 3, "name": "Swag Bags", "item": "https://www.hardroutine.com.au/gear/swag-bags/" },
    { "@type": "ListItem", "position": 4, "name": "ROLL 1200" }
  ]
}
```

### 7.4 ItemList — category pages

Standard `ItemList` with `ListItem` entries pointing at each product URL, in display order.

### 7.5 BlogPosting — Field Notes articles

Include `headline`, `description`, `datePublished`, `dateModified`, `author` (Person with a real name), `publisher` (reference the Organization `@id`), `image`, and `mainEntityOfPage`.

### 7.6 WebSite — homepage

Include `WebSite` with `name`, `url` and `publisher`. **Do not include `SearchAction`** — the sitelinks search box was deprecated in late 2024 and it no longer does anything.

### 7.7 Do NOT implement

- **`FAQPage`** — Google removed FAQ rich results in May–June 2026 and dropped Rich Results Test support. Existing markup causes no harm but produces nothing. Keep the FAQ *content* as question-shaped headings, which is the actual win; skip the markup.
- **`HowTo`** — rich results removed entirely.
- **`Review` or `AggregateRating`** — there are no reviews. Fabricating them risks a manual action and breaches Australian Consumer Law.
- **`llms.txt`** — Google confirmed on 15 June 2026 that it is ignored, and Google's own AI optimisation guide explicitly says not to create AI text files. Adoption is around 10% of domains with near-zero crawler fetches. Skip it.

---

## 8. FORMS AND LEGAL COMPLIANCE

### 8.1 The register-interest form

The Spam Act 2003 binds you **regardless of business size**, and ACMA enforces it. Three obligations: express consent, accurate sender identification, and a working unsubscribe honoured within five working days.

```html
<form method="post" action="/register/" class="register-form">
  <div class="field">
    <label for="ri-email">Email address</label>
    <input type="email" id="ri-email" name="email" required
           autocomplete="email" inputmode="email"
           aria-describedby="ri-email-help">
    <p id="ri-email-help" class="field-help">
      We'll email you at launch, plus occasional product news.
    </p>
  </div>

  <fieldset class="field">
    <legend>Which are you interested in? (optional)</legend>
    <label><input type="checkbox" name="interest" value="swag-bags"> Swag transit bags</label>
    <label><input type="checkbox" name="interest" value="duffle-bags"> Duffle bags</label>
    <label><input type="checkbox" name="interest" value="rear-wheel-bags"> Rear wheel bags</label>
  </fieldset>

  <div class="field consent">
    <input type="checkbox" id="ri-consent" name="consent" value="yes" required>
    <label for="ri-consent">
      Yes, email me when Hard Routine launches and send me occasional product
      news. I can unsubscribe at any time. See our
      <a href="/privacy/">Privacy Policy</a>.
    </label>
  </div>

  <button type="submit">Register my interest</button>
</form>
```

**Hard requirements:**

- The consent checkbox is **`required` and never pre-ticked.** Pre-ticking is not "knowingly agrees" in any defensible reading.
- **Never send an email asking for consent.** Using an electronic message to request consent is itself a breach of the Spam Act.
- Consent wording must cover **ongoing marketing**, not just one launch notification. "Tell me when you launch" is arguably consent for exactly one email.
- The form must work **without JavaScript** — a real POST to a real endpoint.
- Honeypot field for spam, visually hidden with CSS (not `display:none` on the input itself, which some bots detect). No CAPTCHA — it hurts conversion and accessibility.

**Record on every submission, and store it:**

| Field | Example |
|---|---|
| email | `person@example.com` |
| consent | `yes` |
| consent_wording_version | `v1-2026-09-21` |
| timestamp | ISO 8601, e.g. `2026-09-21T04:12:33Z` |
| ip_address | `203.0.113.42` |
| source_url | `https://www.hardroutine.com.au/gear/swag-bags/` |
| interests | `swag-bags,duffle-bags` |

You bear the burden of proving consent. Store the consent wording itself, versioned, so you can show exactly what someone agreed to.

### 8.2 Honest availability

Australian Consumer Law prohibits misleading conduct about availability. Every product page carries the availability notice from §6.5, above the fold.

**Never** display fabricated scarcity — countdown timers, "only 3 left", "12 people viewing". There is no stock.

Once real, interest counts are legitimate social proof: *"412 people have registered interest in this product."* Only render this from the actual database, and only above a threshold where it's persuasive rather than embarrassing.

---

## 9. AEO — HOW TO WRITE FOR ANSWER ENGINES

Google's own AI optimisation guide, published May 2026, is deflationary and worth taking at face value: *"optimizing for generative AI search is optimizing for the search experience, and thus still SEO."* There is no separate AI index. Eligibility for AI Overviews is simply that a page is indexed and snippet-eligible.

So there is no AEO tooling to buy. There are writing rules, and they are evidence-based.

### 9.1 What the research supports

The Princeton/Georgia Tech/Allen AI GEO study (Aggarwal et al., KDD 2024) remains the only rigorous controlled trial, across 10,000 queries. Measured lift in citation visibility:

| Technique | Lift |
|---|---|
| Add quotations from credible sources | **+41%** |
| Replace qualitative claims with statistics | **+34%** |
| Improve prose fluency | **+30%** |
| Add inline source citations | **+29%** |
| Keyword stuffing | **−8%** |

Direction is reliable; magnitudes are indicative and were measured in 2023–24.

Separately, Ahrefs' December 2025 study across 75,000 brands found **unlinked brand mentions correlate roughly three times more strongly with AI visibility than backlinks do** (0.66 vs 0.19), with YouTube mentions highest at 0.74. For a new brand, getting *named* in forums, videos and community sites matters more than chasing links.

### 9.2 The writing rules, applied

**Answer first.** Every question heading is followed immediately by a complete, standalone answer in roughly 40–100 words. Context, caveats and detail come after. Retrieval systems chunk by heading — a buried answer doesn't make the chunk.

**Question-shaped headings** using real query phrasing. "What size swag bag do I need?" not "Sizing".

**Self-contained passages.** Every section must make sense in isolation. No "as mentioned above". No "this" or "it" referring across a heading. Repeat the noun.

**Numbers with units, always.** "207 litre capacity, 1.2 kg empty" beats "generous capacity, lightweight". This is the statistics effect and it's the single easiest win.

**Tables for anything comparable.** Specs, sizing, materials, failure modes. Tables are disproportionately extracted because they're unambiguous.

**Definition sentences** in the form "X is a Y that Z" for every term worth owning. *"A swag transit bag is the sleeve your swag lives in between trips."* *"Denier is a measure of yarn thickness, not fabric strength."*

**Attributed quotes with links** where a named source said something useful.

**Never keyword stuff.** It measurably reduces AI citation. Write the phrase once in the H1, once naturally in the opening, and then write like a person.

### 9.3 Entity building — off-site, but part of the spec

The site cannot do this alone. Alongside launch:

1. Consistent brand name everywhere, no variants
2. LinkedIn company page, added to `sameAs`
3. YouTube channel, even small — highest correlation in the Ahrefs data
4. ABN Lookup entry, added to `sameAs`
5. Google Business Profile if there's a physical premises
6. An About page that plainly states who, what, where and since when — AI systems extract this verbatim for "who is Hard Routine" queries

---

## 10. TECHNICAL SEO CHECKLIST

### 10.1 Every page

- [ ] Unique `<title>`, 50–60 characters, brand suffixed with ` | Hard Routine`
- [ ] Unique meta description, 140–160 characters, written to be clicked not to rank
- [ ] Self-referencing `<link rel="canonical">`, absolute URL, with `www`, trailing slash
- [ ] Exactly one `<h1>`
- [ ] Logical heading hierarchy, no skipped levels
- [ ] `<html lang="en-AU">`
- [ ] Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`, `og:locale` = `en_AU`, `og:site_name`
- [ ] `twitter:card` = `summary_large_image`
- [ ] Breadcrumbs, visible and marked up (except home)
- [ ] At least two contextual internal links in body copy

### 10.2 Site-wide

- [ ] `robots.txt` allowing all crawlers, referencing the sitemap
- [ ] `sitemap.xml` — every indexable URL, accurate `lastmod`, no noindexed URLs
- [ ] HTTPS everywhere, HSTS enabled
- [ ] One canonical host: `www.hardroutine.com.au`. Redirect apex and `hardroutine.au` with 301s
- [ ] Trailing slashes consistent, enforced by redirect
- [ ] Custom 404 that links to Gear, Field Notes and Home
- [ ] **No hreflang** — single country, single language, not needed

**robots.txt:**

```
User-agent: *
Allow: /
Disallow: /register/thanks/

Sitemap: https://www.hardroutine.com.au/sitemap.xml
```

### 10.3 Images

- [ ] AVIF with WebP fallback, JPEG last resort
- [ ] Explicit `width` and `height` on every `<img>` — prevents CLS
- [ ] `loading="lazy"` on everything below the fold; `fetchpriority="high"` on the LCP image, never lazy
- [ ] Descriptive alt text on content images; `alt=""` on decorative ones
- [ ] Descriptive filenames: `roll-1200-swag-transit-bag-blackout.avif`
- [ ] Responsive `srcset` at 400/800/1200/1600px
- [ ] Product images shot at 1:1, 4:3 and 16:9 for schema

### 10.4 Performance budget

| Metric | Target | Threshold |
|---|---|---|
| LCP | under 2.0s | 2.5s |
| INP | under 150ms | 200ms |
| CLS | under 0.05 | 0.1 |
| Total page weight | under 500 KB | 900 KB |
| JS shipped | under 30 KB | 50 KB |
| Requests | under 25 | 40 |

Note INP replaced FID as a Core Web Vital in March 2024. Current thresholds confirmed unchanged as of September 2026.

### 10.5 Accessibility — WCAG 2.2 AA

- [ ] Colour contrast 4.5:1 body, 3:1 large text — verify every token pair
- [ ] Visible focus indicator on every interactive element, minimum 2px, not `outline: none`
- [ ] All functionality keyboard-operable, logical tab order
- [ ] Skip-to-content link, first in the DOM
- [ ] Form labels properly associated; errors described in text, not by colour alone
- [ ] Touch targets minimum 24×24 CSS pixels (WCAG 2.2 requirement)
- [ ] `prefers-reduced-motion` respected on every transition
- [ ] Tables use `<th>` with `scope`
- [ ] No text in images

### 10.6 Readability

Target **Year 8–9 reading level** for body copy. Specifically:

- Average sentence length under 20 words
- Paragraphs of 2–4 sentences maximum
- Active voice
- Expand every acronym on first use
- Define jargon inline — *denier*, *VISLON*, *bar-tack*, *oxford*

This serves both a scanning human and an extracting model. There is no conflict between the two.

---

## 11. BUILD ORDER

1. Astro project, tokens, typography, base layout, header, footer
2. Home page
3. The three category pages — these carry the SEO weight
4. The nine product pages using a shared component
5. The Fabric, About, Contact
6. Register form plus endpoint, consent capture, thank-you page
7. Field Notes hub and the six launch articles
8. Privacy, Terms, 404
9. Schema on every page type
10. Sitemap, robots.txt, Open Graph images
11. Performance pass against the budget in §10.4
12. Accessibility audit against §10.5

---

## 12. PRE-LAUNCH VERIFICATION

Do not go live until every one of these passes.

**Technical**
- [ ] Google Rich Results Test — no errors on any page type (warnings on Product are expected and correct)
- [ ] Schema Markup Validator — clean
- [ ] PageSpeed Insights — 95+ mobile and desktop, all Core Web Vitals green
- [ ] WAVE or axe DevTools — zero errors
- [ ] Every page renders and is readable with JavaScript disabled
- [ ] Every internal link resolves, no 404s
- [ ] Sitemap validates and contains only indexable URLs
- [ ] `/register/thanks/` returns `noindex`

**Content**
- [ ] Every page has a unique title and meta description
- [ ] No lorem ipsum, no TODO, no editorial notes anywhere in the output
- [ ] Every placeholder from §0 replaced, or consciously left with a note to the owner
- [ ] Australian English throughout — run a check for *tire, aluminum, color, organize, center, meter*
- [ ] No unsubstantiated claims: search for *military grade, mil-spec, waterproof, camouflage, Cordura, lifetime*
- [ ] Availability notice present on all nine product pages

**Legal**
- [ ] Consent checkbox present, required, not pre-ticked
- [ ] Consent record captures all seven fields from §8.1
- [ ] Privacy policy live and linked from every form
- [ ] Terms state plainly that nothing is for sale
- [ ] ABN displayed in the footer and on Contact

**Setup**
- [ ] Google Search Console verified, sitemap submitted
- [ ] Bing Webmaster Tools verified
- [ ] Analytics installed and recording
- [ ] Email platform connected, double opt-in **off** (the form checkbox is the consent record; a confirmation email to someone who hasn't consented is itself a Spam Act breach)
- [ ] Unsubscribe link tested end to end

---

## 13. AT LAUNCH — WHAT CHANGES

When checkout turns on, the work is small because the foundations are right:

1. Add `offers` to every `Product` schema with real `price`, `priceCurrency: "AUD"` (GST inclusive), and honest `availability`
2. Replace the availability notice with an add-to-cart component
3. Keep every URL — do not restructure. The informational content that ranks is what feeds the funnel
4. Email the register-interest list. That list is the entire point of this site

---

*Spec prepared 21 September 2026. Search volumes from Semrush AU database, same date. SEO and AEO requirements reflect Google's published guidance current to September 2026, including the removal of FAQ rich results (May–June 2026) and Google's confirmation that llms.txt is ignored (15 June 2026).*
