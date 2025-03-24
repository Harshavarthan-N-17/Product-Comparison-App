import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductComparison from "./components/ProductComparison";
import ProductSearch from "./components/ProductSearch";
import Login from "./Login";
import SignUp from "./components/SignUp"; // Import SignUp page
import "./App.css";
import "./components/NavBar.css";

const App = () => {
  const navigate = useNavigate(); // For navigation after login

  // ✅ Re-add the allProducts array here
  const allProducts = [
    { name: "iPhone 15", category: "Smartphone", price: "79,999", rating: 4.7, features: ["6.1-inch Display", "A16 Bionic", "Dual Camera"] },
    { name: "Samsung S23", category: "Smartphone", price: "74,999", rating: 4.6, features: ["6.2-inch AMOLED", "Snapdragon 8 Gen 2", "Triple Camera"] },
    { name: "OnePlus 11", category: "Smartphone", price: "56,999", rating: 4.5, features: ["6.7-inch AMOLED", "Snapdragon 8 Gen 2", "Hasselblad Camera"] },
    { name: "Google Pixel 7", category: "Smartphone", price: "59,999", rating: 4.6, features: ["6.3-inch OLED", "Tensor G2", "Best Camera"] },
    { name: "Xiaomi 13 Pro", category: "Smartphone", price: "66,999", rating: 4.4, features: ["6.73-inch AMOLED", "Snapdragon 8 Gen 2", "Leica Camera"] },
    { name: "Realme GT 3", category: "Smartphone", price: "49,999", rating: 4.3, features: ["6.74-inch AMOLED", "Snapdragon 8+ Gen 1", "Fast Charging"] },

    { name: "Samsung Neo QLED 65", category: "Smart TV", price: "1,29,999", rating: 4.8, features: ["65-inch QLED", "4K UHD", "Smart Hub OS"] },
    { name: "LG OLED C2", category: "Smart TV", price: "1,39,999", rating: 4.7, features: ["55-inch OLED", "4K HDR", "Dolby Vision"] },
    { name: "Sony Bravia XR", category: "Smart TV", price: "1,59,999", rating: 4.8, features: ["65-inch OLED", "Cognitive Processor XR", "Google TV"] },
    { name: "TCL C825 Mini LED", category: "Smart TV", price: "74,999", rating: 4.5, features: ["55-inch Mini LED", "4K HDR", "Dolby Atmos"] },
    { name: "Mi QLED TV 75", category: "Smart TV", price: "99,999", rating: 4.4, features: ["75-inch QLED", "4K UHD", "Android TV 10"] },

    { name: "Apple Watch Series 9", category: "Smartwatch", price: "41,999", rating: 4.9, features: ["Always-On Display", "ECG & Blood Oxygen", "watchOS 10"] },
    { name: "Samsung Galaxy Watch 6", category: "Smartwatch", price: "34,999", rating: 4.7, features: ["AMOLED Display", "Wear OS", "BioActive Sensor"] },
    { name: "Garmin Fenix 7", category: "Smartwatch", price: "68,999", rating: 4.8, features: ["Solar Charging", "GPS & Altimeter", "50 Days Battery"] },
    { name: "Fitbit Sense 2", category: "Smartwatch", price: "26,999", rating: 4.5, features: ["Stress Tracking", "SpO2 Monitoring", "6-Day Battery"] },
    { name: "Amazfit GTR 4", category: "Smartwatch", price: "17,999", rating: 4.3, features: ["AMOLED Display", "150+ Sports Modes", "Alexa Built-in"] },

    { name: "MacBook Pro M2", category: "Laptop", price: "1,49,999", rating: 4.9, features: ["13.3-inch Retina", "Apple M2", "16GB RAM, 512GB SSD"] },
    { name: "Dell XPS 15", category: "Laptop", price: "1,79,999", rating: 4.8, features: ["15.6-inch OLED", "Intel i7 13th Gen", "16GB RAM, 1TB SSD"] },
    { name: "HP Spectre x360", category: "Laptop", price: "1,29,999", rating: 4.7, features: ["13.5-inch Touch", "Intel Evo i7", "16GB RAM, 512GB SSD"] },
    { name: "ASUS ROG Zephyrus G15", category: "Laptop", price: "1,64,999", rating: 4.8, features: ["15.6-inch 165Hz", "Ryzen 9 6900HS", "RTX 3070 Ti"] },
    { name: "Lenovo Legion 5 Pro", category: "Laptop", price: "1,34,999", rating: 4.7, features: ["16-inch QHD", "Ryzen 7 6800H", "RTX 3060"] }
  ];

  const [selectedProducts, setSelectedProducts] = useState([null, null]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true" // Check localStorage for authentication status
  );

  const handleProductSelect = (index, product) => {
    const updatedSelection = [...selectedProducts];
    updatedSelection[index] = product;
    setSelectedProducts(updatedSelection);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true"); // Store authentication status
    navigate("/compare"); // Redirect to product comparison page after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth"); // Remove authentication status
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="app-container">
      <nav>
        {!isAuthenticated ? (
          <>
            <Link to="/">Login</Link> | <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/compare">Compare Products</Link>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/compare"
          element={
            isAuthenticated ? (
              <>
                <h1 className="title">Product Comparison</h1>
                <div className="selection-container">
                  {selectedProducts.map((product, index) => (
                    <ProductSearch
                      key={index}
                      index={index}
                      allProducts={allProducts} // ✅ Pass the product list here
                      onProductSelect={handleProductSelect}
                      selectedProduct={product}
                    />
                  ))}
                </div>
                {selectedProducts.every((p) => p) && <ProductComparison products={selectedProducts} />}
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
