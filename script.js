
// ==================== PRODUCT DATA ====================
// Centralized product catalogue. To add a product: drop a new object in this array
// and place its image(s) in public/images/products/. Nothing else needs to change —
// home, shop, filters, sorting, cart and WhatsApp ordering all read from PRODUCTS.
const IMG_BASE = 'public/products/';

const PRODUCTS = [
    { id: 'outfito-001', name: 'Lost Treasure Tee', shortName: 'LOST TREASURE', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: 'hot', hot: true, featured: true, isNew: false, rating: 4.9, reviews: 156, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-01.png'], desc: 'A bold anime-inspired hero print on heavyweight 280gsm black cotton. Oversized drop-shoulder fit with a matte finish print that holds up wash after wash — for those who chase their own treasure.', features: ['280gsm premium cotton', 'Oversized boxy fit', 'Drop shoulders', 'Matte screen print', 'Ribbed collar', 'Made in India'] },
    { id: 'outfito-002', name: 'Designer God Tee', shortName: 'DESIGNER GOD', category: 'graphic', gender: 'unisex', price: 999, ogPrice: 1299, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.7, reviews: 88, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-02.png'], desc: 'Neon-yellow typography frames a classical silhouette on jet black cotton. A statement piece for the ones who see creation as the highest form of power.', features: ['260gsm cotton', 'High-density neon print', 'Relaxed fit', 'Crew neck', 'Colourfast dye', 'Made in India'] },
    { id: 'outfito-003', name: 'One Day I Left Tee', shortName: 'ONE DAY I LEFT', category: 'graphic', gender: 'unisex', price: 999, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.6, reviews: 61, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-03.png'], desc: 'Bold red typography and a raw graphic cross print on crisp white cotton. A reminder that walking away is sometimes the hardest — and most powerful — move.', features: ['260gsm cotton', 'Front chest + back print', 'Oversized fit', 'Crew neck', 'Pre-shrunk fabric', 'Made in India'] },
    { id: 'outfito-004', name: 'Lowrider Legacy Tee', shortName: 'LOWRIDER LEGACY', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.8, reviews: 19, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-04.png'], desc: 'Street-art inspired graffiti graphic on white oversized cotton — classic lowrider culture reimagined for the Indian streetwear scene. Fresh off the SS26 drop.', features: ['260gsm cotton', 'Graffiti-style graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-005', name: 'Twin Warriors Tee', shortName: 'TWIN WARRIORS', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: 1599, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.8, reviews: 47, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-05.png'], desc: 'A split-face mythological warrior graphic — two forces, one story, printed in razor-sharp detail on premium white cotton. For those who carry more than one side.', features: ['280gsm premium cotton', 'Split duotone graphic', 'Oversized silhouette', 'Crew neck', 'Fade-resistant ink', 'Made in India'] },
    {
        id: 'outfito-006', name: 'Realistic Tee', shortName: 'REALISTIC', category: 'oversized', gender: 'women', price: 899, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.5, reviews: 39, sizes: ['XS', 'S', 'M', 'L'], images: [IMG_BASE + 'product-06.png'], desc: '"Do not trust everything you see" — a playful graphic tee with a sharp typographic hook on soft white cotton. Comfortable, easy, everyday oversized fit.', features: ['260gsm cotton', 'Front graphic print', 'Slightly cropped oversized fit', 'Crew neck', 'Soft-hand finish', 'Made in India']
    },
    { id: 'outfito-007', name: 'Crimson Dragon Tee', shortName: 'CRIMSON DRAGON', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: null, badge: null, hot: false, featured: true, isNew: false, rating: 4.9, reviews: 102, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-07.png'], desc: 'A fine-line Japanese dragon coils across a crimson sun on premium white cotton. Intricate linework printed at high resolution for a design that reads as art, not just apparel.', features: ['280gsm premium cotton', 'Fine-line Japanese artwork', 'Oversized fit', 'Crew neck', 'High-resolution print', 'Made in India'] },
    { id: 'outfito-008', name: 'Legends Never Die Tee', shortName: 'LEGENDS NEVER DIE', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: null, badge: 'hot', hot: true, featured: true, isNew: false, rating: 5.0, reviews: 184, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-08.png', IMG_BASE + 'product-08-alt.png'], desc: 'Our best-selling tribute tee — a fractured portrait built entirely from lyrics and typography on soft white cotton. A design that means something different to everyone who wears it.', features: ['280gsm premium cotton', 'Typographic portrait print', 'Oversized fit', 'Crew neck', 'Enzyme washed', 'Made in India'] },
    { id: 'outfito-009', name: 'Aftermath Survivor Tee', shortName: 'AFTERMATH SURVIVOR', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: 1399, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.6, reviews: 53, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-09.png'], desc: 'A gritty illustrated scene of resilience printed on heavyweight white cotton. Detailed line art with a story-driven, poster-style composition.', features: ['260gsm cotton', 'Illustrated poster-style print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-010', name: 'Guardian Angels Tee', shortName: 'GUARDIAN ANGELS', category: 'graphic', gender: 'women', price: 999, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.7, reviews: 71, sizes: ['XS', 'S', 'M', 'L'], images: [IMG_BASE + 'product-10.png'], desc: '"Angels Guard Our Hearts" — a delicate engraved-style illustration of angels and a heart on soft white cotton. Elegant, detailed, and quietly powerful.', features: ['260gsm cotton', 'Fine engraved-style print', 'Relaxed oversized fit', 'Crew neck', 'Soft-hand finish', 'Made in India'] },
    { id: 'outfito-011', name: 'Rise Up Tee', shortName: 'RISE UP', category: 'graphic', gender: 'unisex', price: 999, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.8, reviews: 14, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-11.png'], desc: 'A bold raised-fist illustration in gold and white on premium cotton. Simple, iconic, unmissable — for those who refuse to stay seated.', features: ['260gsm cotton', 'Bold single-graphic print', 'Oversized fit', 'Crew neck', 'Colourfast dye', 'Made in India'] },
    {
        id: 'outfito-012', name: 'Monte Carlo Racing Tee', shortName: 'MONTE CARLO RACING', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: 1399, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.7, reviews: 44, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-12.png'], desc: 'A motorsport-inspired racing graphic with vintage poster typography on white cotton. Channels the speed and glamour of the worlds most iconic street circuit.', features: ['260gsm cotton', 'Racing poster graphic', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India']
    },
    { id: 'outfito-013', name: 'Valuable Tee', shortName: 'VALUABLE', category: 'oversized', gender: 'women', price: 899, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.6, reviews: 33, sizes: ['XS', 'S', 'M', 'L'], images: [IMG_BASE + 'product-13.png'], desc: 'A soaring bird in fine linework paired with delicate script typography on white cotton. Graceful, minimal, and quietly striking.', features: ['260gsm cotton', 'Fine-line illustration', 'Relaxed oversized fit', 'Crew neck', 'Soft-hand finish', 'Made in India'] },
    { id: 'outfito-014', name: 'The Don Tee', shortName: 'THE DON', category: 'minimal', gender: 'unisex', price: 899, ogPrice: null, badge: null, hot: false, featured: true, isNew: false, rating: 4.7, reviews: 68, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-14.png'], desc: 'Classic cinema-inspired script typography on a sand-washed beige tee. Clean, iconic lettering with a vintage acid-wash finish for that broken-in feel from day one.', features: ['280gsm heavyweight cotton', 'Acid-wash beige finish', 'Minimal script typography', 'Oversized fit', 'Garment dyed', 'Made in India'] },
    { id: 'outfito-015', name: 'Silent Samurai Tee', shortName: 'SILENT SAMURAI', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.8, reviews: 29, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-15.png'], desc: 'Two samurai figures rendered in detailed illustration with Japanese calligraphy, printed on a sand-washed beige base. Discipline, honour and quiet strength in every stitch.', features: ['280gsm cotton', 'Detailed illustrated print', 'Acid-wash beige finish', 'Oversized fit', 'Garment dyed', 'Made in India'] },
    { id: 'outfito-016', name: 'Smoke & Style Tee', shortName: 'SMOKE & STYLE', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.6, reviews: 22, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-16.png'], desc: 'A sharply dressed portrait in monochrome ink on a sand-washed beige tee. Gangster-era style with a modern streetwear cut — sophisticated and unapologetic.', features: ['280gsm cotton', 'Monochrome portrait print', 'Acid-wash beige finish', 'Oversized fit', 'Garment dyed', 'Made in India'] },
    { id: 'outfito-017', name: 'Legacy Icon Tee', shortName: 'LEGACY ICON', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: null, badge: 'hot', hot: true, featured: false, isNew: false, rating: 4.9, reviews: 137, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-17.png'], desc: 'A tribute portrait to a hip-hop legend, rendered in high-detail print on a sand-washed beige tee. One of our most requested designs — built to be worn, not just admired.', features: ['280gsm cotton', 'High-detail tribute print', 'Acid-wash beige finish', 'Oversized fit', 'Garment dyed', 'Made in India'] },
    { id: 'outfito-018', name: 'Out Of This World Tee', shortName: 'OUT OF THIS WORLD', category: 'graphic', gender: 'unisex', price: 999, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.5, reviews: 26, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-18.png'], desc: 'A cinematic earth-and-bench illustration on black cotton, paired with reflective typography. For quiet nights and big thoughts under the stars.', features: ['260gsm cotton', 'Poster-style illustrated print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-019', name: 'Prisoners Tee', shortName: 'PRISONERS', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.7, reviews: 17, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-19.png'], desc: 'Gold-foil-style typography and gripping hands break through prison bars on black cotton — a graphic about breaking free from whatever holds you back.', features: ['280gsm cotton', 'Metallic-tone graphic print', 'Oversized fit', 'Crew neck', 'Colourfast dye', 'Made in India'] },
    {
        id: 'outfito-020', name: 'Party Chronicles Tee', shortName: 'PARTY CHRONICLES', category: 'graphic', gender: 'unisex', price: 999, ogPrice: 1299, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.5, reviews: 31, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-20.png'], desc: 'A collaged portrait print with editorial-style typography on black cotton. Bold, layered, and full of texture — designed for nights you\'ll actually remember.', features: ['260gsm cotton', 'Collage - style print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India']
    },
    { id: 'outfito-021', name: 'Unknown Division Tee', shortName: 'UNKNOWN DIVISION', category: 'graphic', gender: 'unisex', price: 999, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.4, reviews: 20, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-21.png'], desc: 'A distressed VHS-static handprint graphic with torn-paper tape details on black cotton. Underground energy for those who move outside the mainstream.', features: ['260gsm cotton', 'Distressed graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-022', name: 'Never The Same Tee', shortName: 'NEVER THE SAME', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: null, hot: false, featured: true, isNew: false, rating: 4.6, reviews: 25, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-22.png'], desc: 'Ornate floral typography wraps around a bold statement on black cotton — a design that grows on you the longer you wear it.', features: ['260gsm cotton', 'Ornate typography print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-023', name: 'Behind The Mask Tee', shortName: 'BEHIND THE MASK', category: 'graphic', gender: 'unisex', price: 1199, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.8, reviews: 12, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-23.png'], desc: 'A fragmented marble-bust illustration with gold outline typography on black cotton. A meditation on identity, printed in gallery-grade detail.', features: ['280gsm cotton', 'Fine-detail illustrated print', 'Oversized fit', 'Crew neck', 'Colourfast dye', 'Made in India'] },
    { id: 'outfito-024', name: 'Night Prowler Tee', shortName: 'NIGHT PROWLER', category: 'oversized', gender: 'unisex', price: 899, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.5, reviews: 18, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-24.png'], desc: 'A moody illustrated night scene with a prowling black cat under a full moon, printed on black cotton. Quiet, mysterious, unbothered — just like the design.', features: ['260gsm cotton', 'Illustrated night-scene print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-025', name: 'Cosmic Experience Tee', shortName: 'COSMIC EXPERIENCE', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: 1399, badge: 'sale', hot: false, featured: false, isNew: false, rating: 4.7, reviews: 27, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-25.png'], desc: 'A vivid purple cosmic-brain graphic orbited by planetary rings on black cotton. Loud colour, bold type — built for those who think a little differently.', features: ['260gsm cotton', 'Multi-colour graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-026', name: 'The Collective Tee', shortName: 'THE COLLECTIVE', category: 'minimal', gender: 'unisex', price: 899, ogPrice: null, badge: null, hot: false, featured: true, isNew: false, rating: 4.5, reviews: 21, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-26.png'], desc: 'Three silhouetted figures in a stark half-tone print on black cotton — a minimal, editorial graphic about standing together.', features: ['260gsm cotton', 'Half-tone graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-027', name: 'Brand Warfare Tee', shortName: 'BRAND WARFARE', category: 'graphic', gender: 'unisex', price: 999, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.6, reviews: 9, sizes: ['S', 'M', 'L', 'XL'], images: [IMG_BASE + 'product-27.png'], desc: 'Bold orange collegiate typography over a gritty boxing-glove graphic on black cotton. Loud, competitive, made for the ones who show up to win.', features: ['260gsm cotton', 'Bold two-tone graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-028', name: 'Overthinking Tee', shortName: 'OVERTHINKING', category: 'graphic', gender: 'unisex', price: 1099, ogPrice: null, badge: 'new', hot: false, featured: false, isNew: true, rating: 4.8, reviews: 15, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-28.png'], desc: 'A striking suited silhouette on a deep red poster-style print, black cotton base. A design about the noise in your own head — and owning it anyway.', features: ['260gsm cotton', 'Poster-style graphic print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-029', name: 'Where Is My Mind Tee', shortName: 'WHERE IS MY MIND', category: 'minimal', gender: 'unisex', price: 799, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.4, reviews: 34, sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [IMG_BASE + 'product-29.png'], desc: 'Melting 3D typography spelling out the question we all ask sometimes, on black cotton. Minimal composition, maximum impact.', features: ['260gsm cotton', 'Bold typography print', 'Oversized fit', 'Crew neck', 'Screen printed', 'Made in India'] },
    { id: 'outfito-030', name: 'Vengeance Tee', shortName: 'VENGEANCE', category: 'minimal', gender: 'women', price: 899, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.5, reviews: 16, sizes: ['XS', 'S', 'M', 'L'], images: [IMG_BASE + 'product-30.png'], desc: 'Bold red-and-black typography with a minimal bat emblem on a stone-washed grey tee. Understated until you get close.', features: ['260gsm cotton', 'Acid-wash grey finish', 'Minimal typography print', 'Relaxed oversized fit', 'Garment dyed', 'Made in India'] },
    { id: 'outfito-031', name: 'Desire Tee', shortName: 'DESIRE', category: 'minimal', gender: 'women', price: 799, ogPrice: null, badge: null, hot: false, featured: false, isNew: false, rating: 4.4, reviews: 11, sizes: ['XS', 'S', 'M', 'L'], images: [IMG_BASE + 'product-31.png'], desc: 'A blurred, motion-style typographic print reading "Desire" on a stone-washed grey tee. Deliberately understated — the kind of piece that gets noticed slowly.', features: ['260gsm cotton', 'Acid-wash grey finish', 'Motion-blur typography print', 'Relaxed oversized fit', 'Garment dyed', 'Made in India'] }
];

const CATEGORIES = [
    { id: 'oversized', name: 'OVERSIZED TEES', img: IMG_BASE + 'product-06.png' },
    { id: 'graphic', name: 'GRAPHIC TEES', img: IMG_BASE + 'product-08.png' },
    { id: 'minimal', name: 'MINIMAL', img: IMG_BASE + 'product-29.png' },
    { id: 'women', name: 'WOMEN', img: IMG_BASE + 'product-13.png' },
];

// Instagram strip — real product shots standing in for recent posts
const IG_IMAGES = [1, 8, 17, 5, 22, 28].map(n => IMG_BASE + 'product-' + String(n).padStart(2, '0') + '.png');

// ==================== STATE ====================
// Single source of truth — all mutations go through setter functions
const STATE = {
    currentPage: 'home',
    currentProduct: null,
    selectedSize: '',
    qty: 1,
    cart: [],
    filter: 'all',
    sort: 'default',
    gridCols: 4,
    menuOpen: false,
    cartOpen: false,
    _cartBusy: false,     // mutex for concurrent cart ops
};

// ==================== SAFE LOCALSTORAGE ====================
const Store = {
    get(key, fallback = null) {
        try {
            const v = localStorage.getItem(key);
            if (!v) return fallback;
            const parsed = JSON.parse(v);
            return Array.isArray(fallback) && !Array.isArray(parsed) ? fallback : parsed;
        }
        catch { return fallback; }
    },
    set(key, val) {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* quota exceeded — fail silently */ }
    },
};

// Load persisted cart once at startup — validate shape defensively
function sanitizeCartItem(i) {
    if (!i || typeof i !== 'object') return null;
    const prod = PRODUCT_MAP_RAW[i.id];
    if (!prod) return null;
    const size = typeof i.size === 'string' && prod.sizes.includes(i.size) ? i.size : prod.sizes[0];
    const qty = Number.isFinite(i.qty) ? Math.max(1, Math.min(10, Math.round(i.qty))) : 1;
    return { id: prod.id, name: prod.name, price: prod.price, size, qty, img: prod.images[0], _key: `${prod.id}|${size}` };
}

// ==================== DOM CACHE ====================
// Query once, reuse everywhere — avoids repeated querySelector calls
const $ = id => document.getElementById(id);
const DOM = {
    loader: $('loader'),
    loaderFill: $('loaderFill'),
    navbar: $('navbar'),
    hamburger: $('hamburger'),
    mobileMenu: $('mobileMenu'),
    scrollBar: $('scrollProgress'),
    pageTransition: $('pageTransition'),
    cartDrawer: $('cartDrawer'),
    cartOverlay: $('cartOverlay'),
    cartItems: $('cartItems'),
    cartFooter: $('cartFooter'),
    cartCount: $('cartCount'),
    cartTotal: $('cartTotal'),
    sizeModal: $('sizeModal'),
    toast: $('toast'),
    shopGrid: $('shopGrid'),
    productCount: $('productCount'),
    homeGrid: $('homeGrid'),
    hotGrid: $('hotGrid'),
    categoriesGrid: $('categoriesGrid'),
    igGrid: $('igGrid'),
    heroCard: $('heroCard'),
    heroProductImg: $('heroProductImg'),
    heroProductName: $('heroProductName'),
    heroProductPrice: $('heroProductPrice'),
    // PDP elements
    pdpName: $('pdpName'),
    pdpPrice: $('pdpPrice'),
    pdpOgPrice: $('pdpOgPrice'),
    pdpSave: $('pdpSave'),
    pdpDesc: $('pdpDesc'),
    pdpSizes: $('pdpSizes'),
    pdpFeatures: $('pdpFeatures'),
    pdpStars: $('pdpStars'),
    pdpRatingCount: $('pdpRatingCount'),
    galleryMain: $('galleryMain'),
    galleryThumbs: $('galleryThumbs'),
    relatedGrid: $('relatedGrid'),
    qtyDisplay: $('qtyDisplay'),
    waOrderBtn: $('whatsappOrderBtn'),
};

// ==================== PRECOMPUTED DATA ====================
// Build lookup map once — O(1) product access instead of O(n) find()
const PRODUCT_MAP_RAW = Object.freeze(
    PRODUCTS.reduce((m, p) => { m[p.id] = p; return m; }, {})
);
const PRODUCT_MAP = PRODUCT_MAP_RAW;
const FEATURED = Object.freeze(PRODUCTS.filter(p => p.featured).slice(0, 4));
const HOT = Object.freeze(PRODUCTS.filter(p => p.hot).slice(0, 3));

// Now that PRODUCT_MAP exists, load + sanitize the persisted cart
STATE.cart = (Store.get('outfito_cart', []) || []).map(sanitizeCartItem).filter(Boolean);

// ==================== UTILITIES ====================
function formatPrice(p) {
    if (!formatPrice._fmt) formatPrice._fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
    return formatPrice._fmt.format(p);
}
function savePct(price, og) { return og ? Math.round((og - price) / og * 100) : 0; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function starsFor(rating) {
    const r = Math.round(rating);
    return '★★★★★'.slice(0, r) + '☆☆☆☆☆'.slice(0, 5 - r);
}

function rafThrottle(fn) {
    let ticking = false;
    return function (...args) {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(() => { fn.apply(this, args); ticking = false; });
        }
    };
}

function debounce(fn, ms) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}
function preloadHomeImages() {
    const images = [
        ...document.querySelectorAll('#home-page img')
    ];

    images.forEach(img => {
        if (!img.src) return;

        const preload = new Image();
        preload.src = img.src;
    });
}
// ==================== LOADER ====================
{
    let progress = 0;
    let loaderDone = false;
    gsap.to('.loader-logo', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    gsap.to('.loader-tagline', { opacity: 1, duration: 0.6, delay: 0.6 });

    const tick = () => {
        if (loaderDone) return;
        progress += Math.random() * 18;
        if (progress >= 100) {
            progress = 100;
            DOM.loaderFill.style.width = '100%';
            loaderDone = true;
            setTimeout(hideLoader, 300);
            return;
        }
        DOM.loaderFill.style.width = progress + '%';
        setTimeout(tick, 70);
    };
    setTimeout(tick, 70);
    // Safety net: never let a slow environment leave the loader stuck forever
    setTimeout(() => { if (!loaderDone) { loaderDone = true; hideLoader(); } }, 4000);
}

function hideLoader() {
    if (!DOM.loader || DOM.loader.dataset.hidden) return;
    DOM.loader.dataset.hidden = '1';
    gsap.to(DOM.loader, {
        y: '-100%', duration: 0.9, ease: 'power4.inOut',
        onComplete: () => { DOM.loader.style.display = 'none'; initApp(); },
    });
}

// ==================== INIT ====================
let appInitialized = false;
function initApp() {
    if (appInitialized) return;
    appInitialized = true;
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline()
        .to(['#heroLine1', '#heroLine2', '#heroLine3'], { y: '0%', duration: 1.1, ease: 'power4.out', stagger: 0.11 })
        .to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.55')
        .to('#heroDesc', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45')
        .to('#heroBtns', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.35');

    initScrollReveal();
    initScrollProgress();
    initNavbarScroll();
    renderHome();
    renderShopGrid();
    updateCartBadge();
    setHeroProduct();
    requestAnimationFrame(() => {
        preloadHomeImages();
        initScrollReveal();
    });
}

// ==================== SCROLL REVEAL ====================
let _revealObserver = null;
function initScrollReveal() {
    if (_revealObserver) _revealObserver.disconnect();
    _revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                _revealObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => _revealObserver.observe(el));
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
    const onScroll = rafThrottle(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        DOM.scrollBar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
    });
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ==================== NAVBAR ====================
function initNavbarScroll() {
    const onScroll = rafThrottle(() => {
        DOM.navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ==================== MOBILE MENU ====================
function toggleMenu() {
    STATE.menuOpen = !STATE.menuOpen;
    DOM.hamburger.classList.toggle('open', STATE.menuOpen);
    DOM.hamburger.setAttribute('aria-expanded', String(STATE.menuOpen));
    DOM.mobileMenu.classList.toggle('open', STATE.menuOpen);
    document.body.style.overflow = STATE.menuOpen ? 'hidden' : '';
}

// ==================== PAGE NAVIGATION ====================
const PAGE_IDS = ['home', 'shop', 'product', 'about', 'contact'];
const PAGE_ELS = PAGE_IDS.reduce((m, id) => {
    m[id] = $(id + '-page');
    return m;
}, {});

function navigateTo(page) {
    if (STATE.menuOpen) toggleMenu();
    if (page === STATE.currentPage && page !== 'product') return;
    if (!PAGE_ELS[page]) return;

    gsap.fromTo(DOM.pageTransition,
        { y: '100%' },
        {
            y: '0%', duration: 0.4, ease: 'power3.inOut',
            onComplete: () => {
                PAGE_IDS.forEach(p => {
                    if (PAGE_ELS[p]) { PAGE_ELS[p].style.display = 'none'; PAGE_ELS[p].classList.remove('active'); }
                });
                const target = PAGE_ELS[page];
                if (target) { target.style.display = 'block'; target.classList.add('active'); }

                STATE.currentPage = page;
                window.scrollTo(0, 0);

                gsap.to(DOM.pageTransition, { y: '-100%', duration: 0.4, delay: 0.04, ease: 'power3.inOut' });

                if (page !== 'home') requestAnimationFrame(initScrollReveal);
            },
        }
    );
}

// ==================== RENDER HELPERS ====================
function categoryLabel(cat) {
    const labels = { oversized: 'Oversized', graphic: 'Graphic', minimal: 'Minimal', new: 'New Arrivals', women: 'Women', unisex: 'Unisex' };
    return labels[cat] || cat;
}

function productCardHTML(p, extraClass = '') {
    const badge = p.badge
        ? `<div class="product-badge badge-${esc(p.badge)}">${p.badge === 'hot' ? '🔥 HOT' : esc(p.badge.toUpperCase())}</div>`
        : '';
    const ogPrice = p.ogPrice
        ? `<span class="product-og-price">${formatPrice(p.ogPrice)}</span>`
        : '';
    const sizeTags = p.sizes.map(s => `<span class="size-tag">${esc(s)}</span>`).join('');
    return `<button type="button" class="product-card${extraClass ? ' ' + extraClass : ''}" data-cat="${esc(p.category)}" data-gender="${esc(p.gender)}" onclick="openProduct('${esc(p.id)}')" aria-label="View ${esc(p.name)}">${badge}<img src="${esc(p.images[0])}" alt="${esc(p.name)} — OUTFITO ${esc(categoryLabel(p.category))} tee" loading="eager" decoding="async" width="400" height="533"><div class="product-overlay"></div><div class="product-info"><div class="product-category">${categoryLabel(p.category)} · ${p.gender === 'women' ? 'Women' : 'Unisex'}</div><div class="product-sizes">${sizeTags}</div><div class="product-name">${esc(p.shortName)}</div><div class="product-price-row"><div>${formatPrice(p.price)}${ogPrice}</div><span class="product-quick-btn">QUICK VIEW</span></div></div></button>`;
}

function buildGrid(products, extraClassFn) {
    const frag = document.createDocumentFragment();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = products.map((p, i) => productCardHTML(p, extraClassFn ? extraClassFn(p, i) : '')).join('');
    while (wrapper.firstChild) frag.appendChild(wrapper.firstChild);
    return frag;
}

// ==================== RENDER HOME ====================
function renderHome() {
    if (DOM.categoriesGrid) {
        DOM.categoriesGrid.innerHTML = CATEGORIES.map(c => {
            const cnt = c.id === 'women'
                ? PRODUCTS.filter(p => p.gender === 'women').length
                : PRODUCTS.filter(p => p.category === c.id).length;
            return `<button type="button" class="category-card reveal" onclick="navigateTo('shop');setTimeout(()=>filterByCategory('${esc(c.id)}'),500)" aria-label="Shop ${esc(c.name)}"><img src="${esc(c.img)}" alt="${esc(c.name)} collection" loading="eager" decoding="async" width="400" height="533"><div class="category-overlay"></div><div class="category-arrow">→</div><div class="category-info"><div class="category-name">${esc(c.name)}</div><div class="category-count">${cnt} styles</div></div></button>`;
        }).join('');
    }
    if (DOM.hotGrid) {
        DOM.hotGrid.innerHTML = '';
        DOM.hotGrid.appendChild(buildGrid(HOT, (_, i) => `reveal reveal-delay-${i}`));
    }
    if (DOM.homeGrid) {
        DOM.homeGrid.innerHTML = '';
        DOM.homeGrid.appendChild(buildGrid(FEATURED, (_, i) => `reveal reveal-delay-${i}`));
    }
    if (DOM.igGrid) {
        DOM.igGrid.innerHTML = IG_IMAGES.map(src =>
            `<a class="ig-item" href="https://www.instagram.com/officialoutfito/" target="_blank" rel="noopener"><img src="${esc(src)}" alt="OUTFITO on Instagram" loading="eager" decoding="async" width="300" height="300"><div class="ig-overlay"><span class="ig-icon">VIEW</span></div></a>`
        ).join('');
    }
}

// ==================== SHOP GRID ====================
const _renderShopDebounced = debounce(_doRenderShop, 80);

function renderShopGrid() { _renderShopDebounced(); }

function _doRenderShop() {
    const list = getFilteredSorted();
    if (!DOM.shopGrid) return;

    const frag = buildGrid(list);
    DOM.shopGrid.innerHTML = '';
    DOM.shopGrid.appendChild(frag);

    if (DOM.productCount) DOM.productCount.textContent = `${list.length} Product${list.length !== 1 ? 's' : ''}`;

    const cards = DOM.shopGrid.querySelectorAll('.product-card');
    if (cards.length <= 24) {
        gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out', overwrite: true });
    } else {
        gsap.set(cards, { opacity: 1, y: 0 });
    }
}

function getFilteredSorted() {
    const f = STATE.filter;
    let list = PRODUCTS.filter(p => {
        if (f === 'all') return true;
        if (f === 'women') return p.gender === 'women';
        if (f === 'unisex') return p.gender === 'unisex';
        if (f === 'new') return p.isNew || p.category === 'new';
        return p.category === f;
    });

    const s = STATE.sort;
    if (s === 'price-low') list = list.slice().sort((a, b) => a.price - b.price);
    else if (s === 'price-high') list = list.slice().sort((a, b) => b.price - a.price);
    else if (s === 'newest') list = list.slice().sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else if (s === 'popular') list = list.slice().sort((a, b) => b.reviews - a.reviews);
    return list;
}

// ==================== FILTERS & SORT ====================
function filterProducts(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    STATE.filter = cat;
    renderShopGrid();
}

function filterByCategory(cat) {
    STATE.filter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderShopGrid();
}

function filterProductsByCategory(cat) { filterByCategory(cat); }

function sortProducts(val) { STATE.sort = val; renderShopGrid(); }

function setGrid(cols, btn) {
    document.querySelectorAll('.grid-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (DOM.shopGrid) {
        DOM.shopGrid.classList.remove('grid-2', 'grid-3', 'grid-4');
        if (cols !== 3) DOM.shopGrid.classList.add('grid-' + cols);
    }
    STATE.gridCols = cols;
}

// ==================== PRODUCT DETAIL ====================
function openProduct(id) {
    const p = PRODUCT_MAP[id];
    if (!p) { navigateTo('shop'); return; }

    STATE.currentProduct = p;
    STATE.selectedSize = p.sizes[0] || '';
    STATE.qty = 1;

    DOM.pdpName.textContent = p.name;
    DOM.pdpPrice.textContent = formatPrice(p.price);
    DOM.qtyDisplay.textContent = '1';
    DOM.pdpStars.textContent = starsFor(p.rating);
    DOM.pdpRatingCount.textContent = `(${p.reviews} reviews)`;

    if (p.ogPrice) {
        DOM.pdpOgPrice.textContent = formatPrice(p.ogPrice);
        DOM.pdpOgPrice.style.display = 'inline';
        DOM.pdpSave.textContent = `SAVE ${savePct(p.price, p.ogPrice)}%`;
        DOM.pdpSave.style.display = 'inline';
    } else {
        DOM.pdpOgPrice.style.display = 'none';
        DOM.pdpSave.style.display = 'none';
    }

    DOM.galleryMain.src = p.images[0];
    DOM.galleryMain.alt = p.name;
    if (p.images.length > 1) {
        DOM.galleryThumbs.style.display = 'flex';
        DOM.galleryThumbs.innerHTML = p.images.map((img, i) =>
            `<button type="button" class="gallery-thumb${i === 0 ? ' active' : ''}" onclick="switchImage('${esc(img)}',this)" aria-label="View image ${i + 1} of ${p.images.length}"><img src="${esc(img)}" alt="${esc(p.name)} — view ${i + 1}" loading="eager" decoding="async" width="80" height="107"></button>`
        ).join('');
    } else {
        DOM.galleryThumbs.innerHTML = '';
        DOM.galleryThumbs.style.display = 'none';
    }

    DOM.pdpSizes.innerHTML = p.sizes.map(s =>
        `<button type="button" class="size-option${s === STATE.selectedSize ? ' selected' : ''}" onclick="selectSize(this,'${esc(s)}')" aria-pressed="${s === STATE.selectedSize}">${esc(s)}</button>`
    ).join('');

    DOM.pdpDesc.textContent = p.desc;

    DOM.pdpFeatures.innerHTML = p.features.map(f =>
        `<div class="feature-item"><span class="feature-dot"></span><span>${esc(f)}</span></div>`
    ).join('');

    const related = PRODUCTS.filter(x => x.id !== id && (x.category === p.category || x.gender === p.gender)).slice(0, 4);
    DOM.relatedGrid.innerHTML = '';
    DOM.relatedGrid.appendChild(buildGrid(related));

    document.querySelectorAll('.accordion-item').forEach((item, i) => {
        const body = item.querySelector('.accordion-body');
        if (i === 0) {
            item.classList.add('open');
            if (body) body.style.maxHeight = body.scrollHeight + 'px';
        } else {
            item.classList.remove('open');
            if (body) body.style.maxHeight = '0';
        }
    });

    _updateWALink();
    navigateTo('product');
}

function selectSize(btn, size) {
    STATE.selectedSize = size;
    DOM.pdpSizes.querySelectorAll('.size-option').forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('selected');
    btn.setAttribute('aria-pressed', 'true');
    _updateWALink();
}

function changeQty(delta) {
    STATE.qty = Math.max(1, Math.min(10, STATE.qty + delta));
    DOM.qtyDisplay.textContent = STATE.qty;
    _updateWALink();
}

function _updateWALink() {
    const p = STATE.currentProduct;
    if (!p) return;
    const total = formatPrice(p.price * STATE.qty);
    const msg = `Hi OUTFITO! 👋\n\nI'd like to order:\n\n🛍 *${p.name}*\n📏 Size: ${STATE.selectedSize}\n🔢 Qty: ${STATE.qty}\n💰 Price: ${formatPrice(p.price)} × ${STATE.qty} = ${total}\n\nPlease confirm availability and payment details. Thank you!`;
    DOM.waOrderBtn.href = `https://wa.me/918595678209?text=${encodeURIComponent(msg)}`;
}

function switchImage(src, thumb) {
    DOM.galleryMain.src = src;
    DOM.galleryThumbs.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function toggleAccordion(id) {
    const item = $(id);
    if (!item) return;
    const body = item.querySelector('.accordion-body');
    const open = item.classList.toggle('open');
    if (body) body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
}

// ==================== CART ====================
function _withCartMutex(fn) {
    if (STATE._cartBusy) return;
    STATE._cartBusy = true;
    try { fn(); } finally {
        setTimeout(() => { STATE._cartBusy = false; }, 0);
    }
}

function toggleCart() {
    STATE.cartOpen = !STATE.cartOpen;
    DOM.cartDrawer.classList.toggle('open', STATE.cartOpen);
    DOM.cartOverlay.classList.toggle('open', STATE.cartOpen);
    document.body.style.overflow = STATE.cartOpen ? 'hidden' : '';
    if (STATE.cartOpen) _renderCart();
}

function addToCart() {
    if (!STATE.selectedSize) { showToast('Please select a size first'); return; }
    _withCartMutex(() => {
        const p = STATE.currentProduct;
        if (!p) return;
        const key = `${p.id}|${STATE.selectedSize}`;
        const existing = STATE.cart.find(i => i._key === key);
        if (existing) {
            existing.qty = Math.min(10, existing.qty + STATE.qty);
        } else {
            STATE.cart.push({
                _key: key,
                id: p.id,
                name: p.name,
                price: p.price,
                size: STATE.selectedSize,
                qty: STATE.qty,
                img: p.images[0],
            });
        }
        _persistCart();
        _renderCart();
        updateCartBadge();
        showToast('Added to bag ✓');
    });
}

function removeFromCart(key) {
    _withCartMutex(() => {
        STATE.cart = STATE.cart.filter(i => i._key !== key);
        _persistCart();
        _renderCart();
        updateCartBadge();
    });
}

function _persistCart() {
    const toSave = STATE.cart.map(({ _key, ...rest }) => rest);
    Store.set('outfito_cart', toSave);
}

function updateCartBadge() {
    const count = STATE.cart.reduce((s, i) => s + i.qty, 0);
    DOM.cartCount.textContent = count;
    DOM.cartCount.style.display = count > 0 ? 'flex' : 'none';
}

function _renderCart() {
    if (STATE.cart.length === 0) {
        DOM.cartItems.innerHTML = `<div class="cart-empty"><div class="cart-empty-text">YOUR BAG IS EMPTY</div><div class="cart-empty-sub">Add something to get started</div><button type="button" class="btn-outline" style="margin-top:24px;" onclick="toggleCart();navigateTo('shop')"><span>SHOP NOW</span></button></div>`;
        DOM.cartFooter.style.display = 'none';
        return;
    }

    const total = STATE.cart.reduce((s, i) => s + i.price * i.qty, 0);
    DOM.cartItems.innerHTML = STATE.cart.map(i => `<div class="cart-item"><div class="cart-item-img"><img src="${esc(i.img)}" alt="${esc(i.name)}" loading="eager" width="80" height="100"></div><div class="cart-item-info"><div class="cart-item-name">${esc(i.name)}</div><div class="cart-item-meta">Size: ${esc(i.size)} · Qty: ${i.qty}</div><div class="cart-item-price">${formatPrice(i.price * i.qty)}</div><button type="button" class="cart-item-remove" onclick="removeFromCart('${esc(i._key || i.id + '|' + i.size)}')">Remove</button></div></div>`).join('');
    DOM.cartTotal.textContent = formatPrice(total);
    DOM.cartFooter.style.display = 'block';
}

function checkoutWhatsApp() {
    if (STATE.cart.length === 0) return;
    const total = STATE.cart.reduce((s, i) => s + i.price * i.qty, 0);
    let msg = `Hi OUTFITO! 👋 I'd like to order:\n\n`;
    STATE.cart.forEach(i => { msg += `🛍 *${i.name}*\n   Size: ${i.size} · Qty: ${i.qty} · ${formatPrice(i.price * i.qty)}\n\n`; });
    msg += `💰 *Total: ${formatPrice(total)}*\n\nPlease confirm availability, delivery address, and payment details. Thank you!`;
    window.open(`https://wa.me/918595678209?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

// ==================== CONTACT ====================
function sendContactWhatsApp() {
    const name = ($('contactName')?.value || '').trim();
    const email = ($('contactEmail')?.value || '').trim();
    const subject = ($('contactSubject')?.value || '').trim();
    const message = ($('contactMessage')?.value || '').trim();
    if (!name || !message) { showToast('Please fill your name and message'); return; }
    const msg = `Hi OUTFITO! 👋\n\n*Name:* ${name}\n*Email:* ${email || 'Not provided'}\n*Subject:* ${subject || 'General Enquiry'}\n\n*Message:*\n${message}`;
    window.open(`https://wa.me/918595678209?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

// ==================== SIZE GUIDE ====================
function openSizeGuide() {
    DOM.sizeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeSizeGuide() {
    DOM.sizeModal.classList.remove('open');
    document.body.style.overflow = STATE.cartOpen ? 'hidden' : '';
}
DOM.sizeModal.addEventListener('click', e => { if (e.target === DOM.sizeModal) closeSizeGuide(); });

// ==================== TOAST ====================
{
    let _toastTimer = null;
    window.showToast = function (msg) {
        DOM.toast.textContent = msg;
        DOM.toast.classList.add('show');
        clearTimeout(_toastTimer);
        _toastTimer = setTimeout(() => DOM.toast.classList.remove('show'), 2500);
    };
}

// ==================== NEWSLETTER ====================
window.newsletterJoin = function (e) {
    if (e) e.preventDefault();
    const input = $('newsletterEmail');
    if (input && input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        showToast("You're on the list! 🔥");
        input.value = '';
    } else {
        showToast('Please enter a valid email');
    }
    return false;
};

// ==================== HERO PRODUCT ====================
function setHeroProduct() {
    const hero = FEATURED[0];
    if (!hero) return;

    const img = new Image();

    img.onload = () => {
        if (DOM.heroProductImg) {
            DOM.heroProductImg.src = hero.images[0];
            DOM.heroProductImg.alt = hero.name + ' — OUTFITO hero product';
        }
    };

    img.onerror = () => {
        console.warn('[OUTFITO] Failed to load hero image:', hero.images[0]);
    };

    img.src = hero.images[0];

    if (DOM.heroProductName) {
        DOM.heroProductName.textContent = hero.shortName;
    }

    if (DOM.heroProductPrice) {
        DOM.heroProductPrice.textContent = formatPrice(hero.price);
    }

    if (DOM.heroCard) {
        DOM.heroCard.onclick = () => openProduct(hero.id);
    }
}

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (STATE.cartOpen) toggleCart();
        if ($('sizeModal')?.classList.contains('open')) closeSizeGuide();
        if (STATE.menuOpen) toggleMenu();
    }
});

// ==================== ERROR BOUNDARY ====================
window.addEventListener('error', e => {
    console.warn('[OUTFITO] Caught error:', e.message);
});
window.addEventListener('unhandledrejection', e => {
    console.warn('[OUTFITO] Unhandled promise:', e.reason);
    e.preventDefault();
});
