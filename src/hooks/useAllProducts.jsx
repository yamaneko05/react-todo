import axios from "axios";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return [products, error];
};
