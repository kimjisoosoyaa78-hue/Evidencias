// Módulo de gestión de usuarios
class UserModule {

    constructor() {
        this.users = new Map();
        this.nextId = 1;
    }

    // Crear perfil de usuario
    createUser(name, email, role = 'cliente') {
        const id = this.nextId++;
        const user = { id, name, email, role };
        this.users.set(id, user);
        return `Usuario ${name} creado con ID ${id}`;
    }

    // Buscar usuario por ID
    getUser(id) {
        if (!this.users.has(id)) {
            throw new Error('Usuario no encontrado');
        }
        return this.users.get(id);
    }

    // Listar todos los usuarios
    getAllUsers() {
        return Array.from(this.users.values());
    }

    // Actualizar datos del usuario
    updateUser(id, newData) {
        if (!this.users.has(id)) {
            throw new Error('Usuario no encontrado');
        }
        const user = this.users.get(id);
        this.users.set(id, { ...user, ...newData });
        return `Usuario con ID ${id} actualizado correctamente`;
    }

    // Eliminar usuario
    deleteUser(id) {
        if (!this.users.has(id)) {
            throw new Error('Usuario no encontrado');
        }
        this.users.delete(id);
        return `Usuario con ID ${id} eliminado correctamente`;
    }
}

module.exports = UserModule;
