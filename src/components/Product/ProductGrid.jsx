import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const ProductGrid = ({
  title,
  titleColorClass,
  showFilters = true,
  data = [],
  colClasses,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Watches");
  const categories = ["Watches", "Men's", "Ladies", "Smartwatches"];

  const filteredProducts = data.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <div className="container-fluid product-section">
        <div className="row g-0">
          <h1 className={`section-title ${titleColorClass || ""}`}>{title}</h1>
          {showFilters && (
            <div className="filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className={`${colClasses} mb-5`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  Image={product.Image}
                  CardName={product.CardName}
                  ProductName={product.ProductName}
                  Price={product.Price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
