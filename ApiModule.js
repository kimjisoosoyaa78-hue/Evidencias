// Módulo de API (simulada)
class ApiModule {

    constructor(userModule, productModule) {
        this.userModule = userModule;
        this.productModule = productModule;
    }

    // Simula un endpoint GET /users
    getUsers() {
        return {
            status: 200,
            data: this.userModule.getAllUsers()
        };
    }

    // Simula un endpoint GET /products
    getProducts() {
        return {
            status: 200,
            data: this.productModule.getAllProducts()
        };
    }

    // Simula un endpoint POST /users
    createUser(name, email, role) {
        try {
            const message = this.userModule.createUser(name, email, role);
            return { status: 201, message };
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }

    // Simula un endpoint POST /products
    createProduct(name, price, stock) {
        try {
            const message = this.productModule.createProduct(name, price, stock);
            return { status: 201, message };
        } catch (error) {
            return { status: 400, message: error.message };
        }
    }
}

module.exports = ApiModule;
