import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubsribers = []
    console.log(options)
    this.prepare()
  }
  // Настраиваем компонент до init
  prepare() {}
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  // Уведомляем слушаетелей про события event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписываемся на события event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubsribers.push(unsub)
  }

  // Иинициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }
  // Удаляем компонент
  // Чистим слушателя
  destroy() {
    this.removeDOMListener()
    this.unsubsribers.forEach(unsub => unsub())
  }
}
