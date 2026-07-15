// Base de datos local de Angelus Jabones Artesanales adaptada a Pesos Colombianos (COP)
const productosJabones = [
  {
    id: 1,
    title: "Racimo de Uvas",
    price: 25000,
    category: "Chocolate",
    image: "img/racimo de uvas (chocolate) (2).jpeg"
  },
  {
    id: 2,
    title: "Racimo de Uvas",
    price: 25000,
    category: "citrico",
    image: "img/racimo de uvas (citrico).jpeg"
  },
  {
    id: 3,
    title: "Jabón (Flor Margarita)",
    price: 12000,
    category: "Calendula",
    image: "img/Jabon de calendula(flor margarita).jpeg"
  },
  {
    id: 4,
    title: "Jabón (Mariposa)",
    price: 8000,
    category: "Calendula",
    image: "img/Jabon de calendula (Mariposa).jpeg"
  },
  {
    id: 5,
    title: "Jabón (Rosa)",
    price: 9000,
    category: "Calendula",
    image: "img/Jabon de calendula(flor).jpeg"
  },
  {
    id: 6,
    title: "Jabon (Hawayana)",
    price: 9000,
    category: "Arroz",
    image: "img/Jabon de arroz (hawayana).jpeg"
  },
  {
    id: 7,
    title: "Jabón (Flor Elice)",
    price: 12000,
    category: "Arroz",
    image: "img/jabon de arroz (Flor Elice).jpeg"
  },
  {
    id: 8,
    title: "Jabón (Flor Margarita)",
    price: 12000,
    category: "Arroz",
    image: "img/Jabon de arroz (flor magarita).jpeg"
  },
  {
    id: 9,
    title: "Jabón (Gelatina Estrella)",
    price: 12000,
    category: "Arroz",
    image: "img/jabon de arroz (Gelatina Estrella).jpeg"
  },
  {
    id: 10,
    title: "Jabón (Mariposa)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz (Mariposa).jpeg"
  },
  {
    id: 11,
    title: "Jabón (Mico)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz (Mico).jpeg"
  },
  {
    id: 12,
    title: "Jabón (Pato)",
    price: 6000,
    category: "Arroz",
    image: "img/jabon de arroz (Pato).jpeg"
  },
  {
    id: 13,
    title: "Jabón (Rosa)",
    price: 9000,
    category: "Arroz",
    image: "img/jabon de arroz (Rosa).jpeg"
  },
  {
    id: 14,
    title: "Jabón (Tortuga)",
    price: 6000,
    category: "Arroz",
    image: "img/jabon de arroz (Tortuga).jpeg"
  },
  {
    id: 15,
    title: "Jabón (Dona Doble Flor)",
    price: 12000,
    category: "leche",
    image: "img/Jabon de leche (dona).jpeg"
  },
  {
    id: 16,
    title: "Jabón (Flor Margarita)",
    price: 12000,
    category: "Curcuma",
    image: "img/Jabon de curcuma(flor margarita).jpeg"
  },
  {
    id: 17,
    title: "Jabón (Gelatina Estrella)",
    price: 12000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Gelatina Estrella).jpeg"
  },
  {
    id: 18,
    title: "Jabón (Pudin)",
    price: 12000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Gelatina).jpeg"
  },
  {
    id: 19,
    title: "Jabón (Hawayana)",
    price: 9000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Hawayana).jpeg"
  },
  {
    id: 20,
    title: "Jabón (Rosa)",
    price: 9000,
    category: "Curcuma",
    image: "img/Jabon de curcuma (rosa).jpeg"
  },
  {
    id: 21,
    title: "Jabón (Racimo de Uvas)",
    price: 25000,
    category: "Racimo de Uvas",
    image: "img/racimo de uvas (frutos rojos).jpeg"
  },
  {
    id: 22,
    title: "Jabón (Dinosaurio)",
    price: 12000,
    category: "Dinosaurios",
    image: "img/Jabon (Dinosaurio).jpeg"
  },
  {
    id: 23,
    title: "Jabon de savila (Masajeador)",
    price: 13000,
    category: "Citricos",
    image: "img/Jabon (Masajeador).jpeg"
  },
  {
    id: 24,
    title: "Jabón (Bebe)",
    price: 12000,
    category: "Talco de Bebe",
    image: "img/Jabon (Bebe).jpeg"
  },
  {
    id: 25,
    title: "Jabón (Colmena) ",
    price: 10000,
    category: "Línea Premium",
    image: ""
  },
  {
    id: 26,
    title: "Jabón (Corazon)",
    price: 5000,
    category: "Calendula",
    image: "img/corazon.jpeg"
  },
  {
    id: 27,
    title: "Jabón de Chocolate (Circular)",
    price: 12000,
    category: "Chocolate",
    image: "img/Jabon de Chocolate (Circular).jpeg"
  },
  {
    id: 28,
    title: "Jabón de Miel (Colmena)",
    price: 12000,
    category: "Miel",
    image: "img/Jabon de Miel (Colmena).jpeg"
  },
  {
    id: 29,
    title: "Jabón de Miel y Avena (Colmena)",
    price: 12000,
    category: "Miel y Avena",
    image: "img/Jabon de Miel y Avena (Colmena).jpeg"
  }
];

