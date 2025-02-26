import React from "react";

const ProductComparison = ({ products }) => {
  return (
    <div className="comparison-container">
      <h2>Comparison</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>{products[0]?.name}</th>
            <th>{products[1]?.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price (₹)</td>
            <td>{products[0]?.price}</td>
            <td>{products[1]?.price}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{products[0]?.rating} ⭐</td>
            <td>{products[1]?.rating} ⭐</td>
          </tr>
          <tr>
            <td>Screen Size</td>
            <td>{products[0]?.features[0]}</td>
            <td>{products[1]?.features[0]}</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>{products[0]?.features[1]}</td>
            <td>{products[1]?.features[1]}</td>
          </tr>
          <tr>
            <td>Camera</td>
            <td>{products[0]?.features[2]}</td>
            <td>{products[1]?.features[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;
