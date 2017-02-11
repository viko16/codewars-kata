class Event {
  constructor() { this.funcs = new Set() }
  subscribe(fn) { this.funcs.add(fn) }
  unsubscribe(fn) { this.funcs.delete(fn) }
  emit() { this.funcs.forEach(fn => fn.apply(null, arguments)) }
}
