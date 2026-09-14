// Módulo de autenticación y autorización
class AuthModule {

    constructor() {
        this.users = new Map(); // Simulando una base de datos de usuarios
    }

    register(username, password) {
        if (this.users.has(username)) {
            throw new Error('Usuario ya registrado');
        }
        this.users.set(username, password);
        return 'Usuario registrado correctamente';
    }

    login(username, password) {
        if (this.users.get(username) === password) {
            return 'Inicio de sesión exitoso';
        } else {
            throw new Error('Credenciales incorrectas');
        }
    }
}

module.exports = AuthModule;
