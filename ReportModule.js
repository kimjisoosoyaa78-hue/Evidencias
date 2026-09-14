// Módulo de reportes
class ReportModule {

    constructor(userModule, productModule) {
        this.userModule = userModule;
        this.productModule = productModule;
    }

    // Reporte de usuarios registrados
    getUserReport() {
        const users = this.userModule.getAllUsers();
        return {
            totalUsuarios: users.length,
            detalle: users
        };
    }

    // Reporte de inventario de productos
    getProductReport() {
        const products = this.productModule.getAllProducts();
        const valorTotalInventario = products.reduce(
            (total, p) => total + (p.price * p.stock), 0
        );
        return {
            totalProductos: products.length,
            valorTotalInventario,
            detalle: products
        };
    }

    // Reporte general del sistema
    getGeneralReport() {
        return {
            usuarios: this.getUserReport(),
            productos: this.getProductReport(),
            fecha: new Date().toISOString()
        };
    }
}

module.exports = ReportModule;
