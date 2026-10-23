const PRODUCTS = [
  {
    id: "p1",
    category: "Toldos Exteriores",
    title: "Toldo Brazo Invisible",
    short: "Sombra sin columnas frontales.",
    description: "Sistema moderno y resistente para balcones, patios y locales.",
    images: [
      "toldos exteriores/images/toldo brazo invisible/560039397_17851134444559621_3291951586725967056_n.webp",
      "toldos exteriores/images/toldo brazo invisible/exterior-de-alta-calidad-de-alta-calidad-con-dosel-deslizante-sistema-de-techo-retráctil-toldo.webp",
      "toldos exteriores/images/toldo brazo invisible/IMG-20251027-WA0034(1).jpg.jpeg"
    ]
  },
  {
    id: "p2",
    category: "Cortinas",
    title: "Cortinas Roller",
    short: "Privacidad y control lumínico.",
    description: "Versiones blackout, sunscreen y zebra para ambientes modernos.",
    images: [
      "Cortinas interior/cortinas roller/images/WhatsApp Image 2026-04-03 at 14.51.11.jpeg",
      "Cortinas interior/cortinas roller/images/WhatsApp Image 2026-04-03 at 13.50.39.jpeg",
      "Cortinas interior/cortinas roller/images/WhatsApp Image 2026-04-03 at 13.54.50.jpeg"
    ]
  },
  {
    id: "p3",
    category: "Toldos Exteriores",
    title: "Toldo Punto Recto",
    short: "Resistencia UV y estilo.",
    description: "Ideal para ventanas y balcones, con inclinación regulable.",
    images: [
      "toldos exteriores/images/punto recto/TPR6C.jpg",
      "toldos exteriores/images/punto recto/TPR0C.jpg",
      "toldos exteriores/images/punto recto/toldo-punto-recto-1.webp"
    ]
  },
  {
    id: "p4",
    category: "Cortinas",
    title: "Cortina Tradicional con Riel",
    short: "Confort térmico todo el año.",
    description: "Pliegues definidos para living y dormitorios.",
    images: [
      "Cortinas interior/cortinas tradicional con riel/images/542484808_17846157741559621_5426737329764844748_n.webp",
      "Cortinas interior/cortinas tradicional con riel/images/WhatsApp Image 2026-04-03 at 14.48.41.jpeg",
      "Cortinas interior/cortinas tradicional con riel/images/549733536_17848844085559621_2489044826489643242_n.webp"
    ]
  },
  {
    id: "p5",
    category: "Toldos Exteriores",
    title: "Toldo Pérgola Entrelazado",
    short: "Protección solar elegante.",
    description: "Ideal para galerías y terrazas con desplazamiento sobre guías.",
    images: [
      "toldos exteriores/images/toldos,,/WhatsApp Image 2026-04-03 at 14.15.17.jpeg",
      "toldos exteriores/images/toldos,,/WhatsApp Image 2026-04-03 at 14.14.49.jpeg",
      "toldos exteriores/images/toldos,,/573133510_17854492977559621_8213293413093721684_n.webp"
    ]
  },
  {
    id: "p6",
    category: "Toldos Exteriores",
    title: "Toldo Vertical Enrollable",
    short: "Protección y privacidad.",
    description: "Reduce sol y viento manteniendo ventilación y visibilidad.",
    images: [
      "toldos exteriores/images/toldo vertical enrrollable/IMG-20251027-WA0031.jpg.jpeg",
      "toldos exteriores/images/toldo vertical enrrollable/IMG-20251204-WA0016.jpg.jpeg",
      "toldos exteriores/images/toldo vertical enrrollable/WhatsApp Image 2026-04-03 at 14.32.24.jpeg"
    ]
  }
];

const DECO = [
  {
    id: "d1",
    category: "Adornos",
    title: "Adorno Banghi",
    short: "Pieza artesanal para interior.",
    description: "Objeto decorativo con textura orgánica para livings y recibidores.",
    images: [
      "public/images/adornos/IMG_20260223_165423163.jpg"
    ]
  },
  {
    id: "d2",
    category: "Adornos",
    title: "Adorno Thorne",
    short: "Acento minimalista.",
    description: "Composición limpia y cálida para estanterías o mesas auxiliares.",
    images: [
      "public/images/adornos/IMG_20260223_164634553.jpg"
    ]
  },
  {
    id: "d3",
    category: "Espejos",
    title: "Espejo Deco",
    short: "Luz y amplitud visual.",
    description: "Espejo decorativo para potenciar profundidad en interiores.",
    images: [
      "public/images/espejos/file_00000000b7a4720ebb2130a6c2e43398.png"
    ]
  },
  {
    id: "d4",
    category: "Textiles",
    title: "Textil Decorativo",
    short: "Texturas suaves para ambientar.",
    description: "Piezas textiles para sumar confort y color al hogar.",
    images: [
      "productoDECO/imagenesDECO/IMG_20260224_163320990.jpg"
    ]
  }
];

