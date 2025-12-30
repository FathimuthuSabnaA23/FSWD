import React, { useState } from "react";

const EcommerceDemo = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
    { id: 4, name: "Laptop Backpack", price: 999 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛍 Simple E-Commerce Store</h1>

      <div style={styles.cartInfo}>
        🛒 Items in Cart: {cart.length} | Total: ₹{totalAmount}
      </div>

      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={styles.cartBox}>
          <h2>Cart Summary</h2>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
  },
  cartInfo: {
    textAlign: "center",
    marginBottom: "20px",
    backgroundColor: "#020617",
    padding: "10px",
    borderRadius: "8px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    backgroundColor: "#020617",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.6)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#22c55e",
    fontWeight: "bold",
    cursor: "pointer",
  },
  cartBox: {
    marginTop: "25px",
    backgroundColor: "#020617",
    padding: "15px",
    borderRadius: "10px",
  },
};

export default EcommerceDemo;
