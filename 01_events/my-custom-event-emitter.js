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

    once(event, listener) {
        const onceListener = (...args) => {
            listener(...args);
            this.removeListener(event, onceListener);
        };
        this.on(event, onceListener);
    }

    // removeListener(event, listener) {
    //     const availableListeners = this.events[event];
    //     if (!availableListeners) {
    //         return;
    //     }

    //     const index = availableListeners.indexOf(listener);
    //     if (index !== -1) {
    //         availableListeners.splice(index, 1);
    //     }
    // }

    // removeAllListeners(event) {
    //     delete this.events[event];
    // }
}

module.exports = { MyCustomEventEmitter };
