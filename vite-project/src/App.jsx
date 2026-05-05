import { useState, useEffect } from "react";
import Header from "./Components/header";
import Hero from "./Components/hero";
import ProductCard from "./Components/productCard";
import CartDrawer from "./Components/cartDrawer";
import Toast from "./Components/toast";
import Sidebar from "./Components/sidebar";
import Pagination from "./Components/pagination";
import { PRODUCTS, PAGE_SIZE } from "./data/product.js";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [gender, setGender] = useState("All");
  const [price, setPrice] = useState(15000);
  const [currentPage, setCurrentPage] = useState(1);

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToast(`${product.name} added to cart! 🛍️`);
    setCartOpen(true);
  };

  const filtered = PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesGender = gender === "All" || p.gender === gender;
    const matchesPrice = p.price <= price;
    return matchesSearch && matchesCategory && matchesGender && matchesPrice;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const displayed = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, gender, price]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Toast message={toast} />
      <Header
        dark={dark}
        setDark={setDark}
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
        onCartOpen={() => setCartOpen(true)}
      />
      <Hero />

      <div className="layout">
        <Sidebar
          category={category}
          setCategory={setCategory}
          gender={gender}
          setGender={setGender}
          minPrice={0}
          setMinPrice={() => {}}
          maxPrice={price}
          setMaxPrice={setPrice}
          onReset={() => {
            setCategory("All");
            setGender("All");
            setPrice(15000);
            setSearch("");
          }}
        />

        <main style={{ flex: 1 }}>
          <div className="toolbar">
            <span style={{ fontSize: 14, color: "var(--muted)" }}>
              Showing {displayed.length} of {filtered.length} products
            </span>
          </div>

          {displayed.length === 0 ? (
            <div className="no-results">
              <p>😕 No products found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid">
              {displayed.map((p) => (
                <ProductCard
                  key={p.id}
                  p={p}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </main>
      </div>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          setCart={setCart}
          onClose={() => setCartOpen(false)}
          onCheckout={() => showToast("Checkout coming soon! 🚀")}
        />
      )}
    </>
  );
}
