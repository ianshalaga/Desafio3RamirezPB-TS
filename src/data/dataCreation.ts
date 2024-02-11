import ProductManager from "../ProductManager"
import { PATH } from "../utils/utils"


const dataCreation = async () => {
    const productManager = new ProductManager(PATH)
    
    let products = await productManager.getProducts()
    console.log(products)

    await productManager.addProduct("p01", "Product 01", "Este es el producto 01", "100", "Sin imagen", "10")
    await productManager.addProduct("p02", "Product 02", "Este es el producto 02", "200", "Sin imagen", "20")
    await productManager.addProduct("p03", "Product 03", "Este es el producto 03", "300", "Sin imagen", "30")
    await productManager.addProduct("p04", "Product 04", "Este es el producto 04", "400", "Sin imagen", "40")
    await productManager.addProduct("p05", "Product 05", "Este es el producto 05", "500", "Sin imagen", "50")
    await productManager.addProduct("p06", "Product 06", "Este es el producto 06", "600", "Sin imagen", "60")
    await productManager.addProduct("p07", "Product 07", "Este es el producto 07", "700", "Sin imagen", "70")
    await productManager.addProduct("p08", "Product 08", "Este es el producto 08", "800", "Sin imagen", "80")
    await productManager.addProduct("p09", "Product 09", "Este es el producto 09", "900", "Sin imagen", "90")
    await productManager.addProduct("p10", "Product 10", "Este es el producto 10", "100", "Sin imagen", "10")
    
    products = await productManager.getProducts()
    console.log(products)
}

dataCreation()