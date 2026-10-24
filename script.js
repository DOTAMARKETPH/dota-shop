
/* ========================================
   DOTA SHOP - COMPLETE UPDATED SCRIPT
   ======================================== */

// PRODUCT LISTINGS
const products = [{
  id: 32,
  name: "Wraith of the Red Sands",
  hero: "Phantom Lancer",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 16,
  originalPrice: 21,
  stock: 2,
  image: "./images/Wraith of the Red Sands.png",
  featured: 32
},
  {
  id: 31,
  name: "Thornwatch",
  hero: "Skywrath Mage",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 15,
  originalPrice: 20,
  stock: 1,
  image: "./images/Thornwatch.png",
  featured: 31
},
  {
  id: 30,
  name: "Surly Bogstomper",
  hero: "Bristleback",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 16,
  originalPrice: 20,
  stock: 1,
  image: "./images/Surly Bogstomper.png",
  featured: 30
},
  {
  id: 29,
  name: "Song of the Sea Lotus",
  hero: "Naga Siren",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 12,
  originalPrice: 15,
  stock: 1,
  image: "./images/Song of the Sea Lotus.png",
  featured: 29
},

  {
  id: 28,
  name: "Scorn of the Winged Sentinel",
  hero: "Luna",
  category: "mix/sets",
  rarity: "Mythical",
  condition: "Bundled",
  price: 232,
  originalPrice: 290,
  stock: 1,
  image: "./images/Scorn of the Winged Sentinel.png",
  featured: 28
},
  {
  id: 27,
  name: "Plague Baron",
  hero: "Necrophose",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 28,
  originalPrice: 35,
  stock: 1,
  image: "./images/Plague Baron.png",
  featured: 27
},
  {
  id: 26,
  name: "Patterns of the Pristine",
  hero: "Enigma",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 24,
  originalPrice: 30,
  stock: 4,
  image: "./images/Patterns of the Pristine.png",
  featured: 21
},
  {
  id: 25,
  name: "Night Terrors",
  hero: "Bat Rider",
  category: "mix/sets",
  rarity: "Mythical",
  condition: "Bundled",
  price: 100,
  originalPrice: 133,
  stock: 2,
  image: "./images/Night Terrors.png",
  featured: 25
},
  {
  id: 24,
  name: "Hunger of the Howling Wilds",
  hero: "Riki",
  category: "mix/sets",
  rarity: "Mythical",
  condition: "Bundled",
  price: 230,
  originalPrice: 305,
  stock: 1,
  image: "./images/Hunger of the Howling Wilds.png",
  featured: 24
},
  {
  id: 23,
  name: "Feast of the Unwilling",
  hero: "Bloodseeker",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 20,
  originalPrice: 26,
  stock: 1,
  image: "./images/Feast of the Unwilling.png",
  featured: 23
},
  {
  id: 22,
  name: "Eye of the Fateweaver",
  hero: "Oracle",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 20,
  originalPrice: 25,
  stock: 2,
  image: "./images/Eye of the Fateweaver.png",
  featured: 22
},
   {
  id: 21,
  name: "Edge of Extinction"  ,
  hero: "Beastmaster",
  category: "mix/sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 20,
  originalPrice: 25,
  stock: 5,
  image: "./images/Edge of Extinction.png",
  featured: 21
},
   {
  id: 20,
  name: "Dark Realm Oracles",
  hero: "Death Prophet",
  category: "mix/sets",
  rarity: "rare",
  condition: "Bundled",
  price: 15,
  originalPrice: 20,
  stock: 1,
  image: "./images/Dark Realm Oracles.png",
  featured: 20
},
   {
  id: 19,
  name: "Cunning cultivation",
  hero: "Witch Doctor",
  category: "mix/sets",
  rarity: "rare",
  condition: "Bundled",
  price: 30,
  originalPrice: 40,
  stock: 1,
  image: "./images/Cunning Cultivations.png",
  featured: 19
},
  {
  id: 1,
  name: "Feast of Abscession lvl 1",
  hero: "Pudge",
  category: "Arcana",
  rarity: "ARCANA",
  price: 1200,
  originalPrice: 1492,
  stock: 1,
  image: "./images/Pudge-arc.png",
  featured: 1
},
  {
    id: 2,
    name: "Atomic Ray Thrusters",
    hero: "Gyrocopter",
    category: "Immortal",
    rarity: "Immortal",
    price: 95,
    originalPrice: 119,
    stock: 1,
    image: "./images/Atomic Ray Thrusters.png",
    featured: 2
  },
  {
    id: 3,
    name: "Genuine Hell's Usher",
    hero: "Phantom Assassin",
    category: "Immortal",
    rarity: "immortal",
    price: 110,
    originalPrice: 146,
    stock: 1,
    image: "./images/Genuine Hell's Usher.png",
    featured: 3
  },
  { 
    id: 4,
    name: "Golden Scavenging Guttleslug",
    hero: "Pudge",
    category: "Immortal",
    rarity: "Immortal",
    price: 640,
    originalPrice: 754,
    stock: 1,
    image: "./images/Golden Scavenging Guttleslug.png",
    featured: 4
  },
  {
    id: 5,
    name: "Phantom Concord",
    hero: "Phantom Lancer",
    category: "Immortal",
    rarity: "Immortal",
    price: 70,
    originalPrice: 87,
    stock: 1,
    image: "./images/Phantom Concord.png",
    featured: 5
  },
  {
    id: 6,
    name: "The Abscesserator",
    hero: "Pudge",
    category: "Immortal",
    rarity: "Immortal",
    price: 280,
    originalPrice: 348,
    stock: 1,
    image: "./images/The Abscesserator.png",
    featured: 6
  },
  {
    id: 7,
    name: "Limbs of Lycosidae",
    hero: "Broodmother",
    category: "Immortal",
    rarity: "Immortal",
    price: 2,
    stock: 3,
    image: "./images/brood.png",
    featured: 7
  },
  {
    id: 8,
    name: "Infernal Cavalcade",
    hero: "Centaur Warrunner",
    category: "Immortal",
    rarity: "Immortal",
    price: 2,
    stock: 4,
    image: "./images/cent.png",
    featured: 8
  },
  {
    id: 9,
    name: "Claws of Nuranu",
    hero: "Lone Druid",
    category: "Immortal",
    rarity: "Immortal",
    price: 5,
    stock: 2,
    image: "./images/druid.png",
    featured: 9
  },
  {
  id: 10,
    name: "Arcanic Resonance Beam",
    hero: "Tinker",
    category: "Immortal",
    rarity: "Immortal",
    price: 5,
    stock: 0,
    image: "./images/tinker.png",
    featured: 10
  },
  {
    id: 11,
    name: "Arcane Infestation",
    hero: "Broodmother",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 1,
    image: "./images/Arcane Infestation.png",
    featured: 11    
  },
  {
    id: 12,
    name: "Arena Champion",
    hero: "Mars",
    category: "mix/sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 120,
    originalPrice: 150,
    stock: 1,
    image: "./images/Arena Champion.png",
    featured: 12
  },
  {
    id: 13,
    name: "Blackshield Protodrone",
    hero: "Tinker",
    category: "Mix/Sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 120,
    originalPrice: 150,
    stock: 1,
    image: "./images/Blackshield Protodrone.png",
    featured: 13
  },

  {
  id: 14,
  name: "Bottomfeeder",
  hero: "Nyx Assassin",
  category: "Mix/Sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 15,
originalPrice: 20,
  stock: 3,
  image: "./images/Bottomfeeder.png",
  featured: 14
},

 {
  id: 16,
  name: "Candy Cat",
  hero: "Pudge",
  category: "Mix/Sets",
  rarity: "Rare",
  condition: "Bundled",
  price: 40,
originalPrice: 53,
  stock: 1,
  image: "./images/Candy Cat.png",
  featured: 16
},
{
  id: 17,
  name: "Chasm Of The Broken Code",
  hero: "Terrorblade",
  category: "Mix/Sets",
  rarity: "Mythical",
  condition: "Bundled",
  price: 150,
  originalPrice: 188,
  stock: 1,
  image: "./images/Chasm of the Broken Code.png",
  featured: 17
},
{
  id: 18,
  name: "Crimsonwing Slayer",
  hero: "Legion Commander",
  category: "Mix/Sets",
  rarity: "Mythical",
  condition: "Bundled",
  price: 15,
  originalPrice: 20,
  stock: 1,
  image: "./images/Crimsonwing Slayer.png",
  featured: 18
},
{
  id: 15,
  name: "Weather Snow",
  category: "Weather",
  rarity: "Genuine",
  price: 200,
  stock: 1,
  image: "./images/Snow.png",
  featured: 15
},

];

