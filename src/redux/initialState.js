import {storage} from '@core/utils'
import {defaultStyles, defaultTitle} from '@/constants'

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  title: defaultTitle,
  currentStyles: defaultStyles,
}
export const initialState = storage('excel_state') ?
  storage('excel_state') :
  defaultState
