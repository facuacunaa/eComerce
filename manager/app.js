import productManager from './productManager.js'


const productManager = new ProductManager('products.json');


const newProduct = {
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10,
    thumbnail: 'ruta/de/imagen.jpg',
    code: 'ABC123',
    stock: 50
};
const productId = productManager.addProduct(newProduct);
console.log(`ID del nuevo producto: ${productId}`);

const product = productManager.getProductById(productId);
console.log(product);

const updatedProduct = {
    title: 'Producto 1 actualizado',
    price: 15
};

const isDeleted = productManager.deleteProduct(productId);
console.log(isDeleted);
const isUpdated = productManager.updateProduct(productId, updatedProduct);
console.log(isUpdated);