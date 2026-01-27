async function fetchApi() {
   
     const response = await fetch('https://fakestoreapi.com/products')
     if (!response.ok) {
      throw new Error ('Ошибка загрузки товаров ',response.status)
     }
     return response.json()
   
  
}