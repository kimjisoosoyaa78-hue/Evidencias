// Módulo de notificaciones (simulada)
class NotificationModule {

    constructor() {
        this.notifications = [];
    }

    // Enviar una notificación
    send(type, recipient, message) {
        const notification = {
            id: this.notifications.length + 1,
            type,
            recipient,
            message,
            date: new Date().toISOString()
        };
        this.notifications.push(notification);
        return `Notificación enviada a ${recipient}: "${message}"`;
    }

    // Notificación de bienvenida
    sendWelcome(userEmail) {
        return this.send('email', userEmail, 'Bienvenido a la plataforma');
    }

    // Notificación de compra
    sendPurchaseConfirmation(userEmail, productName) {
        return this.send('email', userEmail, `Tu compra de "${productName}" fue confirmada`);
    }

    // Listar todas las notificaciones enviadas
    getAllNotifications() {
        return this.notifications;
    }
}

module.exports = NotificationModule;
