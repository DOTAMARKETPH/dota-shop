
/* ========================================
   DOTA SHOP - COMPLETE UPDATED SCRIPT
   ======================================== */

// PRODUCT LISTINGS
const products = [
  {
    id: 1,
    name: "Feast of Abscession",
    category: "Arcana",
    rarity: "ARCANA",
    price: 1200,
    stock: 1,
    image: "./images/Pudge-arc.png",
    featured: 1
  },
  {
    id: 2,
    name: "Helm of the Immortal",
    category: "Armor",
    rarity: "MYTHICAL",
    price: 890,
    stock: 1,
    image: "./images/Immortal-armor.png",
    featured: 2
  },
  {
    id: 3,
    name: "Frostbound Scepter",
    category: "Weapons",
    rarity: "RARE",
    price: 560,
    stock: 1,
    image: "./images/rare-weapon.png",
    featured: 3
  },
  {
    id: 4,
    name: "Spectral Pauldrons",
    category: "Armor",
    rarity: "IMMORTAL",
    price: 740,
    stock: 1,
    image: "./images/immortal-armor.png",
    featured: 4
  },
  {
    id: 5,
    name: "Celestial Edge",
    category: "Weapons",
    rarity: "LEGENDARY",
    price: 1580,
    stock: 1,
    image: "./images/legendary-weapon.png",
    featured: 5
  },
  {
    id: 6,
    name: "Phantom's Regalia",
    category: "Cache sets",
    rarity: "MYTHICAL",
    price: 990,
    stock: 1,
    image: "./images/phantom-regalia.png",
    featured: 6
  },
  {
    id: 7,
    name: "Jade Guardian",
    category: "Immortal",
    rarity: "IMMORTAL",
    price: 1850,
    stock: 1,
    image: "./images/jade-guardian.png",
    featured: 7
  },
  {
    id: 8,
    name: "Ashen Crown",
    category: "Cache sets",
    rarity: "RARE",
    price: 420,
    stock: 1,
    image: "./images/ashen-crown.png",
    featured: 8
  },
  {
    id: 9,
    name: "Phantom Assassin Cache Set",
    category: "Cache sets",
    rarity: "MYTHICAL",
    price: 750,
    stock: 1,
    image: "./images/phantom-assassin.png",
    featured: 9
  }
];

// GENERAL SETTINGS
const money = (amount) =>
  "₱" + amount.toLocaleString("en-PH");

let activeCategory = "All";
let cart = [];
let toastTimer;

const grid = document.getElementById("productGrid");
const cacheSetGrid = document.getElementById("cacheSetGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toast = document.getElementById("toast");

// ========================================
// PRODUCT FILTERING, SEARCH AND SORTING
// ========================================

function visibleProducts() {
  let list = products.filter((product) => {
    const category = product.category.toLowerCase();
    const selected = activeCategory.toLowerCase();

    const matchesCategory =
      selected === "all" ||
      (selected === "cache sets" && category === "cache sets") ||
      (selected === "immortals" &&
        (category === "immortal" || category === "immortals")) ||
      category === selected;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchInput.value.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    list.sort((a, b) => a.featured - b.featured);
  }

  return list;
}

// ========================================
// DISPLAY MARKET PRODUCTS
// ========================================

function renderProducts() {
  const list = visibleProducts();

  document.getElementById("resultsText").textContent =
    `Showing ${list.length} item${list.length === 1 ? "" : "s"}`;

  
const countAll = document.getElementById("countAll");
if (countAll) {
  countAll.textContent = products.length;
}


  grid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--glow:${product.glow || "#8751c4"}">
        <span class="rarity">${product.rarity}</span>
        ${
          product.image
            ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
            : `<span class="item-symbol" aria-hidden="true">${product.symbol || "✦"}</span>`
        }
      </div>

      <div class="card-body">
        <span class="item-category">${product.category}</span>
        <h3>${product.name}</h3>

        <p class="stock-label ${product.stock <= 0 ? "sold-out" : ""}">
          ${product.stock <= 0 ? "SOLD OUT" : `${product.stock} piece${product.stock === 1 ? "" : "s"} available`}
        </p>

        <div class="card-bottom">
          <span class="price">${money(product.price)}</span>
          ${
            product.stock <= 0
              ? '<span class="sold-out-text">Sold Out</span>'
              : `<button class="add-button" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>`
          }
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("emptyState").hidden = list.length !== 0;
}

// ========================================
// DISPLAY CACHE SETS
// ========================================

function renderCacheSets() {
  const list = products.filter(
    (product) => product.category.toLowerCase() === "cache sets"
  );

  cacheSetGrid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--glow:${product.glow || "#8751c4"}">
        <span class="rarity">${product.rarity || "CACHE SET"}</span>
        ${
          product.image
            ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
            : `<span class="item-symbol" aria-hidden="true">${product.symbol || "✦"}</span>`
        }
      </div>

      <div class="card-body">
        <span class="item-category">CACHE SET</span>
        <h3>${product.name}</h3>

        <p class="stock-label ${product.stock <= 0 ? "sold-out" : ""}">
          ${product.stock <= 0 ? "SOLD OUT" : `${product.stock} piece${product.stock === 1 ? "" : "s"} available`}
        </p>

        <div class="card-bottom">
          <span class="price">${money(product.price)}</span>
          ${
            product.stock <= 0
              ? '<span class="sold-out-text">Sold Out</span>'
              : `<button class="add-button" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>`
          }
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("cacheEmptyState").hidden = list.length !== 0;
}

// ========================================
// NOTIFICATION MESSAGE
// ========================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ========================================
// ADD PRODUCTS TO CART
// ========================================

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  if (!product) return;

  if (product.stock <= 0) {
    showToast("Sorry, this item is sold out!");
    return;
  }

  const existing = cart.find((item) => item.id === id);
  const quantityInCart = existing ? existing.qty : 0;

  if (quantityInCart >= product.stock) {
    showToast("You have reached the available stock!");
    return;
  }

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  renderCart();
  showToast(`${product.name} added to cart`);
}

// ========================================
// DISPLAY SHOPPING CART
// ========================================

function renderCart() {
  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  document.getElementById("cartCount").textContent = count;

  const cartItems = document.getElementById("cartItems");

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        Your cart is empty.<br>
        Explore the market and add an item.
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map((item) => {
      const product = products.find(
        (entry) => entry.id === item.id
      );

      return `
        <div class="cart-row">
          <div class="cart-thumb" style="color:${product.glow || "#8751c4"}">
            ${product.symbol || "✦"}
          </div>

          <div>
            <strong>${product.name}</strong>
            <small>${money(product.price)} × ${item.qty}</small>
            <button class="remove-button" data-remove="${product.id}">
              Remove
            </button>
          </div>

          <strong>${money(product.price * item.qty)}</strong>
        </div>
      `;
    }).join("");
  }

  const total = cart.reduce((sum, item) => {
    const product = products.find(
      (entry) => entry.id === item.id
    );

    return sum + product.price * item.qty;
  }, 0);

  document.getElementById("cartTotal").textContent = money(total);
}

