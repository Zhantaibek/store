import { useProduct } from "../../context/ProductContext";

const ProductFilter = () => {
  const { category, setCategory } = useProduct();

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
    <div className="product-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
