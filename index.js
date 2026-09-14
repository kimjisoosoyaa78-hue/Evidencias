const AuthModule = require('./AuthModule');
const DatabaseModule = require('./DatabaseModule');
const UserModule = require('./UserModule');
const ProductModule = require('./ProductModule');
const ApiModule = require('./ApiModule');
const NotificationModule = require('./NotificationModule');
const ReportModule = require('./ReportModule');

// Instanciar todos los módulos
const auth = new AuthModule();
const db = new DatabaseModule();
const users = new UserModule();
const products = new ProductModule();
const api = new ApiModule(users, products);
const notifications = new NotificationModule();
const reports = new ReportModule(users, products);

console.log('--- AUTENTICACIÓN ---');
console.log(auth.register('usuario1', '123456'));
console.log(auth.login('usuario1', '123456'));

console.log('--- USUARIOS ---');
console.log(users.createUser('Laura', 'laura@correo.com'));
console.log(users.createUser('Carlos', 'carlos@correo.com'));

console.log('--- PRODUCTOS ---');
console.log(products.createProduct('Teclado', 80000, 10));
console.log(products.createProduct('Mouse', 40000, 20));

console.log('--- API ---');
console.log(api.getUsers());
console.log(api.getProducts());

console.log('--- NOTIFICACIONES ---');
console.log(notifications.sendWelcome('laura@correo.com'));

console.log('--- REPORTES ---');
console.log(JSON.stringify(reports.getGeneralReport(), null, 2));
