 
// ==================== STATE ====================
let currentPage = 'home';
let selectedSize = 'M';
let currentProduct = {};

// ==================== LOADER ====================
const loader = document.getElementById('loader');
const loaderLogo = document.querySelector('.loader-logo');
const loaderTagline = document.querySelector('.loader-tagline');
const loaderFill = document.getElementById('loaderFill');
let progress = 0;

gsap.to(loaderLogo, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
gsap.to(loaderTagline, { opacity: 1, duration: 0.6, delay: 0.6 });

const fillInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    clearInterval(fillInterval);
    setTimeout(hideLoader, 400);
  }
  loaderFill.style.width = progress + '%';
}, 80);

function hideLoader() {
  gsap.to(loader, {
    y: '-100%',
    duration: 0.9,
    ease: 'power4.inOut',
    onComplete: () => { loader.style.display = 'none'; initAnimations(); }
  });
}

// ==================== HERO ANIMATIONS ====================
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  tl.to(['#heroLine1','#heroLine2','#heroLine3'], { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.12 })
    .to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.6')
    .to('#heroDesc', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .to('#heroBtns', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
  initScrollReveal();
  initScrollProgress();
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// ==================== SCROLL PROGRESS ====================
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ==================== CURSOR ====================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .product-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(2)';
    cursorFollower.style.transform += ' scale(1.5)';
  });
  el.addEventListener('mouseleave', () => { });
});

// ==================== MOBILE MENU ====================
let menuOpen = false;
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
  menuOpen = !menuOpen;
  hamburger.classList.toggle('open', menuOpen);
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

// ==================== PAGE NAVIGATION ====================
const pages = { home: 'home-page', shop: 'shop-page', product: 'product-page', about: 'about-page', contact: 'contact-page' };

function navigateTo(page) {
  if (menuOpen) toggleMenu();
  if (page === currentPage && page !== 'product') return;
  const transition = document.getElementById('pageTransition');
  gsap.fromTo(transition, { y: '100%' }, { y: '0%', duration: 0.5, ease: 'power3.inOut', onComplete: () => {
    Object.keys(pages).forEach(p => {
      const el = document.getElementById(pages[p]);
      if (el) { el.style.display = 'none'; el.classList.remove('active'); }
    });
    const target = document.getElementById(pages[page]);
    if (target) { target.style.display = 'block'; target.classList.add('active'); }
    currentPage = page;
    window.scrollTo(0, 0);
    gsap.to(transition, { y: '-100%', duration: 0.5, delay: 0.1, ease: 'power3.inOut' });
    if (page !== 'home') setTimeout(initScrollReveal, 200);
  }});
}

// ==================== PRODUCT DETAIL ====================
function openProduct(id, name, price, desc, img) {
  currentProduct = { id, name, price, desc, img };
  document.getElementById('pdpName').textContent = name;
  document.getElementById('pdpPrice').textContent = price;
  document.getElementById('pdpDesc').textContent = desc;
  document.getElementById('galleryMain').src = img;
  document.getElementById('galleryThumb1').src = img.replace('w=600','w=200');
  selectedSize = 'M';
  document.querySelectorAll('.size-option').forEach(b => {
    b.classList.toggle('selected', b.textContent === 'M');
  });
  updateWhatsAppLink();
  navigateTo('product');
}

function selectSize(btn, size) {
  selectedSize = size;
  document.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  updateWhatsAppLink();
}

function updateWhatsAppLink() {
  const { name, price } = currentProduct;
  const msg = `Hi OUTFITO, I want to order:\n\nProduct: ${name}\nSize: ${selectedSize}\nPrice: ${price}\n\nPlease confirm availability!`;
  document.getElementById('whatsappOrderBtn').href = `https://wa.me/918448908359?text=${encodeURIComponent(msg)}`;
}

function switchImage(src, thumb) {
  document.getElementById('galleryMain').src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.parentElement.classList.add('active');
}

// ==================== SHOP FILTERS ====================
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#shopGrid .product-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
      gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== INIT ====================
document.getElementById('home-page').style.display = 'block';
 