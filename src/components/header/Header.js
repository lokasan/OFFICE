import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'
  toHTML() {
    return '<input type="text" class="input" value="Новая таблица"/>\n' +
      '            <div>\n' +
      '                <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            delete_forever\n' +
      '                        </span>\n' +
      '                </div>\n' +
      '                <div class="button">\n' +
      '                        <span class="material-icons">\n' +
      '                            exit_to_app\n' +
      '                        </span>\n' +
      '                </div>\n' +
      '            </div>'
  }
}
