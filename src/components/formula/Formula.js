import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return '<div class="info">fx</div>\n' +
      '<div class="input" contenteditable="true" spellcheck="false"></div>'
  }
  onInput(event) {
    console.log(this.$root);
    console.log('onInput Fromula: ', event.target.textContent.trim())
  }
  onClick(event) {
    console.log(event, 'mk')
  }
}