let products = [...productosJabones];
let cart = {};
let comprasHistorial = [];

const $ = id => document.getElementById(id);

// Función auxiliar para dar formato de moneda COP
function formatCOP(value) {
  return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
}

// Guardar y cargar Carrito
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function loadCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || {};
  updateCartUI();
}

// Guardar y cargar Historial de Ventas
function saveHistorial() { localStorage.setItem('historial_compras', JSON.stringify(comprasHistorial)); }
function loadHistorial() {
  comprasHistorial = JSON.parse(localStorage.getItem('historial_compras')) || [];
  renderHistorialUI();
}

function updateCartUI() {
  const itemsContainer = $('cart-items');
  itemsContainer.innerHTML = '';
  let total = 0, count = 0;

  for (let id in cart) {
    const p = cart[id];
    total += p.price * p.qty;
    count += p.qty;

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${p.title}</strong><br>
      ${formatCOP(p.price)} x ${p.qty} = ${formatCOP(p.price * p.qty)}
      <div style="margin-top: 8px;">
        <button onclick="changeQty(${id}, -1)">➖</button>
        <span style="margin: 0 8px; font-weight:bold;"> ${p.qty} </span>
        <button onclick="changeQty(${id}, 1)">➕</button>
        <button onclick="removeFromCart(${id})" style="background:#ff4d4d; margin-left:10px;">🗑️</button>
      </div>
    `;
    itemsContainer.appendChild(li);
  }

  $('cart-total').textContent = total.toLocaleString('es-CO', { minimumFractionDigits: 0 });
  $('cart-count').textContent = count;
}

function setupHistorialToggle() {
  $('historial').addEventListener('click', () => {
    $('historial-container').classList.toggle('hidden');
  });
}

function renderHistorialUI() {
  const lista = $('historial-lista');
  if (comprasHistorial.length === 0) {
    lista.innerHTML = "No has realizado ninguna compra todavía.";
    return;
  }

  lista.innerHTML = comprasHistorial.map((compra, index) => `
    <div class="ticket-compra">
      <strong>ID Compra: #00${index + 1}</strong> — 📅 ${compra.fecha}<br>
      <ul style="margin: 5px 0; padding-left: 20px;">
        ${compra.items.map(i => `<li>${i.title} (x${i.qty}) - ${formatCOP(i.price * i.qty)}</li>`).join('')}
      </ul>
      <strong>Total Abonado: ${compra.totalFormatted}</strong>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateCartUI();
}

function addToCart(id) {
  const p = products.find(p => p.id === id);
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...p, qty: 1 };
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  updateCartUI();
}

