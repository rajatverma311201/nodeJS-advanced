const { MyCustomEventEmitter } = require("./my-custom-event-emitter");

myEvent = new MyCustomEventEmitter();

myEvent.on("myEvent", (data) => {
    console.log("first myEvent   |  Event triggered with data:", data);
});

myEvent.on("myEvent", (data) => {
    console.log("second myEvent  |  Event triggered with data:", data);
});

myEvent.emit("myEvent", "outer");

//they all will show at a gap of 1 second each
for (let i = 0; i < 5; i++) {
    const handler = () => {
        myEvent.emit("myEvent", `Hello, World! inner ${i}`);
    };

    setTimeout(handler, 1000 * i);
}
