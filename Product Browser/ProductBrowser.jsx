import React, { useState } from "react";

const ProductBrowser = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Headphones", category: "Electronics" },
    { id: 3, name: "T-Shirt", category: "Clothing" },
    { id: 4, name: "Jeans", category: "Clothing" },
    { id: 5, name: "Fiction Book", category: "Books" },
    { id: 6, name: "Notebook", category: "Books" },
  ];

  const categories = ["All", "Electronics", "Clothing", "Books"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div style={styles.container}>
      <h2>🛒 Product Browser</h2>

      {/* Category Navigation */}
      <div style={styles.nav}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.navBtn,
              backgroundColor:
                activeCategory === cat ? "#2196F3" : "#eee",
              color: activeCategory === cat ? "#fff" : "#000",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div style={styles.productGrid}>
        {filteredProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <h4>{product.name}</h4>
              <p>{product.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  navBtn: {
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default ProductBrowser;
