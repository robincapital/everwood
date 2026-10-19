# Everwood USA — First-draft static website

Plain HTML/CSS/vanilla JS site for **Everwood USA** (locally owned Miami Beach company in partnership with Desafío Ambiente / Everwood Chile). No build step. Designed for **GitHub Pages**.

**Campaign line:** Plastic to Public Good  
**Focus:** Biscayne Bay, Miami, Miami Beach  
**Stack:** relative links, `index.html` at repo root, shared header/footer markup, Google Fonts (Fraunces + DM Sans)

---

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx --yes serve -p 8080
```

Then visit `http://localhost:8080`.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `everwood-usa` or `everwood-usa.github.io`).
2. Add the remote and push this repo’s `main` branch (do not force-push over existing history you care about):

   ```bash
   git remote add origin git@github.com:YOUR_ORG/YOUR_REPO.git
   git push -u origin main
   ```

3. In the GitHub repo: **Settings → Pages**.
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch  
   - **Branch:** `main`  
   - **Folder:** `/ (root)`  
5. Save. After a minute or two the site is at `https://YOUR_ORG.github.io/YOUR_REPO/` (or the custom domain you configure).

### Custom domain

**Domain:** `everwood-usa.com` (this repo includes a root `CNAME` file with that host).

The domain stays registered at **domain.com**, with nameservers `ns1.domain.com` / `ns2.domain.com`. Configure DNS **in domain.com** as follows for GitHub Pages — and **do not** change mail-related records.

#### DNS records to set (GitHub Pages)

| Type | Host / name | Value |
|------|-------------|--------|
| A | `@` (apex) | `185.199.108.153` |
| A | `@` (apex) | `185.199.109.153` |
| A | `@` (apex) | `185.199.110.153` |
| A | `@` (apex) | `185.199.111.153` |
| AAAA (optional) | `@` | `2606:50c0:8000::153` |
| AAAA (optional) | `@` | `2606:50c0:8001::153` |
| AAAA (optional) | `@` | `2606:50c0:8002::153` |
| AAAA (optional) | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `robincapital.github.io` |

