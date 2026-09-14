// Módulo de base de datos (simulada)
class DatabaseModule {

    constructor() {
        this.data = new Map();
        this.nextId = 1;
    }

    create(record) {
        const id = this.nextId++;
        this.data.set(id, record);
        return `Registro creado con ID ${id}`;
    }

    read(id) {
        if (!this.data.has(id)) {
            throw new Error('Registro no encontrado');
        }
        return this.data.get(id);
    }

    readAll() {
        return Array.from(this.data.entries());
    }

    update(id, newRecord) {
        if (!this.data.has(id)) {
            throw new Error('Registro no encontrado');
        }
        this.data.set(id, newRecord);
        return `Registro con ID ${id} actualizado correctamente`;
    }

    delete(id) {
        if (!this.data.has(id)) {
            throw new Error('Registro no encontrado');
        }
        this.data.delete(id);
        return `Registro con ID ${id} eliminado correctamente`;
    }
}

module.exports = DatabaseModule;
