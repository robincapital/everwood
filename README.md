# Everwood USA — First-draft static website

Plain HTML/CSS/vanilla JS site for **Everwood USA** (US branch of Desafío Ambiente / Everwood). No build step. Designed for **GitHub Pages**.

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

### Custom domain (optional)

- Add a `CNAME` file at the repo root containing your domain (e.g. `www.everwood-usa.com`).
- Point DNS (A/AAAA or CNAME) per [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Project site vs user site

- **Project site** (`username.github.io/repo-name/`): relative links in this draft already work.
- If the site is served from a subpath and anything breaks, keep using relative paths (already the case) — do not switch to root-absolute `/assets/...` without a base tag strategy.

---

## How to swap in photos

Placeholder JPEGs live in `assets/img/` with **descriptive filenames**. Each file is a labeled gradient stand-in. Replace them **in place** (same filename) with real photos — no HTML edits required if dimensions are reasonable.

| File | Suggested content |
|------|-------------------|
| `hero-bay.jpg` | Biscayne Bay / Miami waterfront hero |
| `hero-planks-closeup.jpg` | Close-up of Everwood planks / grain |
| `about-process.jpg` | Shredding, extrusion, or workshop |
| `about-team.jpg` | Team or US workshop / showroom |
| `product-planks.jpg` | Boards / tablas product shot |
| `product-beams.jpg` | Beams / vigas |
| `product-posts.jpg` | Posts / polines / cuartón |
| `product-deck.jpg` | Deck boards installed or stacked |
| `product-bench.jpg` | Finished bench / urban furniture |
| `product-colors.jpg` | Color swatch board or multi-color stack |
| `um-benches-1.jpg` | University of Miami benches (hero) |
| `um-benches-2.jpg` | UM benches detail |
| `um-campus.jpg` | Campus context for UM install |
| `project-fence.jpg` | Fence / perimeter application |
| `project-playground.jpg` | Park / playground furniture |
| `partnership-brand-waste.jpg` | Brand waste bales or collection |
| `partnership-workshop.jpg` | Manufacturing / transformation |
| `partnership-bench-branded.jpg` | Branded bench in public space |
| `impact-bay-cleanup.jpg` | Bay / cleanup / coastal plastic context |
| `impact-circular.jpg` | Circular process or before/after |
| `contact-map-doral.jpg` | Map or exterior of Doral location |
| `logo-everwood.jpg` | Official logo (optional; header uses CSS mark today) |
| `favicon.jpg` | Favicon (consider exporting a real `.ico` / `.png` later) |

**Tips**

- Prefer landscape ~1600–2400px wide for heroes; compress for web (e.g. 80–85% JPEG or WebP later).
- CSS classes `.ph` / gradients remain as fallbacks if an image path 404s.
- After replacing files, hard-refresh the browser (cache).

### Images from existing sites worth reusing (do not copy into this repo until you have rights)

From **everwood-usa.com** (WordPress uploads / gallery):

- Site logo: `https://everwood-usa.com/wp-content/uploads/2023/08/cropped-Logo.png`
- Any “Project Photo Gallery — Created by Everwood” images on the homepage (URLs not fully enumerated in text fetch — pull from the live gallery in WP media)

From **desafioambiente.com** / **everwood.cl**:

- Material and mobiliario portfolio photography on desafioambiente.com (Materials, Mobiliario sections)
- Product photography on everwood.cl product pages (tablas, vigas, polines, deck, cuartón)
- Process / workshop imagery from Desafío Ambiente project posts (e.g. Torres del Paine trail plastics story — for *parent* storytelling only, not as Miami proof)
- Instagram [@everwood_maderaplastica](https://www.instagram.com/everwood_maderaplastica/) feed for lifestyle and install shots

**Clear rights / brand approval before republishing.** This draft intentionally ships only generated placeholders.

---

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

Every bracketed placeholder used in the site — replace with verified facts only.

### University of Miami project
- `[UM bench count]` — number of benches sold/installed
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
- `[confirm certification docs for US marketing]` — LEED® / IDEM claims as stated on everwood-usa.com; keep legal/marketing aligned

### Contact (already sourced — re-verify if anything changed)
Contact block currently uses **live values from everwood-usa.com** (fetched Oct 2026):
- Email: `sales@everwood-usa.com`
- Phone: `+1 (305) 905-4969`
- Address: `11475 NW 34th St, Doral, FL 33178`

Chile parent (desafioambiente.com): `contacto@desafioambiente.cl`, El Pinar 205, San Joaquín, Santiago.

Instagram handle used as given in the brief: `@everwood_maderaplastica`.

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

---

## Facts pulled from existing sites (with sources)

### From [everwood-usa.com](https://everwood-usa.com) (WebFetch, Oct 2026)
- Positioning around plastic wood / Everwood materials; circular economy and SDG alignment; smart cities/neighborhoods language
- Spec list: Durable; Water-Resistant; Weather-Resistant; No Discoloration; Does not rot or splinter; Flame Retardant; Thermal insulator; Recycled Origin; Does not require maintenance
- Claims certification/validation by LEED® and IDEM for sustainable construction guidelines
- Contact: `+1 (305) 905-4969`; `11475 NW 34th St, Doral, FL 33178`; `sales@everwood-usa.com`
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
- US branch of Chilean company; Instagram `@everwood_maderaplastica`
- Sold benches to University of Miami (count unknown → placeholder)
- Brand partnership / CSR revenue model; audiences listed on Home/About
- Campaign: “Plastic to Public Good”; Bay plastic → public furniture positioning

---

## Screenshots

After generation, desktop and mobile Home captures are stored in:

- `screenshots/home-desktop-1280.png`
- `screenshots/home-mobile-390.png`

---

## License / status

First-draft marketing site for internal review. Not a legal terms page. Confirm all claims, certifications, and metrics before public launch.
