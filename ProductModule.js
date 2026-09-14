// Módulo de gestión de productos
class ProductModule {

    constructor() {
        this.products = new Map();
        this.nextId = 1;
    }

    // Crear producto
    createProduct(name, price, stock) {
        const id = this.nextId++;
        const product = { id, name, price, stock };
        this.products.set(id, product);
        return `Producto ${name} creado con ID ${id}`;
    }

    // Buscar producto por ID
    getProduct(id) {
        if (!this.products.has(id)) {
            throw new Error('Producto no encontrado');
        }
        return this.products.get(id);
    }

    // Listar todos los productos
    getAllProducts() {
        return Array.from(this.products.values());
    }

    // Actualizar stock
    updateStock(id, quantity) {
        if (!this.products.has(id)) {
            throw new Error('Producto no encontrado');
        }
        const product = this.products.get(id);
        product.stock += quantity;
        return `Stock del producto con ID ${id} actualizado a ${product.stock}`;
    }

    // Eliminar producto
    deleteProduct(id) {
        if (!this.products.has(id)) {
            throw new Error('Producto no encontrado');
        }
        this.products.delete(id);
        return `Producto con ID ${id} eliminado correctamente`;
    }
}

module.exports = ProductModule;