// GENERAL SETTINGS

const rarityPriority = {
  "arcana": 1,
  "immortal": 2,
  "legendary": 3,
  "mythical": 4,
  "rare": 5,
  "uncommon": 6,
  "common": 7
};

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
  const searchTerm = searchInput.value.trim().toLowerCase();

  let list = products.filter((product) => {
    if (product.stock <= 0) return false;

    const category = product.category.toLowerCase();
    const selected = activeCategory.toLowerCase();

    const matchesCategory =
      selected === "all" || category === selected;

    const searchableText = [
      product.name,
      product.hero,
      product.category,
      product.rarity,
      product.condition,
      product.symbol
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      searchableText.includes(searchTerm);

    return (searchTerm ? true : matchesCategory) && matchesSearch;
  });

  if (sortSelect.value === "low") {
  list.sort((a, b) => a.price - b.price);
} else if (sortSelect.value === "high") {
  list.sort((a, b) => b.price - a.price);
} else if (sortSelect.value === "name") {
  list.sort((a, b) => a.name.localeCompare(b.name));
} else {
  list.sort((a, b) => {
    const rarityA =
      rarityPriority[(a.rarity || "").toLowerCase()] ?? 99;

    const rarityB =
      rarityPriority[(b.rarity || "").toLowerCase()] ?? 99;

    // Higher featured number = more recently listed.
    return rarityA - rarityB || b.featured - a.featured;
  });
}

  return list;
}


