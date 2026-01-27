import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");
  const [search,   setSearch] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Ошибка при загрузке");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);


  const filteredProducts = useMemo(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [products, category, search]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        error,
        category,
        setCategory,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct должен быть внутри ProductProvider");
  }
  return context;
};
