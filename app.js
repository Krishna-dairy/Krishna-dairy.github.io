// Krishna Dairy 2025 - Premium Interactive JavaScript

// Application Data
const krishnaData = {
  company: {
    name: "Krishna Dairy",
    tagline: "Pure Artisanal Dairy, Crafted with Heritage",
    description: "From our organic farms in Talala to your table - Experience the finest traditional dairy products",
    location: "Talala(gir), Gujarat, India",
    phone: "+91 9316989484",
    address: "Krishna Dairy, Aabadash Road, Gundaran, Kalidhar, Talala(gir)",
    social: "@Krishna dairy"
  },
  products: [
    {
      name: "Desi Ghee",
      slug: "desi-ghee",
      nameGujarati: "દેશી ઘી",
      price: "₹650",
      unit: "per kg",
      description: "Golden treasure from grass-fed cows, rich in nutrients and traditional flavor",
      benefits: ["Pure A2 milk", "Rich in Omega-3", "Aids digestion", "Boosts immunity"],
      image: "https://happybellyfish.com/wp-content/uploads/2017/01/all_about_ghee-1.jpg"
    },
    {
      name: "Mawo",
      slug: "mawo",
      nameGujarati: "માવો",
      price: "₹250",
      unit: "per kg",
      description: "Artisanal milk solids, naturally sweetened and traditionally prepared",
      benefits: ["High protein", "Natural sweetness", "Traditional recipe", "Pure milk"],
      image: "https://lh3.googleusercontent.com/d/1zdVAlhXpFn7aFXr0QbnfXjY78GJADA9d"
    },
    {
      name: "Mango Juice",
      slug: "mango-juice",
      nameGujarati: "કેરી નો રસ",
      price: "₹120",
      unit: "per kg",
      description: "Fresh seasonal mangoes, farm-pressed with no artificial additives",
      benefits: ["Seasonal fruit", "No preservatives", "Fresh daily", "Natural vitamins"],
      image: "https://lh3.googleusercontent.com/d/1-ahnoC_P2-0piqZt3SM16lnqEyuVApMc"
    },
    {
      name: "Dry Fruits Shrikhand",
      slug: "dry-fruits-shrikhand",
      nameGujarati: "ડ્રાય ફ્રૂટ્સ શ્રીખંડ",
      price: "₹260",
      unit: "per kg",
      description: "Traditional dessert with premium nuts and rich, creamy texture",
      benefits: ["Premium nuts", "Rich in calcium", "Traditional sweet", "Artisanal craft"],
      image: "https://drive.google.com/thumbnail?id=141NvpGsmaDbhqcLxMGadnO6oULAS6FI6"
    },
    {
      name: "Kesar Shrikhand",
      slug: "kesar-shrikhand",
      nameGujarati: "કેસર શ્રીખંડ",
      price: "₹200",
      unit: "per kg",
      description: "Saffron-infused creamy delight, a royal treat for special occasions",
      benefits: ["Pure saffron", "Royal flavor", "Rich texture", "Premium quality"],
      image: "https://drive.google.com/thumbnail?id=1z_2M5gASKjZn4cWtAWlJJo7ozrclw5r0"
    },
    {
      name: "American Shrikhand",
      slug: "american-shrikhand",
      nameGujarati: "અમેરિકન શ્રીખંડ",
      price: "₹220",
      unit: "per kg",
      description: "Fusion flavors meeting traditional craft, best of both worlds",
      benefits: ["Fusion taste", "Traditional method", "Unique flavor", "Modern twist"],
      image: "https://b.zmtcdn.com/data/dish_photos/7cc/5bfe0fe06393fa96ea71b16af034f7cc.jpg"
    },
    {
      name: "Butter",
      slug: "butter",
      nameGujarati: "માખણ",
      price: "₹400",
      unit: "per kg",
      description: "Churned fresh daily, pure and natural with exceptional taste",
      benefits: ["Fresh daily", "Pure cream", "Natural taste", "Rich vitamins"],
      image: "https://static.toiimg.com/thumb/msid-104241431,imgsize-55762,width-400,resizemode-4/104241431.jpg"
    },
    {
      name: "Ghoravu",
      slug: "ghoravu",
      nameGujarati: "ઘોરવુ",
      price: "₹60",
      unit: "per liter",
      description: "Traditional fermented milk beverage, healthy and refreshing",
      benefits: ["Probiotic rich", "Digestive health", "Traditional recipe", "Refreshing taste"],
      image: "https://staticimg.amarujala.com/assets/images/2020/04/27/mint-lassi_1587959454.png?w=414&dpr=1.0"
    }
  ],
  whyChooseUs: [
    {
      title: "Organic Excellence",
      description: "Certified organic products free from chemicals and preservatives - just as nature intended",
      icon: "img/nature-product.png"
    },
    {
      title: "Heritage Craftsmanship",
      description: "Traditional methods passed down through generations, creating exceptional flavors",
      icon: "img/indian-village-woman-making-ghee-bilona-273565981.webp"
    },
    {
      title: "Premium Nutrition",
      description: "Rich in Omega-3s, Vitamins A & E, supporting digestion, immunity, and radiant skin",
      icon: "img/quality.png"
    },
    {
      title: "Farm-Fresh Promise",
      description: "Milked at dawn, processed immediately, delivered to your door within 24 hours",
      icon: "img/party.png"
    }
  ],
  testimonials: [
    {
      name: "Priya Sharma",
      location: "Ahmedabad",
      rating: 5,
      text: "Krishna Dairy's ghee is absolutely divine! The taste reminds me of my grandmother's homemade ghee. Pure, authentic, and incredibly healthy.",
      initial: "P"
    },
    {
      name: "Rajesh Patel",
      location: "Surat",
      rating: 5,
      text: "The freshness of their products is unmatched. You can taste the difference in every bite. Highly recommend their shrikhand!",
      initial: "R"
    },
    {
      name: "Meera Desai",
      location: "Vadodara",
      rating: 5,
      text: "Finally found a dairy that truly cares about quality. Their organic approach and traditional methods make all the difference.",
      initial: "M"
    },
    {
      name: "Amit Kumar",
      location: "Rajkot",
      rating: 5,
      text: "Best quality dairy products in Gujarat! Their mawo is perfect for making sweets. Will definitely order again.",
      initial: "A"
    }
  ],
  galleryItems: [
    {
      title: "Highland Cows in Pasture",
      description: "Our premium Highland cows grazing in golden hour light",
      image: "https://lh3.googleusercontent.com/d/1VlNMKgw3By1np1bxxPDXyKyaM4YwicU7"
    },
    {
      title: "Dairy Processing Plant",
      description: "State-of-the-art processing facility maintaining highest hygiene standards",
      image: "https://lh3.googleusercontent.com/d/1Va-vAN0csdeOUzXsDOHxSRwQ4_ipxm-c"
    },
    {
      title: "Traditional Ghee Making",
      description: "Time-honored process of making premium desi ghee",
      image: "img/pure-desi-ghee.webp"
    },
    {
      title: "Premium Product Range",
      description: "Our complete collection of artisanal dairy products",
      image: "https://lh3.googleusercontent.com/d/1zqBJteTIjsGhUO4pTzKqIMIrdv9ypfqX"
    },
    {
      title: "Farm Landscape",
      description: "Scenic view of our organic farm in Gujarat",
      image: "https://lh3.googleusercontent.com/d/1UqTyt2nZKeY6GO0-8apBnXxXfNMMatzO"
    },
    {
      title: "Quality Control",
      description: "Rigorous testing ensures premium quality in every product",
      image: "https://lh3.googleusercontent.com/d/1-aYRqsUx1pTA98wTsTCxgDfqqcfOI3gz"
    }
  ]
};