const GALLERY = [
  {
    id: "g1",
    category: "Toldos",
    title: "Terraza moderna",
    image: "fotos de la galeria/images/556778647_17850647805559621_1622085003609558392_n.webp"
  },
  {
    id: "g2",
    category: "Cortinas",
    title: "Ambiente interior",
    image: "fotos de la galeria/images/569273167_17854370937559621_2187570846176103218_n.webp"
  },
  {
    id: "g3",
    category: "Decoración",
    title: "Detalle decorativo",
    image: "fotos de la galeria/images/IMG_20260109_174533.webp"
  }
];

const state = {
  productsFilter: "Todos",
  decoFilter: "Todos",
  modalItem: null,
  modalIndex: 0
};

const productGrid = document.querySelector("#products-grid");
const decoGrid = document.querySelector("#deco-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const modal = document.querySelector("#product-modal");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalImage = document.querySelector("#modal-image");
const modalPrev = document.querySelector("#modal-prev");
const modalNext = document.querySelector("#modal-next");

function createProductCard(item) {
  return `
    <article class="product-card">
      <button type="button" data-open-item="${item.id}">
        <img src="${item.images[0]}" alt="${item.title}" loading="lazy">
        <div class="product-meta">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.short}</p>
        </div>
      </button>
    </article>
  `;
}

function createGalleryCard(item) {
  return `
    <article class="gallery-card">
      <button type="button" data-open-gallery="${item.id}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-meta">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.title}</h3>
        </div>
      </button>
    </article>
  `;
}

function renderProducts() {
  const list = state.productsFilter === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === state.productsFilter);
  productGrid.innerHTML = list.map(createProductCard).join("");
}

function renderDeco() {
  const list = state.decoFilter === "Todos"
    ? DECO
    : DECO.filter((item) => item.category === state.decoFilter);
  decoGrid.innerHTML = list.map(createProductCard).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = GALLERY.map(createGalleryCard).join("");
}

function syncFilterButtons(group, activeFilter) {
  const buttons = document.querySelectorAll(`[data-filter-group="${group}"]`);
  buttons.forEach((btn) => {
    const isActive = btn.dataset.filter === activeFilter;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function openModal(item) {
  state.modalItem = item;
  state.modalIndex = 0;
  updateModalContent();
  modal.showModal();
}

function updateModalContent() {
  if (!state.modalItem) return;
  const { category, title, description, images } = state.modalItem;
  const currentImage = images[state.modalIndex] ?? images[0];
  modalTitle.textContent = title;
  modalCategory.textContent = category;
  modalDescription.textContent = description;
  modalImage.src = currentImage;
  modalImage.alt = `${title} - imagen ${state.modalIndex + 1}`;
  const disableNav = images.length < 2;
  modalPrev.disabled = disableNav;
  modalNext.disabled = disableNav;
}

function moveModal(step) {
  if (!state.modalItem) return;
  const total = state.modalItem.images.length;
  state.modalIndex = (state.modalIndex + step + total) % total;
  updateModalContent();
}

function closeModal() {
  if (modal.open) modal.close();
  state.modalItem = null;
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      const filter = button.dataset.filter;
      if (group === "products") {
        state.productsFilter = filter;
        syncFilterButtons(group, filter);
        renderProducts();
      } else {
        state.decoFilter = filter;
        syncFilterButtons(group, filter);
        renderDeco();
      }
    });
  });
}

function initModalEvents() {
  document.body.addEventListener("click", (event) => {
    const productButton = event.target.closest("[data-open-item]");
    if (productButton) {
      const id = productButton.dataset.openItem;
      const item = [...PRODUCTS, ...DECO].find((value) => value.id === id);
      if (item) openModal(item);
      return;
    }
    const galleryButton = event.target.closest("[data-open-gallery]");
    if (galleryButton) {
      const id = galleryButton.dataset.openGallery;
      const item = GALLERY.find((value) => value.id === id);
      if (item) {
        openModal({
          category: item.category,
          title: item.title,
          description: "Proyecto realizado por BLOP.",
          images: [item.image]
        });
      }
    }
  });

  document.querySelector("#modal-close").addEventListener("click", closeModal);
  modalPrev.addEventListener("click", () => moveModal(-1));
  modalNext.addEventListener("click", () => moveModal(1));
  modal.addEventListener("click", (event) => {
    const article = modal.querySelector("article");
    if (!article.contains(event.target)) closeModal();
  });
}

function initMenu() {
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu-movil");
  const menuLinks = menu.querySelectorAll("a");

  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setMenu(!expanded);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      feedback.textContent = "Completá los campos obligatorios.";
      return;
    }
    feedback.textContent = "¡Gracias! Recibimos tu consulta y te responderemos pronto.";
    form.reset();
  });
}

function initBaseUi() {
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

renderProducts();
renderDeco();
renderGallery();
initFilters();
initModalEvents();
initMenu();
initContactForm();
initBaseUi();
