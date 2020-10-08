import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    });
  }
  toHTML() {
    return '<div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_align_left\n' +
      '                        </span>\n' +
      '            </div>\n' +
      '            <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_align_center\n' +
      '                        </span>\n' +
      '            </div>\n' +
      '            <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_align_right\n' +
      '                        </span>\n' +
      '            </div>\n' +
      '            <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_bold\n' +
      '                        </span>\n' +
      '            </div>\n' +
      '            <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_italic\n' +
      '                        </span>\n' +
      '            </div>\n' +
      '            <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            format_underline\n' +
      '                        </span>\n' +
      '            </div>'
  }
  onClick(event) {
    console.log(event.target)
  }
}
