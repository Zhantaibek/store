import { useProduct } from "../../context/ProductContext"
import ProductItem from "./ProductItem"
import '../../styles/product.css'

const ProductList = () => {
    const {filteredProducts, loading , error} = useProduct()

    if (loading) {
       return <h3>загрузка товаров ...</h3>
    }
    if (error) {
        return <p style={{color : 'red'}}>{error}</p>
    }
    if (filteredProducts.length === 0) {
        return <p style={{color : 'red'}}>товары не найдены</p>
    }
    return ( <div className="product-list">
      {filteredProducts.map ((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>)
}

export default ProductList