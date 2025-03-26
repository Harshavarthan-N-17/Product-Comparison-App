import React, { useState, useMemo } from "react";

const ProductSearch = ({ index, allProducts, onProductSelect, selectedProduct }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Optimize filtering with useMemo
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allProducts, searchTerm]);

  return (
    <div className="search-container">
      {selectedProduct ? (
        <div className="selected-product">
          <h3>{selectedProduct.name}</h3>
          <p>₹{selectedProduct.price}</p>
          <button 
            className="remove-button"
            onClick={() => onProductSelect(index, null)} 
            aria-label="Remove product"
          >
            ❌ Remove
          </button>
        </div>
      ) : (
        <button 
          className="add-button" 
          onClick={() => setShowSearch(true)} 
          aria-label="Add product"
        >
          ➕ Add Product
        </button>
      )}

      {showSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search product"
            autoFocus
          />
          <button className="close-button" onClick={() => setShowSearch(false)} aria-label="Close search">❌</button>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <button 
                  key={product.name} 
                  className="product-item"
                  onClick={() => {
                    onProductSelect(index, product);
                    setShowSearch(false);
                  }}
                  aria-label={`Select ${product.name}`}
                >
                  {product.name} (₹{product.price})
                </button>
              ))
            ) : (
              <p className="no-results">No matching products found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
