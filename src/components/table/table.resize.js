import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const cellName = $parent.data.col
  let value


  document.onmousemove = e => {
    if (event.target.dataset.resize === 'col') {
      // console.log(e)
      const delta = e.pageX - coords.right
      value = coords.width + delta
      $resizer.css({
        right: -delta +'px',
        bottom: '-5000px'
      })
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({
        right: '-5000px',
        bottom: -delta + 'px'
      })
      // $parent.css({
      //   height: value + 'px'
      // })
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (event.target.dataset.resize === 'col') {
      $parent.css({
        width: value + 'px'
      })
      this.$root.findAll(`[data-col="${cellName}"`)
          .forEach(el => el.style.width = value + 'px')
    } else {
      $parent.css({
        height: value + 'px'
      })
    }
    $resizer.css({
      bottom: 0,
      right: 0
    })
  }
}
