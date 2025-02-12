import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img
            src={selectedColor.image}
            alt="Product"
          />
        </div>
        <div className="content">
          <h3>{product.name}</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div className="colors">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`color-btn ${selectedColor.name === color.name ? "active" : ""}`}
              style={{ backgroundColor: color.name.toLowerCase() }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default ProductCard;