// Application State
const appState = {
  isInitialized: false,
  currentSection: 'hero',
  isMenuOpen: false,
  countersAnimated: false,
  isLightboxOpen: false,
  newsletterShown: false,
  scrollPosition: 0,
  isMobile: window.innerWidth <= 768
};

// DOM Elements Cache
let elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  if (appState.isInitialized) return;
  
  cacheElements();
  setupEventListeners();
  populateContent();
  setupAnimations();
  setupPerformanceOptimizations();
  
  appState.isInitialized = true;
  
  // Add loaded class for animations
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
  
  // Show newsletter popup after delay
  setTimeout(showNewsletterPopup, 30000);
  
  console.log('🐄 Krishna Dairy Premium Website Initialized Successfully!');
}

// Cache DOM Elements
function cacheElements() {
  elements = {
    // Header & Navigation
    header: document.querySelector('.header'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav__link'),
    
    // Content Containers
    whyGrid: document.getElementById('whyGrid'),
    productsGrid: document.getElementById('productsGrid'),
    galleryGrid: document.getElementById('galleryGrid'),
    testimonialsGrid: document.getElementById('testimonialsGrid'),
    
    // Interactive Elements
    contactForm: document.getElementById('contactForm'),
    
    // Lightbox
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    lightboxDescription: document.getElementById('lightboxDescription'),
    lightboxClose: document.getElementById('lightboxClose'),
    
    // Counters
    
    // Footer
    currentYear: document.getElementById('currentYear')
  };
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile Navigation
  if (elements.navToggle && elements.navMenu) {
    elements.navToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking links
    elements.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (appState.isMobile) closeMobileMenu();
        handleSmoothScroll(e);
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (appState.isMobile && appState.isMenuOpen && 
          !elements.navMenu.contains(e.target) && 
          !elements.navToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }
  
  // Scroll Events
  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(handleScroll, 10);
  });
  
  // Resize Events
  let resizeTimer;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 100);
  });
  
  // Form Events
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Lightbox Events
  if (elements.lightbox) {
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightbox.querySelector('.lightbox__overlay')
      .addEventListener('click', closeLightbox);
  }
  
  // Keyboard Events
  document.addEventListener('keydown', handleKeyboard);
  
  // Set current year
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }
}