// ========================================
// OPEN AND CLOSE SHOPPING CART
// ========================================

function openCart() {
  document.getElementById("cartOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay").hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("closeCartBackdrop").addEventListener("click", closeCart);

// ========================================
// CATEGORY BUTTONS
// ========================================

document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach((categoryButton) => {
      categoryButton.classList.toggle(
        "active",
        categoryButton === button
      );
    });

    renderProducts();
  });
});

// ========================================
// SEARCH AND SORTING
// ========================================

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

// ========================================
// ADD-TO-CART BUTTONS
// ========================================

function handleAddClick(event) {
  const button = event.target.closest("[data-add]");

  if (button) {
    addToCart(Number(button.dataset.add));
  }
}

grid.addEventListener("click", handleAddClick);
cacheSetGrid.addEventListener("click", handleAddClick);

// ========================================
// HEADER NAVIGATION
// ========================================

document.querySelectorAll(".nav-links a[data-nav]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a[data-nav]").forEach((navLink) => {
      navLink.classList.toggle("active", navLink === link);
    });
  });
});

// ========================================
// REMOVE ITEMS FROM CART
// ========================================

document.getElementById("cartItems").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");

  if (button) {
    cart = cart.filter(
      (item) => item.id !== Number(button.dataset.remove)
    );

    renderCart();
  }
});

// ========================================
// GCASH AND MARIBANK PAYMENT POPUP
// ========================================

const paymentOverlay = document.getElementById("paymentOverlay");
const paymentDetails = document.getElementById("paymentDetails");

// Open the payment popup from checkout


document.getElementById("checkoutButton").addEventListener("click", () => {
  // Make sure the cart contains items.
  if (!cart.length) {
    showToast("Your cart is empty!");
    return;
  }

  // Calculate the exact total using the cart items.
  const total = cart.reduce((sum, item) => {
    const product = products.find(
      (entry) => entry.id === item.id
    );

    return sum + product.price * item.qty;
  }, 0);

  // Open the payment page and pass the total.
  const paymentUrl = new URL(
    "./payment.html/payment.html",
    window.location.href
  );

  paymentUrl.searchParams.set("total", String(total));

  const paymentTab = window.open(paymentUrl.href, "_blank");

  // Notify the customer if the browser blocks the new tab.
  if (!paymentTab) {
    showToast("Please allow pop-ups for this website.");
  }
});



// ========================================
// ESCAPE KEY SUPPORT
// ========================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    paymentOverlay.hidden = true;
  }
});

// ========================================
// INITIALIZE WEBSITE
// ========================================

renderProducts();
renderCacheSets();
renderCart();
