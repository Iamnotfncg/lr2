import React, { useState } from 'react';

const Body = ({ productList }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (id) => {
    const updatedProductList = productList.map((product) =>
      product.isSelected = product.id === id ? !product.isSelected: product.isSelected
    );

    setSelectedProducts(updatedProductList);
  };

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            checked={product.isSelected}
            onChange={() => handleProductSelect(product.id)}
          />
          <label>{product.name}</label>
        </div>
      ))}
      <p>{productList.filter(product => product.isSelected).length} products selected</p>
    </div>
  );
};

export default Body;