// After DOMContentLoaded and cacheElements, add:
document.addEventListener('DOMContentLoaded', function() {
  if (elements.lightboxImage) {
    elements.lightboxImage.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  }
});

// Mobile Navigation
function toggleMobileMenu() {
  appState.isMenuOpen = !appState.isMenuOpen;
  
  if (appState.isMenuOpen) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

function openMobileMenu() {
  elements.navMenu.classList.add('active');
  elements.navToggle.classList.add('active');
  document.body.style.overflow = 'hidden';
  appState.isMenuOpen = true;
}

function closeMobileMenu() {
  elements.navMenu.classList.remove('active');
  elements.navToggle.classList.remove('active');
  document.body.style.overflow = '';
  appState.isMenuOpen = false;
}

// Smooth Scrolling
function handleSmoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    const headerHeight = elements.header.offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    updateActiveNavigation(targetId.substring(1));
  }
}

// Scroll Handler
function handleScroll() {
  const scrollY = window.pageYOffset;
  appState.scrollPosition = scrollY;
  
  // Header scroll effect
  if (scrollY > 100) {
    elements.header.classList.add('scrolled');
  } else {
    elements.header.classList.remove('scrolled');
  }
  
  // Update active navigation
  updateActiveNavigationOnScroll();
  
  // Animate counters when hero is visible
  if (!appState.countersAnimated && isElementInViewport(document.getElementById('hero'))) {
    // animateCounters(); // Removed as per edit hint
  }
  
  // Parallax effects
  updateParallaxEffects();
}

// Resize Handler
function handleResize() {
  appState.isMobile = window.innerWidth <= 768;
  
  if (!appState.isMobile && appState.isMenuOpen) {
    closeMobileMenu();
  }
}

// Populate Content
function populateContent() {
  populateWhyChooseUs();
  populateProducts();
  populateGallery();
  populateTestimonials();
}