GitHub’s current A/AAAA set is documented in [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

#### DNS records to leave alone (email at domain.com)

Do **not** edit or delete:

- MX for the apex: `30 mx.everwood-usa.com` (priority/host as currently set)
- `mx.everwood-usa.com`
- `mail.everwood-usa.com`
- The SPF **TXT** record

Email remains hosted at domain.com; changing these will break mail.

#### Enable Pages + HTTPS

1. Push this repo to GitHub (e.g. under `robincapital`).
2. **Settings → Pages**: deploy from branch `main`, folder `/ (root)`.
3. Under **Custom domain**, enter `everwood-usa.com` (the `CNAME` file should match) and save; wait for DNS check.
4. Enable **Enforce HTTPS** once the certificate is ready.
5. Optionally redirect `www` → apex (or the reverse) in Pages settings after both resolve.


### Project site vs user site

- **Project site** (`username.github.io/repo-name/`): relative links in this draft already work.
- If the site is served from a subpath and anything breaks, keep using relative paths (already the case) — do not switch to root-absolute `/assets/...` without a base tag strategy.

---

## How to swap in photos

Real photos from Nick (Oct 2026) are already in `assets/img/` under descriptive names, resized for the web (max ~1800px long side, JPEG ~q80, mostly under 400KB). Official logos live in `assets/img/logo/` (all-green + white SVGs; brand green `#0F6938`). Header uses `everwood-usa_horizontal_green.svg`; dark footer uses `everwood-usa_horizontal_white.svg`. Favicons: `favicon.ico` plus PNG sizes 32/48/180/192/512.

To replace any shot later, overwrite the same filename — most HTML references use these names.

| File | Source prefix | What’s in the frame | Used on |
|------|---------------|---------------------|---------|
| `hero-bay.jpg` | `1596f335` | UM lakeside bench, wide (brick path, palms, glass building) | Home hero; Contact scenic |
| `um-benches-1.jpg` | `1596f335` | Same wide lakeside bench | Home + Projects case study |
| `um-benches-2.jpg` | `c832574f` | Lakeside bench, closer | Home + Projects |
| `um-benches-vertical.jpg` | `b0d5c8ef` | Same bench, vertical / palms & sky | Projects tall card |
| `um-banner.jpg` | `ab04ffe2` | Bench beside UM orange Centennial Village / Architecture banner | Home, Projects, Partnerships |
| `um-picnic.jpg` | `5847f412` | Picnic table on lawn by lake | Projects |
| `um-picnic-2.jpg` | `e4cdc4f6` | Another picnic-table angle | Available (not linked yet; alternate) |
| `um-architecture.jpg` | `e27fd924` | School of Architecture walkway table + bench | Projects |
| `about-community.jpg` / `about-team.jpg` | `5a661060` | Person on green tricycle at UM Sustainability Garden (unnamed) | About, Impact |
| `impact-qr-plaque.jpg` | `2712211f` | Metal QR plaque for furniture | Impact, Partnerships |
| `plastic-to-good.jpg` / `hero-planks-closeup.jpg` / `impact-circular.jpg` / `impact-bay-cleanup.jpg` | `ebaa5022` | Plank → colorful shredded flakes | Home, Impact, Products, Partnerships |
| `about-process.jpg` / `partnership-workshop.jpg` / `partnership-brand-waste.jpg` | `b75693a6` | Gloved hands with flakes (+ watermark) | About, Home, Partnerships |
| `product-water.jpg` | `77f0a08d` | Water beading on brown & teal planks | Products |
| `product-colors-wet.jpg` | `dc33a025` | Colorful wet boards close-up | Products |
| `product-colors-wet-2.jpg` | `dcfa07cd` | Second wet-boards close-up | Available alternate |
| `product-colors.jpg` | `a4e67b70` | Six color swatches | Products colors |
| `product-deck-work.jpg` | `2774d732` | Deck + biscuit joiner | Products |
| `product-planks.jpg` | `989a7633` | Brown board studio | Products |
| `product-strip.jpg` / `product-beams.jpg` | `c41859c9` | Brown strip/batten studio | Products |
| `product-deck.jpg` | `6af0bddc` | Black & gray grooved deck boards | Products |
| `product-posts.jpg` | `be30a503` | Assorted profiles + round post | Products |
| `product-bench.jpg` | `c832574f` | UM lakeside bench (furniture example) | Products |
| `chile-fence-gate.jpg` / `project-fence.jpg` | `fe5b14d8` | White gate/fence ranch (**Chile**) | Projects (labeled Chile) |
| `chile-picnic-playground.jpg` / `project-playground.jpg` | `d4b03aef` | Octagonal school picnic table (**Chile**) | Projects (labeled Chile) |
| `logo/everwood-usa_horizontal_green.svg` | research exports | All-green horizontal wordmark | Header |
| `logo/everwood-usa_horizontal_white.svg` | research exports | White horizontal wordmark | Dark footer |
| `logo/favicon.ico` + `favicon_32/48/180/192/512.png` | research exports | Favicons / apple-touch (180) | All pages |
| `contact-map.jpg` | `1596f335` | Scenic lakeside (no map asset provided) | Contact |

### Skipped source files
- `a4bc89a3` — color blocks with phone/hand in frame (skipped; swatches `a4e67b70` used instead)
- `28e6490b` — near-duplicate of Architecture walkway (`e27fd924` used)
- `349351fa` — extra picnic-table angle (kept `5847f412` + `e4cdc4f6` as `um-picnic` / `um-picnic-2`)
- `459646b5` — alternate Sustainability Garden shot (`5a661060` used)
- `99ddef81` — video (`.mp4`); not used on this static first draft
- Prior screenshot PNGs in the attachments folder — not site assets

### Images from live sites (optional future reuse)
Still valid if you want extras beyond Nick’s set: everwood-usa.com WP gallery; desafioambiente.com / everwood.cl product shots; Instagram `@everwood_maderaplastica`. Clear rights before adding.


## Enable Formspree on Contact

1. Create a form at [formspree.io](https://formspree.io).
2. Open `pages/contact.html`.
3. On `#contact-form`, set:

   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST" data-mailto="sales@everwood-usa.com">
   ```

4. When `action` is an `https://` URL, `assets/js/main.js` lets the browser POST normally. If `action` is empty, submit uses **mailto** to `sales@everwood-usa.com`.

A yellow dashed box on the Contact page marks the Formspree insert point.

---

## To fill in (placeholders)

- `[team names/photos]` — Miami Beach team on About




Every bracketed placeholder used in the site — replace with verified facts only.

### University of Miami project
- `[UM bench count]` — number of benches sold/installed
- `[UM table count]` — picnic tables
- `[UM 2024 beautification details]` — scope of 2024 beautification tile
- `[UM plastic diverted lbs]` — pounds (or kg) of plastic represented by that project
- `[UM install year]` — year of install or delivery
- `[UM campus location]` — campus zone / building area

### Impact / metrics
- `[plastic diverted tons or lbs]` — verified US (or disclosed) total
- `[furniture pieces installed]` — verified count
- `[brand partner count]` — verified active partners
- `[partnership KPIs]` — agreed metrics language for partnership step 5
- `[SDG icons / specific goal numbers]` — which SDGs marketing will claim

### Products / catalog
- `[confirm US SKUs]` — which Chilean catalog sizes/colors ship or manufacture for US
- `[confirm]` (colors) — US color availability
- `[pending from factory]` — ISO 14021 recycled-content declaration (post- vs pre-consumer % by weight) required before strong LEED recycled-content claims
- `[confirm US warranty]` — everwood.cl states a 15-year design warranty; no US warranty statement found on everwood-usa.com
- Fire / UV / structural test reports (ASTM etc.) — **not found**; do not invent ratings
- `[confirm US SKUs]` and US color availability



### Molded retail / CSR merch
- `[price]` — coaster set, laptop stand, phone stand keychain, beach paddle (no Chilean peso prices)
- `[confirm US terms]` — minimum orders and free laser engraving (Chile sheets: from 10 packs/units)
- `[confirm product]` — whether the yellow beach paddle is a confirmed Everwood SKU for US retail
- Shopify IDs: `[SHOPIFY_PRODUCT_ID_COASTERS]`, `[SHOPIFY_PRODUCT_ID_LAPTOP_STAND]`, `[SHOPIFY_PRODUCT_ID_PHONE_STAND]`, `[SHOPIFY_PRODUCT_ID_BEACH_PADDLE]`

### Shop / Shopify
- `[price]` — Bay Edition pendant, planter, residential bench (no invented prices)
- `[confirm product]` — planter box and residential bench as retail SKUs
- `[confirm]` — planter color/size options; residential bench specs
- `[SHOPIFY_PRODUCT_ID_PENDANT]`, `[SHOPIFY_PRODUCT_ID_PLANTER]`, `[SHOPIFY_PRODUCT_ID_BENCH_RES]`
- `SHOPIFY_DOMAIN`, `STOREFRONT_ACCESS_TOKEN` — in the commented Buy Button snippet on `pages/shop.html`

### Full Circle
- `[date]`, `[beach]` — each upcoming cleanup row
- Formspree endpoint for cleanup sign-up (`#fullcircle-form`)
- Trace / QR lookup backend (UI marked coming soon)
- Real `beach-litter-*.jpg` cleanup photos (slot: `beach-litter-1.jpg`)
- Real `pendant-bay-edition.jpg` product photography

### Contact
- Email: `sales@everwood-usa.com` (from everwood-usa.com — keep for now)
- Phone: `+1 (305) 905-4969` (from everwood-usa.com — **new number coming later**)
- Address: `11 Island Ave, Miami Beach, FL 33139` (**updated**; replaces former Doral address)

Chile parent (desafioambiente.com): `contacto@desafioambiente.cl`, El Pinar 205, San Joaquín, Santiago.

Instagram: `@everwood_maderaplastica`.

**Do not invent:** tonnage, prices, testimonials, quotes, or client names other than University of Miami.

---

## Site map

| Page | Path |
|------|------|
| Home | `index.html` |
| About | `pages/about.html` |
| Products | `pages/products.html` |
| Projects | `pages/projects.html` |
| Partnerships | `pages/partnerships.html` |
| Impact | `pages/impact.html` |
| Contact | `pages/contact.html` |
| Shop | `pages/shop.html` |
| Full Circle | `pages/full-circle.html` |

---

## Facts pulled from existing sites (with sources)

### From [everwood-usa.com](https://everwood-usa.com) (WebFetch, Oct 2026)
- Positioning around plastic wood / Everwood materials; circular economy and SDG alignment; smart cities/neighborhoods language
- Spec list: Durable; Water-Resistant; Weather-Resistant; No Discoloration; Does not rot or splinter; Flame Retardant; Thermal insulator; Recycled Origin; Does not require maintenance
- Prior site claimed LEED/IDEM “certification/validation” — **removed** from this draft; replaced with accurate “can contribute toward LEED v4.1 MR recycled-content credits; documentation on request” (facts.md §7). IDEM → IDIEM Catálogo Verde listing.
- Contact (original site): `+1 (305) 905-4969`; `sales@everwood-usa.com`; former Doral address replaced on this draft with `11 Island Ave, Miami Beach, FL 33139`
- Logo path under WP uploads (see photo reuse list)

### From [desafioambiente.com](https://desafioambiente.com) (WebFetch / search, Oct 2026)
- Desafío Ambiente pillars: Revalorize, Eco-design, Advise
- Everwood = brand/project of Desafío Ambiente transforming recycled plastics into high-performance construction materials and furniture
- Materials: boards, strips, beams, posts for cladding, decks, urban furniture
- Furniture: benches, picnic tables, lounge chairs, recycling points for universities, parks, companies, municipalities
- Founder credited: Anita Farfán (Everwood)
- Chile contact: `contacto@desafioambiente.cl`; El Pinar 205, San Joaquín, Santiago
- Reference projects mentioned on site (Chile — not presented as US work): e.g. Torres del Paine trail plastics collaboration; Clínica Alemana holiday ornaments from medical plastic waste (1,146 kg HDPE/PP stated on their site)

### From [everwood.cl](https://everwood.cl) product catalog (WebSearch / fetch, Oct 2026)
- Product lines: Listones, Polines, square posts, deck boards, boards (tablas), beams (vigas), deck connectors, cuartón, rollizos
- Example board: TA-100, ~10×2.5×280 cm; colors Café Marrón, Beige, Gray, Black, Moss green, Turquoise
- Example beam: 40×90×2800 mm; UV pigments; carpentry workable; **15-year design warranty** stated on product pages
- Round posts Ø62 mm × 2.80 m; cuartón 90×90 mm for fences/pergolas/foundations
- Chilean prices exist on everwood.cl — **intentionally omitted** from this US draft (no fabricated or transplanted USD pricing)

### From business brief (user)
- Locally owned Miami Beach LLC; Instagram `@everwood_maderaplastica`
- Sold benches to University of Miami (count unknown → placeholder)
- Brand partnership / CSR revenue model; audiences listed on Home/About
- Campaign: “Plastic to Public Good”; Bay plastic → public furniture positioning

---

## Screenshots

- `screenshots/home-desktop-1280.png`
- `screenshots/home-mobile-390.png`
- `screenshots/projects-desktop-1280.png`
- `screenshots/shop-desktop-1280.png`
- `screenshots/full-circle-desktop-1280.png`
- `screenshots/products-desktop-1280.png`
- `screenshots/impact-desktop-1280.png`

---


## Pollution imagery

Local plastic-pollution photos live in `assets/img/pollution/` (web-optimized, &lt;400KB each). Facts and quotes: `/workspace/everwood-research/pollution/facts.md`. Required attributions: `pages/credits.html` and `/workspace/everwood-research/pollution/credits.csv`. Military/DoD photos do not imply endorsement. Brand packaging in photos is illustrative only — not partnership or endorsement.

## Sources

Primary research compilation: `/workspace/everwood-research/facts.md` (compiled 2026-10-19; every figure has a URL and quote).

Key public URLs used on the live site:
- Group impact (2023): https://revistaemprende.cl/startups-chilena-ha-revalorizaddas-mas-de-tres-mil-tonelas-de-plastico/ and https://portalinnova.cl/convertir-residuos-plasticos-en-activos-sustentables-en-chile-ya-es-una-realidad/
- Peru press (Jul 2024, ~3,000 t / 8 years): https://larepublica.pe/nota-de-prensa/2024/07/11/la-primera-planta-de-reciclaje-de-plasticos-complejos-se-inaugura-en-lima-peru-638077
- Slat eco-equivalence: https://everwood.cl/producto/liston/
- 15-year design warranty wording: https://everwood.cl/producto/tablas/ (and related product pages)
- UM project tiles: https://everwood-usa.com/projects/
- Prior everwood-usa.com 'subsidiary' framing is superseded by local ownership + Chile manufacturing partnership on this site
- Chile partner stories: https://desafioambiente.com/portfolio/desafioalemana-navidad/ · https://desafioambiente.com/portfolio/sendero-sostenible/
- LEED guidance (products contribute; buildings are certified): facts.md §7 / USGBC credit docs linked therein

**Do not claim:** products are “LEED certified”; IDEM “validation” (use “Listed in IDIEM’s Catálogo Verde (Chile)”); ISO 9001/14001; B Corp; specific fire-spread ratings without reports; US-only totals using group press figures.

## License / status

First-draft marketing site for internal review. Not a legal terms page. Confirm all claims, certifications, and metrics before public launch.