// ========================================
// DISPLAY MARKET PRODUCTS
// ========================================
// ========================================
// CATEGORY STOCK TOTALS
// ========================================


function updateCategoryCounts() {
  // Count available product listings in each category.
  const countCategory = (categoryName) => {
    return products.filter(
      (product) =>
        product.category.toLowerCase() === categoryName.toLowerCase() &&
        product.stock > 0
    ).length;
  };

  // Count all available product listings.
  const allCount = products.filter(
    (product) => product.stock > 0
  ).length;

  const counts = {
    countAll: allCount,
    countArcana: countCategory("Arcana"),
    countImmortals:
      countCategory("Immortal") + countCategory("Immortals"),
    countMixSets: countCategory("Mix/Sets"),
    countCacheSets: countCategory("Cache Sets"),
    countWeather: countCategory("Weather")
  };

  Object.entries(counts).forEach(([id, count]) => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = count;
    }
  });
}

function renderProducts() {
  const list = visibleProducts();

  document.getElementById("resultsText").textContent =
    `Showing ${list.length} item${list.length === 1 ? "" : "s"}`;


  grid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--glow:${product.glow || "#8751c4"}">
        <span class="rarity">${product.rarity}</span>

${
  product.originalPrice && product.originalPrice > product.price
    ? `<span class="discount-badge">
        🔥 ${Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )}% OFF
      </span>`
    : ""
}
        ${
          product.image
            ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
            : `<span class="item-symbol" aria-hidden="true">${product.symbol || "✦"}</span>`
        }
      </div>

      
<div class="card-body">
  <span class="item-category">${product.category}</span>
  <h3>${product.name}</h3>

  ${product.hero ? `
  <p class="product-hero">${product.hero}</p>
` : ""}

  ${product.condition ? `
    <span class="item-condition ${product.condition === "Bundled" ? "bundled" : "unbundled"}">
      ${product.condition}
    </span>
  ` : ""}


        <p class="stock-label ${product.stock <= 0 ? "sold-out" : ""}">
          ${product.stock <= 0 ? "SOLD OUT" : `${product.stock} piece${product.stock === 1 ? "" : "s"} available`}
        </p>

        <div class="card-bottom">
          <div class="price-stack">
  ${
    product.originalPrice && product.originalPrice > product.price
      ? `<span class="original-price">${money(product.originalPrice)}</span>`
      : ""
  }
  <span class="price">${money(product.price)}</span>
</div>
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
  const searchTerm = searchInput.value.trim().toLowerCase();

  const list = products.filter((product) => {
    if (product.category.toLowerCase() !== "cache sets") return false;
    if (product.stock <= 0) return false;

    const searchableText = [
      product.name,
      product.hero,
      product.category,
      product.rarity,
      product.condition
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });

  // Newest listings first (higher featured number = newer listing)
  list.sort((a, b) => b.featured - a.featured);

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

        ${product.hero ? `
          <p class="product-hero">${product.hero}</p>
        ` : ""}

        ${product.condition ? `
          <span class="item-condition ${
            product.condition === "Bundled" ? "bundled" : "unbundled"
          }">${product.condition}</span>
        ` : ""}

        <p class="stock-label">
          ${product.stock} piece${product.stock === 1 ? "" : "s"} available
        </p>

        <div class="card-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}"
            aria-label="Add ${product.name} to cart">+</button>
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

searchInput.addEventListener("input", () => {
  renderProducts();
  renderCacheSets();
});
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

  // Pass a safe snapshot of the purchased items to the payment page.
  // Include only the fields needed for the order summary.
  const orderItems = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return {
      name: product.name,
      price: product.price,
      qty: item.qty,
      subtotal: product.price * item.qty
    };
  });
  paymentUrl.searchParams.set("items", JSON.stringify(orderItems));

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

updateCategoryCounts();
renderProducts();
renderCacheSets();
renderCart();