export class Emitter {
  constructor() {
    this.listeners = {}
  }
  // Уведомляем слушателей, если они есть
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  // Подписываемся на уведомление
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}
// example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('Boris', data => console.log('Sub:', data))
// emitter.emit('Boris', 42)
// console.log(unsub())
// emitter.emit('Boris', 42)
