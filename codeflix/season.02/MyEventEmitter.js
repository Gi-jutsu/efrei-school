class MyEventEmitter {
  constructor() {
    this._events = {}
  }

  on(eventName, subscriber) {
    // 1. check this._events[eventName] already initialize as an empty array
    if (!this._events[eventName]) {
      this._events[eventName] = []
    }

    // 2. Add a subscriber to event through associative array (object)
    this._events[eventName].push(subscriber)
  }

  emit(eventName, ...data) {
    // 1. Retrieve all the subscribers of eventName
    const subscribers = this._events[eventName] || []

    // 2. execute all the subscribers
    for (let i = 0; i < subscribers.length; i++) {
      const subscriber = subscribers[i]

      subscriber(data)
    }
  }
}

const m = new MyEventEmitter()
m.on('hi', (data) => {
  console.log(`event::hi [args == ${data.length}]`)
  for (const [idx, d] of data.entries()) {
    console.log(`${idx}: ${d}`)
  }
})

m.emit('hi')
m.emit('hi', 'Ch0pper')
m.emit('hi', 'Luffy', 'Zorro')