// Populate Why Choose Us Section
function populateWhyChooseUs() {
  if (!elements.whyGrid) return;
  
  elements.whyGrid.innerHTML = '';
  
  krishnaData.whyChooseUs.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'why-card animate-on-scroll';
    card.style.animationDelay = `${index * 0.1}s`;
    
    let iconHtml = '';
    if (typeof item.icon === 'string' && /\.(png|jpe?g|webp)$/i.test(item.icon)) {
      iconHtml = `<img src="${item.icon}" alt="${item.title}" class="why-card__icon-img" loading="lazy">`;
    } else {
      iconHtml = item.icon;
    }
    
    card.innerHTML = `
      <div class="why-card__icon">${iconHtml}</div>
      <h3 class="why-card__title">${item.title}</h3>
      <p class="why-card__description">${item.description}</p>
    `;
    
    elements.whyGrid.appendChild(card);
  });
}

// Populate Products Section
function populateProducts() {
  if (!elements.productsGrid) return;
  
  elements.productsGrid.innerHTML = '';
  
  krishnaData.products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card animate-on-scroll';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const benefitsHtml = product.benefits.map(benefit => 
      `<span class="benefit-tag">${benefit}</span>`
    ).join('');
    
    let productLink = '';
    if (product.slug === 'desi-ghee') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/ghee_1';
    } else if (product.slug === 'mawo') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/mavo?authuser=2';
    } else if (product.slug === 'mango-juice') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/mango-juice?authuser=2';
    } else if (product.slug === 'dry-fruits-shrikhand') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/dry-fruits-shrikhand?authuser=2';
    } else if (product.slug === 'kesar-shrikhand') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/kesar-shrikhand?authuser=2';
    } else if (product.slug === 'american-shrikhand') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/american-shrikhand?authuser=2';
    }
    else if (product.slug === 'butter') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/butter';
    } 
    else if (product.slug === 'ghoravu') {
      productLink = 'https://sites.google.com/view/krishna-dairy-talalagir/american-shrikhand?authuser=2';
    }else {
      productLink = 'product.html?slug=' + product.slug;
    }
    card.innerHTML = `
      <a href="${productLink}" class="product-card__link" target="_blank">
        <img src="${product.image}" alt="${product.name}" class="product-card__image" 
             onerror="this.src='https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'">
        <div class="product-card__content">
          <h3 class="product-card__name">${product.name}</h3>
          <p class="product-card__name-gujarati">${product.nameGujarati}</p>
          <p class="product-card__price">${product.price} ${product.unit}</p>
          <p class="product-card__description">${product.description}</p>
          <div class="product-card__benefits">${benefitsHtml}</div>
        </div>
      </a>
    `;
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-16px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
    
    elements.productsGrid.appendChild(card);
  });
}

// Populate Gallery Section
function populateGallery() {
  if (!elements.galleryGrid) return;
  
  elements.galleryGrid.innerHTML = '';
  
  krishnaData.galleryItems.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item animate-on-scroll';
    galleryItem.style.animationDelay = `${index * 0.1}s`;
    
    galleryItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="gallery-item__image"
           onerror="this.src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'">
      <div class="gallery-item__overlay"></div>
    `;
    
    // Add click event for lightbox
    galleryItem.addEventListener('click', () => {
      openLightbox(item.image, item.title, item.description);
    });
    
    elements.galleryGrid.appendChild(galleryItem);
  });
}

// Populate Testimonials Section
function populateTestimonials() {
  if (!elements.testimonialsGrid) return;
  
  elements.testimonialsGrid.innerHTML = '';
  
  krishnaData.testimonials.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card animate-on-scroll';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const starsHtml = Array(testimonial.rating).fill().map(() => 
      '<i class="fas fa-star star"></i>'
    ).join('');
    
    card.innerHTML = `
      <div class="testimonial-card__content">
        <div class="testimonial-card__rating">${starsHtml}</div>
        <p class="testimonial-card__text">"${testimonial.text}"</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${testimonial.initial}</div>
          <div class="testimonial-card__info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.location}</p>
          </div>
        </div>
      </div>
    `;
    
    elements.testimonialsGrid.appendChild(card);
  });
}

// Lightbox Functionality
function openLightbox(imageSrc, title, description) {
  if (!elements.lightbox) return;
  
  elements.lightboxImage.src = imageSrc;
  elements.lightboxTitle.textContent = title;
  elements.lightboxDescription.textContent = description;
  
  elements.lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  appState.isLightboxOpen = true;
}

function closeLightbox() {
  if (!elements.lightbox) return;
  
  elements.lightbox.classList.remove('active');
  document.body.style.overflow = '';
  appState.isLightboxOpen = false;
}

// Newsletter Popup
function showNewsletterPopup() {
  if (appState.newsletterShown || !elements.newsletterPopup) return;
  
  elements.newsletterPopup.classList.add('active');
  appState.newsletterShown = true;
}

function hideNewsletterPopup() {
  if (!elements.newsletterPopup) return;
  
  elements.newsletterPopup.classList.remove('active');
}

// Form Handlers
function handleContactForm(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Basic validation
  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }
  
  // Email validation
  if (!isValidEmail(data.email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }
  
  // Simulate form submission
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    showNotification(`Thank you, ${data.firstName}! Your message has been received. We'll get back to you soon.`, 'success');
    e.target.reset();
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
  }, 2000);
}

