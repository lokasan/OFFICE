import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize, isCell, matrix, nextSelector} from './table.functions'
import {TableSelections} from '@/components/table/TableSelections'
import {$} from '@core/dom'
export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  toHTML() {
    return createTable(50)
  }

  prepare() {
    this.selection = new TableSelections()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)
    this.$on('formula:input', text => {
      this.selection.current.text(text)
    })
    this.$on('formula:done', () => this.selection.current.focus())
  }
  selectCell(cell) {
    this.selection.select(cell)
    this.$emit('table:select', cell)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
  onKeydown(event) {
    const keys =
      ['Enter',
        'Tab',
        'ArrowUp',
        'ArrowDown',
        'ArrowRight',
        'ArrowLeft',
        'MouseDown'
      ]
    const {key} = event
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const {row, col} = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, row, col))
      this.selectCell($next)
    }
  }
  onInput(event) {
    this.$emit('table:input', $(event.target))
  }
}

