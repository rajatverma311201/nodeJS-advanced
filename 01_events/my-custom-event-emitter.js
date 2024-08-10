class MyCustomEventEmitter {
    events = {};
    constructor(parameters) {}

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        const availableListeners = this.events[event];
        if (!availableListeners) {
            return;
        }

        availableListeners.forEach((listener) => {
            listener(...args);
        });
    }
}

module.exports = { MyCustomEventEmitter };