function handleNewsletterForm(e) {
  e.preventDefault();
  
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (!isValidEmail(email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    showNotification('Thank you for subscribing! You\'ll receive updates about our latest products.', 'success');
    hideNewsletterPopup();
    e.target.reset();
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
  }, 1500);
}

// Counter Animation
// Removed as per edit hint

// Scroll Animations
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation class
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }, 500);
}

// Parallax Effects
function updateParallaxEffects() {
  const scrolled = appState.scrollPosition;
  const parallaxElements = document.querySelectorAll('.organic-shape');
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
  });
}

// Navigation Updates
function updateActiveNavigation(activeId) {
  if (appState.currentSection === activeId) return;
  
  elements.navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`.nav__link[href="#${activeId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  appState.currentSection = activeId;
}

function updateActiveNavigationOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = appState.scrollPosition + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      updateActiveNavigation(sectionId);
    }
  });
}

// Keyboard Navigation
function handleKeyboard(e) {
  // Close lightbox with Escape
  if (e.key === 'Escape') {
    if (appState.isLightboxOpen) {
      closeLightbox();
    } else if (appState.newsletterShown && elements.newsletterPopup.classList.contains('active')) {
      hideNewsletterPopup();
    } else if (appState.isMenuOpen) {
      closeMobileMenu();
    }
  }
  
  // Focus management for accessibility
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
}

// Utility Functions
function isElementInViewport(element) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  const iconMap = {
    success: 'check-circle',
    error: 'exclamation-triangle',
    info: 'info-circle'
  };
  
  const colorMap = {
    success: '#228B22',
    error: '#DC3545',
    info: '#D2691E'
  };
  
  notification.innerHTML = `
    <div class="notification__content">
      <i class="fas fa-${iconMap[type]}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Styling
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colorMap[type]};
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    max-width: 400px;
    transform: translateX(120%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: blur(10px);
  `;
  
  notification.querySelector('.notification__content').style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove
  setTimeout(() => {
    notification.style.transform = 'translateX(120%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 400);
  }, 5000);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Performance Optimizations
function setupPerformanceOptimizations() {
  // Preload critical images
  const criticalImages = [
    'https://pplx-res.cloudinary.com/image/upload/v1751571798/pplx_project_search_images/046e11f58be987539b7dd8c9c22f7123099b3b5e.jpg'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  // Optimize scroll events
  const optimizedScrollHandler = throttle(handleScroll, 16);
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Mouse movement parallax for hero shapes
document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) {
    const shapes = document.querySelectorAll('.organic-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.02;
      const x = (mouseX - 0.5) * speed * 100;
      const y = (mouseY - 0.5) * speed * 100;
      
      shape.style.transform += ` translate(${x}px, ${y}px)`;
    });
  }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Page visibility API for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when page is not visible
  } else {
    // Resume animations when page becomes visible
  }
});

// Handle page load
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Krishna Dairy App Error:', e.error);
});

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { krishnaData, appState };
}

console.log('🥛 Krishna Dairy 2025 - Premium Interactive Experience Ready!');