// Función para renderizar los productos en la cuadrícula
function renderProducts(list) {
  const container = $('product-list');
  container.innerHTML = '';
  
  if(list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; font-size:1.2rem;">No se encontraron jabones con esos criterios.</p>`;
    return;
  }

  list.forEach(p => {
    // Si el producto no tiene descripción definida en el objeto, usamos un texto por defecto
    const desc = p.description || "Jabón artesanal elaborado con ingredientes 100% naturales para el cuidado de tu piel.";
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" style="cursor: zoom-in;" onclick="openImageModal('${p.image}', '${p.title}')" />
      <h3>${p.title}</h3>
      <p>${desc}</p>
      <p><small style="background:#eedeb0; padding:4px 10px; border-radius:10px; color:#554315; font-weight:600;">${p.category}</small></p>
      <div class="price">${formatCOP(p.price)}</div>
      <button onclick="addToCart(${p.id})">🛒 Agregar al Carrito</button>
    `;
    container.appendChild(div);
  });
}

function setupFilters() {
  // Limpiar antes de rellenar las categorías para evitar duplicaciones
  $('filter-category').innerHTML = '<option value="">Todas las variedades</option>';
  const categories = [...new Set(productosJabones.map(p => p.category))];
  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    $('filter-category').appendChild(opt);
  });

  $('search').addEventListener('input', applyFilters);
  $('filter-category').addEventListener('change', applyFilters);
  $('sort').addEventListener('change', applyFilters);
}

function applyFilters() {
  let list = [...productosJabones];
  const search = $('search').value.toLowerCase();
  const cat = $('filter-category').value;
  const sort = $('sort').value;

  if (search) {
    list = list.filter(p => {
      const desc = p.description || "Jabón artesanal elaborado con ingredientes 100% naturales para el cuidado de tu piel.";
      return p.title.toLowerCase().includes(search) || desc.toLowerCase().includes(search);
    });
  }

  if (cat) {
    list = list.filter(p => p.category === cat);
  }

  if (sort) {
    const [field, dir] = sort.split('-');
    list.sort((a, b) => dir === 'asc' ? a[field] - b[field] : b[field] - a[field]);
  }

  products = list;
  renderProducts(list);
}

function setupCartToggle() {
  $('cart-btn').addEventListener('click', () => {
    $('cart').classList.toggle('hidden');
  });

  $('close-cart').addEventListener('click', () => {
    $('cart').classList.add('hidden');
  });
}

function setupBuyNow() {
  $('buy-now-cart').addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    let total = 0;
    let itemsComprados = [];

    for (let id in cart) {
      const p = cart[id];
      total += p.price * p.qty;
      itemsComprados.push({ title: p.title, qty: p.qty, price: p.price });
    }

    const totalFormatted = formatCOP(total);

    // Registrar en el historial local
    const nuevaCompra = {
      fecha: new Date().toLocaleString(),
      items: itemsComprados,
      total: total,
      totalFormatted: totalFormatted
    };

    comprasHistorial.unshift(nuevaCompra); // Añadir al inicio del historial
    saveHistorial();
    renderHistorialUI();

    alert(`¡Gracias por tu compra en Angelus!\nTotal: ${totalFormatted}\nTu pedido ha sido registrado con éxito.`);

    // Limpiar carrito
    cart = {};
    saveCart();
    updateCartUI();
    $('cart').classList.add('hidden');
  });
}

// Función para abrir la imagen ampliada en el Modal
function openImageModal(imgSrc, title) {
  const modal = $('image-modal');
  const modalImg = $('modal-img');
  const captionText = $('modal-caption');

  modal.classList.remove('hidden');
  modalImg.src = imgSrc;
  captionText.innerHTML = title;
}

// Configurar los cierres del Modal
function setupModalEvents() {
  const modal = $('image-modal');
  const closeBtn = $('close-modal');

  // Cerrar al hacer clic en el botón (X)
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Cerrar al hacer clic en cualquier parte oscura del fondo (fuera de la imagen)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Cerrar presionando la tecla Escape (ESC) para mayor usabilidad
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
}

function init() {
  setupCartToggle();
  setupHistorialToggle();
  loadCart();
  loadHistorial();
  renderProducts(products);
  setupFilters();
  setupBuyNow();
  setupModalEvents(); // Inicializa los controladores del lightbox
}

// Vinculación global para los onclick inline del HTML dinámico
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
window.openImageModal = openImageModal; // Vinculación para abrir el modal

init();
