const pubsub = {
    events: {},
    subscribe: (eventName, fn) => {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(fn)
    },
    unsubscribe: (eventName, fn) => {
        this.events[eventName] = this.events[eventName].filter((event, i) => {
            if (event[i] !== fn) {
                return event[i];
            }
        }) 
    },
    publish:  (eventName, data) => {
        this.events[eventName] && this.events[eventName].forEach((fn)=>{
            fn(data);
        });
    }
}