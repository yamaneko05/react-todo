import { useState } from "react";
import Button from "@mui/material/Button";
import { useAllProducts } from "./hooks/useAllProducts";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, error] = useAllProducts();

  return (
    <>
      {error ? (
        <p>error!</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
