const fs = require('fs');
const archivo = ('./archivo/products.json')


class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveProducts() {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(this.filePath, data);
  }

  getNextId() {
    const maxId = this.products.reduce((max, product) => {
      return product.id > max ? product.id : max;
    }, 0);
    return maxId + 1;
  }

  addProduct(product) {
    const newProduct = {
      id: this.getNextId(),
      ...product
    };
    this.products.push(newProduct);
    this.saveProducts();
    return newProduct.id;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      this.saveProducts();
      return true;
    }
    return false;
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
      return true;
    }
    return false;
  }
}
